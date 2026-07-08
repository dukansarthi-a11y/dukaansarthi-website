"use client";
import React from 'react';
import { ShieldCheck, Target, Users, Zap } from 'lucide-react';

export default function AboutUs() {
  return (
    <section className="about-us-section section" id="about">
      <div className="container">
        <div className="about-grid">
          {/* Left Side - Text */}
          <div className="about-content">
            <div className="badge badge-primary">ABOUT DUKAANSARTHI</div>
            <h2 className="with-line">Empowering Indian Businesses With Smart Technology</h2>
            <p className="about-desc">
              At DukaanSarthi, our mission is simple: to democratize technology for retail stores, supermarkets, and manufacturing units across India. We believe that every business, regardless of its size, deserves access to world-class software to manage their operations efficiently.
            </p>
            <p className="about-desc">
              Founded with the vision of solving real-world challenges faced by store owners—like complicated billing, inventory mismanagement, and manual accounting—we built an intuitive, all-in-one ERP platform that feels effortless to use.
            </p>
            
            <div className="about-stats">
              <div className="stat-item">
                <h3>1,000+</h3>
                <span>Happy Clients</span>
              </div>
              <div className="stat-item">
                <h3>27+</h3>
                <span>Sectors Supported</span>
              </div>
              <div className="stat-item">
                <h3>99.9%</h3>
                <span>Uptime</span>
              </div>
            </div>
          </div>

          {/* Right Side - Visuals */}
          <div className="about-visuals">
            <div className="vision-card">
              <div className="vision-icon-wrapper">
                <Target size={28} strokeWidth={2} />
              </div>
              <div>
                <h4>Our Vision</h4>
                <p>To become the digital backbone of millions of SMEs globally by providing intelligent automation.</p>
              </div>
            </div>

            <div className="vision-card">
              <div className="vision-icon-wrapper blue">
                <ShieldCheck size={28} strokeWidth={2} />
              </div>
              <div>
                <h4>Reliability & Trust</h4>
                <p>Your data is 100% secure with us. We use bank-grade encryption to protect your business insights.</p>
              </div>
            </div>

            <div className="vision-card">
              <div className="vision-icon-wrapper emerald">
                <Users size={28} strokeWidth={2} />
              </div>
              <div>
                <h4>Customer First</h4>
                <p>Dedicated 24/7 support team to assist you. Your growth is our ultimate success metric.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .about-us-section {
          background-color: var(--white);
          position: relative;
        }

        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }

        .about-content {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .about-desc {
          font-size: 1.05rem;
          color: var(--text-muted);
          line-height: 1.7;
          margin-bottom: 12px;
        }

        .about-stats {
          display: flex;
          gap: 40px;
          margin-top: 24px;
          padding-top: 24px;
          border-top: 1px solid var(--border);
        }

        .stat-item h3 {
          font-size: 2rem;
          color: var(--primary);
          margin-bottom: 4px;
          font-weight: 800;
        }

        .stat-item span {
          font-size: 0.9rem;
          color: var(--text-main);
          font-weight: 500;
        }

        .about-visuals {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .vision-card {
          background-color: var(--light);
          border: 1px solid var(--border);
          padding: 24px;
          border-radius: var(--radius-md);
          display: flex;
          gap: 20px;
          align-items: flex-start;
          transition: var(--transition);
        }

        .vision-card:hover {
          transform: translateX(10px);
          background-color: var(--white);
          box-shadow: var(--shadow-sm);
          border-color: rgba(var(--primary-rgb), 0.3);
        }

        .vision-icon-wrapper {
          width: 56px;
          height: 56px;
          border-radius: 14px;
          background: linear-gradient(135deg, #f43f5e 0%, #fb923c 100%);
          color: var(--white);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          box-shadow: 0 4px 15px rgba(244, 63, 94, 0.3);
        }

        .vision-icon-wrapper.blue {
          background: linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%);
          box-shadow: 0 4px 15px rgba(59, 130, 246, 0.3);
        }

        .vision-icon-wrapper.emerald {
          background: linear-gradient(135deg, #10b981 0%, #14b8a6 100%);
          box-shadow: 0 4px 15px rgba(16, 185, 129, 0.3);
        }

        .vision-card h4 {
          font-size: 1.15rem;
          color: var(--dark);
          margin-bottom: 8px;
        }

        .vision-card p {
          font-size: 0.9rem;
          color: var(--text-muted);
          line-height: 1.5;
        }

        @media (max-width: 1024px) {
          .about-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .about-stats {
            justify-content: space-between;
          }
        }

        @media (max-width: 576px) {
          .about-stats {
            flex-direction: column;
            gap: 24px;
          }
          .vision-card {
            flex-direction: column;
            align-items: center;
            text-align: center;
          }
        }
      `}</style>
    </section>
  );
}
