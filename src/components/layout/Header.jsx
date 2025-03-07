import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const navLinks = [
    { name: 'Home', href: '/' },
    { 
      name: 'Products', 
      href: '/products',
      submenu: [
        { name: 'Individual Life', href: '/products/individual' },
        { name: 'Group Insurance', href: '/products/group' },
        { name: 'Education Plans', href: '/products/education' },
        { name: 'Pension Plans', href: '/products/pension' },
        { name: 'Protection Plans', href: '/products/protection' }
      ]
    },
    { name: 'Claims', href: '/claims' },
    { 
      name: 'About Us', 
      href: '/about',
      submenu: [
        { name: 'Company Overview', href: '/about' },
        { name: 'Board of Directors', href: '/board' },
        { name: 'Management Team', href: '/management' },
        { name: 'Careers', href: '/careers' }
      ]
    },
    { name: 'News & Gallery', href: '/news' },
    { name: 'Contact', href: '/contact' }
  ];

  return (
    <>
      <div className="bg-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-10 text-sm">
            <div className="flex items-center gap-6">
              <a href="tel:+233302123456" className="flex items-center gap-2">
                <i className="fas fa-phone"></i>
                <span>+233 (0) 302 123 456</span>
              </a>
              <a href="mailto:info@pinnaclelife.com" className="hidden md:flex items-center gap-2">
                <i className="fas fa-envelope"></i>
                <span>info@pinnaclelife.com</span>
              </a>
            </div>
            <div className="flex items-center gap-4">
              <div className="hidden md:flex items-center gap-4">
                <NavLink to="/find-agent" className={({ isActive }) => isActive ? "text-gray-200" : "hover:text-gray-200"}>Find an Agent</NavLink>
                <NavLink to="/payment" className={({ isActive }) => isActive ? "text-gray-200" : "hover:text-gray-200"}>Make a Payment</NavLink>
              </div>
              <div className="flex items-center gap-3">
                <a href="https://facebook.com/pinnaclelife" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="https://twitter.com/pinnaclelife" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="https://linkedin.com/company/pinnaclelife" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold text-red-600">Pinnacle Life</span>
            </Link>

            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <div key={link.name} className="relative group">
                  <NavLink 
                    to={link.href}
                    className={({ isActive }) => 
                      `text-gray-700 hover:text-red-600 font-medium py-8 ${isActive ? 'text-red-600 font-bold' : ''}`
                    }
                  >
                    {link.name}
                    {link.submenu && (
                      <i className="fas fa-chevron-down ml-2 text-xs"></i>
                    )}
                  </NavLink>
                  {link.submenu && (
                    <div className="absolute top-full z-10 left-0 w-64 bg-white shadow-lg rounded-lg py-2 hidden group-hover:block">
                      {link.submenu.map((sublink) => (
                        <NavLink
                          key={sublink.name}
                          to={sublink.href}
                          className={({ isActive }) => 
                            `block px-4 py-2 hover:bg-red-50 hover:text-red-600 ${isActive ? 'bg-red-50 text-red-600 font-medium' : 'text-gray-700'}`
                          }
                        >
                          {sublink.name}
                        </NavLink>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            <div className="hidden lg:flex items-center gap-4">
              <Button onClick={() => navigate('/quote')}>Get a Quote</Button>
            </div>
            
            <button
              className="lg:hidden p-2"
              onClick={() => setIsOpen(!isOpen)}
            >
              <i className={`fas fa-${isOpen ? 'times' : 'bars'} text-xl`}></i>
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="lg:hidden bg-white border-t">
            <div className="max-w-7xl mx-auto px-4 py-4">
              <nav className="space-y-4">
                {navLinks.map((link) => (
                  <div key={link.name}>
                    <NavLink 
                      to={link.href}
                      className={({ isActive }) => 
                        `block font-medium py-2 hover:text-red-600 ${isActive ? 'text-red-600' : 'text-gray-700'}`
                      }
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                    </NavLink>
                    {link.submenu && (
                      <div className="pl-4 mt-2 space-y-2">
                        {link.submenu.map((sublink) => (
                          <NavLink
                            key={sublink.name}
                            to={sublink.href}
                            className={({ isActive }) => 
                              `block py-1 hover:text-red-600 ${isActive ? 'text-red-600' : 'text-gray-600'}`
                            }
                            onClick={() => setIsOpen(false)}
                          >
                            {sublink.name}
                          </NavLink>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </nav>
              <div className="mt-6">
                <Button className="w-full" onClick={() => navigate('/quote')}>Get a Quote</Button>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;