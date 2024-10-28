import React from 'react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-zinc-800 text-white py-4 text-center">
            <p className="text-sm">
                &copy; {currentYear} Incy Wincy Web Services. All rights reserved.
            </p>
        </footer>
    );
};

export default Footer;