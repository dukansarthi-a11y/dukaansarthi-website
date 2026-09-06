"use client";
import React from 'react';
import { clientCompanies } from '../data/content';

export default function CompaniesMarquee() {
  // We duplicate the companies array for the infinite scroll effect
  const marqueeItems = [...clientCompanies, ...clientCompanies, ...clientCompanies];

  return (
    <section className="marquee-section">
      <div className="container">
        <p className="marquee-label">TRUSTED BY 2500+ RETAIL BUSINESSES ACROSS INDIA</p>
      </div>
      
      <div className="marquee-container">
        <div className="marquee-track">
          {marqueeItems.map((company, index) => (
            <div key={`${company.id}-${index}`} className="marquee-item glass-card">
              <div className="company-logo-placeholder">
                {company.logoUrl ? (
                  <img 
                    src={company.logoUrl} 
                    alt={company.name} 
                    style={{ maxHeight: '40px', maxWidth: '140px', objectFit: 'contain' }}
                  />
                ) : (
                  <span className="logo-text">{company.logoText}</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .marquee-section {
          padding: 40px 0;
          background-color: var(--light);
          border-top: 1px solid var(--border);
          border-bottom: 1px solid var(--border);
          overflow: hidden;
        }

        .marquee-label {
          text-align: center;
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--text-muted);
          letter-spacing: 0.05em;
          margin-bottom: 30px;
        }

        .marquee-container {
          width: 100%;
          overflow: hidden;
          position: relative;
        }

        /* Fading edges effect for the marquee */
        .marquee-container::before,
        .marquee-container::after {
          content: '';
          position: absolute;
          top: 0;
          width: 100px;
          height: 100%;
          z-index: 2;
          pointer-events: none;
        }

        .marquee-container::before {
          left: 0;
          background: linear-gradient(to right, var(--light) 0%, transparent 100%);
        }

        .marquee-container::after {
          right: 0;
          background: linear-gradient(to left, var(--light) 0%, transparent 100%);
        }

        .marquee-track {
          display: flex;
          width: max-content;
          animation: marquee-scroll 40s linear infinite;
        }

        .marquee-track:hover {
          animation-play-state: paused;
        }

        @keyframes marquee-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); } /* Translates exactly one full original list out of the 3 duplicated ones */
        }

        .marquee-item {
          margin: 0 24px;
          padding: 16px 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          min-width: 180px;
          height: 80px;
          background: var(--white);
          border: 1px solid var(--border);
          border-radius: var(--radius-sm);
          box-shadow: var(--shadow-sm);
          transition: var(--transition);
          cursor: default;
        }

        .marquee-item:hover {
          transform: scale(1.05);
          box-shadow: var(--shadow-md);
          border-color: rgba(var(--primary-rgb), 0.3);
        }

        .company-logo-placeholder {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .logo-text {
          font-family: var(--font-family);
          font-size: 1.15rem;
          font-weight: 900;
          letter-spacing: 1px;
          color: var(--dark-light);
          opacity: 0.8;
          transition: var(--transition);
        }

        .marquee-item:hover .logo-text {
          color: var(--primary);
          opacity: 1;
        }

        @media (max-width: 768px) {
          .marquee-item {
            margin: 0 16px;
            padding: 12px 24px;
            min-width: 140px;
            height: 60px;
          }
          .logo-text {
            font-size: 0.9rem;
          }
          .marquee-container::before,
          .marquee-container::after {
            width: 40px;
          }
        }
      `}</style>
    </section>
  );
}
