import React from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaLink, FaFileAlt, FaChartLine, FaCogs } from 'react-icons/fa';
import ContactForm from "../components/ContactSection";  // Import ContactForm component

const SeoOptimization = () => {
  return (
    <section className="py-20 text-center">
      {/* Header Section */}
      <h2 className="text-4xl font-bold mb-4">SEO Optimization</h2>
      <p className="mb-6 text-lg">
        Improve your website's visibility on search engines. We use proven techniques like keyword research, on-page optimization, and link building.
      </p>

      {/* List of Services with Icons */}
      <ul className="list-none space-y-4 mb-6 text-left max-w-xl mx-auto">
        <li className="flex items-center">
          <FaSearch className="text-green-600 mr-2" /> Keyword Research
        </li>
        <li className="flex items-center">
          <FaCogs className="text-green-600 mr-2" /> On-Page Optimization
        </li>
        <li className="flex items-center">
          <FaChartLine className="text-green-600 mr-2" /> Technical SEO
        </li>
        <li className="flex items-center">
          <FaLink className="text-green-600 mr-2" /> Off-Page SEO & Link Building
        </li>
        <li className="flex items-center">
          <FaFileAlt className="text-green-600 mr-2" /> Content Strategy
        </li>
      </ul>

      {/* Why Choose Us Section */}
      <h3 className="text-2xl font-bold mb-4">Why Choose Us?</h3>
      <p className="mb-6 text-lg">
        Our SEO strategies are designed to drive organic traffic and improve your search engine rankings by focusing on:
      </p>
      <ul className="list-none space-y-4 mb-6 text-left max-w-xl mx-auto">
        <li className="flex items-center">
          <FaSearch className="text-green-600 mr-2" /> Comprehensive keyword analysis.
        </li>
        <li className="flex items-center">
          <FaCogs className="text-green-600 mr-2" /> Effective on-page SEO techniques.
        </li>
        <li className="flex items-center">
          <FaChartLine className="text-green-600 mr-2" /> Data-driven technical SEO improvements.
        </li>
        <li className="flex items-center">
          <FaLink className="text-green-600 mr-2" /> Proven link-building strategies.
        </li>
        <li className="flex items-center">
          <FaFileAlt className="text-green-600 mr-2" /> Customized content strategies.
        </li>
      </ul>

      {/* Call to Action */}
      <div className="mt-6">
        <button
          className="text-white bg-green-600 hover:bg-green-700 px-6 py-3 rounded-lg shadow-md"
          onClick={() => window.scrollTo(0, document.body.scrollHeight)}
        >
          Start Optimizing Now
        </button>
      </div>

      {/* Back to Home */}
      <div className="mt-6">
        <Link to="/" className="text-blue-500 underline">Back to Home</Link>
      </div>

      {/* Contact Form Section */}
      <section className="mt-20">
        <ContactForm />  
      </section>
    </section>
  );
};

export default SeoOptimization;
