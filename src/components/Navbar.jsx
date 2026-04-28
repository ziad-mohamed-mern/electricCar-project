import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Moon, Sun, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar = ({ isDark, toggleTheme }) => {
  const location = useLocation();

  const navLinks = [
    { name: 'الرئيسية', path: '/' },
    { name: 'السيارات', path: '/#cars' },
    { name: 'من نحن', path: '/#about' },
    { name: 'تواصل معنا', path: '/contact' }
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed w-full z-50 transition-colors duration-300 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center gap-3">
            <motion.div whileHover={{ rotate: 180 }} transition={{ duration: 0.3 }}>
              <Zap className="h-8 w-8 text-electric-DEFAULT" />
            </motion.div>
            <span className="font-bold text-2xl tracking-wide bg-clip-text text-transparent bg-gradient-to-l from-electric-DEFAULT to-blue-300">
              إلكترو درايف
            </span>
          </Link>
          <div className="flex items-center gap-6">
            <ul className="hidden md:flex gap-8 font-semibold text-gray-700 dark:text-gray-300">
              {navLinks.map((link) => (
                <li key={link.name}>
                  {link.path.startsWith('/#') ? (
                    <a href={link.path} className="hover:text-electric-DEFAULT transition-colors cursor-pointer">{link.name}</a>
                  ) : (
                    <Link to={link.path} className="hover:text-electric-DEFAULT transition-colors cursor-pointer">{link.name}</Link>
                  )}
                </li>
              ))}
            </ul>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-electric-DEFAULT"
              aria-label="Toggle Dark Mode"
            >
              {isDark ? (
                <Sun className="h-6 w-6 text-yellow-400" />
              ) : (
                <Moon className="h-6 w-6 text-gray-600" />
              )}
            </motion.button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
