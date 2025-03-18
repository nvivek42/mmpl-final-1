"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

// Types for grid items
interface GridItem {
  id: string;
  imageSrc: string;
  title: string;
  link: string;
  alt: string;
}

// Sample data (you can replace this with your actual data)
const gridItems: GridItem[] = [
  {
    id: "leadership",
    imageSrc: "/image/full-screen-grid/leadership.jpg",
    title: "Leadership",
    link: "/who-we-are/leadership",
    alt: "Our leadership",
  },
  {
    id: "expertise",
    imageSrc: "/image/full-screen-grid/expertise.jpg",
    title: "Expertise",
    link: "/who-we-are/expertise",
    alt: "Our expertise",
  },
  {
    id: "investors",
    imageSrc: "/image/full-screen-grid/investors.jpg",
    title: "Investors",
    link: "/who-we-are/facilities",
    alt: "investors",
  },
  {
    id: "automotive",
    imageSrc: "/image/full-screen-grid/auto.jpg",
    title: "Automotive",
    link: "/what-we-do/automotive",
    alt: "Automotive solutions",
  },
  {
    id: "e-mobility",
    imageSrc: "/image/full-screen-grid/e-mobility.jpg",
    title: "E-Mobility",
    link: "/what-we-do/e-mobility",
    alt: "E-Mobility solutions",
  },
  {
    id: "non-automotive",
    imageSrc: "/image/full-screen-grid/non-auto.jpg",
    title: "Non-Automotive",
    link: "/what-we-do/non-automotive",
    alt: "Non-automotive solutions",
  },
  {
    id: "sustainability",
    imageSrc: "/image/full-screen-grid/sustainability.jpg",
    title: "Sustainability",
    link: "/what-we-do/non-automotive",
    alt: "Non-automotive solutions",
  },
  {
    id: "Why Choose Us",
    imageSrc: "/image/full-screen-grid/why-choose-us.jpg",
    title: "Why Choose Us",
    link: "/what-we-do/non-automotive",
    alt: "Non-automotive solutions",
  },
  {
    id: "Contact",
    imageSrc: "/image/full-screen-grid/contact.jpg",
    title: "Contact",
    link: "/what-we-do/non-automotive",
    alt: "Non-automotive solutions",
  },
];

const FullScreenGrid = () => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
        {gridItems.map((item) => (
          <Link
            href={item.link}
            key={item.id}
            className="relative block w-full h-64 md:h-80 lg:h-96 overflow-hidden cursor-pointer"
            onMouseEnter={() => setHoveredItem(item.id)}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <div className="relative w-full h-full">
              <Image
                src={item.imageSrc}
                alt={item.alt}
                loading="eager"  // Change from priority

                fill
                className={`object-cover transition-transform duration-500 ${
                  hoveredItem === item.id ? "scale-110" : "scale-100"
                }`}
              />
              <div className="absolute inset-0 bg-black/30 flex items-start justify-start p-6">
                <div
                  className={`text-white text-left transition-all duration-300 ${
                    hoveredItem === item.id ? "scale-110" : "scale-100"
                  }`}
                >
                  <h3 className="text-2xl font-bold font-chakra-petch">
                    {item.title}
                  </h3>
                  {/* <div className={`mt-2 w-12 h-1 bg-white transition-all duration-300 ${
        hoveredItem === item.id ? "w-20" : "w-12"
      }`}></div> */}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FullScreenGrid;
