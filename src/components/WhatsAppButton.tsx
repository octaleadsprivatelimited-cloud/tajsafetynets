import React from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { MessageCircle, Phone, Mail } from 'lucide-react';

const WhatsAppButton: React.FC = () => {
  const location = useLocation();

  // Don't show button on landing page
  const isLandingPage = location.pathname === '/landing';

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      "Hi! I'm interested in safety nets installation. Can you provide me with more information about your services and pricing?"
    );
    const whatsappUrl = `https://wa.me/918790839401?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleCallClick = () => {
    window.open('tel:+918790839401', '_self');
  };

  const handleEmailClick = () => {
    window.open('mailto:info@tajsafetynets.com?subject=Inquiry about Invisible Grills & Cloth Hangers - Taj Safety Nets', '_self');
  };

  // Don't render anything on landing page
  if (isLandingPage) {
    return null;
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Floating Action Buttons */}
      <div className="flex flex-col items-end space-y-3">
        {/* WhatsApp Button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={handleWhatsAppClick}
          className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:shadow-xl"
          aria-label="Contact us on WhatsApp"
        >
          <MessageCircle className="h-6 w-6" />
        </motion.button>

        {/* Call Button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={handleCallClick}
          className="bg-secondary-500 hover:bg-secondary-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:shadow-xl"
          aria-label="Call us"
        >
          <Phone className="h-6 w-6" />
        </motion.button>

        {/* Email Button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={handleEmailClick}
          className="bg-red-500 hover:bg-red-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:shadow-xl"
          aria-label="Send us an email"
        >
          <Mail className="h-6 w-6" />
        </motion.button>
      </div>
    </div>
  );
};

export default WhatsAppButton;
