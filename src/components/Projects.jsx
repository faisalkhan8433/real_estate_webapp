import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { assets, projectsData } from '../assets/assets';
import PropertyMap from './PropertyMap';

// Update the projects data to include coordinates
const projectsWithCoordinates = [
  {
    image: projectsData[0].image,
    title: 'Modern Urban Apartment',
    price: projectsData[0].price,
    location: 'Saket, Delhi',
    coordinates: [28.5244, 77.1855] // Delhi coordinates
  },
  {
    image: projectsData[1].image,
    title: 'Luxury Sea-View Villa',
    price: projectsData[1].price,
    location: 'Bandra, Mumbai',
    coordinates: [19.0600, 72.8299] // Mumbai coordinates
  },
  {
    image: projectsData[2].image,
    title: 'Tech Park Co-living Space',
    price:  projectsData[2].price,
    location: 'Koramangala, Bengaluru',
    coordinates: [12.9352, 77.6245] // Bengaluru coordinates
  },
  {
    image: projectsData[3].image,
    title: 'Serene Beachfront Bungalow',
    price: projectsData[3].price,
    location: 'Anjuna, Goa',
    coordinates: [15.5845, 73.7399] // Goa coordinates
  },
  {
    image: projectsData[4].image,
    title: 'Heritage Haveli Stay',
    price:  projectsData[4].price,
    location: 'C-Scheme, Jaipur',
    coordinates: [26.9124, 75.7873] // Jaipur coordinates
  }
];

const Projects = () => {
  const [activeTab, setActiveTab] = useState('list');
  const [selectedProperty, setSelectedProperty] = useState(null);

  const handlePropertyClick = (property) => {
    setSelectedProperty(property);
    setActiveTab('map');
  };

  return (
    <section id="projects" className="min-h-screen py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Featured Properties
        </motion.h2>
        
        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-md shadow-sm">
            <button
              onClick={() => setActiveTab('list')}
              className={`px-6 py-2 text-sm font-medium rounded-l-lg ${
                activeTab === 'list' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              }`}
            >
              List View
            </button>
            <button
              onClick={() => setActiveTab('map')}
              className={`px-6 py-2 text-sm font-medium rounded-r-lg ${
                activeTab === 'map' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              }`}
            >
              Map View
            </button>
          </div>
        </div>

        {activeTab === 'list' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectsWithCoordinates.map((project, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                onClick={() => handlePropertyClick(project)}
              >
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-2">{project.location}</p>
                  <p className="text-blue-600 font-bold">{project.price}</p>
                  <button 
                    className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                    onClick={(e) => {
                      e.stopPropagation();
                      // Handle view details
                    }}
                  >
                    View Details
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-lg p-4">
            <PropertyMap 
              properties={projectsWithCoordinates} 
              center={selectedProperty ? selectedProperty.coordinates : [20.5937, 78.9629]}
              zoom={selectedProperty ? 12 : 5}
            />
            {selectedProperty && (
              <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                <h3 className="text-xl font-semibold">{selectedProperty.title}</h3>
                <p className="text-gray-600">{selectedProperty.location}</p>
                <p className="text-blue-600 font-bold">{selectedProperty.price}</p>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;