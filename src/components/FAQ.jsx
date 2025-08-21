import React, { useState } from 'react';
import { motion } from 'framer-motion';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: 'What can I find on this website?',
      answer: 'You can explore property listings, details, images, and locations to help you find the right home or plot.'
    },
    {
      question: 'Can I buy a property directly from this website?',
      answer: 'This is a frontend-based project, so you can browse properties and connect with us through the Contact Us section, but transactions are not handled here.'
    },
    {
      question: 'Is this website mobile-friendly?',
      answer: 'Yes! The website is built with a responsive design, so it works smoothly on desktops, tablets, and mobile devices.'
    },
    {
      question: 'Can I save my favorite properties?',
      answer: 'Yes, the website includes a Favorites feature where you can save properties to view later.'
    },
    {
      question: 'Where do the property details come from?',
      answer: 'This is a demo/training project, so the property details are displayed using static/dummy data on the frontend.'
    },
    {
      question: 'How can I get more information about a property?',
      answer: 'You can easily reach out to us through the Contact with Us section.'
    },
    {
      question: 'Does this website show real-time property updates?',
      answer: 'Not yet. Since this is a frontend-only project, it does not fetch real-time data from a backend.'
    },
    {
      question: 'Why was this website created?',
      answer: 'This project was built as part of a College Project / Summer Training to demonstrate skills in ReactJS, Tailwind CSS, and Responsive Design.'
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Frequently Asked <span className="text-blue-600">Questions</span>
        </motion.h2>
        
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="mb-4 border-b border-gray-200 pb-4"
            >
              <button
                className="w-full text-left py-4 px-2 flex justify-between items-center hover:bg-gray-50 rounded-lg transition-colors"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-lg font-medium text-gray-800">{faq.question}</h3>
                <svg 
                  className={`w-5 h-5 text-gray-500 transform transition-transform ${activeIndex === index ? 'rotate-180' : ''}`} 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              <motion.div
                initial={false}
                animate={{
                  height: activeIndex === index ? 'auto' : 0,
                  opacity: activeIndex === index ? 1 : 0,
                  marginTop: activeIndex === index ? '0.5rem' : 0
                }}
                className="overflow-hidden px-2"
              >
                <p className="text-gray-600">{faq.answer}</p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
