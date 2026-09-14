import React from 'react';
import { ArrowRight, Play, CheckCircle2, ShieldCheck, Star } from 'lucide-react';

export default function Hero({ 
  title = <>Apne Business Ka <span className="text-gradient">Sarthi</span>.<br />Smart Billing & ERP App</>,
  subtitle = "Run your shop smarter with DukaanSarthi.\n" +
      "Fast billing. Smart inventory. Offline-ready. Real-time control.\n" +
      "Made in India, built for every Dukaandar.",
  badgeText = "Rated 4.8/5 on Google Play Store",
  industry = null
}) {
  let themeStyle = {};
  if (industry === 'kirana') {
    themeStyle = { 
      '--grad-primary': 'linear-gradient(135deg, #16a34a 0%, #22c55e 100%)', 
      '--primary': '#16a34a', 
      '--primary-rgb': '22, 163, 74',
      '--bg-pattern': 'radial-gradient(rgba(22, 163, 74, 0.08) 1.5px, transparent 1.5px)',
      '--bg-size': '24px 24px'
    };
  } else if (industry === 'apparel') {
    themeStyle = { 
      '--grad-primary': 'linear-gradient(135deg, #c026d3 0%, #e879f9 100%)', 
      '--primary': '#c026d3', 
      '--primary-rgb': '192, 38, 211',
      '--bg-pattern': 'repeating-linear-gradient(45deg, rgba(192, 38, 211, 0.02) 0px, rgba(192, 38, 211, 0.02) 1px, transparent 1px, transparent 16px)',
      '--bg-size': '100% 100%'
    };
  } else if (industry === 'restaurant') {
    themeStyle = { 
      '--grad-primary': 'linear-gradient(135deg, #ea580c 0%, #f97316 100%)', 
      '--primary': '#ea580c', 
      '--primary-rgb': '234, 88, 12',
      '--bg-pattern': 'linear-gradient(rgba(234, 88, 12, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(234, 88, 12, 0.03) 1px, transparent 1px)',
      '--bg-size': '40px 40px'
    };
  } else if (industry === 'manufacturing') {
    themeStyle = { 
      '--grad-primary': 'linear-gradient(135deg, #2563eb 0%, #3b82f6 100%)', 
      '--primary': '#2563eb', 
      '--primary-rgb': '37, 99, 235',
      '--bg-pattern': 'repeating-linear-gradient(-45deg, rgba(37, 99, 235, 0.03) 0, rgba(37, 99, 235, 0.03) 1px, transparent 1px, transparent 10px)',
      '--bg-size': '100% 100%'
    };
  }

  return (
    <section className={`hero-section ${industry ? `hero-${industry}` : ''}`} id="home" style={themeStyle}>
      <div className="container hero-container grid-2">
        {/* Left Side Info */}
        <div className="hero-content">
          <div className="badge badge-primary hero-badge">
            <Star size={14} fill="currentColor" /> &nbsp;{badgeText}
          </div>
          <h1 className="hero-title">
            {title}
          </h1>
          <p className="hero-subtitle">
            {subtitle}
          </p>

          {/* Value Props Checklist */}
          <div className="hero-features-list">
            <div className="hero-feature-item">
              <CheckCircle2 size={18} className="icon-teal" />
              <span>1-Second GST Billing & Invoicing</span>
            </div>
            <div className="hero-feature-item">
              <CheckCircle2 size={18} className="icon-teal" />
              <span>Barcode & Smart Stock Management</span>
            </div>
            <div className="hero-feature-item">
              <CheckCircle2 size={18} className="icon-teal" />
              <span>Automatic Credit (Udhaar) Reminders</span>
            </div>
          </div>

          {/* Action buttons */}
          <div className="btn-group hero-btn-group">
            <a href="#contact" className="btn btn-primary">
              Book Free Demo <ArrowRight size={18} />
            </a>
            <a href="#download" className="btn btn-secondary">
              Download Desktop App
            </a>
          </div>

          {/* Play Store & Windows CTA */}
          <div className="hero-store-badges">
            <div className="store-badge">
              <ShieldCheck size={18} className="store-icon" />
              <div>
                <span className="store-label">100% SECURE</span>
                <span className="store-title">ISO 27001 Certified</span>
              </div>
            </div>
            <div className="store-badge">
              <Star size={18} className="store-icon text-yellow" fill="currentColor" />
              <div>
                <span className="store-label">TRUSTED BY</span>
                <span className="store-title">2500+ Retailers</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side 3D Layered Mockups */}
        <div className="hero-visual">
          <div className="visual-wrapper">
            {/* Background Blob Decor */}
            <div className="glow-blob"></div>

            {/* POS Illustration Background */}
            <img 
              src="/pos_isolated.jpg" 
              alt="Modern Smart POS System" 
              className="pos-background-image float-anim"
            />

            {/* Mobile Mockup Card - overlapping */}
            <div className="mockup-mobile card glass-card float-anim-reverse">
              <div className="mobile-header">
                <div className="speaker"></div>
                <div className="camera"></div>
              </div>
              <div className="mobile-body">
                <div className="mobile-branding">
                  <div className="d-logo">D</div>
                  <span>DukaanSarthi</span>
                </div>
                
                <div className="mobile-invoice-card">
                  <div className="invoice-status">
                    <span>Invoice #4582</span>
                    <span className="status-badge">PAID</span>
                  </div>
                  <div className="invoice-amount">₹4,250.00</div>
                  <div className="invoice-divider"></div>
                  <div className="invoice-details">
                    <span>GST (18%): ₹648.30</span>
                    <span>Items: 12 Units</span>
                  </div>
                </div>

                <div className="mobile-quick-actions">
                  <div className="action-dot">+ Bill</div>
                  <div className="action-dot">Stock</div>
                  <div className="action-dot">Udhaar</div>
                </div>
              </div>
            </div>

            {/* Dynamic floating notifications */}
            <div className="floating-notif notif-1 float-anim">
              <div className="notif-icon-box bg-green">₹</div>
              <div>
                <span className="notif-label">Payment Received</span>
                <span className="notif-text">₹12,450 - Verma Wholesalers</span>
              </div>
            </div>

            <div className="floating-notif notif-2 float-anim-reverse">
              <div className="notif-icon-box bg-orange">!</div>
              <div>
                <span className="notif-label">Low Stock Warning</span>
                <span className="notif-text">Aashirvaad Atta (5kg)</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .hero-section {
          padding: 160px 0 100px;
          background: linear-gradient(180deg, rgba(var(--primary-rgb, 0, 181, 165), 0.04) 0%, rgba(10, 102, 194, 0.02) 100%);
          overflow: hidden;
          position: relative;
        }

        .hero-section::before {
          content: "";
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          background-image: var(--bg-pattern, none);
          background-size: var(--bg-size, 20px 20px);
          opacity: 0.6;
          z-index: 0;
          pointer-events: none;
          mask-image: linear-gradient(to bottom, black 40%, transparent 100%);
          -webkit-mask-image: linear-gradient(to bottom, black 40%, transparent 100%);
        }

        .hero-container {
          align-items: center;
          position: relative;
          z-index: 2;
        }

        .hero-badge {
          margin-bottom: 20px;
          display: inline-flex;
          align-items: center;
        }

        .hero-title {
          font-size: 3.5rem;
          line-height: 1.15;
          margin-bottom: 24px;
        }

        .text-gradient {
          background: var(--grad-primary);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .hero-subtitle {
          font-size: 1.2rem;
          line-height: 1.6;
          margin-bottom: 32px;
          max-width: 600px;
        }

        .hero-features-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-bottom: 36px;
        }

        .hero-feature-item {
          display: flex;
          align-items: center;
          gap: 12px;
          font-weight: 500;
          font-size: 1.05rem;
          color: var(--dark-light);
        }

        .icon-teal {
          color: var(--primary);
        }

        .hero-btn-group {
          margin-bottom: 40px;
        }

        .hero-store-badges {
          display: flex;
          gap: 32px;
          border-top: 1px solid var(--border);
          padding-top: 24px;
        }

        .store-badge {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .store-icon {
          color: var(--primary);
          padding: 8px;
          background-color: rgba(var(--primary-rgb, 0, 181, 165), 0.1);
          border-radius: var(--radius-sm);
        }

        .store-icon.text-yellow {
          color: #f59e0b;
          background-color: rgba(245, 158, 11, 0.1);
        }

        .store-label {
          display: block;
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--text-muted);
          letter-spacing: 0.05em;
        }

        .store-title {
          display: block;
          font-weight: 700;
          font-size: 0.95rem;
          color: var(--dark);
        }

        /* 3D Visual Mockups */
        .hero-visual {
          position: relative;
          height: 480px;
        }

        .visual-wrapper {
          position: relative;
          width: 100%;
          height: 100%;
        }

        .glow-blob {
          position: absolute;
          width: 350px;
          height: 350px;
          background: radial-gradient(circle, rgba(var(--primary-rgb, 0, 181, 165), 0.2) 0%, rgba(10, 102, 194, 0.05) 70%);
          border-radius: 50%;
          top: 10%;
          right: 10%;
          z-index: 1;
          filter: blur(25px);
        }

        .pos-background-image {
          position: absolute;
          width: 90%;
          height: 380px;
          left: 0;
          top: 20px;
          z-index: 2;
          object-fit: contain;
          filter: drop-shadow(0 15px 25px rgba(0,0,0,0.1));
          mix-blend-mode: multiply;
        }

        .mockup-header {
          background-color: rgba(255, 255, 255, 0.9);
          padding: 8px 16px;
          display: flex;
          align-items: center;
          border-bottom: 1px solid var(--border);
        }

        .window-dots {
          display: flex;
          gap: 6px;
        }

        .window-dots span {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          display: inline-block;
        }

        .window-dots span:nth-child(1) { background-color: #ef4444; }
        .window-dots span:nth-child(2) { background-color: #eab308; }
        .window-dots span:nth-child(3) { background-color: #22c55e; }

        .window-title {
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--text-muted);
          margin-left: 20px;
        }

        .mockup-body {
          display: flex;
          height: calc(100% - 31px);
        }

        .mockup-sidebar {
          width: 50px;
          background-color: rgba(248, 250, 252, 0.8);
          border-right: 1px solid var(--border);
          padding: 12px;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .sidebar-line {
          height: 6px;
          background-color: var(--border);
          border-radius: 3px;
        }

        .sidebar-line.active {
          background-color: var(--primary);
        }

        .mockup-main {
          flex: 1;
          padding: 16px;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .mockup-summary-row {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
        }

        .summary-block {
          background-color: var(--white);
          padding: 10px;
          border-radius: var(--radius-sm);
          border: 1px solid var(--border);
          display: flex;
          flex-direction: column;
        }

        .summary-block .label {
          font-size: 0.65rem;
          font-weight: 600;
          color: var(--text-muted);
        }

        .summary-block .val {
          font-size: 0.95rem;
          font-weight: 700;
          color: var(--dark);
        }

        .text-danger {
          color: #ef4444 !important;
        }

        .mockup-graph {
          flex: 1;
          background-color: var(--white);
          border-radius: var(--radius-sm);
          border: 1px solid var(--border);
          padding: 8px;
          display: flex;
          align-items: center;
        }

        .chart-svg {
          width: 100%;
          height: 100%;
        }

        /* Mobile Mockup overlapping */
        .mockup-mobile {
          position: absolute;
          width: 220px;
          height: 440px;
          right: -20px;
          bottom: -20px;
          z-index: 3;
          padding: 0;
          border-radius: 40px;
          border: 8px solid #1e293b;
          overflow: hidden;
          box-shadow: 0 25px 50px -12px rgba(0,0,0,0.3);
          background-color: #f8fafc;
        }

        .mobile-header {
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 80px;
          height: 24px;
          background-color: #1e293b;
          border-radius: 0 0 12px 12px;
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 6px;
          z-index: 10;
        }

        .mobile-header .speaker {
          width: 32px;
          height: 4px;
          background-color: #334155;
          border-radius: 4px;
        }

        .mobile-header .camera {
          width: 6px;
          height: 6px;
          background-color: #0f172a;
          border: 2px solid #334155;
          border-radius: 50%;
        }

        .mobile-body {
          padding: 40px 16px 20px;
          display: flex;
          flex-direction: column;
          gap: 16px;
          height: 100%;
          background: linear-gradient(180deg, #ffffff 0%, #f1f5f9 100%);
        }

        .mobile-branding {
          display: flex;
          align-items: center;
          gap: 8px;
          font-weight: 800;
          font-size: 0.95rem;
          color: #0f172a;
        }

        .mobile-branding .d-logo {
          width: 26px;
          height: 26px;
          background: linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%);
          color: #ffffff;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.8rem;
          box-shadow: 0 4px 10px rgba(14, 165, 233, 0.3);
        }

        .mobile-invoice-card {
          background-color: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 16px;
          padding: 16px;
          box-shadow: 0 10px 25px -5px rgba(0,0,0,0.05);
        }

        .invoice-status {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 0.7rem;
          font-weight: 700;
          color: #64748b;
          margin-bottom: 8px;
        }

        .status-badge {
          background-color: #dcfce7;
          color: #166534;
          padding: 4px 8px;
          border-radius: 20px;
          font-size: 0.6rem;
        }

        .invoice-amount {
          font-size: 1.4rem;
          font-weight: 800;
          color: #0f172a;
          margin-bottom: 12px;
        }

        .invoice-divider {
          width: 100%;
          height: 1px;
          background: repeating-linear-gradient(90deg, #cbd5e1, #cbd5e1 4px, transparent 4px, transparent 8px);
          margin-bottom: 12px;
        }

        .invoice-details {
          display: flex;
          flex-direction: column;
          gap: 4px;
          font-size: 0.65rem;
          color: #475569;
          font-weight: 500;
        }

        .mobile-quick-actions {
          display: flex;
          justify-content: space-between;
          gap: 8px;
          margin-top: auto;
        }

        .action-dot {
          flex: 1;
          background-color: #ffffff;
          color: #0f172a;
          font-size: 0.7rem;
          font-weight: 700;
          padding: 12px 0;
          border-radius: 12px;
          text-align: center;
          box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);
          border: 1px solid #e2e8f0;
        }

        .action-dot:first-child {
          background: linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%);
          color: #ffffff;
          border: none;
        }

        /* Floating Notifications */
        .floating-notif {
          position: absolute;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 1);
          padding: 12px 16px;
          border-radius: 50px;
          display: flex;
          align-items: center;
          gap: 12px;
          box-shadow: 0 15px 35px -5px rgba(0,0,0,0.1);
          z-index: 4;
        }

        .notif-1 {
          top: -20px;
          left: -40px;
        }

        .notif-2 {
          top: 60%;
          right: -50px;
        }

        .notif-icon-box {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #ffffff;
          font-weight: 800;
          font-size: 1rem;
          flex-shrink: 0;
        }

        .bg-green { background: linear-gradient(135deg, #10b981 0%, #059669 100%); box-shadow: 0 4px 10px rgba(16, 185, 129, 0.3); }
        .bg-orange { background: linear-gradient(135deg, #f97316 0%, #ea580c 100%); box-shadow: 0 4px 10px rgba(249, 115, 22, 0.3); }

        .notif-label {
          display: block;
          font-size: 0.75rem;
          font-weight: 800;
          color: #0f172a;
          margin-bottom: 2px;
        }

        .notif-text {
          display: block;
          font-size: 0.65rem;
          color: #475569;
          font-weight: 500;
        }

        /* Float Animations */
        .float-anim {
          animation: float 5s ease-in-out infinite;
        }

        .float-anim-reverse {
          animation: float 5s ease-in-out infinite;
          animation-delay: -2.5s;
        }

        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
          100% { transform: translateY(0px); }
        }

        @media (max-width: 1200px) {
          .hero-title { font-size: 3rem; }
          .floating-notif { display: none; }
        }

        @media (max-width: 1024px) {
          .hero-section {
            padding: 120px 0 60px;
            text-align: center;
          }
          .hero-content {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .hero-subtitle {
            margin-left: auto;
            margin-right: auto;
          }
          .hero-features-list {
            align-items: center;
          }
          .hero-store-badges {
            justify-content: center;
          }
          .hero-visual {
            height: 400px;
            margin-top: 40px;
          }
          .pos-background-image {
            left: 5%;
            width: 80%;
          }
          .mockup-mobile {
            right: 5%;
          }
        }

        @media (max-width: 480px) {
          .hero-title { font-size: 2.25rem; }
          .hero-visual {
            height: 320px;
          }
          .pos-background-image {
            height: 220px;
            width: 85%;
          }
          .mockup-mobile {
            width: 140px;
            height: 260px;
            border-width: 4px;
            right: 0px;
            bottom: 0px;
          }
          .mobile-invoice-card {
            padding: 6px;
          }
          .invoice-amount {
            font-size: 0.95rem;
            margin-bottom: 4px;
          }
          .action-dot {
            width: 32px;
            height: 32px;
            font-size: 0.45rem;
          }
          .mobile-body {
            padding: 8px;
            gap: 8px;
          }
        }
      `}</style>
    </section>
  );
}
