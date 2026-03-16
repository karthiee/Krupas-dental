import { motion } from 'framer-motion';
import { Star, ShieldCheck, Award, ArrowRight } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-section">
      {/* Background with overlay */}
      <div className="hero-bg">
        <div className="hero-bg-image"></div>
        <div className="hero-bg-overlay"></div>
      </div>

      <div className="container hero-container">

        {/* Text Content */}
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            className="hero-badge"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <span className="badge-dot"></span>
            Welcome to Krupas Dental Clinic
          </motion.div>

          <h1 className="hero-headline">
            35 Years Of Excellence <br />
            <span className="text-gradient">In Dentistry</span>
          </h1>

          <p className="hero-subheadline">
            Advanced, painless treatments by senior, highly experienced doctors in Mayiladuthurai.
          </p>

          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <a href="#services" className="btn-primary btn-large">
              Know About Our Services
              <ArrowRight size={20} />
            </a>
          </motion.div>

          {/* Trust Badges directly below CTA for immediate trust-building */}
          <motion.div
            className="trust-badges"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <div className="trust-item">
              <div className="trust-icon-box google-color">
                <Star size={20} fill="currentColor" />
              </div>
              <div className="trust-text">
                <strong>4.9/5 Rating</strong>
                <span>72 Google Reviews</span>
              </div>
            </div>

            <div className="trust-item">
              <div className="trust-icon-box">
                <Award size={20} />
              </div>
              <div className="trust-text">
                <strong>35 Years</strong>
                <span>Experience</span>
              </div>
            </div>

            <div className="trust-item">
              <div className="trust-icon-box">
                <ShieldCheck size={20} />
              </div>
              <div className="trust-text">
                <strong>Registered</strong>
                <span>DCI Certified</span>
              </div>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
