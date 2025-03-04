import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    products: [
      { name: 'Individual Life', href: '/products#individual' },
      { name: 'Group Life', href: '/products#group' },
      { name: 'Investment Plans', href: '/products#investment' },
      { name: 'Education Plans', href: '/products#education' },
      { name: 'Funeral Plans', href: '/products#funeral' }
    ],
    quickLinks: [
      { name: 'Make a Payment', href: '/payment' },
      { name: 'File a Claim', href: '/claims' },
      { name: 'Get a Quote', href: '/quote' },
      { name: 'Find an Agent', href: '/find-agent' }
    ],
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Board of Directors', href: '/board' },
      { name: 'Management Team', href: '/management' },
      { name: 'Careers', href: '/careers' }
    ]
  };

  const contactInfo = {
    address: '123 Insurance Avenue, Accra, Ghana',
    phone: '+233 (0) 302 123 456',
    mobile: '+233 (0) 24 123 4567',
    email: 'info@pinnaclelife.com',
    hours: 'Mon-Fri: 8:00am - 5:00pm'
  };

  const socialLinks = [
    { name: 'Facebook', icon: 'fa-facebook-f', href: 'https://facebook.com/pinnaclelife' },
    { name: 'Twitter', icon: 'fa-twitter', href: 'https://twitter.com/pinnaclelife' },
    { name: 'LinkedIn', icon: 'fa-linkedin-in', href: 'https://linkedin.com/company/pinnaclelife' },
    { name: 'Instagram', icon: 'fa-instagram', href: 'https://instagram.com/pinnaclelife' }
  ];

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-gray-300">
      {/* Top Banner */}
      <div className="bg-red-600 text-white py-6">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <h2 className="text-2xl font-bold">Ready to secure your future?</h2>
            <Link 
              to="/quote" 
              className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get a Quote Today
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <div className="text-3xl font-bold text-white mb-6">Pinnacle Life</div>
            <p className="mb-6 text-gray-400">
              Your trusted partner in life insurance, providing comprehensive coverage and financial security for over two decades.
            </p>
            <div className="space-y-2">
              <p><i className="fas fa-map-marker-alt w-6"></i> {contactInfo.address}</p>
              <p><i className="fas fa-phone w-6"></i> {contactInfo.phone}</p>
              <p><i className="fas fa-mobile-alt w-6"></i> {contactInfo.mobile}</p>
              <p><i className="fas fa-envelope w-6"></i> {contactInfo.email}</p>
              <p><i className="fas fa-clock w-6"></i> {contactInfo.hours}</p>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-white font-semibold text-xl mb-6">Our Products</h3>
            <ul className="space-y-3">
              {footerLinks.products.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href} 
                    className="hover:text-red-500 transition-colors flex items-center"
                  >
                    <i className="fas fa-chevron-right mr-2 text-sm text-red-600"></i>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-xl mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href} 
                    className="hover:text-red-500 transition-colors flex items-center"
                  >
                    <i className="fas fa-chevron-right mr-2 text-sm text-red-600"></i>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-white font-semibold text-xl mb-6">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href} 
                    className="hover:text-red-500 transition-colors flex items-center"
                  >
                    <i className="fas fa-chevron-right mr-2 text-sm text-red-600"></i>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              © {currentYear} Pinnacle Life Insurance. All rights reserved. Licensed by the National Insurance Commission.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-red-600 transition-colors"
                >
                  <i className={`fab ${social.icon}`}></i>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;