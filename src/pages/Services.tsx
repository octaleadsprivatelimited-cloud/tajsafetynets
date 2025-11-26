import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  HardHat, 
  Target, 
  TreePine, 
  Settings, 
  Wrench, 
  Shield, 
  CheckCircle, 
  ArrowRight,
  Bird,
  Bug,
  Sprout,
  Eye,
  Activity,
  Home,
  Droplets,
  Shirt,
  Image as ImageIcon,
  Building,
  Flower2,
  Baby,
  DoorOpen
} from 'lucide-react';
import { openWhatsAppQuote } from '../utils/whatsapp';
import { services as allServices } from '../data/services';

const Services: React.FC = () => {
  // Icon mapping for services
  const getServiceIcon = (category: string, name: string) => {
    const iconMap: { [key: string]: JSX.Element } = {
      "Pigeon Safety Nets": <Bird className="h-16 w-16 text-primary-600" />,
      "Mosquito Door and Window": <Bug className="h-16 w-16 text-primary-600" />,
      "Artificial Grass": <Sprout className="h-16 w-16 text-primary-600" />,
      "Invisible Grills": <Eye className="h-16 w-16 text-primary-600" />,
      "Cricket Nets": <Activity className="h-16 w-16 text-primary-600" />,
      "Balcony Grills": <Home className="h-16 w-16 text-primary-600" />,
      "Top Roofs & Waterproof Sheets": <Droplets className="h-16 w-16 text-primary-600" />,
      "Cloth Hanger for Ceiling and Wall Brackets": <Shirt className="h-16 w-16 text-primary-600" />,
      "Wallpapers": <ImageIcon className="h-16 w-16 text-primary-600" />,
      "Construction Safety Nets": <Building className="h-16 w-16 text-primary-600" />,
      "Nursery Shade Nets": <Flower2 className="h-16 w-16 text-primary-600" />,
      "Children Safety Nets": <Baby className="h-16 w-16 text-primary-600" />,
      "Folding Aluminium Mosquito Door": <DoorOpen className="h-16 w-16 text-primary-600" />
    };
    return iconMap[name] || <Shield className="h-16 w-16 text-primary-600" />;
  };

  // Convert services from data file to display format
  const services = allServices.map(service => ({
    icon: getServiceIcon(service.category, service.name),
    image: service.image,
    title: service.name,
    description: service.shortDescription,
    features: service.features.slice(0, 5), // Show first 5 features
    slug: service.slug
  }));

  return (
    <>
      <Helmet>
        <title>Our Services - Pigeon Safety Nets, Mosquito Doors, Artificial Grass & More | Taj Safety Nets Hyderabad</title>
        <meta name="description" content="Taj Safety Nets offers pigeon safety nets, mosquito doors and windows, artificial grass, invisible grills, cricket nets, balcony grills, roof waterproofing, cloth hangers, wallpapers, construction safety nets, nursery shade nets, children safety nets, and folding aluminium mosquito doors in Hyderabad. Professional installation across all areas. Free consultation! ☎ +91 8790839401" />
        <meta name="keywords" content="pigeon safety nets, mosquito door and window, artificial grass, invisible grills, cricket nets, balcony grills, roof waterproofing, cloth hanger, wallpapers, construction safety nets, nursery shade nets, children safety nets, folding aluminium mosquito door, Taj Safety Nets services, Banjara Hills, Jubilee Hills, Gachibowli, HITEC City, Secunderabad, Kondapur, Madhapur, Begumpet, Ameerpet, Kukatpally, Miyapur, Chandanagar, Serilingampally, Manikonda, Financial District, Nanakramguda, Kokapet, Tellapur, Raidurg, safety nets services Hyderabad" />
        <meta property="og:title" content="Our Services - Pigeon Safety Nets, Mosquito Doors, Artificial Grass & More | Taj Safety Nets Hyderabad" />
        <meta property="og:description" content="Professional pigeon safety nets, mosquito doors, artificial grass, invisible grills, cricket nets, balcony grills, roof waterproofing, cloth hangers, wallpapers, construction safety nets, nursery shade nets, children safety nets, and folding aluminium mosquito door installation services in Hyderabad. Free consultation! ☎ +91 8790839401" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Our Services - Pigeon Safety Nets, Mosquito Doors, Artificial Grass & More | Taj Safety Nets Hyderabad" />
        <meta name="twitter:description" content="Professional pigeon safety nets, mosquito doors, artificial grass, invisible grills, cricket nets, balcony grills, and more installation services in Hyderabad. Free consultation! ☎ +91 8790839401" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Taj Safety Nets" />
      </Helmet>
      <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our <span className="text-yellow-400">Safety Nets</span> & <span className="text-yellow-400">Installation</span> Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Professional safety nets, mosquito doors, artificial grass, invisible grills, cricket nets, balcony grills, and more installation solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={openWhatsAppQuote}
                className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
              >
                Get Free Quote
              </button>
              <Link
                to="/contact"
                className="border-2 border-white hover:bg-white hover:text-primary-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Premium Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive safety nets, mosquito doors, artificial grass, invisible grills, cricket nets, balcony grills, and more with unmatched quality and service
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
              >
                {/* Service Image */}
                <div className="h-48 w-full overflow-hidden bg-gray-100 flex items-center justify-center">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                <div className="p-8">
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-6">
                      {service.description}
                    </p>
                  </div>

                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-secondary-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    to={`/services/${service.slug}`}
                    className="w-full bg-accent-600 hover:bg-accent-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors flex items-center justify-center"
                  >
                    Learn More
                    <ArrowRight className="h-5 w-5 ml-2" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose Taj Safety Nets?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We provide comprehensive safety nets, mosquito doors, artificial grass, invisible grills, cricket nets, balcony grills, roof waterproofing, cloth hangers, wallpapers, construction safety nets, nursery shade nets, children safety nets, and folding aluminium mosquito doors with unmatched quality and service
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Shield className="h-12 w-12 text-yellow-400" />,
                title: "Quality First",
                description: "We uphold the highest standards, using only premium materials and components to ensure maximum security and durability for invisible grills."
              },
              {
                icon: <CheckCircle className="h-12 w-12 text-yellow-400" />,
                title: "Customer Satisfaction",
                description: "Your security is our priority — we provide dedicated support, reliable service, and comprehensive invisible grill solutions."
              },
              {
                icon: <Settings className="h-12 w-12 text-yellow-400" />,
                title: "Innovation",
                description: "We continuously embrace the latest invisible grill technologies and industry best practices to deliver superior security solutions."
              },
              {
                icon: <HardHat className="h-12 w-12 text-yellow-400" />,
                title: "Security Commitment",
                description: "We are committed to protecting homes and ensuring security across all our invisible grill installations and services."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="flex justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-300">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Secure Your Home?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Contact us for a free consultation and customized invisible grill solution quote
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+918790839401"
                className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
              >
                Call Now: +91 8790839401
              </a>
              <a
                href="https://wa.me/918790839401"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-white hover:bg-white hover:text-primary-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
              >
                WhatsApp Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
    </>
  );
};

export default Services;