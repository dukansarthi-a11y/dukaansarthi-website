"use client";
import React, { useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      quote: "DukaanSarthi ne hamari store ki billing ko bahut asaan bana diya hai. Pehle register maintain karna padta tha, ab sab kuchh mobile par ho jata hai. Inventory track karna bhi ab bilkul mushkil nahi lagta.",
      name: "Prakash Sharma",
      business: "Sriram Mart",
      avatarBg: "#00B5A5",
      type: "Grocery & Retail",
      rating: 5
    },
    {
      quote: "Humari clothing store ke liye yeh best app hai. Barcode scanning se fast billing hoti hai aur customers ko WhatsApp par turant bill mil jata hai. Business grow karne me DukaanSarthi ne bahut madad ki hai!",
      name: "Piyush Singh",
      business: "Fashion World",
      avatarBg: "#0A66C2",
      type: "Clothing & Apparel",
      rating: 5
    },
    {
      quote: "Udhaar ka hisaab rakhna ab bahut simple ho gaya hai. Auto-reminders se time par payment mil jati hai aur manual entries ki tension khatam ho gayi hai. Is app ka interface kaafi user-friendly hai.",
      name: "Pramod Kumar Sha",
      business: "Jitendravastralay",
      avatarBg: "#6366f1",
      type: "Clothing & Retail",
      rating: 5
    },
    {
      quote: "Wholesale aur retail dono ka stock manage karna pehle bahut confusing tha. DukaanSarthi ke saath ab offline mode me bhi aaram se kaam ho jata hai aur GST reports 5 minute me nikal aati hain.",
      name: "Anil Singh",
      business: "Shree Millete",
      avatarBg: "#10b981",
      type: "Wholesale Distributor",
      rating: 5
    },
    {
      quote: "App bilkul hang nahi karta aur customer support bahut accha hai. Har choti badi problem ka solution turant mil jata hai. Mujhe yeh app har dukaandar ko recommend karna chahiye.",
      name: "Nagendra Manto",
      business: "KGP",
      avatarBg: "#f59e0b",
      type: "General Store",
      rating: 5
    }
  ];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="testimonials-section section section-bg-light" id="testimonials">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header text-center">
          <div className="badge badge-primary">CLIENT TESTIMONIALS</div>
          <h2 className="with-line center">Loved by 2500+ Business Owners</h2>
          <p className="section-subtitle">
            Read stories of how retailers and wholesalers changed their traditional billing setups to grow profits with DukaanSarthi.
          </p>
        </div>

        {/* Carousel Slider */}
        <div className="carousel-wrapper">
          <div className="testimonial-slider-container">
            
            {/* The Active Testimonial Card */}
            <div className="testimonial-card card">
              <Quote className="quote-icon text-gradient" size={48} />
              
              <div className="stars-row">
                {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                  <Star key={i} size={18} className="star-filled" fill="currentColor" />
                ))}
              </div>

              <p className="testimonial-text">
                "{testimonials[activeIndex].quote}"
              </p>

              <div className="testimonial-author-row">
                <div 
                  className="author-avatar" 
                  style={{ backgroundColor: testimonials[activeIndex].avatarBg }}
                >
                  {testimonials[activeIndex].name.charAt(0)}
                </div>
                <div className="author-details">
                  <h4 className="author-name">{testimonials[activeIndex].name}</h4>
                  <p className="author-meta">
                    <strong>{testimonials[activeIndex].business}</strong> ({testimonials[activeIndex].type})
                  </p>
                </div>
              </div>
            </div>

            {/* Slider Navigation Arrows */}
            <div className="slider-controls">
              <button className="control-btn" onClick={handlePrev} aria-label="Previous testimonial">
                <ChevronLeft size={20} />
              </button>
              
              <div className="slider-dots">
                {testimonials.map((_, idx) => (
                  <span 
                    key={idx} 
                    className={`dot ${activeIndex === idx ? 'active' : ''}`}
                    onClick={() => setActiveIndex(idx)}
                  ></span>
                ))}
              </div>

              <button className="control-btn" onClick={handleNext} aria-label="Next testimonial">
                <ChevronRight size={20} />
              </button>
            </div>

          </div>
        </div>

      </div>

      <style>{`
        .testimonials-section {
          position: relative;
        }

        .carousel-wrapper {
          max-width: 800px;
          margin: 40px auto 0 auto;
        }

        .testimonial-slider-container {
          position: relative;
        }

        .testimonial-card {
          padding: 48px;
          background-color: var(--white);
          text-align: left;
          box-shadow: var(--shadow-lg);
          position: relative;
          z-index: 1;
        }

        .quote-icon {
          position: absolute;
          top: 30px;
          right: 40px;
          opacity: 0.15;
        }

        .stars-row {
          display: flex;
          gap: 4px;
          margin-bottom: 24px;
        }

        .star-filled {
          color: #f59e0b;
        }

        .testimonial-text {
          font-size: 1.25rem;
          line-height: 1.7;
          color: var(--dark-light);
          font-weight: 500;
          margin-bottom: 32px;
          font-style: italic;
        }

        .testimonial-author-row {
          display: flex;
          align-items: center;
          gap: 16px;
          border-top: 1px solid var(--border);
          padding-top: 24px;
        }

        .author-avatar {
          width: 56px;
          height: 56px;
          border-radius: 50%;
          color: var(--white);
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 800;
          font-size: 1.5rem;
          box-shadow: var(--shadow-md);
        }

        .author-details {
          text-align: left;
        }

        .author-name {
          font-size: 1.15rem;
          color: var(--dark);
          margin-bottom: 2px;
        }

        .author-meta {
          font-size: 0.85rem;
          color: var(--text-main);
          margin-bottom: 2px;
        }

        .author-loc {
          font-size: 0.75rem;
          color: var(--text-muted);
          font-weight: 600;
        }

        /* Controls */
        .slider-controls {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 24px;
          padding: 0 16px;
        }

        .control-btn {
          background-color: var(--white);
          border: 1px solid var(--border);
          width: 44px;
          height: 44px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          color: var(--dark);
          box-shadow: var(--shadow-sm);
          transition: var(--transition);
        }

        .control-btn:hover {
          background-color: var(--primary);
          color: var(--white);
          border-color: transparent;
          box-shadow: var(--shadow-md);
          transform: scale(1.05);
        }

        .slider-dots {
          display: flex;
          gap: 8px;
        }

        .dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background-color: #cbd5e1;
          cursor: pointer;
          transition: var(--transition);
        }

        .dot.active {
          background-color: var(--primary);
          width: 24px;
          border-radius: 4px;
        }

        @media (max-width: 480px) {
          .testimonial-card {
            padding: 24px;
          }
          .testimonial-text {
            font-size: 1.05rem;
          }
          .testimonial-author-row {
            flex-direction: column;
            align-items: flex-start;
            gap: 12px;
          }
        }
      `}</style>
    </section>
  );
}
