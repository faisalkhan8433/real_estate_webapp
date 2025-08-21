import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { assets, projectsData } from '../assets/assets';
import PropertyMap from './PropertyMap';

// Update the projects data to include more details
const projectsWithCoordinates = [
  {
    image: projectsData[0].image,
    title: 'Modern Urban Apartment',
    price: projectsData[0].price,
    location: 'Saket, Delhi',
    coordinates: [28.5244, 77.1855],
    details: {
      bedrooms: 3,
      bathrooms: 2,
      area: '1800 sq.ft',
      yearBuilt: 2020,
      amenities: ['Swimming Pool', 'Gym', '24/7 Security', 'Power Backup', 'Parking'],
      description: 'A luxurious modern apartment in the heart of South Delhi, featuring contemporary design and premium finishes. Located just minutes away from premier shopping destinations and business hubs.'
    }
  },
  {
    image: projectsData[1].image,
    title: 'Luxury Sea-View Villa',
    price: projectsData[1].price,
    location: 'Bandra, Mumbai',
    coordinates: [19.0600, 72.8299],
    details: {
      bedrooms: 5,
      bathrooms: 4,
      area: '4500 sq.ft',
      yearBuilt: 2019,
      amenities: ['Private Beach', 'Infinity Pool', 'Home Theater', 'Garden', 'Gym'],
      description: 'Exquisite sea-facing villa with breathtaking views of the Arabian Sea. Features luxurious interiors, high-end finishes, and direct beach access. Perfect for those who appreciate luxury living.'
    }
  },
  {
    image: projectsData[2].image,
    title: 'Tech Park Co-living Space',
    price: projectsData[2].price,
    location: 'Koramangala, Bengaluru',
    coordinates: [12.9352, 77.6245],
    details: {
      bedrooms: 1,
      bathrooms: 1,
      area: '600 sq.ft',
      yearBuilt: 2021,
      amenities: ['High-speed Internet', 'Housekeeping', 'Laundry', 'Cafeteria', 'Co-working Space'],
      description: 'Modern co-living space designed for tech professionals. Includes all utilities, high-speed internet, and access to community spaces. Walking distance to major tech parks and restaurants.'
    }
  },
  {
    image: projectsData[3].image,
    title: 'Serene Beachfront Bungalow',
    price: projectsData[3].price,
    location: 'Anjuna, Goa',
    coordinates: [15.5845, 73.7399],
    details: {
      bedrooms: 4,
      bathrooms: 3,
      area: '3000 sq.ft',
      yearBuilt: 2018,
      amenities: ['Private Beach', 'Swimming Pool', 'Garden', 'Gym', 'Home Theater'],
      description: 'Charming beachfront bungalow with serene surroundings and stunning ocean views. Perfect for families or groups of friends looking for a relaxing getaway.'
    }
  },
  {
    image: projectsData[4].image,
    title: 'Heritage Haveli Stay',
    price: projectsData[4].price,
    location: 'C-Scheme, Jaipur',
    coordinates: [26.9124, 75.7873],
    details: {
      bedrooms: 2,
      bathrooms: 2,
      area: '1200 sq.ft',
      yearBuilt: 2017,
      amenities: ['Swimming Pool', 'Garden', 'Gym', 'Home Theater', 'Laundry'],
      description: 'Historic haveli turned boutique hotel, offering a unique blend of traditional charm and modern comforts. Located in the heart of Jaipur, close to major attractions.'
    }
  }
];

const Projects = () => {
  const [activeTab, setActiveTab] = useState('list');
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [showDetails, setShowDetails] = useState(false);
  const [currentProperty, setCurrentProperty] = useState(null);

  const handlePropertyClick = (property) => {
    setSelectedProperty(property);
    setActiveTab('map');
  };

  const handleViewDetails = (property, e) => {
    e.stopPropagation();
    setCurrentProperty(property);
    setShowDetails(true);
  };

  const closeDetails = () => {
    setShowDetails(false);
  };

  const handleAddToFavorites = (property, e) => {
    e.stopPropagation();
    const favorites = JSON.parse(localStorage.getItem('favoriteProperties')) || [];
    
    // Check if property is already in favorites
    const isAlreadyFavorite = favorites.some(fav => fav.id === property.id);
    
    if (!isAlreadyFavorite) {
      const propertyWithId = { ...property, id: `${property.title.toLowerCase().replace(/\s+/g, '-')}-${Date.now()}` };
      const updatedFavorites = [...favorites, propertyWithId];
      localStorage.setItem('favoriteProperties', JSON.stringify(updatedFavorites));
      
      // Show success message or animation
      alert('Added to favorites!');
    } else {
      alert('This property is already in your favorites!');
    }
  };

  return (
    <section id="projects" className="py-16 bg-gray-50">
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
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                onClick={() => handlePropertyClick(project)}
              >
                <div className="relative">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-48 object-cover"
                  />
                  <button
                    onClick={(e) => handleAddToFavorites(project, e)}
                    className="absolute top-2 right-2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors"
                    aria-label="Add to favorites"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 hover:text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </button>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-2">{project.location}</p>
                  <p className="text-blue-600 font-bold">{project.price}</p>
                  <button 
                    className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                    onClick={(e) => handleViewDetails(project, e)}
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
      {showDetails && currentProperty && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <button 
                onClick={closeDetails}
                className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg z-10"
                aria-label="Close details"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <img 
                src={currentProperty.image} 
                alt={currentProperty.title} 
                className="w-full h-64 md:h-96 object-cover rounded-t-lg"
              />
            </div>
            
            <div className="p-6">
              <h2 className="text-2xl md:text-3xl font-bold mb-2">{currentProperty.title}</h2>
              <p className="text-gray-600 text-lg mb-4">{currentProperty.location}</p>
              <p className="text-blue-600 text-2xl font-bold mb-6">{currentProperty.price}</p>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-500 text-sm">Bedrooms</p>
                  <p className="font-semibold">{currentProperty.details.bedrooms}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-500 text-sm">Bathrooms</p>
                  <p className="font-semibold">{currentProperty.details.bathrooms}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-500 text-sm">Area</p>
                  <p className="font-semibold">{currentProperty.details.area}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-500 text-sm">Year Built</p>
                  <p className="font-semibold">{currentProperty.details.yearBuilt}</p>
                </div>
              </div>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3">Description</h3>
                <p className="text-gray-700">{currentProperty.details.description}</p>
              </div>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3">Amenities</h3>
                <div className="flex flex-wrap gap-2">
                  {currentProperty.details.amenities.map((amenity, index) => (
                    <span 
                      key={index}
                      className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full"
                    >
                      {amenity}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex-1 text-center">
                  Contact Agent
                </button>
                <button className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors flex-1 text-center">
                  Schedule a Visit
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;