"use client"

import React, { useState, useEffect, useRef } from "react";
import Link from 'next/link';
import Image from 'next/image';
import './Hero.css';

const Hero = () => {
  const heroRef = useRef<HTMLImageElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);

  // Check for mobile screen size and track window width
  // useEffect(() => {
  //   const handleResize = () => {
  //     const width = window.innerWidth;
  //     setIsMobile(width < 768);
  //     setWindowWidth(width);
  //   };

  //   // Initial check
  //   handleResize();

  //   // Add resize listener
  //   window.addEventListener('resize', handleResize);

  //   // Cleanup
  //   return () => window.removeEventListener('resize', handleResize);
  // }, []);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (heroRef.current) {
  //       const scrolled = window.scrollY;
  //       heroRef.current.style.transform = `translateY(${scrolled * 0.5}px)`;
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  // Calculate background position based on screen width
  // const calculateBackgroundPosition = () => {
  //   // For large screens, keep 'top center'
  //   if (windowWidth >= 1200) {
  //     return "top center";
  //   }
    
  //   // For medium screens, gradually shift left
  //   if (windowWidth >= 768) {
  //     // Calculate percentage between 50% (center) and 30% (shifted left)
  //     const percentage = 50 - ((1200 - windowWidth) / (1200 - 768) * 20);
  //     return `top ${percentage}%`;
  //   }
    
  //   // For mobile screens, shift further left
  //   return "top 10%";
  // };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <Image
        ref={heroRef}
        src="/image/hero-bg/background.jpg"
        alt="Hero Background"
        fill
        priority
        className="absolute inset-0 animate-subtle-zoom object-cover"
      />
      <div className="absolute inset-0 animate-water-reflection" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/50" />

      {/* Text Column */}
      <div className="px-4 md:px-8 lg:px-20 py-16 text-white relative z-10 text-left max-w-[1400px] w-full">
        <div className="space-y-6 ml-0 md:ml-4 lg:ml-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-['Outfit'] mb-6 py-20 leading-tight">
            <div>
              Built on Precision
              <br />
              Driven by Innovation!
            </div>
          </h1>

          <p className="text-xl md:text-2xl mb-4 font-light font-roboto tracking-wide text-white smooth-fade-in">
            <br />
            Stop Losing Time & Money on Faulty Castings       </p>
            <span className="text-xl md:text-2xl mb-4 font-light font-roboto tracking-wide text-white smooth-fade-in"> Fix It in One Call !    </span>
          <div className="space-x-4 smooth-fade-in-buttons">
            <Link
              href="/Services"
              className="hero-cta inline-block bg-[#CD1C18] border-2 border-[#CD1C18] text-white px-8 py-2 rounded-full text-lg transition-all stagger-button-1"
            >
              Explore Services
            </Link>
            <Link
              href="/CTA"
              className="hero-cta inline-block border-2 border-white text-white px-8 py-2 rounded-full text-lg transition-all stagger-button-2"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;