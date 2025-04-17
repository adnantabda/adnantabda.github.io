// src/components/Header.jsx
import React from 'react';
import logo from '../assets/header-logo.png';

const Header = () => {
  return (
    <header className="w-full fixed top-0 z-50 bg-opacity-70 backdrop-blur-md text-white">
      <div className="container mx-auto flex items-center justify-between px-6 py-4"     style={{ color: `rgb(var(--text-primary))`}}> 
        {/* Logo */}
        <a href="#home" className="flex items-center space-x-2">
          <img src={logo} alt="Logo" className="h-10 w-auto object-contain" />
        </a>

        {/* Navigation */}
        <nav>
          <ul className="flex space-x-6 text-sm md:text-base font-medium">
            <li><a href="#home" className="hover:text-gray-300 transition">Home</a></li>
            <li><a href="#about" className="hover:text-gray-300 transition">About</a></li>
            <li><a href="#projects" className="hover:text-gray-300 transition">Projects</a></li>
            <li><a href="#skills" className="hover:text-gray-300 transition">Skills</a></li>
            <li><a href="#blog" className="hover:text-gray-300 transition">Blog</a></li>
            <li><a href="#contact" className="hover:text-gray-300 transition">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
