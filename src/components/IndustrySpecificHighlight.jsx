import React from 'react';
import { Store, ShoppingBag, Utensils, Factory, CheckCircle2 } from 'lucide-react';

export default function IndustrySpecificHighlight({ industry }) {
  if (!industry) return null;

  const contentMap = {
    kirana: {
      icon: <Store size={40} className="industry-icon" />,
      title: "Built Specifically for Grocery & Kirana Stores",
      description: "Manage thousands of FMCG items effortlessly. DukaanSarthi handles loose items, packed goods, and expiry dates so you never lose money on expired stock.",
      features: [
        "Fast Barcode Scanning for quick checkout",
        "Auto-update Udhaar Khata (Credit Book)",
        "Stock Alerts for daily essentials",
        "WhatsApp Payment Reminders to customers"
      ]
    },
    apparel: {
      icon: <ShoppingBag size={40} className="industry-icon" />,
      title: "The Ultimate ERP for Garment & Footwear Retailers",
      description: "Apparel billing is complex with multiple sizes, colors, and brands. Our matrix inventory system makes it simple to track every variation.",
      features: [
        "Size & Color Matrix Inventory",
        "Seasonal Discount & Offer Management",
        "Barcode & QR Code label generation",
        "Sales Staff Performance Tracking"
      ]
    },
    restaurant: {
      icon: <Utensils size={40} className="industry-icon" />,
      title: "Complete Restaurant POS & Billing",
      description: "From QSRs to Fine Dining, handle rush hours smoothly with fast KOTs, table management, and Zomato/Swiggy order integration.",
      features: [
        "Kitchen Order Ticket (KOT) Printing",
        "Dine-in Table & Waiter Management",
        "Recipe & Raw Material Stock tracking",
        "Quick Token System for fast food"
      ]
    },
    manufacturing: {
      icon: <Factory size={40} className="industry-icon" />,
      title: "Smart ERP for Small Manufacturers",
      description: "Take control of your production line. Track raw materials in, finished goods out, and calculate exact production costs to protect your margins.",
      features: [
        "Bill of Materials (BOM) & Recipes",
        "Raw Material to Finished Good tracking",
        "Multi-godown & Warehouse management",
        "Batch tracking & Quality Control"
      ]
    }
  };

  const data = contentMap[industry];
  if (!data) return null;

  return (
    <section className="industry-highlight-section">
      <div className="container">
        <div className="highlight-card">
          <div className="highlight-icon-wrapper">
            {data.icon}
          </div>
          <div className="highlight-content">
            <h2>{data.title}</h2>
            <p>{data.description}</p>
            <div className="highlight-features">
              {data.features.map((feat, idx) => (
                <div key={idx} className="h-feat-item">
                  <CheckCircle2 size={18} className="text-primary" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .industry-highlight-section {
          padding: 60px 0 0 0;
          background: var(--light);
        }

        .highlight-card {
          background: var(--white);
          border-radius: 16px;
          padding: 40px;
          display: flex;
          gap: 40px;
          align-items: center;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.05);
          border: 1px solid var(--border);
          transform: translateY(-20px);
        }

        .highlight-icon-wrapper {
          width: 100px;
          height: 100px;
          background: var(--grad-primary);
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          box-shadow: 0 10px 20px rgba(0, 181, 165, 0.2);
        }

        .industry-icon {
          color: var(--white);
        }

        .highlight-content h2 {
          font-size: 2rem;
          color: var(--dark);
          margin-bottom: 12px;
        }

        .highlight-content p {
          font-size: 1.05rem;
          color: var(--text-muted);
          line-height: 1.6;
          margin-bottom: 24px;
        }

        .highlight-features {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }

        .h-feat-item {
          display: flex;
          align-items: center;
          gap: 10px;
          font-weight: 600;
          color: var(--dark-light);
          font-size: 0.95rem;
        }

        .text-primary {
          color: var(--primary);
        }

        @media (max-width: 768px) {
          .highlight-card {
            flex-direction: column;
            text-align: center;
            padding: 30px 20px;
            gap: 24px;
          }
          .highlight-features {
            grid-template-columns: 1fr;
            text-align: left;
            margin-top: 20px;
          }
        }
      `}</style>
    </section>
  );
}
