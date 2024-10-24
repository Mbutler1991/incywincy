import React from "react";
import { FaShoppingCart, FaStore, FaCreditCard, FaShippingFast, FaGift } from 'react-icons/fa';
import ContactForm from "../components/ContactSection";

const EcommerceSolutions = () => {
  return (
    <section className="py-20 text-center">
      {/* Header Section */}
      <h1 className="text-4xl font-bold mb-4">Custom E-commerce Solutions in Ireland</h1>
      <p className="mb-6 text-lg">
        We design and develop custom <strong>e-commerce platforms</strong> with secure payment systems, custom shopping carts, and inventory management for businesses across <strong>Co. Clare</strong> and <strong>Ireland</strong>.
      </p>

      {/* List of Services with Icons */}
      <ul className="list-none space-y-4 mb-6 text-left max-w-xl mx-auto">
        <li className="flex items-center">
          <FaShoppingCart className="text-red-600 mr-2" /> Custom Shopping Carts for seamless user experience
        </li>
        <li className="flex items-center">
          <FaCreditCard className="text-red-600 mr-2" /> Secure Payment Gateways for your e-commerce store
        </li>
        <li className="flex items-center">
          <FaStore className="text-red-600 mr-2" /> Real-time Inventory Management systems
        </li>
        <li className="flex items-center">
          <FaShippingFast className="text-red-600 mr-2" /> Fully Responsive Design for mobile optimization
        </li>
        <li className="flex items-center">
          <FaGift className="text-red-600 mr-2" /> Product Pages with Reviews to drive more conversions
        </li>
      </ul>

      {/* Why Choose Us Section */}
      <h2 className="text-3xl font-bold mb-4">Why Choose Our E-commerce Solutions in Co. Clare?</h2>
      <p className="mb-6 text-lg">
        We understand the unique challenges of building an online store, and our custom e-commerce platforms are built with the following benefits:
      </p>
      <ul className="list-none space-y-4 mb-6 text-left max-w-xl mx-auto">
        <li className="flex items-center">
          <FaShoppingCart className="text-red-600 mr-2" /> Scalable for future growth of your business
        </li>
        <li className="flex items-center">
          <FaCreditCard className="text-red-600 mr-2" /> Secure Payment Gateways for peace of mind
        </li>
        <li className="flex items-center">
          <FaShippingFast className="text-red-600 mr-2" /> Optimized for fast loading speeds and user experience
        </li>
        <li className="flex items-center">
          <FaGift className="text-red-600 mr-2" /> Customer-friendly navigation for seamless shopping
        </li>
        <li className="flex items-center">
          <FaStore className="text-red-600 mr-2" /> Mobile-Friendly and optimized for all devices
        </li>
      </ul>

      {/* Back to Home */}
      <div className="mt-6">
        <Link to="/" className="text-blue-500 underline">Back to Home</Link>
      </div>

      {/* Call to Action - Contact Form */}
      <h2 className="text-2xl font-bold mb-4">Get Started with Us Today!</h2>
      <p className="mb-6 text-lg">
        Interested in scaling your online business? Fill out the contact form below, and let's discuss your e-commerce needs.
      </p>

      {/* Contact Form Section - Primary Call to Action */}
      <section className="mt-10">
        <ContactForm />  {/* This renders the contact form as the CTA */}
      </section>

    </section>
  );
};

export default EcommerceSolutions;
