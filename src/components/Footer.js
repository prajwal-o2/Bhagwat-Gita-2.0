import React from 'react';
import { BookOpen } from 'lucide-react';

const Footer = () => {
  const footerLinks = [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
    { label: 'Contact', href: '#' }
  ];

  return (
    <footer className="bg-gray-900 py-12 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <div className="flex justify-center items-center space-x-2 mb-6">
          <BookOpen className="w-8 h-8 text-amber-500" />
          <span className="text-2xl font-bold text-white tracking-wide">
            Bhagwad Geeta 2.0
          </span>
        </div>

        <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
          © 2025 Prajwal Sharma. All rights reserved. Walk the path of karma, embrace joy, and surrender to the flow of life — one page at a time.
        </p>

        {/* <div className="flex justify-center space-x-6">
          {footerLinks.map(({ label, href }) => (
            <a 
              key={label}
              href={href} 
              className="text-amber-400 hover:text-amber-300 transition-colors text-sm font-medium"
            >
              {label}
            </a>
          ))}
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;
