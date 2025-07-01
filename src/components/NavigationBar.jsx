import React from "react";
import { NavLink, Link } from "react-router-dom";

const NavigationBar = () => {
  return (
    <nav className="w-full glass shadow-lg sticky top-0 z-30">
      <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Nav Links */}
        <div className="flex space-x-2 sm:space-x-4">
          <NavLink to="/" end className={({ isActive }) => `neumorphism-button ${isActive ? 'text-blue-400' : 'text-gray-200'} font-semibold px-2 sm:px-4 py-2 rounded-lg transition-all duration-300 ease-in-out hover-glow text-sm sm:text-base`}>About</NavLink>
          <NavLink to="/projects" className={({ isActive }) => `neumorphism-button ${isActive ? 'text-blue-400' : 'text-gray-200'} font-semibold px-2 sm:px-4 py-2 rounded-lg transition-all duration-300 ease-in-out hover-glow text-sm sm:text-base`}>Projects</NavLink>
          <NavLink to="/services" className={({ isActive }) => `neumorphism-button ${isActive ? 'text-blue-400' : 'text-gray-200'} font-semibold px-2 sm:px-4 py-2 rounded-lg transition-all duration-300 ease-in-out hover-glow text-sm sm:text-base`}>Services</NavLink>
        </div>
        <Link to="/contact" className="neumorphism-button text-white px-3 sm:px-5 py-2 rounded-full font-bold hover-glow text-sm sm:text-base">Get in Touch</Link>
      </div>
    </nav>
  );
};

export default NavigationBar; 