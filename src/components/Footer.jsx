import React from 'react';
import Logo from './Logo';
import { Smartphone, Monitor, ChevronRight, ShieldCheck } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="footer-section section-bg-dark" id="download">
      <div className="container footer-container">
        
        {/* Top Section: Branding and Links Grid */}
        <div className="footer-grid">
          
          {/* Col 1: Brand Info */}
          <div className="footer-col-brand">
            <Logo width={180} height={45} colorMode="cyan" className="footer-logo" />
            <p className="brand-pitch">
              DukaanSarthi is India's upcoming smart ERP & accounting software. We empower retail shop owners, wholesale distributors, and manufacturers with rapid GST billing, smart stock management, and automatic credit tracking.
            </p>
            <div className="security-certification">
              <ShieldCheck className="cert-icon" size={16} />
              <span>ISO 27001 Data Security Certified</span>
            </div>
          </div>

          {/* Col 2: Product Links */}
          <div className="footer-col-links">
            <h4>Product</h4>
            <ul>
              <li><a href="#features"><ChevronRight size={12} /> Core Features</a></li>
              <li><a href="#demo"><ChevronRight size={12} /> Interactive Invoicing</a></li>
              <li><a href="#calculator"><ChevronRight size={12} /> ROI Calculator</a></li>
              <li><a href="#pricing"><ChevronRight size={12} /> Pricing Plans</a></li>
            </ul>
          </div>

          {/* Col 3: Company & Support Links */}
          <div className="footer-col-links">
            <h4>Company</h4>
            <ul>
              <li><a href="#contact"><ChevronRight size={12} /> Request Free Demo</a></li>
              <li><a href="#faq"><ChevronRight size={12} /> FAQs Support</a></li>
              <li><a href="#"><ChevronRight size={12} /> Privacy Policy</a></li>
              <li><a href="#"><ChevronRight size={12} /> Terms of Service</a></li>
            </ul>
          </div>

          {/* Col 4: Downloads & Installers */}
          <div className="footer-col-downloads">
            <h4>Get The Application</h4>
            <p className="downloads-text">Download and activate your 7-day free trial on mobile or PC.</p>
            
            <div className="download-buttons-stack">
              {/* Play Store */}
              <a href="#" className="footer-download-btn">
                <Smartphone size={20} className="dl-btn-icon" />
                <div>
                  <span className="dl-sub">DOWNLOAD FOR</span>
                  <span className="dl-main">Android App</span>
                </div>
              </a>

              {/* Windows PC Setup */}
              <a href="#" className="footer-download-btn desktop-btn">
                <Monitor size={20} className="dl-btn-icon" />
                <div>
                  <span className="dl-sub">DOWNLOAD FOR</span>
                  <span className="dl-main">Windows PC</span>
                </div>
              </a>
            </div>
          </div>

        </div>

        <div className="footer-divider"></div>

        {/* Bottom Section: Copyright & Social links */}
        <div className="footer-bottom-row">
          <p className="copyright-text">
            &copy; {new Date().getFullYear()} DukaanSarthi ERP Solutions Private Limited. All rights reserved.
            <br />
            <span className="made-in-india">
  Made with <span className="heart">❤️</span> in India
  <img
      src="https://flagcdn.com/in.svg"
      alt="India"
      className="india-flag"
  />
</span>
          </p>

          <div className="footer-social-links">
            <a href="#" aria-label="Facebook">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
            <a href="#" aria-label="Twitter">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
            </a>
            <a href="#" aria-label="LinkedIn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
            <a href="#" aria-label="YouTube">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17z"/><path d="m10 15 5-3-5-3z"/></svg>
            </a>
          </div>
        </div>

      </div>

      <style>{`
        .footer-section {
          padding: 80px 0 40px 0;
          background: #090d16;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1.5fr;
          gap: 40px;
          text-align: left;
        }

        /* Col 1 Brand */
        .footer-logo {
          margin-bottom: 20px;
          filter: brightness(1.2);
        }

        .brand-pitch {
          font-size: 0.9rem;
          color: #94a3b8;
          line-height: 1.6;
          margin-bottom: 20px;
        }

        .security-certification {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 0.75rem;
          color: #22c55e;
          background-color: rgba(34, 197, 94, 0.1);
          padding: 4px 12px;
          border-radius: 50px;
          font-weight: 600;
        }

        .cert-icon {
          flex-shrink: 0;
        }

        /* Link columns */
        .footer-col-links h4,
        .footer-col-downloads h4 {
          font-size: 1.1rem;
          color: var(--white);
          margin-bottom: 24px;
          font-weight: 700;
        }

        .footer-col-links ul {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .footer-col-links ul li a {
          font-size: 0.9rem;
          color: #94a3b8;
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .footer-col-links ul li a:hover {
          color: var(--primary);
          padding-left: 4px;
        }

        /* Downloads Col */
        .downloads-text {
          font-size: 0.9rem;
          color: #94a3b8;
          margin-bottom: 20px;
          line-height: 1.4;
        }

        .download-buttons-stack {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .footer-download-btn {
          display: flex;
          align-items: center;
          gap: 12px;
          background-color: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          padding: 10px 16px;
          border-radius: var(--radius-sm);
          color: var(--white);
          transition: var(--transition);
        }

        .footer-download-btn:hover {
          background-color: var(--primary);
          border-color: transparent;
          transform: translateY(-2px);
        }

        .desktop-btn:hover {
          background-color: var(--secondary);
        }

        .dl-btn-icon {
          flex-shrink: 0;
        }

        .dl-sub {
          display: block;
          font-size: 0.6rem;
          font-weight: 700;
          color: #cbd5e1;
          letter-spacing: 0.05em;
        }

        .dl-main {
          display: block;
          font-size: 0.9rem;
          font-weight: 800;
        }

        .footer-divider {
          height: 1px;
          background-color: rgba(255, 255, 255, 0.05);
          margin: 48px 0 28px 0;
        }

        .footer-bottom-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 20px;
        }

        .copyright-text {
          font-size: 0.85rem;
          color: #64748b;
          text-align: left;
        }

        .footer-social-links {
          display: flex;
          gap: 16px;
        }

        .footer-social-links a {
          color: #64748b;
          background-color: rgba(255, 255, 255, 0.03);
          width: 36px;
          height: 36px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: var(--transition);
        }

        .footer-social-links a:hover {
          color: var(--primary);
          background-color: rgba(255, 255, 255, 0.1);
          transform: translateY(-2px);
        }

        @media (max-width: 1024px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr;
            gap: 40px;
          }
        }

        @media (max-width: 600px) {
          .footer-grid {
            grid-template-columns: 1fr;
          }
          .footer-bottom-row {
            flex-direction: column;
            text-align: center;
          }
          .copyright-text {
            text-align: center;
          }
        }
        
        .made-in-india {
  display: inline-block;
  margin-top: 8px;
  color: #94a3b8;
  font-size: 0.82rem;
  font-weight: 500;
}

.heart {
  display: inline-block;
  animation: heartbeat 1.5s ease-in-out infinite;
}

@keyframes heartbeat {
  0%, 100% {
    transform: scale(1);
  }
  15% {
    transform: scale(1.2);
  }
  30% {
    transform: scale(1);
  }
  45% {
    transform: scale(1.2);
  }
  60% {
    transform: scale(1);
  }
}

.india-flag{
  width:18px;
  height:13px;
  margin-left:6px;
  vertical-align:middle;
  border-radius:2px;
  box-shadow:0 0 2px rgba(255,255,255,.2);
}
      `}</style>
    </footer>
  );
}
