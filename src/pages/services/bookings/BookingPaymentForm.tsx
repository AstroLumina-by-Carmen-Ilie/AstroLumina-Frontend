import React, { useCallback, useState } from "react";
import { loadStripe } from '@stripe/stripe-js';
import {
  EmbeddedCheckoutProvider,
  EmbeddedCheckout
} from '@stripe/react-stripe-js';

const STRIPE_URL = import.meta.env.VITE_STRIPE_URL;
const STRIPE_PK = import.meta.env.VITE_STRIPE_PK;
const stripePromise = loadStripe(STRIPE_PK);

interface BookingPaymentFormProps {
  onNext: (paymentStatus: boolean) => void;
}

const CheckoutForm: React.FC<{ 
  setIsComplete: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({setIsComplete}) => {
  const handleComplete = () => setIsComplete(true);

  const fetchClientSecret = useCallback(() => {
    return fetch(`${STRIPE_URL}/create-session-booking`, {
      method: "POST",
    })
      .then((res) => res.json())
      .then((data) => data.clientSecret);
  }, []);

  const options = { fetchClientSecret };

  return (
    <div id="checkout">
      <EmbeddedCheckoutProvider
        stripe={stripePromise}
        options={{
          ...options,
          onComplete: handleComplete
        }}
      >
        <EmbeddedCheckout />
      </EmbeddedCheckoutProvider>
    </div>
  );
};

const BookingPaymentForm: React.FC<BookingPaymentFormProps> = ({ onNext }) => {
  const [isComplete, setIsComplete] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    onNext(isComplete);
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Plată Consultație</h2>
        <p className="text-gray-600">
          Pentru a programa o consultație, vă rugăm să efectuați plata. După confirmarea plății, veți putea alege data și ora dorită.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <CheckoutForm setIsComplete={setIsComplete} />
        
        <div className="flex justify-end mt-6">
          <button
            type="submit"
            disabled={!isComplete}
            className={`px-6 py-2 rounded-md text-white font-medium ${
              isComplete
                ? 'bg-purple-600 hover:bg-purple-700'
                : 'bg-gray-400 cursor-not-allowed'
            }`}
          >
            Continuă
          </button>
        </div>
      </form>
    </div>
  );
};

export default BookingPaymentForm;
