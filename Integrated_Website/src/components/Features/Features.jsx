import { motion } from 'framer-motion';
import { Stethoscope, Sparkles, HeartHandshake, Zap } from 'lucide-react';
import './Features.css';

const Features = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const features = [
    {
      icon: <Sparkles size={32} />,
      title: "Painless Treatment",
      description: "Advanced technology ensuring totally painless root canals and procedures.",
      colorClass: "feature-blue"
    },
    {
      icon: <Zap size={32} />,
      title: "Modern Facilities",
      description: "Equipped with the latest facilities, lasers, and advanced clip treatments.",
      colorClass: "feature-cyan"
    },
    {
      icon: <Stethoscope size={32} />,
      title: "Experienced Doctors",
      description: "Treated by a highly qualified, senior, and specialized doctor duo.",
      colorClass: "feature-indigo"
    },
    {
      icon: <HeartHandshake size={32} />,
      title: "Patient-Friendly",
      description: "Excellent service with a warm, courteous staff and a welcoming environment.",
      colorClass: "feature-teal"
    }
  ];

  return (
    <section className="features-section">
      <div className="container">
        
        <div className="features-header text-center">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Why Choose <span className="text-gradient">Us</span>
          </motion.h2>
          <motion.p 
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            We combine 35 years of clinical excellence with state-of-the-art technology to provide the best care.
          </motion.p>
        </div>

        <motion.div 
          className="features-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index} 
              className={`feature-card ${feature.colorClass}`}
              variants={itemVariants}
            >
              <div className="feature-icon-wrapper">
                {feature.icon}
                <div className="feature-icon-bg"></div>
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Features;
