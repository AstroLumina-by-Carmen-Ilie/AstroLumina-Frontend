// import { useState, useEffect } from 'react';
// import Navbar from '../../../components/navbar/Navbar';
// import { ReadingResult } from '../../../types/planetPositions';
import astralChartSvg from '../../../assets/astral-chart.svg';
// import BirthDataForm from './BirthDataForm';
// import ResultsDisplay from './ResultsDisplay';
// import { useLoading } from '../../../contexts/LoadingContext';

const PlanetPositionsPage = () => {
  // const [result, setResult] = useState<ReadingResult | null>(null);
  // const [userInfo, setUserInfo] = useState<{
  //   name: string;
  //   birthDate: Date;
  //   birthHour: Date;
  //   location: string;
  // } | null>(null);

  // const { startLoading, stopLoading } = useLoading();

  // // Loading effect
  // useEffect(() => {
  //   startLoading();
  //   const timer = setTimeout(() => {
  //     stopLoading();
  //   }, 1500);
  //   return () => clearTimeout(timer);
  // }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-purple-100">
      {/* <Navbar isScrolled={true} lightTheme={true} /> */}

      <main className="container mx-auto px-6 pt-24">
        <h1 className="text-4xl font-bold text-center mb-8">Planet Positions</h1>
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-lg shadow-xl overflow-hidden">
            <div className="flex flex-col md:flex-row">
              {/* Left Panel - Service Description - Hidden on mobile */}
              <div className="hidden md:block md:w-1/2 p-8 bg-gradient-to-br from-purple-50 to-indigo-50">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Discover Your Celestial Blueprint
                </h2>
                <div className="mb-8">
                  <img
                    src={astralChartSvg}
                    alt="Astral Chart"
                    className="w-full max-w-md mx-auto mb-6"
                  />
                </div>
                <div className="prose prose-indigo">
                  <p className="text-lg text-gray-600 mb-4">
                    Unlock the secrets of the cosmos and gain deep insights into your astrological profile. Our advanced planetary position calculator provides precise astronomical data to help you understand the celestial influences at any given moment.
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Accurate planetary positions</li>
                    <li>Detailed house placements</li>
                    <li>Zodiac sign interpretations</li>
                    <li>Real-time astronomical calculations</li>
                  </ul>
                </div>
              </div>
              
              {/* Right Panel - Form or Results */}
              <div className="w-full md:w-1/2 p-4 sm:p-8">
                {/* Mobile Title */}
                <div className="block md:hidden mb-6 text-center">
                  <h2 className="text-2xl font-bold text-gray-900">
                    Discover Your Celestial Blueprint
                  </h2>
                </div>
                
                {/* {!result || !userInfo ? (
                  <BirthDataForm setResult={setResult} setUserInfo={setUserInfo} />
                ) : (
                  <ResultsDisplay result={result} userInfo={userInfo} />
                )} */}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PlanetPositionsPage;
