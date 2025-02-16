import React from 'react';
import { useNavigate } from 'react-router-dom';

const PaymentErrorPage: React.FC = () => {
  const navigate = useNavigate();

  const handleRetry = () => {
    navigate('/services/natal-chart');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-purple-100 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full bg-white rounded-lg shadow-xl overflow-hidden">
        <div className="p-8 text-center">
          <h1 className="text-4xl font-bold text-red-500 mb-4">Payment Error</h1>
          <p className="text-gray-600 mb-8">
            Unfortunately, there was an error processing your payment. Please try again.
          </p>
          <button
            onClick={handleRetry}
            className="inline-flex items-center px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
          >
            Retry Payment
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentErrorPage;
