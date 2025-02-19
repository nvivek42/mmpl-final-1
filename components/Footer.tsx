import Link from "next/link"
import { SITE_TITLE, FOOTER_LINKS, CONTACT_INFO } from "@/config/site"
import { Chakra_Petch } from "next/font/google"

const chakraPetch = Chakra_Petch({
  weight: ["400", "700"],
  subsets: ["latin"],
})

export default function Footer() {
  return (
    <footer className="bg-[#708090] text-white py-10">
      <div className="container mx-auto px-20">
        <div className="flex flex-col items-center mb-8">
          <div className="flex mb-1">
            <span className={`text-4xl ${chakraPetch.className} font-bold`}>Metalmach Mastery Pvt Ltd</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-5">
          {/* Quick Links */}
          {Object.entries(FOOTER_LINKS).map(([category, links]) => (
            <div key={category} className="space-y-4">
              <h4 className="text-lg font-semibold text-white">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="hover:text-white transition-colors text-base">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Information */}
          <div className="space-y-4 ">
            <h4 className="text-lg text-white font-semibold">Contact</h4>
            <ul className="space-y-3 text-base">
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-3 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                {CONTACT_INFO.email}
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-3 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                {CONTACT_INFO.phone}
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 mr-3 mt-1 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span>
                  {CONTACT_INFO.address}
                  <br />
                  {CONTACT_INFO.address1}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright and Legal */}
        <div className="mt-12 pt-8 border-t border-black text-center">
          <p className="text-sm text-white">
            {new Date().getFullYear()} {SITE_TITLE}. All Rights Reserved.
            <span className="ml-4 hidden md:inline-block">
              <Link href="/privacy" className="hover:text-white mr-4">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-white">
                Terms of Service
              </Link>
            </span>
          </p>
        </div>
      </div>
    </footer>
  )
}

