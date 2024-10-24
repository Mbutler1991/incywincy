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
                    <FaCode className="text-5xl mx-auto mb-4 text-blue-500" />
                    <h3 className="text-2xl font-bold mb-2">Custom Web Development</h3>
                    <p>We build <strong>fast, responsive websites</strong> that are tailored to your business needs, ensuring high performance and scalability.</p>
                    <ul className="mt-4 text-sm list-disc list-inside text-left">
                        <li><strong>Custom Web Applications</strong></li>
                        <li><strong>Mobile Optimization</strong> for seamless user experience</li>
                        <li>Content Management Systems (<strong>CMS Development</strong>)</li>
                    </ul>
                    <Link to="/web-development">
                        <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">Learn More</button>
                    </Link>
                </div>

                {/* SEO Optimization */}
                <div className="w-full md:w-1/3 p-6">
                    <FaChartLine className="text-5xl mx-auto mb-4 text-green-500" />
                    <h3 className="text-2xl font-bold mb-2">SEO Optimization</h3>
                    <p>Enhance your website's visibility on search engines and drive <strong>organic traffic</strong> with our expert <strong>SEO services</strong>.</p>
                    <ul className="mt-4 text-sm list-disc list-inside text-left">
                        <li>In-depth <strong>Keyword Research</strong> to target your audience</li>
                        <li><strong>On-Page SEO Optimization</strong> for improved search engine rankings</li>
                        <li>Regular <strong>Performance Tracking</strong> to monitor SEO results</li>
                    </ul>
                    <Link to="/seo-optimization">
                        <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded">Learn More</button>
                    </Link>
                </div>

                {/* E-commerce Solutions */}
                <div className="w-full md:w-1/3 p-6">
                    <FaShoppingCart className="text-5xl mx-auto mb-4 text-red-500" />
                    <h3 className="text-2xl font-bold mb-2">E-commerce Solutions</h3>
                    <p>We design scalable <strong>e-commerce platforms</strong> that help boost your sales and grow your business, with smooth, secure shopping experiences.</p>
                    <ul className="mt-4 text-sm list-disc list-inside text-left">
                        <li><strong>Custom Shopping Carts</strong> for unique online stores</li>
                        <li>Seamless <strong>Payment Gateway Integration</strong></li>
                        <li>Efficient <strong>Inventory Management</strong> systems</li>
                    </ul>
                    <Link to="/ecommerce-solutions">
                        <button className="mt-4 bg-red-500 text-white px-4 py-2 rounded">Learn More</button>
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default ServicesSection;
