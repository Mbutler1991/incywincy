import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import PortfolioSection from './components/PortfolioSection';
import ContactSection from './components/ContactSection';
import WebDevelopment from "./pages/WebDevelopment";
import SeoOptimization from "./pages/SeoOptimization";
import EcommerceSolutions from "./pages/EcommerceSolutions";

const App = () => {
    // You must use useLocation inside Router, so Router is moved to wrap the whole return block.
    const location = useLocation();

    // Check if the current page is a service page
    const isServicePage = location.pathname === '/web-development' || location.pathname === '/seo-optimization' || location.pathname === '/ecommerce-solutions';

    return (
        <>
            {/* Only render the Header (Navbar) on the home page */}
            {!isServicePage && <Header />}
            <Routes>
                {/* Home Page */}
                <Route
                    path="/"
                    element={
                        <>
                            <HeroSection />
                            <AboutSection />
                            <ServicesSection />
                            <PortfolioSection />
                            <ContactSection />
                        </>
                    }
                />

                {/* Individual service pages */}
                <Route path="/web-development" element={<WebDevelopment />} />
                <Route path="/seo-optimization" element={<SeoOptimization />} />
                <Route path="/ecommerce-solutions" element={<EcommerceSolutions />} />
            </Routes>
        </>
    );
}

const AppWrapper = () => {
    return (
        <Router>
            <App />
        </Router>
    );
};

export default AppWrapper;
