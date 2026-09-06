"use client";
import React from 'react';
import { Image, WifiOff, ScanLine, Tags, ChefHat, ShoppingCart } from 'lucide-react';

export default function PosFeatures() {
  const features = [
    {
      id: 'image-pos',
      icon: <Image size={32} strokeWidth={2} />,
      title: 'Image-Based POS',
      description: 'Lightning-fast checkout with our intuitive, touch-friendly image grid. Add items to bill instantly by just tapping product images, eliminating the need to search or scan.',
      colorClass: 'feature-color-blue'
    },
    {
      id: 'offline-pos',
      icon: <WifiOff size={32} strokeWidth={2} />,
      title: 'Offline POS Billing',
      description: 'Internet down? No problem. Continue billing your customers without any interruptions. Your data auto-syncs securely to the cloud the moment you come back online.',
      colorClass: 'feature-color-emerald'
    },
    {
      id: 'kot',
      icon: <ChefHat size={32} strokeWidth={2} />,
      title: 'Smart KOT Management',
      description: 'Streamline restaurant & cafe operations with automated Kitchen Order Tickets. Route orders directly to the kitchen display or printer instantly.',
      colorClass: 'feature-color-amber'
    },
    {
      id: 'ocr',
      icon: <ScanLine size={32} strokeWidth={2} />,
      title: 'AI OCR Purchase Entry',
      description: 'Stop typing manual purchase bills. Simply upload a photo or PDF of your vendor invoice, and our intelligent OCR automatically reads and fills the data into your system.',
      colorClass: 'feature-color-purple'
    },
    {
      id: 'discounts',
      icon: <Tags size={32} strokeWidth={2} />,
      title: 'Advanced Discounts & Offers',
      description: 'Run powerful campaigns like BOGO, happy hour pricing, festival discounts, and combo offers. Attract more customers with dynamic pricing rules and loyalty points.',
      colorClass: 'feature-color-rose'
    },
    {
      id: 'omnichannel',
      icon: <ShoppingCart size={32} strokeWidth={2} />,
      title: 'Omnichannel Integration',
      description: 'Sell seamlessly across multiple platforms. Manage your retail store, custom e-commerce website, and online marketplaces from a single unified dashboard.',
      colorClass: 'feature-color-teal'
    }
  ];

  return (
    <section className="pos-features-section section">
      <div className="container">
        <div className="section-header text-center">
          <div className="badge badge-primary">INNOVATIVE TECHNOLOGIES</div>
          <h2 className="with-line center">Smart POS Features Built For Speed</h2>
          <p className="section-subtitle">
            Leverage cutting-edge automation to minimize billing time, reduce human errors, and maximize your store&apos;s operational efficiency.
          </p>
        </div>

        <div className="pos-features-grid">
          {features.map((feature) => (
            <div key={feature.id} className="pos-feature-card">
              <div className={`pos-feature-icon-wrapper ${feature.colorClass}`}>
                {feature.icon}
              </div>
              <h3 className="pos-feature-title">{feature.title}</h3>
              <p className="pos-feature-desc">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .pos-features-section {
          background-color: #fafbfc;
          position: relative;
        }
        
        .pos-features-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          justify-content: center;
          gap: 24px;
          margin-top: 40px;
        }

        .pos-feature-card {
          background-color: var(--white);
          border: 1px solid var(--border);
          border-radius: var(--radius-md);
          padding: 32px 24px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          transition: var(--transition);
          box-shadow: 0 4px 15px rgba(0,0,0,0.02);
        }

        .pos-feature-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(0,0,0,0.08);
          border-color: rgba(var(--primary-rgb), 0.3);
        }

        .pos-feature-icon-wrapper {
          width: 72px;
          height: 72px;
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 24px;
          color: var(--white);
          box-shadow: 0 8px 20px rgba(0,0,0,0.1);
        }

        .feature-color-blue { background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%); box-shadow: 0 8px 20px rgba(59, 130, 246, 0.3); }
        .feature-color-emerald { background: linear-gradient(135deg, #10b981 0%, #059669 100%); box-shadow: 0 8px 20px rgba(16, 185, 129, 0.3); }
        .feature-color-purple { background: linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%); box-shadow: 0 8px 20px rgba(139, 92, 246, 0.3); }
        .feature-color-rose { background: linear-gradient(135deg, #f43f5e 0%, #e11d48 100%); box-shadow: 0 8px 20px rgba(244, 63, 94, 0.3); }
        .feature-color-amber { background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%); box-shadow: 0 8px 20px rgba(245, 158, 11, 0.3); }
        .feature-color-teal { background: linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%); box-shadow: 0 8px 20px rgba(14, 165, 233, 0.3); }

        .pos-feature-title {
          font-size: 1.25rem;
          color: var(--dark);
          font-weight: 700;
          margin-bottom: 16px;
        }

        .pos-feature-desc {
          font-size: 0.95rem;
          color: var(--text-muted);
          line-height: 1.6;
        }

        @media (max-width: 1024px) {
          .pos-features-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
          }
        }

        @media (max-width: 576px) {
          .pos-features-grid {
            grid-template-columns: 1fr;
          }
          .pos-feature-card {
            padding: 24px 20px;
          }
        }
      `}</style>
    </section>
  );
}
