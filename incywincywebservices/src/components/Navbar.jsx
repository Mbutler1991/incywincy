import React from 'react';

const Navbar = () => {
    return (
        <nav className="flex justify-center py-4 bg-black bg-opacity-50 p-4 rounded-lg shadow-md">
            <div className="flex space-x-4 max-w-4xl mx-auto">
                <a href="#about" className="hover:text-zinc-300">About</a>
                <a href="#services" className="hover:text-zinc-300">Services</a>
                <a href="#portfolio" className="hover:text-zinc-300">Portfolio</a>
                <a href="#contact" className="hover:text-zinc-300">Contact</a>
            </div>
        </nav>
    );
}

export default Navbar;