import { motion } from 'framer-motion';
import { ShieldCheck, HeartPulse, Sparkles, Award } from 'lucide-react';
import './About.css';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="about" className="about-section">
      <div className="container">
        <motion.div 
          className="about-header text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.h2 className="section-title" variants={itemVariants}>
            About The Clinic & <span className="text-gradient">Our Doctors</span>
          </motion.h2>
          <motion.p className="section-subtitle" variants={itemVariants}>
            Dedicated to bringing painless treatments, compassion, and rich professional experience to every smile we treat.
          </motion.p>
        </motion.div>

        <motion.div 
          className="about-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
        >
          {/* Dr. V. Kripanidhi Card */}
          <motion.div className="doctor-card" variants={itemVariants}>
            <div className="card-image-wrapper">
              {/* Using a professional placeholder representing a senior male doctor */}
              <img 
                src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=800&q=80" 
                alt="Dr. V. Kripanidhi" 
                className="doctor-image"
              />
              <div className="experience-badge">
                <span>35+</span> Years
              </div>
            </div>
            
            <div className="card-content">
              <h3 className="doctor-name">Dr. V. Kripanidhi</h3>
              <p className="doctor-qualifications">B.D.S., M.D.S., (ORTHO)</p>
              <div className="doctor-specialization">
                <Sparkles size={16} />
                <span>Dentist & Orthodontist Surgeon</span>
              </div>
              
              <ul className="doctor-details">
                <li>
                  <Award size={16} />
                  <span>35 Years in Healthcare</span>
                </li>
                <li>
                  <ShieldCheck size={16} />
                  <span>DCI Registration: 1036</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Dr. Vidhya Kripanidhi Card */}
          <motion.div className="doctor-card" variants={itemVariants}>
            <div className="card-image-wrapper">
              {/* Using a professional placeholder representing a female doctor */}
              <img 
                src="https://images.unsplash.com/photo-1594824436998-05a43ca23ce0?w=800&q=80" 
                alt="Dr. Vidhya Kripanidhi" 
                className="doctor-image"
              />
            </div>
            
            <div className="card-content">
              <h3 className="doctor-name">Dr. Vidhya Kripanidhi</h3>
              <p className="doctor-qualifications">B.D.S.</p>
              <div className="doctor-specialization">
                <Sparkles size={16} />
                <span>Special Dental Surgeon</span>
              </div>
              
              <ul className="doctor-details">
                <li>
                  <HeartPulse size={16} />
                  <span>Compassionate Patient Care</span>
                </li>
                <li>
                  <Award size={16} />
                  <span>Expertise in Advanced Procedures</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </motion.div>

        {/* Global Stats / Trust Banner inside About */}
        <motion.div 
          className="about-trust-banner"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="banner-content">
            <h3>Registered & Certified Excellence</h3>
            <p>Our clinic is fully certified and registered with the Dental Council of India (DCI Registration: 1036), ensuring you receive care that meets the highest national standards of dentistry.</p>
          </div>
          <div className="banner-icon">
            <ShieldCheck size={48} />
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;
