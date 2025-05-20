
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container-custom">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-saas-800 text-2xl font-bold">Amore Tech</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <div className="relative group">
              <button className="text-gray-700 hover:text-saas-700 flex items-center">
                Services
                <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-60 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top-left z-50">
                <div className="py-2 px-3">
                  <Link to="/services/app-development" className="block px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100 hover:text-saas-700">App Development</Link>
                  <Link to="/services/ai-workflow" className="block px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100 hover:text-saas-700">AI Workflow Solutions</Link>
                  <Link to="/services/automation" className="block px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100 hover:text-saas-700">Automation Services</Link>
                  <Link to="/services/web-development" className="block px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100 hover:text-saas-700">Data Entry Automation</Link>
                  <Link to="/services/custom-solutions" className="block px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100 hover:text-saas-700">Custom Tech Solutions</Link>
                </div>
              </div>
            </div>
            <Link to="/about" className="text-gray-700 hover:text-saas-700">About</Link>
          </div>

          {/* Contact Button */}
          <div className="hidden md:block">
            <Button variant="default" asChild className="bg-saas-600 hover:bg-saas-700">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-500 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-saas-500"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <div className="space-y-1">
              <p className="text-gray-500 px-3 py-2 text-sm font-medium">Services</p>
              <Link to="/services/app-development" className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-saas-700">App Development</Link>
              <Link to="/services/ai-workflow" className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-saas-700">AI Workflow Solutions</Link>
              <Link to="/services/automation" className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-saas-700">Automation Services</Link>
              <Link to="/services/web-development" className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-saas-700">Data Entry Automation</Link>
              <Link to="/services/custom-solutions" className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-saas-700">Custom Tech Solutions</Link>
            </div>
            <Link to="/about" className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-saas-700">About</Link>
            <Link to="/contact" className="block px-3 py-2 text-base font-medium text-saas-600 hover:bg-gray-100 hover:text-saas-700">Contact Us</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
