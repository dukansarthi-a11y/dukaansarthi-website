"use client";
import React, { useState } from 'react';
import { Phone, Mail, MapPin, Calendar, CheckCircle2, MessageCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    businessName: '',
    businessType: 'retail'
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  React.useEffect(() => {
    const handleSelectSector = (e) => {
      if (e.detail && e.detail.sector) {
        setFormData(prev => ({
          ...prev,
          businessType: e.detail.sector
        }));
      }
    };
    window.addEventListener('select-sector', handleSelectSector);
    return () => window.removeEventListener('select-sector', handleSelectSector);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    setLoading(true);
    setError(null);

    try {
      const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';
      const response = await fetch(`${API_URL}/api/enquiry`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmitted(true);
      } else {
        setError(data.message || 'Failed to submit enquiry. Please try again.');
      }
    } catch (err) {
      console.error('Error submitting form:', err);
      setError('Could not connect to server. Please ensure database and server are running.');
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setFormData({
      name: '',
      phone: '',
      businessName: '',
      businessType: 'retail'
    });
    setError(null);
    setSubmitted(false);
  };

  return (
    <section className="contact-section section section-bg-light" id="contact">
      <div className="container">
        
        {/* Section Grid */}
        <div className="contact-grid grid-2">
          
          {/* Left: Contact Info & Value Props */}
          <div className="contact-info-panel">
            <div className="badge badge-primary">GET IN TOUCH</div>
            <h2 className="with-line">Ready to Transform Your Business?</h2>
            <p className="contact-intro-desc">
              Request a free 1-on-1 online training session. Our experts will call you to explain how you can speed up invoicing and easily file GST returns.
            </p>

            <div className="contact-info-details">
              
              <div className="info-detail-item">
                <div className="info-icon-box"><Phone size={20} /></div>
                <div>
                  <span className="info-label">Call Support (9 AM - 8 PM)</span>
                  <span className="info-value">+91 98732 34071</span>
                </div>
              </div>

              <div className="info-detail-item">
                <div className="info-icon-box"><Mail size={20} /></div>
                <div>
                  <span className="info-label">Email Queries</span>
                  <span className="info-value">support.dukaansarthi@gmail.com</span>
                </div>
              </div>

              <div className="info-detail-item align-start">
                <div className="info-icon-box"><MapPin size={20} /></div>
                <div>
                  <span className="info-label">Bengaluru Office</span>
                  <span className="info-value">Dukaansarthi Softwares LLP, 68 Dharmashri, Dithya Nilaya, Varadharaj Swami layout, 1st Main Singapura Layout, Singapura Village, Varadharaja Nagar, Bengaluru, Karnataka, India 560097</span>
                </div>
              </div>

              <div className="info-detail-item align-start">
                <div className="info-icon-box"><MapPin size={20} /></div>
                <div>
                  <span className="info-label">Head Office</span>
                  <span className="info-value">Vista Tower, Bella Vista building, Noida Extension sector 1, 201306</span>
                </div>
              </div>

              <div className="info-detail-item align-start">
                <div className="info-icon-box"><MapPin size={20} /></div>
                <div>
                  <span className="info-label">Patna Office</span>
                  <span className="info-value">BFSC building, Patna</span>
                </div>
              </div>

            </div>

            <div className="whatsapp-help-card">
              <MessageCircle size={24} className="wa-icon" />
              <div>
                <strong>Need Instant Onboarding Help?</strong>
                <p>Chat with our sales team directly on WhatsApp for instant activation codes.</p>
                <a href="https://wa.me/919873234071" target="_blank" rel="noopener noreferrer" className="wa-link">
                  Chat on WhatsApp &rarr;
                </a>
              </div>
            </div>
          </div>

          {/* Right: Booking Form Card */}
          <div className="contact-form-card card">
            
            {submitted ? (
              <div className="form-success-state text-center">
                <CheckCircle2 size={64} className="success-icon text-gradient" />
                <h3>Request Registered Successfully!</h3>
                <p>
                  Thank you <strong>{formData.name}</strong>. One of our DukaanSarthi onboarding consultants will contact you at <strong>{formData.phone}</strong> within 24 hours.
                </p>
                <button className="btn btn-secondary btn-sm" onClick={handleReset}>
                  Submit Another Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form-element">
                <div className="form-header">
                  <Calendar size={22} className="form-header-icon" />
                  <h3>Book a Free Onboarding Call</h3>
                </div>

                <p className="form-sub-header">Please fill in details to schedule your demo.</p>

                {/* Name */}
                <div className="form-group">
                  <label htmlFor="fullName">Full Name *</label>
                  <input 
                    id="fullName"
                    type="text" 
                    required
                    className="form-control"
                    placeholder="Enter your name..."
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>

                {/* Phone */}
                <div className="form-group">
                  <label htmlFor="phoneNumber">Phone Number *</label>
                  <input 
                    id="phoneNumber"
                    type="tel" 
                    required
                    pattern="[0-9]{10}"
                    className="form-control"
                    placeholder="10-digit mobile number..."
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>

                {/* Business Name */}
                <div className="form-group">
                  <label htmlFor="businessNameInput">Business / Shop Name</label>
                  <input 
                    id="businessNameInput"
                    type="text" 
                    className="form-control"
                    placeholder="E.g., Verma Provision Store..."
                    value={formData.businessName}
                    onChange={(e) => setFormData({...formData, businessName: e.target.value})}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="businessTypeSelect">Business Type</label>
                  <select 
                    id="businessTypeSelect"
                    className="form-control"
                    value={formData.businessType}
                    onChange={(e) => setFormData({...formData, businessType: e.target.value})}
                  >
                    <option value="retail">Retail Shop (General)</option>
                    <option value="retail_bakery">Bakery / Confectionery Shop</option>
                    <option value="retail_sweet">Sweet / Dry Fruits Shop</option>
                    <option value="retail_icecream">Ice Cream / Dairy Parlour</option>
                    <option value="retail_garment">Garment & Apparel Store</option>
                    <option value="retail_shoe">Shoe & Footwear Store</option>
                    <option value="retail_boutique">Fashion Boutique</option>
                    <option value="retail_kirana">Supermarket / Kirana Store</option>
                    <option value="retail_mobile">Mobile & Electronics Store</option>
                    <option value="retail_toys">Toys & Gift Store</option>
                    <option value="retail_books">Book Store & Stationery</option>
                    <option value="mfg_bakery">Bakery & Food Production</option>
                    <option value="mfg_food">Packaged Foods Manufacturing</option>
                    <option value="mfg_garment">Garment & Textile Factory</option>
                    <option value="mfg_shoe">Shoe & Leather Factory</option>
                    <option value="mfg_electronics">Electronics Assembly Unit</option>
                    <option value="mfg_toys">Toy Manufacturing Factory</option>
                    <option value="wholesale">Wholesale Trader / Distributor</option>
                    <option value="manufacturing">Other Manufacturing Unit</option>
                    <option value="service">Service Center / Repair Shop</option>
                  </select>
                </div>

                {error && (
                  <div className="form-error-message">
                    ⚠️ {error}
                  </div>
                )}

                <button 
                  type="submit" 
                  className="btn btn-primary form-submit-btn"
                  disabled={loading}
                >
                  {loading ? "Registering..." : "Schedule My Free Demo"}
                </button>

                <span className="secure-privacy-hint">
                  🔒 We respect privacy. Your phone number will only be used for our onboarding demo.
                </span>
              </form>
            )}

          </div>

        </div>

      </div>

      <style>{`
        .contact-section {
          background-color: var(--white);
        }

        .contact-grid {
          gap: 60px;
          align-items: center;
        }

        /* Left Info Column */
        .contact-info-panel {
          text-align: left;
        }

        .contact-intro-desc {
          font-size: 1.15rem;
          margin-bottom: 32px;
          color: var(--text-muted);
        }

        .contact-info-details {
          display: flex;
          flex-direction: column;
          gap: 24px;
          margin-bottom: 36px;
        }

        .info-detail-item {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .info-detail-item.align-start {
          align-items: flex-start;
        }

        .info-icon-box {
          background-color: rgba(var(--primary-rgb), 0.1);
          color: var(--primary);
          width: 44px;
          height: 44px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .info-label {
          display: block;
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .info-value {
          font-weight: 700;
          font-size: 1.05rem;
          color: var(--dark);
        }

        .whatsapp-help-card {
          display: flex;
          gap: 16px;
          background-color: #e8f5e9;
          border: 1px solid #c8e6c9;
          padding: 20px;
          border-radius: var(--radius-sm);
        }

        .wa-icon {
          color: #2e7d32;
          flex-shrink: 0;
        }

        .whatsapp-help-card strong {
          color: #1b5e20;
          display: block;
          margin-bottom: 4px;
        }

        .whatsapp-help-card p {
          font-size: 0.85rem;
          color: #2e7d32;
          margin-bottom: 12px;
          line-height: 1.4;
        }

        .wa-link {
          font-size: 0.85rem;
          font-weight: 700;
          color: #1b5e20;
        }

        .wa-link:hover {
          text-decoration: underline;
        }

        /* Form Card */
        .contact-form-card {
          padding: 40px;
          box-shadow: var(--shadow-xl);
          background-color: var(--white);
        }

        .form-header {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 8px;
          justify-content: center;
        }

        .form-header-icon {
          color: var(--primary);
        }

        .form-header h3 {
          font-size: 1.35rem;
          color: var(--dark);
        }

        .form-sub-header {
          font-size: 0.9rem;
          color: var(--text-muted);
          margin-bottom: 24px;
        }

        .contact-form-element {
          display: flex;
          flex-direction: column;
        }

         .form-submit-btn {
          width: 100%;
          margin-top: 12px;
          padding: 12px;
        }

        .form-error-message {
          background-color: #fef2f2;
          color: #ef4444;
          border: 1px solid #fee2e2;
          border-radius: var(--radius-sm);
          padding: 10px 14px;
          font-size: 0.85rem;
          font-weight: 600;
          margin-top: 8px;
          margin-bottom: 12px;
          text-align: left;
          line-height: 1.4;
        }

        .secure-privacy-hint {
          display: block;
          font-size: 0.75rem;
          color: var(--text-muted);
          margin-top: 16px;
          text-align: center;
          font-weight: 500;
        }

        /* Success state */
        .form-success-state {
          padding: 40px 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 16px;
        }

        .success-icon {
          animation: float 4s ease-in-out infinite;
        }

        .form-success-state h3 {
          color: var(--dark);
        }

        .form-success-state p {
          font-size: 0.95rem;
          line-height: 1.5;
          margin-bottom: 16px;
        }

        @media (max-width: 480px) {
          .contact-form-card {
            padding: 24px;
          }
        }
      `}</style>
    </section>
  );
}
