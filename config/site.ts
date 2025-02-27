// Site-wide configuration and constants

export const SITE_TITLE = 'METALMACH MASTERY';

export const NAV_LINKS = [
  { 
    href: '/', 
    label: 'Home' 
  },
  { 
    href: '/Services', 
    label: 'Services',
    subLinks: [
      { href: '/services/casting', label: 'Metal Casting' },
      { href: '/services/machining', label: 'CNC Machining' },
      { href: '/services/prototyping', label: 'Prototyping' }
    ]
  },
  { 
    href: '/about', 
    label: 'About Us' 
  },
  
  { 
    href: '/contact', 
    label: 'Contact' 
  }
];



export const FOOTER_LINKS = {
  Company: [
    { href: '/about', label: 'About Us' },
    { href: '/careers', label: 'Careers' },
  ],
  Services: [
    { href: '/services/casting', label: 'Metal Casting' },
    { href: '/services/machining', label: 'CNC Machining' },
    { href: '/services/prototyping', label: 'Prototyping' }
  ],
  
};

export const CONTACT_INFO = {
  phone: "+91 70304 09930",
  email: "info@metalmach.in",
  address: "F-39,Chincholi MIDC,Solapur",
  address1:"Mah,India - 413255",
};
