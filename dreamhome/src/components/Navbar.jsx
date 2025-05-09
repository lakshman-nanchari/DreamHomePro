import { useState } from 'react';
import { motion } from 'framer-motion';

const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'properties', label: 'Properties' },
  { id: 'contact', label: 'Contact' },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState('home');

  const handleLinkClick = (id) => {
    setActive(id);
    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 w-full bg-white shadow z-50"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        <div className="text-2xl font-bold text-primary">Dream Home</div>

        {/* Desktop menu */}
        <ul className="hidden md:flex gap-6 text-gray-700">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                onClick={() => handleLinkClick(link.id)}
                className={`hover:text-primary transition ${
                  active === link.id ? 'text-primary font-semibold' : ''
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            <svg
              className="w-6 h-6 text-gray-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {isOpen && (
        <motion.ul
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white px-4 pb-4 space-y-2"
        >
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                onClick={() => handleLinkClick(link.id)}
                className={`block py-2 hover:text-primary transition ${
                  active === link.id ? 'text-primary font-semibold' : ''
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </motion.ul>
      )}
    </motion.nav>
  );
}
