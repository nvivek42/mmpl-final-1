"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import Logo from './Logo'; // Assuming Logo component exists

// Site-wide configuration and constants
export const SITE_TITLE = 'METALMACH MASTERY';
export const NAV_LINKS = [
  {
    href: '/about',
    label: 'Who We Are'
  },
  {
    href: '/services',
    label: 'What We Do',
    dropdownItems: [
      { href: '/services/gravity-die-casting', label: 'Gravity Die Casting' },
      { href: '/services/precision-machining', label: 'Precision Machining' },
      { href: '/services/custom-development', label: 'Custom Development' }
    ]
  },
  {
    label: 'Industries',
    href: '/industries',
    dropdownItems: [
      { label: 'Automotive', href: '/industries/automotive' },
      { label: 'Agriculture', href: '/industries/agriculture' },
      { label: 'Energy', href: '/industries/energy' },
      { label: 'Defense', href: '/industries/defense' },
    ]
  },
  {
    href: '/contact',
    label: 'Contact'
  },
];

export const FOOTER_LINKS = {
  Company: [
    { href: '/about', label: 'About Us' },
    { href: '/careers', label: 'Careers' },
  ],
  Services: [
    { href: '/services/gravity-die-casting', label: 'Gravity Die Casting' },
    { href: '/services/precision-machining', label: 'Precision Machining' },
    { href: '/services/custom-development', label: 'Custom Development' }
  ],
};

export const CONTACT_INFO = {
  phone: "+91 70304 09930",
  email: "info@metalmach.in",
  address: "F-39, Chincholi MIDC, Solapur",
  address1: "Mah, India - 413255",
};

export const Who_We_Are = {
  title: 'Who We Are',
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
};

export const What_We_Do = {
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
};

export default function Footer() {
  // State for mobile accordion sections
  const [openSections, setOpenSections] = useState<{ [key: string]: boolean }>({});

  const toggleSection = (section: string) => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  return (
    <footer className="bg-white text-black py-6 sm:py-8 lg:py-10">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:px-20">
        {/* Title and Logo */}
        <div className="flex flex-col items-center sm:items-start mb-6 sm:mb-8">
          <div className="flex flex-col sm:flex-row items-center sm:items-start mb-1">
            <Logo />
            <span className="text-2xl sm:text-3xl lg:text-4xl font-chakra-petch font-bold px-4">
              Metalmach Mastery Pvt Ltd
            </span>
          </div>
          <p className="text-sm sm:text-base text-gray-600 mt-2 text-center sm:text-left max-w-xl">
            Precision metal manufacturing solutions for industries worldwide. Excellence in gravity die casting and precision machining.
          </p>
        </div>

        {/* Main Content Grid - Responsive design with better mobile layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8 py-3 sm:py-5">
          {/* Quick Links - Now with mobile accordion */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:col-span-2 lg:col-span-2 gap-6 sm:gap-8">
            {Object.entries(FOOTER_LINKS).map(([category, links]) => (
              <div key={category} className="space-y-3 sm:space-y-4 px-4 sm:px-0">
                {/* Mobile accordion header */}
                <div 
                  className="flex items-center justify-between sm:justify-start cursor-pointer sm:cursor-default"
                  onClick={() => toggleSection(category)}
                >
                  <h4 className="text-base sm:text-lg font-semibold text-black text-center sm:text-left">
                    {category}
                  </h4>
                  <button className="block sm:hidden">
                    {openSections[category] ? (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                      </svg>
                    ) : (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    )}
                  </button>
                </div>
                
                {/* Links - visible on desktop, toggleable on mobile */}
                <ul className={`space-y-2 text-center sm:text-left ${openSections[category] ? 'block' : 'hidden sm:block'}`}>
                  {links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="hover:text-blue-500 transition-colors text-sm sm:text-base block py-1 sm:py-0"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Who We Are section */}
          <div className="space-y-3 sm:space-y-4 px-4 sm:px-0 md:col-span-1 lg:col-span-1">
            <div 
              className="flex items-center justify-between sm:justify-start cursor-pointer sm:cursor-default"
              onClick={() => toggleSection('whoWeAre')}
            >
              <h4 className="text-base sm:text-lg text-black font-semibold text-center sm:text-left">
                Who We Are
              </h4>
              <button className="block sm:hidden">
                {openSections['whoWeAre'] ? (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                )}
              </button>
            </div>
            <ul className={`space-y-2 text-sm sm:text-base ${openSections['whoWeAre'] ? 'block' : 'hidden sm:block'}`}>
              {Who_We_Are.items.slice(0, 5).map((item, index) => (
                <li key={index} className="flex items-center justify-center sm:justify-start">
                  <Link href={`/about/${item.toLowerCase()}`} className="hover:text-blue-500 transition-colors">
                    <span>{item}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* What We Do section */}
          <div className="space-y-3 sm:space-y-4 px-4 sm:px-0 md:col-span-1 lg:col-span-1">
            <div 
              className="flex items-center justify-between sm:justify-start cursor-pointer sm:cursor-default"
              onClick={() => toggleSection('whatWeDo')}
            >
              <h4 className="text-base sm:text-lg text-black font-semibold text-center sm:text-left">
                What We Do
              </h4>
              <button className="block sm:hidden">
                {openSections['whatWeDo'] ? (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                )}
              </button>
            </div>
            <ul className={`space-y-2 text-sm sm:text-base ${openSections['whatWeDo'] ? 'block' : 'hidden sm:block'}`}>
              {What_We_Do.items.slice(0, 5).map((item, index) => (
                <li key={index} className="flex items-center justify-center sm:justify-start">
                  <Link href={`/services/${item.toLowerCase()}`} className="hover:text-blue-500 transition-colors">
                    <span>{item}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div className="space-y-3 sm:space-y-4 px-4 sm:px-0 md:col-span-1 lg:col-span-1">
            <div 
              className="flex items-center justify-between sm:justify-start cursor-pointer sm:cursor-default"
              onClick={() => toggleSection('contact')}
            >
              <h4 className="text-base sm:text-lg text-black font-semibold text-center sm:text-left">
                Contact
              </h4>
              <button className="block sm:hidden">
                {openSections['contact'] ? (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                )}
              </button>
            </div>
            <ul className={`space-y-3 text-sm sm:text-base ${openSections['contact'] ? 'block' : 'hidden sm:block'}`}>
              <li className="flex items-center justify-center sm:justify-start">
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 text-cyan-400 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-blue-500 transition-colors break-all">
                  {CONTACT_INFO.email}
                </a>
              </li>
              <li className="flex items-center justify-center sm:justify-start">
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 text-cyan-400 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <a href={`tel:${CONTACT_INFO.phone}`} className="hover:text-blue-500 transition-colors">
                  {CONTACT_INFO.phone}
                </a>
              </li>
              <li className="flex items-start justify-center sm:justify-start">
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 mt-1 text-cyan-400 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span className="text-center sm:text-left">
                  {CONTACT_INFO.address}
                  <br />
                  {CONTACT_INFO.address1}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center sm:justify-start mt-6 space-x-4">
          <a href="#" className="text-gray-600 hover:text-blue-500 transition-colors">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
            </svg>
          </a>
          <a href="#" className="text-gray-600 hover:text-blue-500 transition-colors">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
          <a href="#" className="text-gray-600 hover:text-blue-500 transition-colors">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
          </a>
        </div>

        {/* Copyright and Legal */}
        <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-200">
          <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
            <p className="text-xs sm:text-sm text-gray-600 text-center sm:text-left">
              © {new Date().getFullYear()} {SITE_TITLE}. All Rights Reserved.
            </p>
            <div className="flex space-x-4">
              <Link
                href="/privacy"
                className="text-xs sm:text-sm text-gray-600 hover:text-blue-500 transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-xs sm:text-sm text-gray-600 hover:text-blue-500 transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}