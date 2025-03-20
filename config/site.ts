// Site-wide configuration and constants

export const SITE_TITLE = 'METALMACH MASTERY';

export const NAV_LINKS = [
 
  { 
    href: '/about', 
    label: 'Who We Are' 
  },
  { 
    href: '/services', 
    label: 'What We Do',
    dropdownItems: [
      { href: '/services/gravity-die-casting', label: 'Gravity Die Casting' },
      { href: '/services/precision-machining', label: 'Precision Machining' },
      { href: '/services/custom-development', label: 'Custom Development' }
    ]
  },
  {
    label: 'Industries',
    href: '/industries',
    dropdownItems: [
      { label: 'Automotive', href: '/industries/automotive' },
      { label: 'Agriculture', href: '/industries/agriculture' },
      { label: 'Energy', href: '/industries/energy' },
      { label: 'Defense', href: '/industries/defense' },
    ]
  },
  
  { 
    href: '/contact', 
    label: 'Contact' 
  },
];



export const FOOTER_LINKS = {
  Company: [
    { href: '/about', label: 'About Us' },
    { href: '/careers', label: 'Careers' },
  ],
  Services: [
    { href: '/services/gravity-die-casting', label: 'Gravity Die Casting' },
    { href: '/services/precision-machining', label: 'Precision Machining' },
    { href: '/services/custom-development', label: 'Custom Development' }
  ],
 
  
};

export const CONTACT_INFO = {
  phone: "+91 70304 09930",
  email: "info@metalmach.in",
  address: "F-39,Chincholi MIDC,Solapur",
  address1:"Mah,India - 413255",
};

export const Who_We_Are = {
  title: 'Who We Are',
  items: [
    "Overview",
    "Leadership",
    "Management",
    "Expertise",
    "Facilities",
    "Certifications",
    "Sustainability",
    "History",
    "Recognition",
  ],
};
export const What_We_Do = {
  items: [
    "Overview",
    "Leadership",
    "Management",
    "Expertise",
    "Facilities",
    "Certifications",
    "Sustainability",
    "History",
    "Recognition",
  ],
};


