import { motion } from 'framer-motion';
import { Maximize2, Camera } from 'lucide-react';
import './Gallery.css';

const Gallery = () => {
  // Mapping the explicitly provided WebP images to logical gallery positions
  const galleryItems = [
    {
      id: 1,
      src: "/Clinic interior.webp",
      alt: "Krupas Dental Clinic Modern Interior",
      caption: "State-of-the-Art Clinic Interior",
      size: "large" // Takes up more space in the grid
    },
    {
      id: 2,
      src: "/Doctor name.webp",
      alt: "Our Experienced Doctors",
      caption: "The Doctor Duo",
      size: "medium"
    },
    {
      id: 3,
      src: "/Front facing.webp",
      alt: "Krupas Dental Clinic Exterior",
      caption: "Clinic Front View",
      size: "medium"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="gallery" className="gallery-section">
      <div className="container">
        
        <div className="gallery-header text-center">
          <motion.div 
            className="gallery-icon-wrapper"
            initial={{ opacity: 0, rotate: -10 }}
            whileInView={{ opacity: 1, rotate: 0 }}
            viewport={{ once: true }}
          >
            <Camera size={32} />
          </motion.div>
          
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Clinic <span className="text-gradient">Gallery</span>
          </motion.h2>
          
          <motion.p 
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Take a tour of our modern facilities, advanced equipment, and welcoming environment.
          </motion.p>
        </div>

        {/* Custom Masonry/Bento Grid for the 3 images */}
        <motion.div 
          className="bento-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {galleryItems.map((item) => (
            <motion.div 
              key={item.id} 
              className={`gallery-item ${item.size}`}
              variants={itemVariants}
            >
              <div className="image-wrapper">
                <img src={item.src} alt={item.alt} loading="lazy" />
                
                {/* Premium Hover Overlay */}
                <div className="hover-overlay">
                  <div className="overlay-content">
                    <Maximize2 size={32} className="expand-icon" />
                    <span className="image-caption">{item.caption}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
      </div>
    </section>
  );
};

export default Gallery;
