import React from 'react';
import Image from 'next/image';

export default function PrecisionMachining() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[40vh] md:h-[60vh]">
        <Image
          src="/image/misc/pm.webp"
          alt="Precision Machining"
          layout="fill"
          objectFit="cover"
          className="brightness-75"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl text-white font-bold">
            Precision Machining
          </h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none">
          <h2>Overview</h2>
          <p>
            Our precision machining department utilizes state-of-the-art CNC machines 
            and advanced manufacturing techniques to deliver components with exceptional 
            accuracy and superior surface finish.
          </p>

          <h2>Key Features</h2>
          <ul>
            <li>High-precision CNC machining capabilities</li>
            <li>Tolerances up to ±0.01mm</li>
            <li>Advanced quality control systems</li>
            <li>Multi-axis machining solutions</li>
            <li>Rapid prototyping services</li>
          </ul>

          <h2>Capabilities</h2>
          <ul>
            <li>5-axis CNC machining</li>
            <li>Complex surface machining</li>
            <li>Micro-machining</li>
            <li>High-speed machining</li>
          </ul>

          <h2>Industries Served</h2>
          <p>
            We provide precision machining services for various industries including:
          </p>
          <ul>
            <li>Aerospace and Defense</li>
            <li>Medical Devices</li>
            <li>Automotive</li>
            <li>Electronics</li>
            <li>Research and Development</li>
          </ul>
        </div>
      </div>
    </div>
  );
}