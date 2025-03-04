import React, { useEffect } from 'react';
import { useLoading } from '../../contexts/LoadingContext';
import Navbar from '../../components/navbar/Navbar';
import BookingWidget from './bookings/BookingsWidget';

const Bookings = () => {
  const { startLoading, stopLoading } = useLoading();

  useEffect(() => {
    startLoading();
    const timer = setTimeout(stopLoading, 1500);
    return () => clearTimeout(timer);
  }, [startLoading, stopLoading]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-purple-100">
      <Navbar isScrolled={true} lightTheme={true} />

      <main className="container mx-auto px-6 pt-24">
        <h1 className="text-4xl font-bold text-center mb-8">Consultații</h1>
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-lg shadow-xl overflow-hidden">
            <BookingWidget />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Bookings;
