// src/pages/WebDevelopment.jsx
import React from "react";
import { Link } from "react-router-dom";

const WebDevelopment = () => {
  return (
    <section className="py-20 text-center">
      <h2 className="text-4xl font-bold mb-4">Web Development</h2>
      <p className="mb-6">
        We specialize in creating custom, responsive websites that align with your business goals and offer a seamless user experience across devices.
      </p>
      <p>Process:</p>
      <ul className="list-disc list-inside mb-6">
        <li>Discovery & Planning</li>
        <li>Design & Prototyping</li>
        <li>Development</li>
        <li>Testing</li>
        <li>Launch & Support</li>
      </ul>
      <Link to="/" className="text-blue-500 underline">Back to Home</Link> | 
    </section>
  );
};

export default WebDevelopment;
