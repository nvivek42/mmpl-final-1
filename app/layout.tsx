import type { Metadata, Viewport } from 'next'
import Header from '../components/Header'
import Footer from '../components/Footer'
import '@/styles/globals.css'
import { Roboto, Inter, Chakra_Petch } from 'next/font/google'

const roboto = Roboto({
  weight: ['300'],
  subsets: ['latin'],
  variable: '--font-roboto',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const chakraPetch = Chakra_Petch({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-chakra-petch',
  display: 'swap',
})


export const metadata: Metadata = {
  title: 'Metalmach Mastery - Precision Die-casting & Machining',
  description: 'Leading manufacturer in die-casting and precision machining with 25+ years of experience',
}
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1.0,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${roboto.variable} ${inter.variable} ${chakraPetch.variable}`}>
     
      <body className="min-h-screen bg-white">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
} 

