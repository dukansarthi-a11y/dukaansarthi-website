"use client";
import React, { useState, useEffect } from 'react';
import { X, Send, Calendar, CheckCircle, ArrowRight, MessageCircle } from 'lucide-react';

export default function ScrollPopupForm() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    businessType: 'retail'
  });

  useEffect(() => {
    // 2. Trigger on scroll (like before)
    const handleScroll = () => {
      if (hasTriggered) return;

      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      const scrollPercentage = (scrollPosition / (documentHeight - windowHeight)) * 100;

      // Opens when scrolled 40% down the page
      if (scrollPercentage > 40) {
        setIsOpen(true);
        setHasTriggered(true);
      }
    };

    // 3. Trigger on exit intent
    const handleMouseLeave = (e) => {
      if (e.clientY <= 0 && !hasTriggered) {
        setIsOpen(true);
        setHasTriggered(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
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
          businessName: 'Via Demo Popup'
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setTimeout(() => {
          setIsOpen(false);
        }, 3000);
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

  return (
    <>
      {/* Floating Buttons */}
      {!isOpen && (
        <div className="floating-buttons-container">
          <a 
            href="https://wa.me/919873234071" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="floating-wa-btn"
            aria-label="Chat on WhatsApp"
          >
            <MessageCircle size={28} />
          </a>

          <button 
            className="floating-demo-btn"
            onClick={() => setIsOpen(true)}
            aria-label="Book Free Demo"
          >
            <div className="btn-content">
              <Calendar size={24} />
              <span className="btn-text">Free Demo</span>
            </div>
            <div className="pulse-ring"></div>
          </button>
        </div>
      )}

      {isOpen && (
        <div className="popup-overlay">
          <div className="popup-modal marketing-modal fade-in-up">
            <button className="popup-close" onClick={() => setIsOpen(false)} aria-label="Close form">
              <X size={20} />
            </button>

            {!isSubmitted ? (
              <div className="modal-split">
                
                {/* Left Side: Marketing / Branding */}
                <div className="modal-marketing">
                  <div className="marketing-content">
                    <h3>Still Making Paper Bills?</h3>
                    <h2>Switch to <span className="text-highlight">DukaanSarthi</span></h2>
                    <p className="marketing-sub">Businesses using DukaanSarthi report <strong>3X faster checkout</strong> and completely organized inventory!</p>
                    
                    <div className="stats-row">
                      <div className="stat-box">
                        <h4>2500+</h4>
                        <span>Happy Shops</span>
                      </div>
                      <div className="stat-box">
                        <h4>4.9 ⭐</h4>
                        <span>User Rating</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Decorative Visual */}
                  <div className="visual-graphic">
                    <div className="paper-bill">
                      <div className="line"></div>
                      <div className="line"></div>
                      <div className="line short"></div>
                    </div>
                    <ArrowRight size={32} className="arrow-icon" color="#fff" />
                    <div className="digital-bill">
                      <CheckCircle size={24} color="#10b981" />
                      <div className="line"></div>
                      <div className="line short"></div>
                    </div>
                  </div>
                </div>

                {/* Right Side: Form */}
                <div className="modal-form-side">
                  <div className="popup-header">
                    <div className="badge badge-primary popup-badge">
                      <Calendar size={14} /> FREE DEMO
                    </div>
                    <h3>Start 7 Days Free Trial</h3>
                    <p>Enter details to get your free trial and a personalized demo.</p>
                  </div>

                  <form onSubmit={handleSubmit} className="popup-form">
                    <div className="form-group">
                      <label>Your Name</label>
                      <input 
                        type="text" 
                        placeholder="e.g. Ramesh Kumar" 
                        required 
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                      />
                    </div>
                    
                    <div className="form-group">
                      <label>Mobile No</label>
                      <input 
                        type="tel" 
                        placeholder="10-digit mobile number" 
                        required 
                        pattern="[0-9]{10}"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      />
                    </div>

                    <div className="form-group">
                      <label>Business Type</label>
                      <select 
                        required 
                        value={formData.businessType}
                        onChange={(e) => setFormData({...formData, businessType: e.target.value})}
                      >
                        <option value="" disabled>Select your business</option>
                        <option value="grocery">Supermarket / Grocery</option>
                        <option value="garments">Garments / Footwear</option>
                        <option value="electronics">Electronics / Mobile</option>
                        <option value="hardware">Hardware / Sanitary</option>
                        <option value="retail">Other Retail</option>
                      </select>
                    </div>

                    <button type="submit" className="btn btn-primary popup-submit-btn" disabled={loading}>
                      {loading ? 'Submitting...' : (
                        <>Get Free Trial <Send size={16} /></>
                      )}
                    </button>
                    <p className="popup-privacy">We respect your privacy. No spam.</p>
                  </form>
                </div>

              </div>
            ) : (
              <div className="popup-success">
                <div className="success-icon-wrap">
                  <CheckCircle size={48} className="text-teal" />
                </div>
                <h3>Demo Requested!</h3>
                <p>Our ERP expert will contact you on WhatsApp shortly to schedule your personalized demo.</p>
              </div>
            )}
          </div>
        </div>
      )}

      <style>{`
        .popup-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100vh;
          height: 100dvh; /* Better mobile height */
          background: rgba(15, 23, 42, 0.7);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 16px;
        }

        .marketing-modal {
          background: var(--white);
          width: 100%;
          max-width: 850px;
          max-height: 90vh;
          max-height: 90dvh;
          overflow-y: auto; /* Critical for mobile responsiveness */
          border-radius: var(--radius-lg);
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
          position: relative;
          border: 1px solid var(--border);
        }

        .modal-split {
          display: flex;
          flex-direction: row;
        }

        .modal-marketing {
          flex: 1;
          background: linear-gradient(135deg, var(--primary) 0%, #0891b2 100%);
          color: white;
          padding: 40px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          position: relative;
          overflow: hidden;
        }

        /* Diagonal overlay pattern */
        .modal-marketing::before {
          content: '';
          position: absolute;
          top: -50%;
          right: -50%;
          width: 100%;
          height: 100%;
          background: rgba(255, 255, 255, 0.05);
          transform: rotate(30deg);
        }

        .marketing-content {
          position: relative;
          z-index: 2;
        }

        .marketing-content h3 {
          font-size: 1.5rem;
          font-weight: 600;
          margin-bottom: 8px;
          color: rgba(255, 255, 255, 0.9);
        }

        .marketing-content h2 {
          font-size: 2.25rem;
          font-weight: 800;
          margin-bottom: 16px;
          line-height: 1.2;
        }

        .text-highlight {
          color: #fde047; /* Yellowish highlight */
        }

        .marketing-sub {
          font-size: 1.05rem;
          line-height: 1.5;
          margin-bottom: 32px;
          color: rgba(255, 255, 255, 0.9);
        }

        .stats-row {
          display: flex;
          gap: 24px;
          margin-bottom: 40px;
        }

        .stat-box h4 {
          font-size: 1.75rem;
          font-weight: 700;
          color: #fde047;
          margin-bottom: 4px;
        }

        .stat-box span {
          font-size: 0.9rem;
          opacity: 0.9;
        }

        .visual-graphic {
          display: flex;
          align-items: center;
          gap: 16px;
          z-index: 2;
          background: rgba(255, 255, 255, 0.1);
          padding: 24px;
          border-radius: 12px;
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .paper-bill {
          background: #fecdd3; /* Pinkish paper */
          width: 80px;
          height: 100px;
          border-radius: 4px;
          padding: 12px;
          display: flex;
          flex-direction: column;
          gap: 8px;
          box-shadow: -4px 4px 10px rgba(0,0,0,0.1);
          transform: rotate(-5deg);
        }

        .digital-bill {
          background: white;
          width: 100px;
          height: 80px;
          border-radius: 8px;
          padding: 12px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 8px;
          box-shadow: 0 10px 20px rgba(0,0,0,0.2);
        }

        .paper-bill .line, .digital-bill .line {
          height: 6px;
          background: rgba(0,0,0,0.1);
          border-radius: 4px;
          width: 100%;
        }
        .digital-bill .line { background: #e2e8f0; }
        .paper-bill .short, .digital-bill .short { width: 60%; }

        .modal-form-side {
          flex: 1;
          padding: 40px;
          background: var(--white);
        }

        .fade-in-up {
          animation: popupFade 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        @keyframes popupFade {
          0% { opacity: 0; transform: translateY(50px) scale(0.95); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }

        .popup-close {
          position: absolute;
          top: 16px;
          right: 16px;
          background: rgba(0,0,0,0.05);
          border: none;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          color: var(--text-muted);
          transition: all 0.2s ease;
          z-index: 10;
        }

        .popup-close:hover {
          background: rgba(239, 68, 68, 0.1);
          color: #ef4444;
          transform: rotate(90deg);
        }

        .popup-header {
          margin-bottom: 24px;
        }

        .popup-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          margin-bottom: 16px;
        }

        .popup-header h3 {
          font-size: 1.75rem;
          margin-bottom: 8px;
          color: var(--dark);
        }

        .popup-header p {
          color: var(--text-muted);
          font-size: 0.95rem;
          line-height: 1.5;
        }

        .popup-form {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .popup-form .form-group {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .popup-form label {
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--text-main);
        }

        .popup-form input,
        .popup-form select {
          padding: 12px 16px;
          border: 1px solid var(--border);
          border-radius: var(--radius-sm);
          font-family: inherit;
          font-size: 0.95rem;
          color: var(--dark);
          transition: all 0.2s;
          background: #f8fafc;
        }

        .popup-form input:focus,
        .popup-form select:focus {
          outline: none;
          border-color: var(--primary);
          background: var(--white);
          box-shadow: 0 0 0 3px rgba(0, 181, 165, 0.1);
        }

        .popup-submit-btn {
          margin-top: 8px;
          width: 100%;
          display: flex;
          justify-content: center;
          gap: 10px;
          padding: 14px;
          font-size: 1rem;
        }

        .popup-submit-btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        .popup-privacy {
          text-align: center;
          font-size: 0.75rem;
          color: var(--text-muted);
          margin-top: 4px;
        }

        .popup-success {
          padding: 80px 40px;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 16px;
        }

        .success-icon-wrap {
          width: 80px;
          height: 80px;
          background: rgba(20, 184, 166, 0.1);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 8px;
        }

        .text-teal {
          color: #0d9488;
        }
        
        .popup-success h3 {
          font-size: 1.75rem;
          color: var(--dark);
        }
        
        .popup-success p {
          color: var(--text-muted);
          line-height: 1.5;
        }

        /* Floating Button CSS */
        .floating-buttons-container {
          position: fixed;
          bottom: 24px;
          right: 24px;
          z-index: 9998;
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 16px;
        }

        .floating-wa-btn {
          width: 56px;
          height: 56px;
          background: #25D366; /* WhatsApp Green */
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 8px 20px rgba(37, 211, 102, 0.4);
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .floating-wa-btn:hover {
          transform: translateY(-5px);
          box-shadow: 0 12px 25px rgba(37, 211, 102, 0.5);
        }

        .floating-demo-btn {
          position: relative;
          background: var(--grad-primary);
          color: var(--white);
          border: none;
          border-radius: 50px;
          padding: 14px 24px;
          cursor: pointer;
          box-shadow: 0 10px 25px -5px rgba(0, 181, 165, 0.4);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          font-family: inherit;
        }

        .floating-demo-btn:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 30px -5px rgba(0, 181, 165, 0.5);
        }

        .floating-demo-btn .btn-content {
          display: flex;
          align-items: center;
          gap: 10px;
          position: relative;
          z-index: 2;
        }

        .floating-demo-btn .btn-text {
          font-size: 1.05rem;
          font-weight: 700;
        }

        .floating-demo-btn .pulse-ring {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border-radius: 50px;
          background-color: var(--primary);
          z-index: 1;
          animation: pulse-animation 2s infinite;
        }

        @keyframes pulse-animation {
          0% { transform: scale(1); opacity: 0.6; }
          100% { transform: scale(1.3); opacity: 0; }
        }

        @media (max-width: 768px) {
          .modal-split {
            flex-direction: column;
          }
          .modal-marketing {
            padding: 24px;
          }
          .visual-graphic {
            display: none; /* Hide graphic on mobile to save space */
          }
          .stats-row {
            margin-bottom: 0;
          }
          .modal-form-side {
            padding: 24px;
          }
        }
        
        @media (max-width: 480px) {
          .floating-buttons-container {
            bottom: 16px;
            right: 16px;
          }
          .floating-demo-btn {
            padding: 12px 20px;
          }
          .floating-demo-btn .btn-text {
            font-size: 0.95rem;
          }
        }

        @media print {
          .popup-overlay, .floating-buttons-container {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
}
