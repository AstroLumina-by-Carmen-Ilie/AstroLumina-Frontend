import React, { useCallback, useState } from "react";
import { loadStripe } from '@stripe/stripe-js';
import {
  EmbeddedCheckoutProvider,
  EmbeddedCheckout
} from '@stripe/react-stripe-js';

const stripePromise = loadStripe("pk_test_51QsKuwI8IlTXEO0JOLZuYyz0e1Lmfk9fqDqX7hlUeVmsbYvbJhJrR2zEfY7pT32FSNNPnPTH4guXhZrGFu8ZHIiK00rLxK0Xec");

const STRIPE_URL = 'http://localhost:4242';

interface PaymentFormProps {
  onNext: (paymentStatus: boolean) => void;
  onBack: () => void;
}
const CheckoutForm: React.FC<{ 
  setIsComplete: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({setIsComplete}) => {
  const handleComplete = () => setIsComplete(true);

  const fetchClientSecret = useCallback(() => {
    return fetch(`${STRIPE_URL}/create-checkout-session`, {
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

const PaymentForm: React.FC<PaymentFormProps> = ({ onNext, onBack }) => {
  const [isComplete, setIsComplete] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    onNext(isComplete);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="bg-amber-50 p-4 rounded-lg mb-6">
          <CheckoutForm setIsComplete={setIsComplete}/>
        </div>
        <div className="flex gap-4">
          <button
            type="button"
            onClick={onBack}
            className="w-1/2 bg-gray-300 text-gray-700 py-3 px-6 rounded-lg hover:bg-gray-400 transition-colors"
          >
            Back
          </button>
          <button
            type="submit"
            className="w-1/2 bg-amber-500 text-white py-3 px-6 rounded-lg hover:bg-amber-600 transition-colors"
          >
            Complete Payment
          </button>
        </div>
      </form>
    </div>
  );
};

export default PaymentForm;
