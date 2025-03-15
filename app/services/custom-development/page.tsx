import React from 'react';
import Image from 'next/image';

export default function CustomDevelopment() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[40vh] md:h-[60vh]">
        <Image
          src="/image/misc/cd.jpg"
          alt="Custom Development"
          layout="fill"
          objectFit="cover"
          className="brightness-75"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl text-white font-bold">
            Custom Development
          </h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none">
          <h2>Overview</h2>
          <p>
            Our custom development service provides end-to-end solutions for unique 
            manufacturing challenges. We work closely with clients to develop 
            tailored solutions that meet specific requirements and specifications.
          </p>

          <h2>Our Process</h2>
          <ul>
            <li>Initial consultation and requirement analysis</li>
            <li>Concept development and design</li>
            <li>Prototyping and testing</li>
            <li>Production implementation</li>
            <li>Quality assurance and validation</li>
          </ul>

          <h2>Services Offered</h2>
          <ul>
            <li>Custom component design</li>
            <li>Process optimization</li>
            <li>Material selection consultancy</li>
            <li>Production line setup</li>
            <li>Quality control system development</li>
          </ul>

          <h2>Benefits</h2>
          <p>
            Working with our custom development team offers several advantages:
          </p>
          <ul>
            <li>Tailored solutions for specific needs</li>
            <li>Expert engineering support</li>
            <li>Reduced time-to-market</li>
            <li>Cost-effective development process</li>
            <li>Ongoing technical support</li>
          </ul>
        </div>
      </div>
    </div>
  );
}