// src/pages/EcommerceSolutions.jsx
import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaStore, FaCreditCard, FaShippingFast, FaGift } from 'react-icons/fa';
import ContactForm from "../components/ContactSection";

const EcommerceSolutions = () => {
  return (
    <section className="py-20 text-center">
      {/* Header Section */}
      <h2 className="text-4xl font-bold mb-4">E-commerce Solutions</h2>
      <p className="mb-6 text-lg">
        We design and develop custom e-commerce platforms with secure payment systems, shopping carts, and inventory management.
      </p>

      {/* List of Services with Icons */}
      <ul className="list-none space-y-4 mb-6 text-left max-w-xl mx-auto">
        <li className="flex items-center">
          <FaShoppingCart className="text-red-600 mr-2" /> Custom Shopping Carts
        </li>
        <li className="flex items-center">
          <FaCreditCard className="text-red-600 mr-2" /> Secure Payment Gateways
        </li>
        <li className="flex items-center">
          <FaStore className="text-red-600 mr-2" /> Inventory Management
        </li>
        <li className="flex items-center">
          <FaShippingFast className="text-red-600 mr-2" /> Responsive Design
        </li>
        <li className="flex items-center">
          <FaGift className="text-red-600 mr-2" /> Product Pages with Reviews
        </li>
      </ul>

      {/* Why Choose Us Section */}
      <h3 className="text-2xl font-bold mb-4">Why Choose Us?</h3>
      <p className="mb-6 text-lg">
        We understand the unique challenges of building an online store. That’s why we focus on creating platforms that are:
      </p>
      <ul className="list-none space-y-4 mb-6 text-left max-w-xl mx-auto">
        <li className="flex items-center">
          <FaShoppingCart className="text-red-600 mr-2" /> Scalable for future growth.
        </li>
        <li className="flex items-center">
          <FaCreditCard className="text-red-600 mr-2" /> Secure with reliable payment gateways.
        </li>
        <li className="flex items-center">
          <FaShippingFast className="text-red-600 mr-2" /> Optimized for fast loading speeds.
        </li>
        <li className="flex items-center">
          <FaGift className="text-red-600 mr-2" /> Customer-centric with easy navigation.
        </li>
        <li className="flex items-center">
          <FaStore className="text-red-600 mr-2" /> Mobile-friendly to reach every customer.
        </li>
      </ul>


      {/* Call to Action */}
      <div className="mt-6">
        <button
          className="text-white bg-red-600 hover:bg-red-700 px-6 py-3 rounded-lg shadow-md"
          onClick={() => window.scrollTo(0, document.body.scrollHeight)}
        >
          Get Started Today
        </button>
      </div>

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

export default EcommerceSolutions;
