'use client';
import React, { useState } from "react";

const TopBar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-black text-white">
      <div className="container mx-auto px-4 flex justify-between items-center h-16">
        {/* Logo */}
        <div className="flex items-center">
          <div className="text-blue-500 text-2xl font-bold flex items-center">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-md mr-2"></div>
            SeoLanding
          </div>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8">
          <a href="#" className="hover:text-gray-400">Products</a>
          <a href="#" className="hover:text-gray-400">Solutions</a>
          <a href="#" className="hover:text-gray-400">Success Stories</a>
          <a href="#" className="hover:text-gray-400">Resources</a>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg">Book A Demo</button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span className="sr-only">Open main menu</span>
          <div className="space-y-1">
            <div className="w-6 h-0.5 bg-white"></div>
            <div className="w-6 h-0.5 bg-white"></div>
            <div className="w-6 h-0.5 bg-white"></div>
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <nav className="md:hidden bg-black text-white p-4">
          <a href="#" className="block py-2 hover:text-gray-400">Products</a>
          <a href="#" className="block py-2 hover:text-gray-400">Solutions</a>
          <a href="#" className="block py-2 hover:text-gray-400">Success Stories</a>
          <a href="#" className="block py-2 hover:text-gray-400">Resources</a>
          <button className="w-full mt-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg">
            Book A Demo
          </button>
        </nav>
      )}
    </header>
  );
};

export default TopBar;
