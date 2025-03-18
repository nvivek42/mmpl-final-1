'use client'
import { motion } from 'framer-motion'
import Infra from '@/components/Infra'

export default function AboutPage() {
  return (
    <main className="pt-20 py-20">
      <section className="w-full bg-white px-4 sm:px-6 md:px-8 lg:px-20 py-8 sm:py-12 lg:py-16">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="prose prose-lg max-w-none"
          >
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 text-center mb-8">
              About MetalMach Mastery
            </h1>
            
            <div className="space-y-6 text-gray-600">
              <p>
                With over two decades of experience in the metal manufacturing industry,
                MetalMach Mastery has established itself as a leading provider of
                precision die casting and machining solutions.
              </p>

              <p>
                Our state-of-the-art facility, spanning over 50,000 square feet,
                houses the latest manufacturing technology and is operated by highly
                skilled professionals committed to delivering excellence.
              </p>

              <p>
                We pride ourselves on our ability to handle complex projects while
                maintaining the highest standards of quality and precision. Our
                team's expertise, combined with our advanced infrastructure,
                enables us to serve diverse industries including automotive,
                aerospace, and industrial equipment manufacturing.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Infrastructure Section */}
      <Infra />
    </main>
  )
}