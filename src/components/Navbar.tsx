import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Menu,
  X,
  ChevronDown,
  Shield,
  HelpCircle,
  BookOpen,
  Award,
  Phone
} from 'lucide-react';
import { openWhatsAppQuote } from '../utils/whatsapp';
import { services, Service } from '../data/services';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleMobileServices = () => {
    setIsMobileServicesOpen(!isMobileServicesOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const mobileMenu = document.querySelector('.mobile-menu');
      if (isOpen && mobileMenu && !mobileMenu.contains(event.target as Node)) {
        setIsOpen(false);
        setIsMobileServicesOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  // Hide navbar on landing page for mobile
  if (location.pathname === '/landing') {
    return null;
  }

  return (
    <nav className="shadow-md fixed w-full z-50 bg-primary-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
              <Link to="/" className="flex items-center space-x-3">
                <img 
                  src="/images/logo.png" 
                  alt="Taj Safety Nets Logo" 
                  className="h-14 sm:h-16 w-auto object-contain"
                />
              </Link>

          {/* Mobile Phone Number and Menu - Only visible on small screens */}
          <div className="lg:hidden flex items-center space-x-3">
            <a 
              href="tel:+919494397102" 
              className="flex items-center space-x-1 text-white hover:text-gray-200 transition-colors text-xs font-semibold"
            >
              <Phone className="h-3.5 w-3.5" />
              <span>+91-9494397102</span>
            </a>
            
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-gray-200 focus:outline-none focus:text-gray-200"
              aria-label="Toggle mobile menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          <div className="hidden lg:flex items-center space-x-6">
            <Link to="/" className="text-white hover:text-gray-200 transition-colors font-medium">Home</Link>
            <Link to="/about" className="text-white hover:text-gray-200 transition-colors font-medium">About</Link>
            
            {/* Services Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={toggleDropdown}
                className="flex items-center space-x-1 text-white hover:text-gray-200 transition-colors font-medium"
              >
                <span>Services</span>
                <ChevronDown className={`h-4 w-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {isDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-200 py-3 z-50 max-h-96 overflow-y-auto"
                >
                      {services.map((service: Service, index: number) => (
                        <Link
                          key={index}
                          to={`/services/${service.slug}`}
                          className="block px-4 py-2.5 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors text-sm font-medium"
                          onClick={() => setIsDropdownOpen(false)}
                        >
                          {service.name}
                        </Link>
                      ))}
                </motion.div>
              )}
            </div>

            <Link to="/gallery" className="text-white hover:text-gray-200 transition-colors font-medium">Gallery</Link>
            <Link to="/faq" className="text-white hover:text-gray-200 transition-colors font-medium">FAQ's</Link>

            <Link to="/contact" className="text-white hover:text-gray-200 transition-colors font-medium">
              Contact
            </Link>
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            {/* Quality Button */}
            <Link
              to="/about"
              className="bg-secondary-600 hover:bg-secondary-700 text-white px-3 py-2 rounded-lg font-semibold transition-colors flex items-center space-x-1.5 shadow-lg text-sm"
            >
              <Award className="h-4 w-4" />
              <span>Quality Assured</span>
            </Link>
            
            {/* Get Quote Button */}
            <button
              onClick={openWhatsAppQuote}
              className="bg-accent-600 hover:bg-accent-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors cursor-pointer text-sm"
            >
              Get Quote
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="mobile-menu lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t border-gray-200 z-50 max-h-[80vh] overflow-y-auto">
          <div className="px-4 py-3 space-y-2 bg-white">
            <Link to="/" className="block px-3 py-2 text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-md transition-colors" onClick={() => setIsOpen(false)}>Home</Link>
            <Link to="/about" className="block px-3 py-2 text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-md transition-colors" onClick={() => setIsOpen(false)}>About</Link>
            
            {/* Mobile Services Dropdown */}
            <div className="space-y-1">
              <button
                onClick={toggleMobileServices}
                className="flex items-center justify-between w-full px-3 py-2 text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-md transition-colors"
              >
                <span className="font-semibold">Services</span>
                <ChevronDown className={`h-4 w-4 transition-transform ${isMobileServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isMobileServicesOpen && (
                <div className="ml-4 space-y-1 max-h-96 overflow-y-auto">
                  {services.map((service: any, index: number) => (
                    <Link
                      key={index}
                      to={`/services/${service.slug}`}
                      className="block px-3 py-2 text-gray-500 hover:bg-blue-50 hover:text-blue-600 rounded-md transition-colors text-sm"
                      onClick={() => {
                        setIsOpen(false);
                        setIsMobileServicesOpen(false);
                      }}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            
            <Link to="/gallery" className="block px-3 py-2 text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-md transition-colors" onClick={() => setIsOpen(false)}>Gallery</Link>
            <Link to="/faq" className="block px-3 py-2 text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-md transition-colors" onClick={() => setIsOpen(false)}>FAQ's</Link>
            <Link to="/contact" className="block px-3 py-2 text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-md transition-colors" onClick={() => setIsOpen(false)}>Contact</Link>

            {/* Mobile CTA Buttons */}
            <div className="pt-4 border-t border-gray-200 space-y-3">
              {/* Mobile Quality Button */}
              <Link
                to="/about"
                className="block w-full text-center bg-secondary-600 hover:bg-secondary-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2"
                onClick={() => setIsOpen(false)}
              >
                <Award className="h-5 w-5" />
                <span>Quality Assured</span>
              </Link>

              {/* Mobile Get Quote Button */}
              <button
                onClick={() => {
                  openWhatsAppQuote();
                  setIsOpen(false);
                }}
                className="block w-full text-center bg-accent-600 hover:bg-accent-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors cursor-pointer"
              >
                Get Quote
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
