import React, { useState } from 'react';
import logo from '../assets/header-logo.png';
import { FiMenu, FiX } from 'react-icons/fi';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <header className="w-full fixed top-0 z-50 bg-opacity-70 backdrop-blur-md text-white">
      <div className="container mx-auto flex items-center justify-between px-6 py-4" style={{ color: `rgb(var(--text-primary))` }}>
        {/* Logo */}
        <a href="#home" className="flex items-center space-x-2">
          <img src={logo} alt="Logo" className="h-10 w-auto object-contain" />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-6 text-sm md:text-base font-medium">
            <li><a href="#home" className="hover:text-gray-300 transition">Home</a></li>
            <li><a href="#about" className="hover:text-gray-300 transition">About</a></li>
            <li><a href="#projects" className="hover:text-gray-300 transition">Projects</a></li>
            <li><a href="#skills" className="hover:text-gray-300 transition">Skills</a></li>
            <li><a href="#blog" className="hover:text-gray-300 transition">Blog</a></li>
            <li><a href="#contact" className="hover:text-gray-300 transition">Contact</a></li>
          </ul>
        </nav>

        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button onClick={toggleSidebar} className="text-2xl focus:outline-none">
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white dark:bg-gray-900 text-gray-800 dark:text-white transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out shadow-lg z-50`}
      >
        <div className="flex flex-col px-6 py-8 space-y-6 text-lg font-medium">
          <button onClick={toggleSidebar} className="self-end text-2xl mb-4">
            <FiX />
          </button>
          <a href="#home" onClick={toggleSidebar}>Home</a>
          <a href="#about" onClick={toggleSidebar}>About</a>
          <a href="#projects" onClick={toggleSidebar}>Projects</a>
          <a href="#skills" onClick={toggleSidebar}>Skills</a>
          <a href="#blog" onClick={toggleSidebar}>Blog</a>
          <a href="#contact" onClick={toggleSidebar}>Contact</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
