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
      name: "Prakash Sharma",
      shop: "Sriram Mart",
      avatarBg: "#0ea5e9",
      metric: "+45% Monthly Sales",
      quote: "Before DukaanSarthi, I lost track of Udhaar and inventory. Now, automated WhatsApp reminders recover my money 3x faster. My monthly income has shot up!",
      rating: 5
    },
    {
      id: 2,
      name: "Piyush Singh",
      shop: "Fashion World",
      avatarBg: "#8b5cf6",
      metric: "Zero Dead Stock",
      quote: "The barcode scanning and low-stock alerts mean I never over-order or run out of bestsellers. Our profits increased purely by stopping wastage.",
      rating: 5
    },
    {
      id: 3,
      name: "Anil Singh",
      shop: "Shree Millet",
      avatarBg: "#10b981",
      metric: "₹1.2L CA Fees Saved",
      quote: "The 1-click GST GSTR-1 & 3B reports saved me lakhs in accountant fees. My multi-store inventory is finally synced in real-time.",
      rating: 5
    }
  ];

  return (
    <section className="growth-section section" id="impact">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header text-center">
          <div className="badge badge-teal">PROVEN ROI & GROWTH</div>
          <h2 className="with-line center text-slate-900">Transforming Shops into Smart Businesses</h2>
          <p className="section-subtitle text-slate-600">
            DukaanSarthi isn&apos;t just a billing software. It&apos;s a revenue-generating engine that recovers bad debt, optimizes stock, and multiplies your income.
          </p>
        </div>

        <div className="impact-grid">
          
          {/* Left Side: Before vs After Interactive */}
          <div className="impact-interactive card glass-card-light">
            <div className="impact-toggle-header">
              <h3 className="text-slate-900">The DukaanSarthi Effect</h3>
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
              <div key={story.id} className="story-card card glass-card-light">
                <div className="story-header">
                  <div 
                    className="story-avatar-initials" 
                    style={{ backgroundColor: story.avatarBg }}
                  >
                    {story.name.charAt(0)}
                  </div>
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
                <p className="story-quote">&quot;{story.quote}&quot;</p>
              </div>
            ))}
          </div>

        </div>
      </div>

      <style>{`
        .growth-section {
          position: relative;
          overflow: hidden;
          background-color: #f0f9ff;
          background-image: 
            linear-gradient(rgba(255, 255, 255, 0.7) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.7) 1px, transparent 1px),
            linear-gradient(135deg, #e0f2fe 0%, #bae6fd 100%);
          background-size: 60px 60px, 60px 60px, 100% 100%;
          background-position: center center;
          padding-top: 80px;
          padding-bottom: 80px;
          z-index: 1;
        }
        
        .growth-section::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          background: radial-gradient(circle at 50% 0%, rgba(255,255,255,0.4) 0%, transparent 70%);
          pointer-events: none;
          z-index: 0;
        }

        .growth-section > .container {
          position: relative;
          z-index: 1;
        }

        .badge-teal {
          background-color: rgba(14, 165, 233, 0.1);
          color: #0284c7;
          border: 1px solid rgba(14, 165, 233, 0.2);
          backdrop-filter: blur(4px);
        }

        .text-slate-900 { color: #0f172a !important; }
        .text-slate-600 { color: #475569 !important; }
        .text-teal { color: #0284c7 !important; }

        .impact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
          margin-top: 56px;
        }

        .glass-card-light {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid rgba(255, 255, 255, 1);
          box-shadow: 0 20px 40px -10px rgba(14, 165, 233, 0.15);
          color: #1e293b;
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
          color: #0f172a;
        }

        .custom-toggle {
          display: flex;
          background: #f1f5f9;
          border-radius: 50px;
          padding: 4px;
          border: 1px solid #e2e8f0;
        }

        .toggle-btn {
          background: transparent;
          border: none;
          color: #64748b;
          padding: 8px 16px;
          border-radius: 50px;
          font-size: 0.85rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .toggle-btn.active.error {
          background: rgba(239, 68, 68, 0.1);
          color: #dc2626;
          border: 1px solid rgba(239, 68, 68, 0.2);
        }

        .toggle-btn.active.success {
          background: rgba(14, 165, 233, 0.1);
          color: #0284c7;
          border: 1px solid rgba(14, 165, 233, 0.2);
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
          color: #ef4444;
        }

        .metric-row.good .m-icon {
          background: rgba(14, 165, 233, 0.1);
          color: #0284c7;
        }

        .m-text h4 {
          font-size: 1.1rem;
          margin-bottom: 4px;
          color: #0f172a;
        }

        .metric-row.good .m-text h4 {
          color: #0369a1;
        }

        .metric-row.bad .m-text h4 {
          color: #b91c1c;
        }

        .m-text p {
          font-size: 0.9rem;
          color: #475569;
          line-height: 1.4;
        }

        /* Animated Chart */
        .impact-chart-box {
          background: #ffffff;
          border-radius: var(--radius-md);
          padding: 24px;
          border: 1px solid #e2e8f0;
          margin-top: auto;
          box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);
        }

        .chart-title {
          font-size: 0.85rem;
          font-weight: 700;
          color: #64748b;
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
          border-bottom: 1px solid #e2e8f0;
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
          background: #cbd5e1;
        }

        .growth-bar {
          height: 0px; 
          background: linear-gradient(180deg, #38bdf8 0%, rgba(56, 189, 248, 0.2) 100%);
        }

        .growth-bar.animate-mid { height: 70px; }
        .growth-bar.animate-high { height: 110px; }

        .bar-label {
          position: absolute;
          bottom: -24px;
          font-size: 0.75rem;
          color: #64748b;
        }

        .bar-val {
          position: absolute;
          top: -24px;
          font-size: 0.8rem;
          font-weight: 700;
          color: #0f172a;
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
          transform: translateY(-5px);
          border-color: #38bdf8;
          box-shadow: 0 20px 40px -10px rgba(14, 165, 233, 0.2);
        }

        .story-header {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 16px;
          flex-wrap: wrap;
        }

        .story-avatar-initials {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          border: 3px solid #ffffff;
          box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 800;
          font-size: 1.5rem;
          color: #ffffff;
        }

        .story-meta {
          flex-grow: 1;
        }

        .story-meta h4 {
          font-size: 1.1rem;
          margin-bottom: 2px;
          color: #0f172a;
        }

        .story-meta span {
          font-size: 0.75rem;
          color: #64748b;
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
          color: #334155;
          line-height: 1.6;
          font-style: italic;
        }

        @media (max-width: 1024px) {
          .impact-grid {
            grid-template-columns: 1fr;
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
