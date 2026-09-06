import React from 'react';
import { Users, FileText, CheckCircle, Star } from 'lucide-react';

export default function Stats() {
  const statsData = [
    {
      icon: <Users size={28} />,
      value: "2500+",
      label: "Active Businesses",
      description: "Retailers, wholesalers & distributors trust us daily."
    },
    {
      icon: <FileText size={28} />,
      value: "5 Million+",
      label: "Invoices Printed",
      description: "Fast, accurate, and GST-compliant invoices generated."
    },
    {
      icon: <CheckCircle size={28} />,
      value: "99.99%",
      label: "Offline Sync Reliability",
      description: "Internet goes down? Your billing keeps running offline."
    },
    {
      icon: <Star size={28} fill="currentColor" />,
      value: "4.8 ★",
      label: "Customer Rating",
      description: "Highly rated on the Google Play Store for ease of use."
    }
  ];

  return (
    <section className="stats-section">
      <div className="container">
        <div className="stats-grid grid-4">
          {statsData.map((stat, idx) => (
            <div key={idx} className="stat-card card">
              <div className="stat-icon-wrapper">
                {stat.icon}
              </div>
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
              <div className="stat-desc">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .stats-section {
          padding: 60px 0;
          background-color: var(--white);
          position: relative;
          z-index: 10;
          margin-top: -40px;
        }

        .stats-grid {
          margin-top: 0;
        }

        .stat-card {
          padding: 24px;
          text-align: center;
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(8px);
          border: 1px solid var(--border);
          border-radius: var(--radius-md);
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .stat-icon-wrapper {
          color: var(--primary);
          padding: 12px;
          background-color: rgba(var(--primary-rgb), 0.1);
          border-radius: 50%;
          margin-bottom: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: var(--transition);
        }

        .stat-card:hover .stat-icon-wrapper {
          background-color: var(--primary);
          color: var(--white);
          transform: rotate(5deg) scale(1.1);
        }

        .stat-value {
          font-size: 2.25rem;
          font-weight: 800;
          color: var(--dark);
          margin-bottom: 4px;
          letter-spacing: -0.02em;
        }

        .stat-label {
          font-size: 1rem;
          font-weight: 700;
          color: var(--dark-light);
          margin-bottom: 8px;
        }

        .stat-desc {
          font-size: 0.85rem;
          color: var(--text-muted);
          line-height: 1.4;
        }

        @media (max-width: 1024px) {
          .stats-section {
            margin-top: 0;
            padding: 40px 0;
          }
          .stat-value {
            font-size: 2rem;
          }
        }
      `}</style>
    </section>
  );
}
