'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Chakra_Petch } from 'next/font/google';
import { NAV_LINKS, SITE_TITLE } from '@/config/site';
import './Header.css';

const chakraPetch = Chakra_Petch({
  weight: ['400', '700'],
  subsets: ['latin']
});

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm top-0 z-50 shadow-md px-4 sm:px-6 md:px-8 lg:px-20 py-3">
      <div className="max-w-7xl mx-auto relative flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2 sm:space-x-4">
          <Image 
            src="/image/logo1.jpg" 
            alt="Metalmach Logo" 
            width={32} 
            height={32} 
            className="sm:w-[40px] sm:h-[40px] transition-transform duration-300 hover:rotate-6"
          />
          <span className={`site-title text-lg sm:text-xl md:text-2xl font-bold ${chakraPetch.className} shiny-text truncate`}>
            {SITE_TITLE}
          </span>
        </Link>

        {/* Mobile Menu Toggle */}
        <button 
          className="lg:hidden focus:outline-none p-2"
          onClick={toggleMenu}
          aria-label="Toggle Mobile Menu"
        >
          <svg 
            className="w-6 h-6 text-primary"
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMenuOpen ? (
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M6 18L18 6M6 6l12 12" 
              />
            ) : (
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M4 6h16M4 12h16M4 18h16" 
              />
            )}
          </svg>
        </button>

        {/* Navigation */}
        <nav className={`
          ${isMenuOpen ? 'block' : 'hidden'} 
          lg:block absolute lg:relative top-full left-0 w-full lg:w-auto
          bg-white/90 lg:bg-transparent shadow-md lg:shadow-none
          transition-all duration-300 ease-in-out
          mt-2 lg:mt-0
        `}>
          <ul className="flex flex-col lg:flex-row space-y-2 lg:space-y-0 lg:space-x-6 p-4 lg:p-0">
            {NAV_LINKS.map((link) => (
              <li key={link.href} className="text-center lg:text-left">
                <Link 
                  href={link.href} 
                  className="nav-link block py-2 lg:py-0 hover:bg-gray-100 lg:hover:bg-transparent"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </nav>
  );
};

export default Header;