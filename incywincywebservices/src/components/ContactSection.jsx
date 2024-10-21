import React from 'react';

const ContactSection = () => {
    return (
        <section id="contact" className="py-20 bg-gray-100 text-center">
            <h2 className="text-4xl font-bold mb-4">Contact Us</h2>
            <form className="max-w-lg mx-auto">
                <div className="mb-4">
                    <input type="text" className="w-full p-2 border border-gray-300 rounded" placeholder="Your Name" />
                </div>
                <div className="mb-4">
                    <input type="email" className="w-full p-2 border border-gray-300 rounded" placeholder="Your Email" />
                </div>
                <div className="mb-4">
                    <textarea className="w-full p-2 border border-gray-300 rounded" placeholder="Your Message"></textarea>
                </div>
                <button type="submit" className="bg-blue-500 text-white px-6 py-2 rounded">Send Message</button>
            </form>
        </section>
    );
}

export default ContactSection;