import React from 'react';
import { FaCode, FaChartLine, FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom'; 

const ServicesSection = () => {
    return (
        <section id="services" className="py-20 text-center">
            <h2 className="text-4xl font-bold mb-8">Our Services</h2>
            <div className="flex flex-wrap justify-center">
                {/* Web Development */}
                <div className="w-full md:w-1/3 p-6">
                    <FaCode className="text-5xl mx-auto mb-4 text-blue-500" /> {/* Icon */}
                    <h3 className="text-2xl font-bold mb-2">Web Development</h3>
                    <p>We build fast, responsive, and high-performance websites that are tailored to your business needs.</p>
                    <ul className="mt-4 text-sm list-disc list-inside text-left">
                        <li>Custom Web Applications</li>
                        <li>Mobile Optimization</li>
                        <li>CMS Development</li>
                    </ul>
                    {/* Wrap button with Link */}
                    <Link to="/web-development">
                        <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">Learn More</button>
                    </Link>
                </div>

                {/* SEO Optimization */}
                <div className="w-full md:w-1/3 p-6">
                    <FaChartLine className="text-5xl mx-auto mb-4 text-green-500" /> {/* Icon */}
                    <h3 className="text-2xl font-bold mb-2">SEO Optimization</h3>
                    <p>Improve your website’s visibility on search engines and drive more organic traffic.</p>
                    <ul className="mt-4 text-sm list-disc list-inside text-left">
                        <li>Keyword Research</li>
                        <li>On-Page Optimization</li>
                        <li>Performance Tracking</li>
                    </ul>
                    {/* Wrap button with Link */}
                    <Link to="/seo-optimization">
                        <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded">Learn More</button>
                    </Link>
                </div>

                {/* E-commerce Solutions */}
                <div className="w-full md:w-1/3 p-6">
                    <FaShoppingCart className="text-5xl mx-auto mb-4 text-red-500" /> {/* Icon */}
                    <h3 className="text-2xl font-bold mb-2">E-commerce Solutions</h3>
                    <p>We create scalable and robust e-commerce platforms to boost your sales and grow your business.</p>
                    <ul className="mt-4 text-sm list-disc list-inside text-left">
                        <li>Custom Shopping Carts</li>
                        <li>Payment Gateway Integration</li>
                        <li>Inventory Management</li>
                    </ul>
                    {/* Wrap button with Link */}
                    <Link to="/ecommerce-solutions">
                        <button className="mt-4 bg-red-500 text-white px-4 py-2 rounded">Learn More</button>
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default ServicesSection;
