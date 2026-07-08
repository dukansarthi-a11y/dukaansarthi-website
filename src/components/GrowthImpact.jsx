"use client";
import React, { useState, useEffect } from 'react';
import { TrendingUp, TrendingDown, Users, Clock, IndianRupee, ShieldCheck, ArrowRight, Star } from 'lucide-react';

export default function GrowthImpact() {
  const [showAfter, setShowAfter] = useState(true);
  const [animateChart, setAnimateChart] = useState(false);

  // Trigger chart animation when component mounts (or could be tied to intersection observer)
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimateChart(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const stories = [
    {
      id: 1,
      name: "Ramesh Gupta",
      shop: "Gupta General Store",
      image: "https://images.unsplash.com/photo-1556740749-887f6717d7e4?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      metric: "+45% Monthly Sales",
      quote: "Before DukaanSarthi, I lost track of Udhaar and inventory. Now, automated WhatsApp reminders recover my money 3x faster. My monthly income has shot up!",
      rating: 5
    },
    {
      id: 2,
      name: "Sneha Retailers",
      shop: "Sneha Garments & Boutique",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      metric: "Zero Dead Stock",
      quote: "The barcode scanning and low-stock alerts mean I never over-order or run out of bestsellers. Our profits increased purely by stopping wastage.",
      rating: 5
    },
    {
      id: 3,
      name: "Vikram Singh",
      shop: "Singh Supermart (3 Outlets)",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      metric: "₹1.2L CA Fees Saved",
      quote: "The 1-click GST GSTR-1 & 3B reports saved me lakhs in accountant fees. My multi-store inventory is finally synced in real-time.",
      rating: 5
    }
  ];

  return (
    <section className="growth-section section section-bg-dark" id="impact">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header text-center">
          <div className="badge badge-teal">PROVEN ROI & GROWTH</div>
          <h2 className="with-line center text-white">Transforming Shops into Smart Businesses</h2>
          <p className="section-subtitle text-gray-300">
            DukaanSarthi isn't just a billing software. It's a revenue-generating engine that recovers bad debt, optimizes stock, and multiplies your income.
          </p>
        </div>

        <div className="impact-grid">
          
          {/* Left Side: Before vs After Interactive */}
          <div className="impact-interactive card glass-card-dark">
            <div className="impact-toggle-header">
              <h3>The DukaanSarthi Effect</h3>
              <div className="custom-toggle">
                <button 
                  className={`toggle-btn ${!showAfter ? 'active error' : ''}`}
                  onClick={() => setShowAfter(false)}
                >
                  Without ERP
                </button>
                <button 
                  className={`toggle-btn ${showAfter ? 'active success' : ''}`}
                  onClick={() => setShowAfter(true)}
                >
                  With DukaanSarthi
                </button>
              </div>
            </div>

            <div className="impact-data-content">
              {!showAfter ? (
                <div className="state-before fade-in">
                  <div className="metric-row bad">
                    <div className="m-icon"><TrendingDown size={24} /></div>
                    <div className="m-text">
                      <h4>Lost Udhaar (Bad Debt)</h4>
                      <p>₹15,000 - ₹30,000 stuck every month due to forgotten follow-ups.</p>
                    </div>
                  </div>
                  <div className="metric-row bad">
                    <div className="m-icon"><Clock size={24} /></div>
                    <div className="m-text">
                      <h4>Wasted Time</h4>
                      <p>4+ hours daily manually matching stock registers and bills.</p>
                    </div>
                  </div>
                  <div className="metric-row bad">
                    <div className="m-icon"><ShieldCheck size={24} /></div>
                    <div className="m-text">
                      <h4>High CA & Tax Fines</h4>
                      <p>Costly errors in manual GST calculation leading to penalties.</p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="state-after fade-in">
                  <div className="metric-row good">
                    <div className="m-icon"><IndianRupee size={24} /></div>
                    <div className="m-text">
                      <h4>3x Faster Udhaar Recovery</h4>
                      <p>Automated WhatsApp payment links get you paid immediately.</p>
                    </div>
                  </div>
                  <div className="metric-row good">
                    <div className="m-icon"><TrendingUp size={24} /></div>
                    <div className="m-text">
                      <h4>+30% Extra Sales Margin</h4>
                      <p>Loyalty programs & zero dead-stock optimization boost profits.</p>
                    </div>
                  </div>
                  <div className="metric-row good">
                    <div className="m-icon"><Users size={24} /></div>
                    <div className="m-text">
                      <h4>Zero Accounting Headaches</h4>
                      <p>1-Click GSTR filing exports. Hand it to your CA and relax.</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            {/* Animated Chart Representation */}
            <div className="impact-chart-box">
              <p className="chart-title">Average Monthly Revenue Growth</p>
              <div className="bar-chart-container">
                <div className="bar-wrapper">
                  <span className="bar-label">Month 1</span>
                  <div className="bar base-bar"></div>
                  <span className="bar-val">₹2.1L</span>
                </div>
                <div className="bar-wrapper">
                  <span className="bar-label">Month 3</span>
                  <div className={`bar growth-bar ${animateChart ? 'animate-mid' : ''}`}></div>
                  <span className="bar-val">₹2.8L</span>
                </div>
                <div className="bar-wrapper">
                  <span className="bar-label">Month 6</span>
                  <div className={`bar growth-bar ${animateChart ? 'animate-high' : ''}`}></div>
                  <span className="bar-val text-teal">₹3.5L</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Side: Success Stories */}
          <div className="success-stories-wrapper">
            {stories.map((story) => (
              <div key={story.id} className="story-card card glass-card-dark">
                <div className="story-header">
                  <img src={story.image} alt={story.name} className="story-avatar" />
                  <div className="story-meta">
                    <h4>{story.name}</h4>
                    <span>{story.shop}</span>
                    <div className="stars">
                      {[...Array(story.rating)].map((_, i) => (
                        <Star key={i} size={14} fill="#fbbf24" color="#fbbf24" />
                      ))}
                    </div>
                  </div>
                  <div className="story-highlight badge-teal">
                    {story.metric}
                  </div>
                </div>
                <p className="story-quote">"{story.quote}"</p>
              </div>
            ))}
          </div>

        </div>
      </div>

      <style>{`
        .growth-section {
          position: relative;
          overflow: hidden;
        }
        
        .badge-teal {
          background-color: rgba(20, 184, 166, 0.2);
          color: #2dd4bf;
          border: 1px solid rgba(20, 184, 166, 0.3);
        }

        .text-teal {
          color: #2dd4bf !important;
        }

        .text-gray-300 {
          color: #cbd5e1 !important;
        }

        .impact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
          margin-top: 48px;
        }

        .glass-card-dark {
          background: rgba(30, 41, 59, 0.7);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
          color: var(--white);
        }

        /* Left Interactive Panel */
        .impact-interactive {
          padding: 32px;
          display: flex;
          flex-direction: column;
          gap: 32px;
        }

        .impact-toggle-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 16px;
        }

        .impact-toggle-header h3 {
          font-size: 1.5rem;
          margin: 0;
        }

        .custom-toggle {
          display: flex;
          background: rgba(15, 23, 42, 0.8);
          border-radius: 50px;
          padding: 4px;
          border: 1px solid rgba(255,255,255,0.05);
        }

        .toggle-btn {
          background: transparent;
          border: none;
          color: #94a3b8;
          padding: 8px 16px;
          border-radius: 50px;
          font-size: 0.85rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .toggle-btn.active.error {
          background: rgba(239, 68, 68, 0.2);
          color: #fca5a5;
          border: 1px solid rgba(239, 68, 68, 0.3);
        }

        .toggle-btn.active.success {
          background: rgba(20, 184, 166, 0.2);
          color: #2dd4bf;
          border: 1px solid rgba(20, 184, 166, 0.3);
        }

        .impact-data-content {
          min-height: 250px;
        }

        .fade-in {
          animation: fadeIn 0.4s ease-in forwards;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .metric-row {
          display: flex;
          align-items: flex-start;
          gap: 16px;
          margin-bottom: 24px;
        }

        .m-icon {
          padding: 12px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .metric-row.bad .m-icon {
          background: rgba(239, 68, 68, 0.1);
          color: #f87171;
        }

        .metric-row.good .m-icon {
          background: rgba(20, 184, 166, 0.1);
          color: #2dd4bf;
        }

        .m-text h4 {
          font-size: 1.1rem;
          margin-bottom: 4px;
          color: var(--white);
        }

        .metric-row.good .m-text h4 {
          color: #2dd4bf;
        }

        .metric-row.bad .m-text h4 {
          color: #fca5a5;
        }

        .m-text p {
          font-size: 0.9rem;
          color: #94a3b8;
          line-height: 1.4;
        }

        /* Animated Chart */
        .impact-chart-box {
          background: rgba(15, 23, 42, 0.6);
          border-radius: var(--radius-md);
          padding: 24px;
          border: 1px solid rgba(255,255,255,0.05);
          margin-top: auto;
        }

        .chart-title {
          font-size: 0.85rem;
          font-weight: 600;
          color: #94a3b8;
          margin-bottom: 24px;
          text-align: center;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .bar-chart-container {
          display: flex;
          justify-content: space-around;
          align-items: flex-end;
          height: 120px;
          padding-bottom: 10px;
          border-bottom: 1px solid rgba(255,255,255,0.1);
        }

        .bar-wrapper {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-end;
          height: 100%;
          position: relative;
        }

        .bar {
          width: 40px;
          border-radius: 4px 4px 0 0;
          transition: height 1.5s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .base-bar {
          height: 40px;
          background: #475569;
        }

        .growth-bar {
          height: 0px; /* Start at 0 for animation */
          background: linear-gradient(180deg, #2dd4bf 0%, rgba(45, 212, 191, 0.2) 100%);
        }

        .growth-bar.animate-mid { height: 70px; }
        .growth-bar.animate-high { height: 110px; }

        .bar-label {
          position: absolute;
          bottom: -24px;
          font-size: 0.75rem;
          color: #94a3b8;
        }

        .bar-val {
          position: absolute;
          top: -24px;
          font-size: 0.8rem;
          font-weight: 700;
        }

        /* Right Side: Success Stories */
        .success-stories-wrapper {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .story-card {
          padding: 24px;
          transition: transform 0.3s ease;
        }

        .story-card:hover {
          transform: translateX(-10px);
          border-color: rgba(20, 184, 166, 0.4);
        }

        .story-header {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 16px;
          flex-wrap: wrap;
        }

        .story-avatar {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          object-fit: cover;
          border: 2px solid #2dd4bf;
        }

        .story-meta {
          flex-grow: 1;
        }

        .story-meta h4 {
          font-size: 1.1rem;
          margin-bottom: 2px;
          color: var(--white);
        }

        .story-meta span {
          font-size: 0.75rem;
          color: #94a3b8;
          display: block;
          margin-bottom: 4px;
        }

        .stars {
          display: flex;
          gap: 2px;
        }

        .story-highlight {
          padding: 6px 12px;
          border-radius: 20px;
          font-size: 0.75rem;
          font-weight: 700;
        }

        .story-quote {
          font-size: 0.95rem;
          color: #cbd5e1;
          line-height: 1.5;
          font-style: italic;
        }

        @media (max-width: 1024px) {
          .impact-grid {
            grid-template-columns: 1fr;
          }
          .story-card:hover {
            transform: translateY(-5px);
          }
        }
        
        @media (max-width: 768px) {
          .impact-toggle-header {
            flex-direction: column;
            align-items: flex-start;
          }
          .story-header {
            flex-direction: column;
            align-items: flex-start;
          }
          .story-highlight {
            align-self: flex-start;
          }
        }
      `}</style>
    </section>
  );
}
