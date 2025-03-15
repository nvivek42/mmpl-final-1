'use client';

import Link from 'next/link';
import { useState } from 'react';
import { NAV_LINKS, SITE_TITLE } from '@/config/site';
import './Header.css';
import Logo from './Logo'; 


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  // bg-gradient-to-r from-white-300 from-5% via-gray-300 via-[percentage:20%_70%] to-green-300 to-100%
  return (
    <nav className="fixed w-full bg-white border:none top-0 z-50  px-4 sm:px-6 md:px-8 lg:px-20 py-3">
      <div className="max-w-7xl mx-auto relative  flex items-center justify-between">
    
        <Link href="/" className="flex items-center space-x-2 sm:space-x-4">
          <div className="">
            <Logo />
          </div>
          <span className={`site-title text-lg sm:text-lg md:text-2xl font-bold font-chakra-petch shiny-text truncate`}>
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
          <ul className="flex flex-col lg:flex-row space-y-2 lg:space-y-0 lg:space-x-6 p-4 lg:p-0 ">
            {NAV_LINKS.map((link) => (
              <li key={link.href} className="text-center lg:text-left">
                <Link
                  href={link.href}
                  className="nav-link block py-2 lg:py-0 hover:bg-gray-300 lg:hover:bg-transparent"
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