'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'

const About = () => {
  // Consolidated animation variants for reuse
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <section className="w-full bg-white px-4 sm:px-6 md:px-8 lg:px-20 py-8 sm:py-12 lg:py-16">
      <div className="container mx-auto max-w-5xl">
        {/* Heading */}
        <div className="text-center mb-8 sm:mb-12">
          <motion.h2 
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight font-roboto"
          >
            Who We Are
          </motion.h2>
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-16 sm:w-20 h-0.5 bg-primary mx-auto my-3 sm:my-4"
          />
          <motion.p 
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-3 sm:mt-4 text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto"
          >
            A leading manufacturer specializing in precision aluminum die casting and machining solutions for diverse industries.
          </motion.p>
        </div>

        {/* Vision and Mission Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mt-8 sm:mt-12">
          {/* Vision Card */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-lg sm:rounded-xl p-6 sm:p-8 shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200 hover:border-gray-300"
          >
            <div className="flex flex-col h-full">
              <h3 className="text-gray-900 text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-center">
                Our Vision
              </h3>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                To be the industry leader in innovative metal manufacturing solutions, 
                setting new standards in quality, precision, and customer satisfaction.
              </p>
            </div>
          </motion.div>

          {/* Mission Card */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="bg-white rounded-lg sm:rounded-xl p-6 sm:p-8 shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200 hover:border-gray-300"
          >
            <div className="flex flex-col h-full">
              <h3 className="text-gray-900 text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-center">
                Our Mission
              </h3>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                To deliver excellence through cutting-edge technology, sustainable practices, 
                and unwavering commitment to quality, while fostering innovation and growth.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Continue Reading Button */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="flex justify-center mt-12"
        >
          <Link 
            href="/about"
            className="inline-flex items-center px-6 py-3 rounded-full bg-primary text-black font-medium hover:bg-primary/90 transition-colors duration-300 group shadow-sm border border-black"
          >
            Continue Reading
            <svg 
              className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M17 8l4 4m0 0l-4 4m4-4H3" 
              />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default About