'use client';

import { motion, HTMLMotionProps } from 'framer-motion';
import { ArrowRightIcon, CogIcon, ShieldCheckIcon, UserGroupIcon } from '@heroicons/react/24/outline';
import { FC, ComponentType } from 'react';

// Define our own IconProps type
type HeroIconProps = {
  className?: string;
  'aria-hidden'?: boolean;
  [key: string]: any;
};

// Define types for our features
interface Feature {
  icon: ComponentType<HeroIconProps>;
  title: string;
  // description: string;
  benefits: string[];
}

const Features: FC = () => {
  const features: Feature[] = [
    {
      icon: CogIcon as ComponentType<HeroIconProps>,
      title: "Operational Excellence",
      // description: "State-of-the-art die casting and machining facilities equipped with the latest technology for precision manufacturing.",
      benefits: [
        "State-of-the-art die casting, machining, and automated production lines",
        "Optimal production rates with minimal waste and 100% on-time delivery",
        "ISO 9001:2015 certified manufacturing processes",
      ]
    },
    {
      icon: ShieldCheckIcon as ComponentType<HeroIconProps>,
      title: "Quality & Reliability",
      // description: "ISO 9001:2015 certified manufacturing processes ensuring consistent quality and reliability.",
      benefits: [
        "Zero porosity, zero defects, and international compliance guarantee",
        "Rigorous testing, smart quality control systems, and zero-defect approach",
        "Dedicated quality assurance team and continuous improvement processes"
      ]
    },
    {
      icon: UserGroupIcon as ComponentType<HeroIconProps>,
      title: "Expert Team & Infrastructure",
      // description: "Skilled professionals with decades of experience in metal manufacturing and engineering.",
      benefits: [
        "Experienced engineers and dedicated support teams with continuous training",
        "High-precision machinery, IoT-integrated automation, and real-time monitoring",
      ]
    }
  ];

  return (
    <section className="w-full bg-white py-20 px-4 sm:px-6 lg:px-20">
      <div className="container mx-auto max-w-7xl">
        {/* Header Section */}
        <div className="text-center mb-10">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight font-roboto"
          >
            Why Choose MMPL?
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto mt-4 font-normal">
              Discover the unique advantages that set us apart
            </p>
          </motion.h2>
          <motion.div 
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="w-24 h-1 bg-primary mx-auto mt-8"
          />
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
              className="group relative p-8 rounded-xl
                        bg-white
                        border border-gray-200
                        shadow-lg hover:shadow-2xl
                        hover:border-primary/20
                        transition-all duration-300 ease-out
                        flex flex-col min-h-[320px]"
            >
              {/* Gradient Background */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/10 via-primary/5 to-transparent 
                            opacity-0 group-hover:opacity-100 transition-opacity duration-500"/>

              {/* Title */}
              <h3 className="text-xl lg:text-2xl font-semibold mb-6 text-gray-900 group-hover:text-primary transition-colors duration-300 relative z-10">
                {feature.title}
              </h3>

              {/* Benefits List */}
              <ul className="space-y-4 relative z-10">
                {feature.benefits.map((benefit, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 + idx * 0.05 }}
                    className="flex items-start group/item"
                  >
                    <ArrowRightIcon className="h-4 w-4 mr-3 mt-0.5 text-primary/60 group-hover/item:text-primary 
                                           transform group-hover/item:translate-x-1 transition-all duration-300" />
                    <span className="text-sm lg:text-base text-gray-600 group-hover/item:text-gray-900 transition-colors duration-300 leading-relaxed">
                      {benefit}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;