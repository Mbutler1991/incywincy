import React, { useEffect, useState } from 'react';
import projectsData from '../projects.json'; // Import the JSON file

const PortfolioSection = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        // Set the projects state using the imported JSON data
        setProjects(projectsData);
    }, []);

    return (
        <section id="portfolio" className="py-20 bg-gray-100 text-center">
            <h2 className="text-4xl font-bold mb-4">Our Portfolio</h2>
            <div className="flex flex-wrap justify-center">
                {projects.map(project => (
                    <div key={project.id} className="max-w-sm rounded overflow-hidden shadow-lg m-4">
                        <img className="w-full" src={project.image} alt={project.title} />
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">{project.title}</div>
                            <p className="text-gray-700 text-base">{project.description}</p>
                        </div>
                        <div className="px-6 pt-4 pb-2">
                            <a href={project.link} className="text-blue-500 hover:text-blue-800">View Project</a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default PortfolioSection;