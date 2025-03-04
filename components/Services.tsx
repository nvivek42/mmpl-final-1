'use client'

import React from 'react';
import Image from 'next/image';

const Services = () => {
  const services = [
    {
      title: 'Gravity Die Casting',
      description: 'Specialized in aluminum alloy components ranging from 0.5 to 5 kg',
      bgImage: '/image/misc/gdc.webp'
    },
    {
      title: 'Precision Machining',
      description: 'Advanced component machining with high precision',
      bgImage: '/image/misc/pm.webp'
    },
    {
      title: 'Custom Development',
      description: 'Customer-specific development and solutions',
      bgImage: '/image/misc/cd.jpg'
    },
  ];

  return (
    <section className="w-full  px-4 sm:px-6 lg:px-20 py-12 ">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight font-roboto`}
          >
            What We Do
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto py-5 "><i>
            {/* Our commitment to maintaining the highest standards of manufacturing excellence
            through continuous monitoring and improvement of key performance indicators. */}
           Your Vision, Our Expertise: Aluminum Solutions Tailored for You</i>
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative h-[300px] sm:h-[350px] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
            > 
           
              {/* Background Image with Parallax Effect */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-all duration-700 group-hover:scale-110">              
                <Image 
                  src={service.bgImage} 
                  alt={service.title} 
                  layout="fill" 
                  objectFit="cover" 
                  className="transform scale-101"
                />
                {/* Animated Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-80 group-hover:opacity-70 transition-opacity duration-500" />
                
                {/* Particle Effect Overlay (CSS-only) */}
                <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:20px_20px]" />
              </div>

              {/* Content Container */}
              <div className="relative h-full p-6 flex flex-col justify-end">
                {/* Text Content with Slide-up Animation */}
                <div className="transform transition-all duration-500 group-hover:translate-y-0 translate-y-4">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-white transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-200 text-lg mb-6 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                    {service.description}
                  </p>
                  
                  {/* Button with Glow Effect */}
                  <button className="w-full py-2.5 px-4 bg-white/10 hover:bg-white/20 text-white rounded-lg backdrop-blur-sm transition-all duration-300 border border-white/10 relative overflow-hidden ">
                    <span className="relative z-10">Read More</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </button><br/><br/>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;