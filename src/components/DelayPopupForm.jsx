"use client";
import React, { useState, useEffect } from 'react';
import { X, PhoneCall, Gift, CheckCircle } from 'lucide-react';

export default function DelayPopupForm() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
  });

  useEffect(() => {
    // Trigger strictly after 40 seconds on the page
    const timer = setTimeout(() => {
      if (!hasTriggered) {
        setIsOpen(true);
        setHasTriggered(true);
      }
    }, 40000); // 40 seconds
    
    return () => clearTimeout(timer);
  }, [hasTriggered]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    setLoading(true);

    try {
      const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';
      const response = await fetch(`${API_URL}/api/enquiry`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          businessName: 'None',
          businessType: 'Unknown',
          notes: 'Via 40s Delay Popup'
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setTimeout(() => {
          setIsOpen(false);
        }, 4000);
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (err) {
      console.error('Error submitting form:', err);
      alert('Network error. Could not save enquiry.');
    } finally {
      setLoading(false);
    }
  };
  if (!isOpen) return null;

  return (
    <div className="delay-popup-overlay">
      <div className="delay-popup-modal fade-in-scale">
        <button className="delay-popup-close" onClick={() => setIsOpen(false)} aria-label="Close">
          <X size={24} />
        </button>

        <div className="vyapar-style-container">
          {/* Left Side: Marketing Copy */}
          <div className="vyapar-left">
            <h1 className="vyapar-title">Still Making Paper Bills?</h1>
            <h2 className="vyapar-subtitle">Switch to <span className="text-primary">DukaanSarthi App</span></h2>
            
            <p className="vyapar-desc">
              91% businesses who use DukaanSarthi report <strong>5X</strong> more profits!
            </p>

            <div className="vyapar-stats">
              <div className="v-stat">
                <h3>2500+</h3>
                <p>Happy Customers</p>
              </div>
              <div className="v-stat">
                <h3>4.9 <span className="stars">★★★★★</span></h3>
                <p>2500+ reviews</p>
              </div>
            </div>

            <a href="#download" className="vyapar-cta-btn" onClick={() => setIsOpen(false)}>
              Start 7 Days Free Trial
            </a>
          </div>

          {/* Right Side: Visuals */}
          <div className="vyapar-right">
            <div className="vyapar-right-bg"></div>
            <div className="vyapar-visuals-wrapper">
              <div className="paper-bill-mock">
                <div className="pb-header">Invoice</div>
                <div className="pb-lines">
                  <div className="pb-line"></div>
                  <div className="pb-line short"></div>
                  <div className="pb-line"></div>
                </div>
              </div>
              
              <div className="v-arrows">
                <div className="v-arrow"></div>
                <div className="v-arrow"></div>
              </div>

              <div className="laptop-mock">
                <div className="laptop-screen">
                  <div className="ls-header"></div>
                  <div className="ls-sidebar"></div>
                  <div className="ls-content">
                    <div className="ls-header-row">
                      <div className="ls-brand">DukaanSarthi</div>
                      <div className="ls-title">TAX INVOICE</div>
                    </div>
                    <div className="ls-details">
                      <span>To: Verma Wholesalers</span>
                      <span>Date: 12-Oct-2023</span>
                    </div>
                    <div className="ls-table-mock">
                      <div className="ls-th"><span>Item</span><span>Qty</span><span>Amt</span></div>
                      <div className="ls-tr"><span>Aashirvaad Atta</span><span>2</span><span>₹880</span></div>
                      <div className="ls-tr"><span>Tata Salt</span><span>5</span><span>₹120</span></div>
                      <div className="ls-tr"><span>Fortune Oil</span><span>1</span><span>₹145</span></div>
                    </div>
                    <div className="ls-total">
                      <span>Total: ₹1,145</span>
                    </div>
                  </div>
                </div>
                <div className="laptop-base"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .delay-popup-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100vh;
          height: 100dvh;
          background: rgba(0, 0, 0, 0.6);
          backdrop-filter: blur(5px);
          -webkit-backdrop-filter: blur(5px);
          z-index: 10000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 16px;
        }

        .delay-popup-modal {
          background: #ffffff;
          width: 100%;
          max-width: 900px;
          max-height: 90vh;
          max-height: 90dvh;
          overflow-y: auto;
          border-radius: 16px;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.3);
          position: relative;
        }

        .fade-in-scale {
          animation: scaleUp 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        @keyframes scaleUp {
          0% { opacity: 0; transform: scale(0.95) translateY(20px); }
          100% { opacity: 1; transform: scale(1) translateY(0); }
        }

        .delay-popup-close {
          position: absolute;
          top: 16px;
          right: 16px;
          background: rgba(255,255,255,0.2);
          border: none;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          color: #fff;
          transition: all 0.2s ease;
          z-index: 20;
        }

        .delay-popup-close:hover {
          background: rgba(255,255,255,0.4);
          transform: rotate(90deg);
        }

        .vyapar-style-container {
          display: flex;
          min-height: 450px;
          position: relative;
          background: #fff;
        }

        .vyapar-left {
          flex: 0 0 55%;
          padding: 50px 40px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          z-index: 2;
        }

        .vyapar-title {
          font-size: 2.5rem;
          font-weight: 800;
          color: #111;
          margin-bottom: 8px;
          line-height: 1.1;
          font-family: 'Inter', sans-serif;
        }

        .vyapar-subtitle {
          font-size: 2.2rem;
          font-weight: 800;
          color: #333;
          margin-bottom: 24px;
          line-height: 1.2;
        }

        .text-primary {
          color: var(--primary); /* DukaanSarthi Theme Color */
        }

        .vyapar-desc {
          font-size: 1.1rem;
          color: #444;
          margin-bottom: 32px;
        }
        
        .vyapar-desc strong {
          color: var(--primary);
          font-size: 1.3rem;
          font-weight: 800;
        }

        .vyapar-stats {
          display: flex;
          gap: 40px;
          margin-bottom: 40px;
        }

        .v-stat h3 {
          font-size: 1.8rem;
          font-weight: 800;
          color: var(--primary);
          margin-bottom: 4px;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        
        .v-stat .stars {
          color: #facc15;
          font-size: 1.2rem;
          letter-spacing: 2px;
        }

        .v-stat p {
          font-size: 1rem;
          color: #333;
          font-weight: 500;
        }

        .vyapar-cta-btn {
          background-color: var(--primary);
          color: white;
          padding: 16px 32px;
          font-size: 1.2rem;
          font-weight: 700;
          border-radius: 50px;
          border: none;
          cursor: pointer;
          text-align: center;
          text-decoration: none;
          display: inline-block;
          max-width: 300px;
          transition: all 0.3s ease;
          box-shadow: 0 10px 20px -5px rgba(var(--primary-rgb), 0.5);
        }

        .vyapar-cta-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 25px -5px rgba(var(--primary-rgb), 0.6);
        }

        .vyapar-right {
          flex: 0 0 45%;
          position: relative;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .vyapar-right-bg {
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          left: -100px;
          background: var(--primary);
          transform: skewX(-15deg);
          transform-origin: top;
          z-index: 1;
        }

        .vyapar-visuals-wrapper {
          position: relative;
          z-index: 2;
          display: flex;
          align-items: center;
          gap: 15px;
          transform: translateX(-20px);
        }

        /* Fake Graphics */
        .paper-bill-mock {
          width: 100px;
          height: 140px;
          background: #fdf2f8;
          border: 1px solid #fbcfe8;
          border-radius: 4px;
          box-shadow: -5px 10px 15px rgba(0,0,0,0.2);
          padding: 10px;
          display: flex;
          flex-direction: column;
          position: relative;
        }
        
        .paper-bill-mock::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 15px;
          background: #f9a8d4;
          border-radius: 4px 4px 0 0;
        }

        .pb-header {
          font-size: 8px;
          color: #be185d;
          font-weight: bold;
          margin-top: 15px;
          margin-bottom: 10px;
          border-bottom: 1px solid #fbcfe8;
          padding-bottom: 4px;
        }

        .pb-lines {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .pb-line {
          height: 4px;
          background: #fbcfe8;
          border-radius: 2px;
          width: 100%;
        }
        .pb-line.short { width: 60%; }

        .v-arrows {
          display: flex;
          gap: -5px;
        }

        .v-arrow {
          width: 0; 
          height: 0; 
          border-top: 15px solid transparent;
          border-bottom: 15px solid transparent;
          border-left: 15px solid #06b6d4;
          margin-left: -5px;
        }
        
        .v-arrow:last-child {
          border-left-color: #38bdf8;
        }

        .laptop-mock {
          width: 180px;
          display: flex;
          flex-direction: column;
          align-items: center;
          filter: drop-shadow(0 15px 20px rgba(0,0,0,0.3));
        }

        .laptop-screen {
          width: 100%;
          height: 110px;
          background: #1e293b;
          border-radius: 8px 8px 0 0;
          border: 4px solid #334155;
          border-bottom: none;
          display: flex;
          overflow: hidden;
        }

        .ls-sidebar {
          width: 25px;
          height: 100%;
          background: #0f172a;
        }
        
        .ls-content {
          flex: 1;
          background: #fff;
          padding: 8px;
          display: flex;
          flex-direction: column;
        }
        
        .ls-header-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 6px;
          border-bottom: 1px solid #e2e8f0;
          padding-bottom: 4px;
        }

        .ls-brand {
          font-size: 7px;
          font-weight: 800;
          color: #0ea5e9;
        }

        .ls-title {
          font-size: 7px;
          color: #ef4444;
          font-weight: 800;
        }

        .ls-details {
          display: flex;
          justify-content: space-between;
          font-size: 5px;
          color: #64748b;
          margin-bottom: 6px;
        }

        .ls-table-mock {
          flex: 1;
          display: flex;
          flex-direction: column;
          border: 1px solid #e2e8f0;
          border-radius: 2px;
          overflow: hidden;
        }

        .ls-th, .ls-tr {
          display: flex;
          justify-content: space-between;
          padding: 3px 4px;
          font-size: 5px;
        }

        .ls-th {
          background: #f8fafc;
          font-weight: 700;
          color: #475569;
          border-bottom: 1px solid #e2e8f0;
        }

        .ls-tr {
          color: #0f172a;
          border-bottom: 1px solid #f1f5f9;
        }
        
        .ls-tr:last-child {
          border-bottom: none;
        }

        .ls-th span:nth-child(1), .ls-tr span:nth-child(1) { width: 50%; }
        .ls-th span:nth-child(2), .ls-tr span:nth-child(2) { width: 20%; text-align: center; }
        .ls-th span:nth-child(3), .ls-tr span:nth-child(3) { width: 30%; text-align: right; }

        .ls-total {
          margin-top: 6px;
          text-align: right;
          font-size: 6px;
          font-weight: 800;
          color: #0f172a;
          background: #f0fdf4;
          padding: 4px;
          border-radius: 2px;
          border: 1px solid #bbf7d0;
        }

        .laptop-base {
          width: 120%;
          height: 10px;
          background: #94a3b8;
          border-radius: 2px 2px 8px 8px;
          position: relative;
        }
        
        .laptop-base::before {
          content: '';
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 40px;
          height: 3px;
          background: #cbd5e1;
          border-radius: 0 0 4px 4px;
        }

        /* Mobile Responsiveness */
        @media (max-width: 900px) {
          .vyapar-left {
            padding: 40px 30px;
          }
          .vyapar-title { font-size: 2rem; }
          .vyapar-subtitle { font-size: 1.8rem; }
          .v-stat h3 { font-size: 1.5rem; }
          .vyapar-visuals-wrapper { transform: translateX(0); gap: 10px; }
          .paper-bill-mock { width: 70px; height: 100px; }
          .laptop-mock { width: 140px; }
          .laptop-screen { height: 90px; }
        }

        @media (max-width: 768px) {
          .delay-popup-close {
            color: #333;
            background: rgba(0,0,0,0.05);
          }
          .delay-popup-close:hover {
            color: #ef4444;
            background: rgba(239, 68, 68, 0.1);
          }

          .vyapar-style-container {
            flex-direction: column;
          }

          .vyapar-right {
            padding: 40px 20px;
            background: var(--primary);
          }

          .vyapar-right-bg {
            display: none; /* Remove slant on mobile */
          }

          .vyapar-left {
            padding: 30px 20px;
            text-align: center;
          }

          .vyapar-stats {
            justify-content: center;
            gap: 20px;
            flex-wrap: wrap;
          }

          .v-stat h3 {
            justify-content: center;
          }

          .vyapar-cta-btn {
            margin: 0 auto;
            width: 100%;
          }
        }
        
        @media (max-width: 480px) {
          .vyapar-title { font-size: 1.8rem; }
          .vyapar-subtitle { font-size: 1.5rem; }
          .vyapar-stats { flex-direction: column; gap: 15px; }
          .delay-popup-overlay { padding: 16px; }
        }
      `}</style>
    </div>
  );
}
