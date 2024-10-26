import React, { useState, useEffect } from 'react';

const CookieNotice = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const cookieConsent = localStorage.getItem('cookieConsent');
        if (!cookieConsent) {
            setIsVisible(true);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem('cookieConsent', 'true');
        setIsVisible(false);
    };

    if (!isVisible) {
        return null;
    }

    return (
        <div className="fixed bottom-0 left-0 right-0 bg-gray-800 text-white p-4 z-50">
            <div className="container mx-auto flex justify-between items-center">
                <p className="text-sm">
                    We use cookies to ensure you get the best experience on our website. By continuing to use this site, you consent to our use of cookies.
                </p>
                <button
                    className="bg-blue-500 text-white px-4 py-2 rounded ml-4"
                    onClick={handleAccept}
                >
                    Accept
                </button>
            </div>
        </div>
    );
};

export default CookieNotice;