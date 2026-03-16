import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll effect for glassmorphism navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Doctors', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact Us', href: '#contact' },
  ];

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container header-container">
        
        {/* Logo Section */}
        <a href="#home" className="logo-container">
          <img src="/logo.png" alt="Krupas Dental Clinic Logo" className="logo-image" />
          <div className="logo-text">
            <h2>Krupas Dental Clinic</h2>
            <p>35 Years of Excellence</p>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          <ul className="nav-list">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href} className="nav-link">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* CTA Button (Desktop) */}
        <div className="cta-container">
          <a href="tel:09487886090" className="btn-primary">
            <Phone size={18} />
            <span>094878 86090</span>
          </a>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button 
          className="mobile-menu-btn"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

      </div>

      {/* Mobile Navigation Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.nav 
            className="mobile-nav"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <ul className="mobile-nav-list">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="mobile-nav-link"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
              <li>
                <a href="tel:09487886090" className="btn-primary mobile-cta">
                  <Phone size={18} />
                  <span>Call Now: 094878 86090</span>
                </a>
              </li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
