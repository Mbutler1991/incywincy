import React from 'react';

const HeroSection = () => {
    return (
        <section className="flex flex-col items-center justify-center h-screen bg-gradient-to-l from-white via-silver to-gray text-white text-center px-4">
            <h2 className="text-5xl font-bold mb-4 text-darkPurple max-w-xl mx-auto">Welcome to IncyWincy Web Services</h2>
            <h3 className="text-xl mb-8 max-w-lg mx-auto">We build amazing web experiences</h3>
            <a href="#contact" className="bg-white text-blue-500 px-6 py-3 rounded-full">Get in Touch</a>
        </section>
    );
}

export default HeroSection;