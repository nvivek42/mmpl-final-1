"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import "./Hero.css";

const Hero = () => {
  const heroRef = useRef<HTMLImageElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // This ensures the component only fully renders on the client
    setIsClient(true);

    // Resize and scroll handlers
    const handleResize = () => {
      if (typeof window !== 'undefined') {
        const width = window.innerWidth;
        setIsMobile(width < 768);
      }
    };

    const handleScroll = () => {
      if (heroRef.current && typeof window !== 'undefined') {
        const scrolled = window.scrollY;
        heroRef.current.style.transform = `translateY(${scrolled * 0.5}px)`;
      }
    };

    // Initial check
    handleResize();

    // Add listeners
    window.addEventListener('resize', handleResize);
    window.addEventListener("scroll", handleScroll);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // If not client-side, return null or a placeholder
  if (!isClient) {
    return (
      <section className="relative h-screen w-full overflow-hidden">
        <div className="px-4 md:px-8 lg:px-20 py-16 text-white relative z-10 text-left max-w-[1400px] w-full">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-['Outfit'] mb-6 py-20 leading-tight">
            Built on Precision
            <br />
            Driven by Innovation!
          </h1>
        </div>
      </section>
    );
  }

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