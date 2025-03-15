'use client'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'

export default function CTA() {
  const router = useRouter();

  const handleQuoteClick = () => {
    router.push('/quote'); // Create a new quote page
  };

  const handleExpertClick = () => {
    router.push('/contact'); // Redirect to contact page
    // Or you can use window.location for external links:
    // window.location.href = "mailto:expert@yourcompany.com";
  };

  return (
    <section className="w-full bg-white px-20 py-20">
      <div className="container mx-auto">
        <div className="text-center">
          <span className="text-3xl font-bold text-black sm:text-4xl font-roboto">
            Ready to Start Your Project?
          </span>
          <div className="mt-6 flex justify-center">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
              <motion.button
                onClick={handleQuoteClick}
                className="group relative inline-flex h-14 items-center justify-center overflow-hidden rounded-full border-2 border-black bg-black px-8 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Background slide effect */}
                <span className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
                
                {/* Text layers */}
                <span className="relative text-lg font-medium text-white transition-colors duration-500 group-hover:text-black">
                  Get a Quote Today!
                </span>
                
                {/* Hover text (slides up) */}
                {/* <span className="absolute text-lg font-medium text-black opacity-0 transform translate-y-full group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  Request Quote →
                </span> */}
              </motion.button>

              <motion.button
                onClick={handleExpertClick}
                className="group relative inline-flex h-14 items-center justify-center overflow-hidden rounded-full border-2 border-black bg-black px-8 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Background slide effect */}
                <span className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
                
                {/* Text layers */}
                <span className="relative text-lg font-medium text-white transition-colors duration-500 group-hover:text-black">
                  Speak to an Expert
                </span>
                
                {/* Hover text (slides up) */}
                {/* <span className="absolute text-lg font-medium text-black opacity-0 transform translate-y-full group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  Contact Us →
                </span> */}
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}