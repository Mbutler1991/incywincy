import React, { useState } from 'react';
import Navbar from './Navbar';

const Header = () => {
    const [isNavbarVisible, setIsNavbarVisible] = useState(false);

    const toggleNavbar = () => {
        setIsNavbarVisible(!isNavbarVisible);
    };

    return (
        <header className="fixed top-0 left-0 w-full h-20 flex items-center z-40 bg-gradient-to-b from-zinc-900/0">
            <div className="max-w-screen-2xl w-full mx-auto px-4 flex justify-between items-center md:px-6 md:grid md:grid-cols-[1fr,3fr,1fr]">
                <h1 className="hidden md:block">
                    <a href="/" className="logo">
                        <img src="/images/spider-web.svg" className="ml-0 mt-10" width={120} height={120} alt="IncyWincy Web Services"/>
                    </a>
                </h1>
                <div className="relative md:justify-self-center">
                    <button className="menu-btn md:hidden" onClick={toggleNavbar}>
                        <span className="material-symbols-rounded">menu</span>
                    </button>
                    <div className={`md:flex ${isNavbarVisible ? 'block' : 'hidden'} md:block`}>
                        <Navbar />
                    </div>
                </div>
                <a href="#home" className="hidden md:block text-purple">
                    IncyWincy Web Services
                </a>
            </div>
        </header>
    );
}

export default Header;