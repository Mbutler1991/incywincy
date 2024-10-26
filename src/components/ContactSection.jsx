import React, { useState } from 'react';

const ContactSection = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [successMessage, setSuccessMessage] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        const form = e.target;
        fetch('/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: new URLSearchParams(new FormData(form)).toString()
        })
        .then(() => {
            setSuccessMessage('Thank You! Your message has been sent!');
            setFormData({ name: '', email: '', message: '' });
        })
        .catch((error) => alert(error));
    };

    return (
        <section id="contact" className="py-20 bg-gray-100 text-center">
            <h2 className="text-4xl font-bold mb-4">Contact Us</h2>
            {successMessage && <p className="text-green-500 mb-4">{successMessage}</p>}
            <form className="max-w-lg mx-auto" onSubmit={handleSubmit} name="contact" method="POST" data-netlify="true" target="hidden_iframe" netlify>
                <input type="hidden" name="form-name" value="contact" />
                <div className="mb-4">
                    <input
                        type="text"
                        name="name"
                        className="w-full p-2 border border-gray-300 rounded text-black"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-4">
                    <input
                        type="email"
                        name="email"
                        className="w-full p-2 border border-gray-300 rounded text-black"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-4">
                    <textarea
                        name="message"
                        className="w-full p-2 border border-gray-300 rounded text-black"
                        placeholder="Your Message"
                        value={formData.message}
                        onChange={handleChange}
                    ></textarea>
                </div>
                <button type="submit" className="bg-blue-500 text-white px-6 py-2 rounded">Send Message</button>
                <iframe name="hidden_iframe" style={{ display: 'none' }}></iframe>
            </form>
        </section>
    );
};

export default ContactSection;