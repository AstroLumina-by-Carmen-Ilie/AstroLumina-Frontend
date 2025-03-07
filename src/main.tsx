import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import './styles/starry-theme.css';
import 'flatpickr/dist/themes/material_blue.css';
import { LoadingProvider } from './contexts/LoadingContext';
import { I18nextProvider } from 'react-i18next';
import i18n from './lib/i18n';
import PlanetPositions from './pages/services/PlanetPositions';
import NatalChart from './pages/services/NatalChart';
import KarmicChart from './pages/services/KarmicChart';
import Bookings from './pages/services/Bookings';
import NotFound from './pages/NotFound';
import AboutMe from './pages/AboutMe';
import Contact from './pages/Contact';
import Services from './pages/Services';
import PaymentErrorPage from './pages/services/errors/PaymentErrorPage';

// Declare the earlyLog property on the Window interface
declare global {
  interface Window {
      earlyLog?: (message: string) => void;
  }
}

// Use the early logging system if available
const log = (message: string) => {
    if (window.earlyLog) {
        window.earlyLog(message);
    }
    console.log(message);
};

const rootElement = document.getElementById('root');

log('⚛️ React initialization starting');

if (rootElement) {
    const root = createRoot(rootElement);
    
    try {
        root.render(
            <React.StrictMode>
                <I18nextProvider i18n={i18n}>
                    <LoadingProvider>
                        <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
                            <Routes>
                                <Route path="/" element={<App />} />
                                <Route path="/despre-mine" element={<AboutMe />} />
                                <Route path="/contact" element={<Contact />} />
                                <Route path="/servicii" element={<Services />} />
                                <Route path="/servicii/pozitia-astrelor" element={<PlanetPositions />} />
                                <Route path="/servicii/lumina-natala" element={<NatalChart />} />
                                <Route path="/servicii/lumina-karmica" element={<KarmicChart />} />
                                <Route path="/servicii/lumina-previzionala" element={<NotFound />} />
                                <Route path="/servicii/lumina-relationala" element={<NotFound />} />
                                <Route path="/servicii/consultatii" element={<Bookings />} />
                                <Route path="/plata-esuata" element={<PaymentErrorPage />} />
                                <Route path="*" element={<NotFound />} />
                            </Routes>
                        </Router>
                    </LoadingProvider>
                </I18nextProvider>
            </React.StrictMode>
        );
        log('✅ React rendered successfully');
    } catch (error) {
        log(`❌ React render error: ${error instanceof Error ? error.message : String(error)}`);
        if (error instanceof Error && error.stack) {
            log(`Stack: ${error.stack}`);
        }
    }
} else {
    log('❌ Root element not found');
}