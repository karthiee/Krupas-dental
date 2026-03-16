import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll effect for glassmorphism
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Doctors', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Testimonials', href: '#testimonials' },
  ];

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header className={`site-header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container header-container">
          
          {/* Logo */}
          <a href="#home" className="logo" onClick={closeMobileMenu}>
            <img src="/logo.png" alt="Krupas Dental Clinic" />
            <span className="logo-text">Krupas Dental Clinic</span>
          </a>

          {/* Desktop Nav */}
          <nav className="desktop-nav">
            <ul className="nav-list">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="nav-link">{link.name}</a>
                </li>
              ))}
            </ul>
          </nav>

          {/* CTA & Mobile Toggle */}
          <div className="header-actions">
            <a href="#contact" className="btn-primary desktop-cta">
              <Phone size={18} />
              <span>094878 86090</span>
            </a>
            
            <button 
              className="mobile-toggle" 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            className="mobile-menu-overlay"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <nav className="mobile-nav">
              <ul className="mobile-nav-list">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href} 
                      className="mobile-nav-link"
                      onClick={closeMobileMenu}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
                <li>
                  <a 
                    href="#contact" 
                    className="mobile-cta"
                    onClick={closeMobileMenu}
                  >
                    <Phone size={18} />
                    <span>Call: 094878 86090</span>
                  </a>
                </li>
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
