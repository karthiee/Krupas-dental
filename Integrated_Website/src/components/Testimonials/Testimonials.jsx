import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './Testimonials.css';

const Testimonials = () => {
  const reviews = [
    {
      name: "Sasi Suresh",
      text: "Caring doctors. excellent sevice .patient friendly.courtious staffs. proud to be their family friend."
    },
    {
      name: "Siddharth",
      text: "Very experienced, friendly and caring doctors."
    },
    {
      name: "Sali Ashok",
      text: "...they fixed my dental problems within my limited stay in Mayiladuthurai. Loved their service and dedication.Their staff are very friendly and kind."
    },
    {
      name: "SP Ravichandran",
      text: "Both the Doctors did a fantastic job with love and affection. The Doctors with a sensor of humor, compassion and rich professional experience."
    },
    {
      name: "Nirmala Mahadevan",
      text: "Proficient dentists with years of experience... Expertise and swiftness are the specialities. Overall, your one atop shop to fix all dental problems!"
    },
    {
      name: "Faizal Khan",
      text: "A very efficient and friendly service. Highly recommended..."
    },
    {
      name: "Vignesh G",
      text: "Very nice hospitality and Doctor is so kind!!! Best dental clinic in mayiladuthurai!"
    }
  ];

  return (
    <section id="testimonials" className="testimonials-section">
      {/* Decorative Background Glow */}
      <div className="glow-shape glow-top-left"></div>
      <div className="glow-shape glow-bottom-right"></div>

      <div className="container">
        
        <div className="testimonials-header text-center">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Patient <span className="text-gradient">Testimonials</span>
          </motion.h2>
          <motion.p 
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Read what our patients have to say about their experience with us.
          </motion.p>
        </div>

        {/* Google Rating Banner */}
        <motion.div 
          className="google-rating-banner"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="rating-score">
            <strong>4.9</strong>
            <span>out of 5</span>
          </div>
          <div className="rating-stars">
            {[...Array(5)].map((_, i) => (
              <Star key={i} fill="#F57C00" color="#F57C00" size={24} />
            ))}
          </div>
          <div className="rating-reviews">
            Based on <strong>72 Google Reviews</strong>
          </div>
        </motion.div>

        {/* Swiper Slider */}
        <motion.div 
          className="testimonials-slider-container"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={32}
            slidesPerView={1}
            pagination={{ clickable: true, dynamicBullets: true }}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="reviews-swiper"
          >
            {reviews.map((review, index) => (
              <SwiperSlide key={index}>
                <div className="review-card">
                  <div className="review-quote-icon">
                    <Quote size={32} />
                  </div>
                  <p className="review-text">"{review.text}"</p>
                  <div className="review-author">
                    <div className="author-avatar">{review.name.charAt(0)}</div>
                    <div className="author-info">
                      <strong>{review.name}</strong>
                      <div className="author-stars">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} fill="#F57C00" color="#F57C00" size={12} />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

      </div>
    </section>
  );
};

export default Testimonials;
