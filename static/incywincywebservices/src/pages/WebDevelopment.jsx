import React from "react";
import { Link } from "react-router-dom";
import { FaDraftingCompass, FaLaptopCode, FaCogs, FaRocket, FaBug } from 'react-icons/fa';
import ContactForm from "../components/ContactSection";  // Import ContactForm component

const WebDevelopment = () => {
  return (
    <section className="py-20 text-center">
      {/* Header Section */}
      <h2 className="text-4xl font-bold mb-4">Web Development</h2>
      <p className="mb-6 text-lg">
        We specialize in creating custom, responsive websites that align with your business goals and offer a seamless user experience across devices.
      </p>

      {/* List of Services with Icons */}
      <ul className="list-none space-y-4 mb-6 text-left max-w-xl mx-auto">
        <li className="flex items-center">
          <FaDraftingCompass className="text-blue-600 mr-2" /> Discovery & Planning
        </li>
        <li className="flex items-center">
          <FaLaptopCode className="text-blue-600 mr-2" /> Design & Prototyping
        </li>
        <li className="flex items-center">
          <FaCogs className="text-blue-600 mr-2" /> Development
        </li>
        <li className="flex items-center">
          <FaBug className="text-blue-600 mr-2" /> Testing
        </li>
        <li className="flex items-center">
          <FaRocket className="text-blue-600 mr-2" /> Launch & Support
        </li>
      </ul>

      {/* Why Choose Us Section */}
      <h3 className="text-2xl font-bold mb-4">Why Choose Us?</h3>
      <p className="mb-6 text-lg">
        Our development process is designed to deliver high-quality, scalable websites. Here’s why our clients trust us:
      </p>
      <ul className="list-none space-y-4 mb-6 text-left max-w-xl mx-auto">
        <li className="flex items-center">
          <FaDraftingCompass className="text-blue-600 mr-2" /> Tailored design that reflects your brand identity.
        </li>
        <li className="flex items-center">
          <FaLaptopCode className="text-blue-600 mr-2" /> Responsive and mobile-friendly websites.
        </li>
        <li className="flex items-center">
          <FaCogs className="text-blue-600 mr-2" /> Full-cycle development, from design to deployment.
        </li>
        <li className="flex items-center">
          <FaBug className="text-blue-600 mr-2" /> Rigorous testing for bug-free performance.
        </li>
        <li className="flex items-center">
          <FaRocket className="text-blue-600 mr-2" /> Ongoing support post-launch.
        </li>
      </ul>

      {/* Back to Home */}
      <div className="mt-6">
        <Link to="/" className="text-blue-500 underline">Back to Home</Link>
      </div>

      {/* Contact Form Section */}
      <section className="mt-20">
        <ContactForm />  {/* This renders the contact form at the bottom */}
      </section>
    </section>
  );
};

export default WebDevelopment;
