// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white py-6">
      <div className="container mx-auto text-center">
        <p>&copy; 2025 Adnan Tahir Abda. All rights reserved.</p>
        <div className="mt-4">
          <a href="mailto:adnan@example.com" className="hover:text-gray-300">Email</a> | 
          <a href="https://github.com/adnantabda" className="hover:text-gray-300 ml-2">GitHub</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
