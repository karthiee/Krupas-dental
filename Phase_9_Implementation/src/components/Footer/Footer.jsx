import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, Mail, Facebook, Instagram, Twitter } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <footer className="site-footer" id="contact">
      {/* Decorative Wave Divider at Top */}
      <div className="footer-wave">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
        </svg>
      </div>

      <div className="container">
        <motion.div 
          className="footer-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {/* Brand Info */}
          <motion.div className="footer-col brand-col" variants={itemVariants}>
            <div className="footer-logo">
              <img src="/logo.png" alt="Krupas Dental Clinic" />
              <span>Krupas Dental Clinic</span>
            </div>
            <p className="footer-description">
              Combining 35 years of clinical excellence with state-of-the-art technology to provide you with the best, totally painless dental care.
            </p>
            <div className="social-links">
              <a href="#" className="social-link"><Facebook size={20} /></a>
              <a href="#" className="social-link"><Instagram size={20} /></a>
              <a href="#" className="social-link"><Twitter size={20} /></a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div className="footer-col links-col" variants={itemVariants}>
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About Doctors</a></li>
              <li><a href="#services">Our Services</a></li>
              <li><a href="#gallery">Clinic Gallery</a></li>
              <li><a href="#testimonials">Testimonials</a></li>
            </ul>
          </motion.div>

          {/* Contact Details */}
          <motion.div className="footer-col contact-col" variants={itemVariants}>
            <h4 className="footer-heading">Contact Info</h4>
            <div className="contact-list">
              <div className="contact-item">
                <MapPin className="contact-icon" size={20} />
                <div className="contact-text">
                  <strong>Location</strong>
                  <span>34A Cutchery Road, Mayiladuthurai</span>
                </div>
              </div>
              <div className="contact-item">
                <Phone className="contact-icon" size={20} />
                <div className="contact-text">
                  <strong>Phone</strong>
                  <span>+91 94878 86090</span>
                </div>
              </div>
              <div className="contact-item">
                <Mail className="contact-icon" size={20} />
                <div className="contact-text">
                  <strong>Email</strong>
                  <span>contact@krupasdental.com</span>
                </div>
              </div>
              <div className="contact-item">
                <Clock className="contact-icon" size={20} />
                <div className="contact-text">
                  <strong>Working Hours</strong>
                  <span>Mon - Sat: 9:00 AM - 8:30 PM<br/>Sunday: Closed</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Google Maps Embed Placeholder */}
          <motion.div className="footer-col map-col" variants={itemVariants}>
            <h4 className="footer-heading">Find Us</h4>
            <div className="map-container">
              {/* Premium skeleton loader look for map placeholder */}
              <div className="map-placeholder">
                <MapPin size={32} className="map-placeholder-icon" />
                <span>Interactive Map Loading...</span>
                <a 
                  href="https://maps.google.com/?q=34A+Cutchery+Road+Mayiladuthurai" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="map-btn"
                >
                  Open in Google Maps
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div 
          className="footer-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <div className="footer-copy">
            &copy; {new Date().getFullYear()} Krupas Dental Clinic. All Rights Reserved.
          </div>
          <div className="footer-legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
