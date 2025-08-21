import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { assets } from '../assets/assets';

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  useEffect(() =>{
    if(showMobileMenu){
      document.body.style.overflow = 'hidden'
    }else{
      document.body.style.overflow = 'auto'
    }
    return ()=>{
      document.body.style.overflow = 'auto'
    };
  },[showMobileMenu])

  return (
    <div className='absolute top-0 left-0 w-full z-10'>
      <div className='container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent'>
        <Link to="/">
          <img src={assets.logo} alt="" />
        </Link>
        <div className='hidden md:flex gap-8 items-center'>
          <Link to="/" className='hover:text-blue-600 transition-colors'>Home</Link>
          <Link to="/about" className='hover:text-blue-600 transition-colors'>About</Link>
          <Link to="/projects" className='hover:text-blue-600 transition-colors'>Properties</Link>
          <Link to="/testimonials" className='hover:text-blue-600 transition-colors'>Testimonials</Link>
          <Link to="/favorites" className='flex items-center gap-1 hover:text-blue-600 transition-colors'>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
            </svg>
            Favorites
          </Link>
        </div>
        <button className="hidden md:block bg-white px-8 py-2 rounded-full">Sign up</button>
        <img 
          onClick={() => setShowMobileMenu(true)} 
          src={assets.menu_icon} 
          className='md:hidden w-7 cursor-pointer' 
          alt="Menu" 
        />
      </div>

      {/* Mobile Menu */}
      {showMobileMenu && (
        <div className='md:hidden fixed inset-0 bg-black bg-opacity-50 z-20'>
          <div className='bg-white w-4/5 h-full p-6 overflow-y-auto'>
            <div className='flex justify-between items-center mb-8'>
              <img src={assets.logo} alt="" />
              <button 
                onClick={() => setShowMobileMenu(false)}
                className='text-gray-500 hover:text-gray-700'
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className='flex flex-col gap-4'>
              <Link 
                to="/" 
                onClick={() => setShowMobileMenu(false)} 
                className='px-4 py-2 rounded-full inline-block hover:bg-gray-100 w-full text-center'
              >
                Home
              </Link>
              <Link 
                to="/about" 
                onClick={() => setShowMobileMenu(false)} 
                className='px-4 py-2 rounded-full inline-block hover:bg-gray-100 w-full text-center'
              >
                About
              </Link>
              <Link 
                to="/projects" 
                onClick={() => setShowMobileMenu(false)} 
                className='px-4 py-2 rounded-full inline-block hover:bg-gray-100 w-full text-center'
              >
                Properties
              </Link>
              <Link 
                to="/testimonials" 
                onClick={() => setShowMobileMenu(false)} 
                className='px-4 py-2 rounded-full inline-block hover:bg-gray-100 w-full text-center'
              >
                Testimonials
              </Link>
              <Link 
                to="/favorites" 
                onClick={() => setShowMobileMenu(false)} 
                className='px-4 py-2 rounded-full inline-block hover:bg-gray-100 w-full text-center flex items-center gap-1 justify-center'
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                </svg>
                Favorites
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;