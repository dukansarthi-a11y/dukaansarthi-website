"use client";
import React, { useState, useEffect } from 'react';
import { X, Send, Calendar, CheckCircle } from 'lucide-react';

export default function ScrollPopupForm() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    businessType: 'retail' // default
  });

  useEffect(() => {
    const handleScroll = () => {
      if (hasTriggered) return;

      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      const scrollPercentage = (scrollPosition / (documentHeight - windowHeight)) * 100;

      if (scrollPercentage > 50) {
        setIsOpen(true);
        setHasTriggered(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
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
          businessName: 'Via Demo Popup' // Tagging origin
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
      // Even if network fails, we can show success for UI demo purposes if needed,
      // but alerting is safer if they actually rely on DB.
      alert('Network error. Could not save enquiry.');
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-modal fade-in-up">
        <button className="popup-close" onClick={() => setIsOpen(false)} aria-label="Close form">
          <X size={20} />
        </button>

        {!isSubmitted ? (
          <div className="popup-content">
            <div className="popup-header">
              <div className="badge badge-primary popup-badge">
                <Calendar size={14} /> FREE DEMO
              </div>
              <h3>Ready to Grow Your Dukaan?</h3>
              <p>See exactly how DukaanSarthi can automate your shop and boost your sales.</p>
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
                <label>WhatsApp Number</label>
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
                  <>Book My Free Demo <Send size={16} /></>
                )}
              </button>
              <p className="popup-privacy">We respect your privacy. No spam.</p>
            </form>
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

      <style>{`
        .popup-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: rgba(15, 23, 42, 0.6);
          backdrop-filter: blur(4px);
          -webkit-backdrop-filter: blur(4px);
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px;
        }

        .popup-modal {
          background: var(--white);
          width: 100%;
          max-width: 450px;
          border-radius: var(--radius-lg);
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
          position: relative;
          overflow: hidden;
          border: 1px solid var(--border);
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

        .popup-content {
          padding: 40px 32px;
        }

        .popup-header {
          text-align: center;
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
          padding: 60px 32px;
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
          font-size: 1.5rem;
          color: var(--dark);
        }
        
        .popup-success p {
          color: var(--text-muted);
          line-height: 1.5;
        }

        @media (max-width: 480px) {
          .popup-content {
            padding: 32px 24px;
          }
        }
        
        @media print {
          .popup-overlay {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
}
