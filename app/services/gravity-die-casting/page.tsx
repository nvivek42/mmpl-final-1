import React from 'react';
import Image from 'next/image';

export default function GravityDieCasting() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[40vh] md:h-[60vh]">
        <Image
          src="/image/misc/gdc.webp"
          alt="Gravity Die Casting"
          layout="fill"
          objectFit="cover"
          className="brightness-75"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl text-white font-bold">
            Gravity Die Casting
          </h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none">
          <h2>Overview</h2>
          <p>
            Our gravity die casting service specializes in producing high-quality aluminum 
            alloy components ranging from 0.5 to 5 kg. We utilize advanced casting 
            techniques to ensure superior quality and consistency.
          </p>

          <h2>Key Features</h2>
          <ul>
            <li>Precision casting for complex geometries</li>
            <li>High-quality surface finish</li>
            <li>Excellent dimensional accuracy</li>
            <li>Cost-effective for medium to large production runs</li>
          </ul>

          <h2>Applications</h2>
          <p>
            Our gravity die casting solutions are ideal for various industries including:
          </p>
          <ul>
            <li>Automotive components</li>
            <li>Industrial machinery</li>
            <li>Aerospace parts</li>
            <li>Medical equipment</li>
          </ul>
        </div>
      </div>
    </div>
  );
}