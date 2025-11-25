import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Phone, Mail, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-8 lg:py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {/* Company Info */}
            <div className="space-y-4">
              <img 
                src="/images/logo.png" 
                alt="Taj Safety Nets Logo" 
                className="h-16 sm:h-20 w-auto object-contain mb-2"
              />
              <p className="text-sm text-gray-300 leading-relaxed">
                Leading invisible grills and cloth hangers provider in Hyderabad.
                Professional invisible grill installation with quality assurance and comprehensive safety solutions.
              </p>
            </div>

            {/* Quick Links and Services - Side by side on mobile */}
            <div className="grid grid-cols-2 gap-6 md:col-span-1 lg:col-span-2">
              {/* Quick Links */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white">Quick Links</h3>
                <ul className="space-y-2 text-sm">
                  <li><Link to="/" className="text-gray-300 hover:text-accent-400 transition-colors">Home</Link></li>
                  <li><Link to="/about" className="text-gray-300 hover:text-accent-400 transition-colors">About</Link></li>
                  <li><Link to="/gallery" className="text-gray-300 hover:text-accent-400 transition-colors">Gallery</Link></li>
                  <li><Link to="/faq" className="text-gray-300 hover:text-accent-400 transition-colors">FAQ's</Link></li>
                  <li><Link to="/contact" className="text-gray-300 hover:text-accent-400 transition-colors">Contact</Link></li>
                </ul>
              </div>

              {/* Services */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white">Services</h3>
                <ul className="space-y-2 text-sm">
                  <li><Link to="/services/invisible-grill-for-balconies" className="text-gray-300 hover:text-accent-400 transition-colors">Invisible Grill for Balconies</Link></li>
                  <li><Link to="/services/invisible-grill-for-windows" className="text-gray-300 hover:text-accent-400 transition-colors">Invisible Grill for Windows</Link></li>
                  <li><Link to="/services/invisible-grill-for-apartments" className="text-gray-300 hover:text-accent-400 transition-colors">Invisible Grill for Apartments</Link></li>
                  <li><Link to="/services/pull-dry-cloth-hangers" className="text-gray-300 hover:text-accent-400 transition-colors">Pull & Dry Cloth Hangers</Link></li>
                  <li><Link to="/services/ceiling-cloth-hangers" className="text-gray-300 hover:text-accent-400 transition-colors">Ceiling Cloth Hangers</Link></li>
                  <li><Link to="/services/pull-dry-cloth-hangers-for-balconies" className="text-gray-300 hover:text-accent-400 transition-colors">Pull & Dry Cloth Hangers for Balconies</Link></li>
                </ul>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">Contact Info</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-start space-x-3">
                  <Phone className="h-4 w-4 text-accent-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-gray-300 font-semibold">+91-9494397102</p>
                    <p className="text-gray-300 font-semibold">+91-8790839401</p>
                    <p className="text-gray-400 text-xs">Taj Safety Nets - 24/7 Support</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Mail className="h-4 w-4 text-accent-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-gray-300 font-semibold">info@tajsafetynets.com</p>
                    <p className="text-gray-400 text-xs">Taj Safety Nets - Email Support</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="h-4 w-4 text-accent-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <a 
                      href="https://maps.google.com/maps?q=19.0760,72.8777&z=17&hl=en"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-accent-400 transition-colors cursor-pointer block"
                    >
                      <p>Taj Safety Nets Office</p>
                      <p>Hyderabad, Telangana - 500001</p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-4 lg:py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-sm text-gray-400">
                © 2024 Taj Safety Nets. All rights reserved. | Developed by{' '}
                <a 
                  href="https://www.octaleads.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-accent-500 hover:text-accent-400 transition-colors font-medium"
                >
                  OctaLeads
                </a>
              </p>
            </div>
            <div className="flex space-x-6 text-sm text-gray-400">
              <Link to="/privacy" className="hover:text-accent-400 transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-accent-400 transition-colors">Terms of Service</Link>
              <Link to="/contact" className="hover:text-accent-400 transition-colors">Contact</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
