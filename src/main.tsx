import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import './styles/starry-theme.css';
import 'flatpickr/dist/themes/material_blue.css';
import { LoadingProvider } from './contexts/LoadingContext';
import { I18nextProvider } from 'react-i18next';
import i18n from './lib/i18n';
import { logger } from './utils/logger';
import PlanetPositions from './pages/services/PlanetPositions';
import NatalChart from './pages/services/NatalChart';
import KarmicChart from './pages/services/KarmicChart';
import Bookings from './pages/services/Bookings';
import NotFound from './pages/NotFound';
import AboutMe from './pages/AboutMe';
import Contact from './pages/Contact';
import Services from './pages/Services';
import PaymentErrorPage from './pages/services/errors/PaymentErrorPage';

const rootElement = document.getElementById('root');

// Add debug logging
logger.log('Application starting', {
    userAgent: navigator.userAgent,
    platform: navigator.platform,
    viewport: {
        width: window.innerWidth,
        height: window.innerHeight
    }
});

// Show logs on screen for iOS devices
if (/iPhone|iPad|iPod/.test(navigator.userAgent)) {
    logger.showLogsOnScreen();
}

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
        logger.log('Application rendered successfully');
    } catch (error) {
        logger.error('Error rendering application', error);
    }
} else {
    logger.error('Root element not found');
}