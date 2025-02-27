'use client'
import { motion } from 'framer-motion'
import { Roboto } from 'next/font/google'

const roboto = Roboto({
  weight: ['400'],
  subsets: ['latin']
})

const About = () => {
  const animations = {
    initial: { opacity: 0, y: 10 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  }

  return (
    <section className="w-full bg-white px-4 sm:px-6 md:px-8 lg:px-20 py-8 sm:py-12 lg:py-16">
      <div className="container mx-auto max-w-5xl">
        {/* Heading */}
        <div className="text-center mb-8 sm:mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={`text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight ${roboto.className}`}
          >
            Who We Are?
          </motion.h2>
          <motion.div 
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-16 sm:w-20 h-0.5 bg-primary mx-auto my-3 sm:my-4"
          />
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-3 sm:mt-4 text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4 sm:px-6"
          >
            A leading manufacturer specializing in precision aluminum die casting and machining solutions for diverse industries.
          </motion.p>
        </div>

        {/* Vision and Mission Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mt-8 sm:mt-12 px-4 sm:px-6">
          {/* Vision Card */}
          <motion.div
            {...animations}
            className="bg-white rounded-lg sm:rounded-xl p-6 sm:p-8 shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-900"
          >
            <div className="flex flex-col h-full">
              <h3 className="text-black text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-center">
                Our Vision
              </h3>
              <p className="text-black text-sm sm:text-base leading-relaxed">
                To be the industry leader in innovative metal manufacturing solutions, 
                setting new standards in quality, precision, and customer satisfaction.
              </p>
            </div>
          </motion.div>

          {/* Mission Card */}
          <motion.div
            {...animations}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="bg-white rounded-lg sm:rounded-xl p-6 sm:p-8 shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-900"
          >
            <div className="flex flex-col h-full">
              <h3 className="text-black text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-center">
                Our Mission
              </h3>
              <p className="text-black text-sm sm:text-base leading-relaxed">
                To deliver excellence through cutting-edge technology, sustainable practices, 
                and unwavering commitment to quality, while fostering innovation and growth.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About