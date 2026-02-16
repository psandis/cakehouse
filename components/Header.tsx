'use client';

import React, { useState, useEffect } from 'react';
import { BakeryLogo } from './Icons';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#', label: 'Home' },
    { href: '#cakes', label: 'Our Cakes' },
    { href: '#about', label: 'About Us' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className="sticky top-0 w-full z-50 py-4 transition-all duration-300">
      <div className="container mx-auto px-4">
        <div className={`max-w-5xl mx-auto rounded-full flex items-center justify-between px-6 py-2 transition-all duration-300 ${isScrolled ? 'bg-[#FDF8F0] shadow-md' : 'bg-[#FDF8F0]/80 backdrop-blur-sm'}`}>
            <a href="#" aria-label="Home">
              <BakeryLogo />
            </a>
            <nav className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-base text-[#6B4F4F] hover:text-[#483434] transition-colors duration-300"
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <div className="flex items-center space-x-4">
              <a
                href="#"
                className="hidden md:inline-block bg-[#EED6C4] text-[#6B4F4F] px-6 py-2 rounded-full font-semibold hover:bg-opacity-80 transition-all duration-300 transform hover:scale-105"
              >
                Order Now
              </a>
              <button
                className="md:hidden text-[#6B4F4F]"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                </svg>
              </button>
            </div>
        </div>
        
        {isMenuOpen && (
          <div className="md:hidden mt-3">
             <div className="max-w-5xl mx-auto bg-[#FDF8F0] rounded-2xl shadow-xl p-6">
              <nav className="flex flex-col items-center space-y-4">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-lg text-[#6B4F4F] hover:text-[#483434] transition-colors duration-300"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  href="#"
                  className="bg-[#EED6C4] text-[#6B4F4F] px-6 py-2 rounded-full font-semibold hover:bg-opacity-80 transition-all duration-300 w-full text-center mt-2"
                >
                  Order Now
                </a>
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;