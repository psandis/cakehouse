
import React from 'react';
import { BakeryLogo, FacebookIcon, InstagramIcon, TwitterIcon } from './Icons';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-[#EED6C4] text-[#483434] pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Column 1: Logo & About */}
          <div className="space-y-4">
            <BakeryLogo />
            <p className="text-sm">
              Crafting unforgettable moments with every dessert since 2010.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Home</a></li>
              <li><a href="#cakes" className="hover:underline">Our Cakes</a></li>
              <li><a href="#about" className="hover:underline">About Us</a></li>
              <li><a href="#contact" className="hover:underline">Contact</a></li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-sm">
              <li>123 Pastry Lane, Paris, France</li>
              <li>(123) 456-7890</li>
              <li>contact@cremedelacreme.com</li>
            </ul>
          </div>

          {/* Column 4: Social */}
          <div>
            <h3 className="text-lg font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" aria-label="Facebook" className="text-[#6B4F4F] hover:text-[#483434] transition-colors">
                <FacebookIcon />
              </a>
              <a href="#" aria-label="Instagram" className="text-[#6B4F4F] hover:text-[#483434] transition-colors">
                <InstagramIcon />
              </a>
              <a href="#" aria-label="Twitter" className="text-[#6B4F4F] hover:text-[#483434] transition-colors">
                <TwitterIcon />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-[#D3B49D] pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Crème de la Crème Patisserie. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
