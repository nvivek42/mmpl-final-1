"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { SITE_TITLE } from "@/config/site";
import "./Header1.css";
import Logo from "./Logo";

interface MenuItem {
  title: string;
  items: string[];
  colorClass: string;
}

const menuItems: MenuItem[] = [
  {
    title: "WHO WE ARE",
    items: [
      "Overview",
      "Leadership",
      "Management",
      "Expertise",
      "Facilities",
      "Certifications",
      "Sustainability",
      "History",
      "Recognition",
    ],
    colorClass: "",
  },
  {
    title: "WHAT WE DO",
    items: ["Overview", "Automotive", "Non-Automotive", "E-Mobility"],
    colorClass: "menu-title_2nd",
  },
  {
    title: "JOIN US",
    items: [],
    colorClass: "menu-title_4th",
  },
  {
    title: "CONTACT",
    items: [
      "General Enquiry",
      "Business Enquiry",
      "Investor Enquiry",
      "Location",
    ],
    colorClass: "menu-title_4th",
  },
];

// Hover dropdown component
const HoverDropdownMenu = ({ item, isMobile, onClose }: { item: MenuItem; isMobile: boolean; onClose: () => void }) => {
  const [isHovered, setIsHovered] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Handle click outside for mobile
  useEffect(() => {
    if (!isMobile) return;
    
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsHovered(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobile]);

  return (
    <div 
      className="relative"
      ref={dropdownRef}
      onMouseEnter={() => !isMobile && setIsHovered(true)}
      onMouseLeave={() => !isMobile && setIsHovered(false)}
    >
      <div 
        className={`nav-link cursor-pointer px-4 py-2  transition-colors ${isHovered ? 'text-blue-600' : ''}`}
        onClick={() => isMobile && setIsHovered(!isHovered)}
      >
        <span className={`${item.colorClass}`}>{item.title}</span>
      </div>
      
      {isHovered && (
        <div className="absolute left-0 mt-0 w-48 bg-white rounded-md shadow-lg z-50 py-1">
          {item.items.map((subItem, index) => (
            <Link
              href={`/${item.title.toLowerCase()}/${subItem.toLowerCase().replace(/\s+/g, '-')}`}
              key={index}
              onClick={onClose}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-600"
            >
              {subItem}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if we're on the client side
    if (typeof window !== 'undefined') {
      // Set initial state
      setIsMobile(window.innerWidth < 1024);
      
      // Add resize listener
      const handleResize = () => {
        setIsMobile(window.innerWidth < 1024);
      };
      
      window.addEventListener('resize', handleResize);
      
      // Clean up
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="relative w-full bg-white/90 backdrop-blur-sm z-50 shadow-md px-1 sm:px-3 md:px-4 lg:px-10 py-2">
      <div className="w-full flex justify-between items-center">
        {/* Logo and Site Title - Left aligned with padding */}
        <div className="flex items-center pl-2 sm:pl-4">
          <Link href="/" className="flex items-center">
            <Logo />
            <span className="site-title text-lg sm:text-lg md:text-2xl font-chakra-petch">
              &nbsp; {SITE_TITLE}
            </span>
          </Link>
        </div>
        
        {/* Mobile Menu Toggle - Only visible on mobile */}
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
        <nav
          className={`
            ${isMenuOpen ? "block" : "hidden"} 
            lg:block absolute lg:relative top-full left-0 w-full lg:w-auto
            bg-white/90 lg:bg-transparent shadow-md lg:shadow-none
            transition-all duration-300 ease-in-out
            mt-1 lg:mt-0 
          `}
        >
          <ul className="flex flex-col lg:flex-row space-y-2 lg:space-y-0 lg:space-x-4 p-4 lg:p-0">
            {menuItems.map((item, index) => (
              <li key={index} className="relative text-center lg:text-left">
                <HoverDropdownMenu
                  item={item}
                  isMobile={isMobile}
                  onClose={closeMenu}
                />
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;