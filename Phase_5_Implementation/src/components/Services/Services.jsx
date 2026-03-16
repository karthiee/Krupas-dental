import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ArrowRight } from 'lucide-react';
import './Services.css';

const Services = () => {
  const [activeTab, setActiveTab] = useState('advanced');

  // Architecture Specs from markdown
  const advancedTreatments = [
    {
      id: "root-canal",
      title: "Root Canal Treatment",
      subtitle: "Totally Painless",
      description: "Advanced technology ensuring a completely painless and efficient root canal experience.",
      image: "https://images.unsplash.com/photo-1606265752439-1f18756aa5fc?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: "clip",
      title: "Clear Braces / Clip",
      subtitle: "Visible & Invisible",
      description: "Modern clip treatments including invisible aligners for a perfect, discreet smile correction.",
      image: "https://images.unsplash.com/photo-1598256989406-ce6948ca2f36?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: "laser",
      title: "Laser Dentistry",
      subtitle: "Precision Care",
      description: "State-of-the-art laser machinery for precise, minimally invasive dental procedures.",
      image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=800&auto=format&fit=crop"
    }
  ];

  const generalProcedures = [
    {
      id: "cleaning",
      title: "Dental Cleaning",
      subtitle: "Preventative Care",
      description: "Comprehensive scaling and polishing to maintain optimal oral hygiene and prevent decay.",
      image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: "crown",
      title: "Ceramic Crown",
      subtitle: "Restorative",
      description: "High-quality, natural-looking ceramic crowns to restore damaged or decayed teeth.",
      image: "https://images.unsplash.com/photo-1574548483849-0d195f2694b8?q=80&w=800&auto=format&fit=crop" 
    },
    {
      id: "surgery",
      title: "Maxillofacial Surgery",
      subtitle: "Oral Surgery",
      description: "Expert surgical procedures for complex dental and facial conditions by experienced surgeons.",
      image: "https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=800&auto=format&fit=crop"
    }
  ];

  const currentData = activeTab === 'advanced' ? advancedTreatments : generalProcedures;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.15 } 
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3 } }
  };

  return (
    <section id="services" className="services-section">
      <div className="container">
        
        <div className="services-header text-center">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Our Dental <span className="text-gradient">Services</span>
          </motion.h2>
          <motion.p 
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Comprehensive, state-of-the-art dental care tailored for your perfect smile.
          </motion.p>
        </div>

        {/* Custom Premium Tabs */}
        <div className="services-tabs-container">
          <div className="services-tabs">
            <button 
              className={`tab-button ${activeTab === 'advanced' ? 'active' : ''}`}
              onClick={() => setActiveTab('advanced')}
            >
              Advanced Treatments
              {activeTab === 'advanced' && (
                <motion.div className="tab-indicator" layoutId="activeTab" />
              )}
            </button>
            <button 
              className={`tab-button ${activeTab === 'general' ? 'active' : ''}`}
              onClick={() => setActiveTab('general')}
            >
              General & Surgical
              {activeTab === 'general' && (
                <motion.div className="tab-indicator" layoutId="activeTab" />
              )}
            </button>
          </div>
        </div>

        {/* Services Grid with AnimatePresence for smooth tab switching */}
        <AnimatePresence mode='wait'>
          <motion.div 
            key={activeTab}
            className="services-grid"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {currentData.map((service) => (
              <motion.div key={service.id} className="service-card" variants={cardVariants}>
                
                {/* Image Section */}
                <div className="service-image-container">
                  <img src={service.image} alt={service.title} className="service-image" />
                  <div className="service-badge">{service.subtitle}</div>
                </div>

                {/* Content Section */}
                <div className="service-content">
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-description">{service.description}</p>
                  
                  <button className="service-link">
                    Learn More <ChevronRight size={16} />
                  </button>
                </div>
                
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Global CTA at bottom of services */}
        <motion.div 
          className="services-cta text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <p>Not sure which treatment you need?</p>
          <a href="#book" className="btn-outline">
            Consult Our Experts <ArrowRight size={18} />
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default Services;
