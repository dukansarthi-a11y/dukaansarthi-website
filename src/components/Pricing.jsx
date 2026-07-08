"use client";
import React, { useState } from 'react';
import { Check, X, ShieldAlert, Layers, QrCode, FileText, Smartphone, MessageCircle, BarChart2, ShoppingCart, Globe, Link, ChefHat } from 'lucide-react';

export default function Pricing() {
  const [activeTab, setActiveTab] = useState('retail'); // 'retail' or 'ecomm'
  const [billingPeriod, setBillingPeriod] = useState('yearly'); // 'yearly' or 'lifetime' (10 Years)

  const retailPlans = [
    {
      name: "DukaanSarthi Basic",
      description: "Perfect for single-store retail billing, credit ledger (Khata) and barcode scanning.",
      price: {
        yearly: 7999,
        lifetime: 15999
      },
      renewal: "₹2,999",
      ctaText: "Book a Free Demo",
      features: [
        { text: "3 Users Login License", included: true },
        { text: "1 Store / Location Setup", included: true },
        { text: "Unlimited GST & Non-GST Bills", included: true },
        { text: "Standard Barcode Printing & Scanning", included: true },
        { text: "Accounting & Cashbook Ledgers", included: true },
        { text: "Excel & CSV Report Exports", included: true },
        { text: "Manual WhatsApp PDF sharing", included: true },
        { text: "Automatic SMS Invoice Alerts", included: false },
        { text: "Automatic WhatsApp Alerts", included: false },
        { text: "E-Way & E-Invoicing API Integration", included: false }
      ]
    },
    {
      name: "DukaanSarthi Advanced",
      description: "Advanced inventory management with automatic supplier sync, loyalty program, and transactional SMS alerts.",
      price: {
        yearly: 11299,
        lifetime: 23999
      },
      renewal: "₹3,999",
      popular: true,
      ctaText: "Start 7-Day Trial",
      features: [
        { text: "10 Users Login License", included: true },
        { text: "1 Store with Multi-Device Sync", included: true },
        { text: "Unlimited GST & Non-GST Bills", included: true },
        { text: "Advanced Inventory & Purchase Import", included: true },
        { text: "Collect Payment via Dynamic QR Code", included: true },
        { text: "5,000 Free Transactional SMS / year", included: true },
        { text: "Loyalty Points & Membership Program", included: true },
        { text: "Staff Wise Permission Management", included: true },
        { text: "Automatic WhatsApp Invoice Sharing", included: false },
        { text: "E-Way & E-Invoicing API Integration", included: false }
      ]
    },
    {
      name: "DukaanSarthi Enterprise Plus",
      description: "Complete ERP automation for multi-outlet showrooms, automatic WhatsApp integrations, and E-Way bills.",
      price: {
        yearly: 19499,
        lifetime: 31999
      },
      renewal: "₹4,999",
      ctaText: "Contact for Custom Setup",
      features: [
        { text: "Unlimited Users Login License", included: true },
        { text: "Multi-Store Sync & Stock Transfers", included: true },
        { text: "Unlimited GST & Non-GST Bills", included: true },
        { text: "Automatic WhatsApp & Email Alerts", included: true },
        { text: "E-Way Bill & E-Invoicing (Direct GST API)", included: true },
        { text: "Dedicated Android App for Owner Dashboard", included: true },
        { text: "Hourly Cloud Backup & DB Recovery", included: true },
        { text: "Custom Financial Report Export", included: true },
        { text: "Integrate WooCommerce/Shopify Integration", included: true },
        { text: "Priority Support & Training Sessions", included: true },
        { text: "KOT & Image POS Module (Paid Add-on)", included: false }
      ]
    }
  ];

  const ecommPlans = [
    {
      name: "Shopify Connect",
      description: "Sync your physical store inventory, billing, and accounting directly with your Shopify online store.",
      price: 30999,
      renewal: "₹8,999",
      validity: "1 Year Validity",
      ctaText: "Connect Shopify Store",
      features: [
        { text: "1 Outlet ERP Connected with Shopify", included: true },
        { text: "Unlimited Users License in ERP", included: true },
        { text: "Two-way Product, Price & Category Sync", included: true },
        { text: "Real-time Stock Updates (ERP → Shopify)", included: true },
        { text: "Auto-Import Shopify Orders into ERP Sales", included: true },
        { text: "Invoice Generation from ERP for Shopify Orders", included: true },
        { text: "Automatic Order Status Sync", included: true },
        { text: "5,000 Transactional SMS & WhatsApp Alerts", included: true },
        { text: "E-way Bill / E-Invoice Direct GST API", included: true },
        { text: "Point of Sales (Touch POS) Module", included: true }
      ]
    },
    {
      name: "WooCommerce Connect",
      description: "Best for WordPress WooCommerce stores needing robust backend controls, offline sync, and stock updates.",
      price: 30999,
      renewal: "₹8,999",
      popular: true,
      validity: "1 Year Validity",
      ctaText: "Connect WooCommerce Store",
      features: [
        { text: "1 Outlet ERP Connected with WooCommerce", included: true },
        { text: "Unlimited Users License in ERP", included: true },
        { text: "Two-way Product & Category Mapping", included: true },
        { text: "Real-time Stock Updates (ERP → Woo)", included: true },
        { text: "Auto-Import WooCommerce Orders into ERP", included: true },
        { text: "Invoice & Thermal Receipt Printing", included: true },
        { text: "Customer Creation in ERP from Checkouts", included: true },
        { text: "5,000 Transactional SMS & WhatsApp Alerts", included: true },
        { text: "E-way Bill / E-Invoice Direct GST API", included: true },
        { text: "Point of Sales (Touch POS) Module", included: true }
      ]
    },
    {
      name: "Marketplace Omnichannel",
      description: "Unified control for selling on Amazon, Flipkart, Myntra, Shopify & retail stores simultaneously.",
      price: 30999,
      renewal: "₹12,999",
      validity: "1 Year Validity",
      ctaText: "Connect EasyEcom Channels",
      features: [
        { text: "Connected with EasyEcom Multi-Channel", included: true },
        { text: "Sync Amazon, Flipkart, Myntra & more", included: true },
        { text: "Unlimited Users License in ERP", included: true },
        { text: "Real-time Multi-Channel Inventory Updates", included: true },
        { text: "Centralized Order Processing from ERP", included: true },
        { text: "Automatic Customer Ledger Posting", included: true },
        { text: "E-way Bill / E-Invoice Direct GST API", included: true },
        { text: "Barcode Generation & Multi-Store Stock", included: true },
        { text: "Priority Support & Omnichannel Training", included: true },
        { text: "EasyEcom subscription plan required", included: true }
      ]
    }
  ];

  const addons = [
    {
      icon: <ChefHat size={22} className="addon-icon" />,
      name: "Restaurant KOT & Image POS",
      price: "₹4,999 (excluding Image POS)",
      type: "Per Year",
      description: "Enable touch-friendly image billing and automatic Kitchen Order Ticket routing."
    },
    {
      icon: <Layers size={22} className="addon-icon" />,
      name: "Custom Barcode Formats",
      price: "₹1,599",
      type: "One-time Payment",
      description: "Get custom-designed barcode tags tailored to your industry (garments, jewellery, groceries, etc.)."
    },
    {
      icon: <FileText size={22} className="addon-icon" />,
      name: "Custom Accounting Reports",
      price: "₹2,599",
      type: "One-time Payment",
      description: "Tailor-made reports for your Chartered Accountant (CA) or business intelligence needs."
    },
    {
      icon: <MessageCircle size={22} className="addon-icon" />,
      name: "WhatsApp API Gateway",
      price: "₹1,299",
      type: "Per Year",
      description: "Send automated messages, updates and invoices using your own official WhatsApp API number."
    },
    {
      icon: <Smartphone size={22} className="addon-icon" />,
      name: "Field Salesman App (Order App)",
      price: "₹3,599",
      type: "Per Year",
      description: "Dedicated mobile app for your salesmen to take orders on the field, which sync instantly."
    },
    {
      icon: <QrCode size={22} className="addon-icon" />,
      name: "Customer E-Commerce App",
      price: "₹7,599",
      type: "Per Year",
      description: "Get a branded Android App on Google Play Store for your customers to order online directly."
    },
    {
      icon: <BarChart2 size={22} className="addon-icon" />,
      name: "Shopify / WooCommerce Sync",
      price: "₹5,999",
      type: "Per Year",
      description: "Automatically sync your physical store's inventory and orders with your online website."
    }
  ];

  return (
    <section className="pricing-section section" id="pricing">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header text-center">
          <div className="badge badge-primary">FLEXIBLE BUSINESS PLANS</div>
          <h2 className="with-line center">Simple Plans, Transparent Pricing</h2>
          <p className="section-subtitle">
            Wide range of online plans based on your business needs. Compare plans and select features that scale with your Dukaan.
          </p>

          {/* Category Tabs: Retail vs E-Commerce */}
          <div className="pricing-category-tabs">
            <button 
              className={`category-tab-btn ${activeTab === 'retail' ? 'active' : ''}`}
              onClick={() => setActiveTab('retail')}
            >
              <ShoppingCart size={18} /> Retail Billing Plans
            </button>
            <button 
              className={`category-tab-btn ${activeTab === 'ecomm' ? 'active' : ''}`}
              onClick={() => setActiveTab('ecomm')}
            >
              <Globe size={18} /> E-Comm Connect (Omnichannel)
            </button>
          </div>

          {/* Pricing Toggle Switch (Only for Retail Plans) */}
          {activeTab === 'retail' && (
            <div className="pricing-toggle-container">
              <span className={`toggle-label ${billingPeriod === 'yearly' ? 'active' : ''}`}>1 Year Validity</span>
              <button 
                className={`toggle-switch ${billingPeriod === 'lifetime' ? 'yearly-active' : ''}`}
                onClick={() => setBillingPeriod(billingPeriod === 'yearly' ? 'lifetime' : 'yearly')}
                aria-label="Toggle pricing period"
              >
                <span className="toggle-slider"></span>
              </button>
              <span className={`toggle-label ${billingPeriod === 'lifetime' ? 'active' : ''}`}>
                3 Years Plan <span className="discount-tag">No AMC (Save 30%)</span>
              </span>
            </div>
          )}

          {activeTab === 'ecomm' && (
            <div className="pricing-info-tag">
              <Link size={14} /> Synchronize stock, items, and sales channels automatically. All e-Comm plans include 1 Year validity.
            </div>
          )}
        </div>

        {/* Pricing Cards Grid */}
        <div className="pricing-grid grid-3">
          {activeTab === 'retail' ? (
            retailPlans.map((plan, idx) => {
              const currentPrice = billingPeriod === 'yearly' ? plan.price.yearly : plan.price.lifetime;
              const priceDisplay = `₹${currentPrice.toLocaleString('en-IN')}`;
              const validityText = billingPeriod === 'yearly' ? "1 Year Validity" : "3 Years Validity";
              const renewalText = `Renew at just ${plan.renewal} + GST per year after validity`;

              return (
                <div key={idx} className={`pricing-card card ${plan.popular ? 'popular' : ''}`}>
                  {plan.popular && <span className="popular-badge">RECOMMENDED</span>}
                  
                  <div className="plan-header">
                    <h4 className="plan-name">{plan.name}</h4>
                    <p className="plan-desc">{plan.description}</p>
                    
                    <div className="plan-price-row">
                      <span className="plan-price text-gradient">{priceDisplay}</span>
                      <div className="plan-validity-box">
                        <span className="plan-subtext">{validityText}</span>
                        <span className="plan-renewal-sub">{renewalText}</span>
                      </div>
                    </div>
                  </div>

                  <div className="plan-divider"></div>

                  <div className="plan-features-list">
                    {plan.features.map((feature, fIdx) => (
                      <div key={fIdx} className={`plan-feature-item ${!feature.included ? 'disabled' : ''}`}>
                        {feature.included ? (
                          <Check size={18} className="feat-icon-check" />
                        ) : (
                          <X size={18} className="feat-icon-cross" />
                        )}
                        <span>{feature.text}</span>
                      </div>
                    ))}
                  </div>

                  <a 
                    href="#contact" 
                    className={`btn plan-cta-btn ${plan.popular ? 'btn-primary' : 'btn-secondary'}`}
                  >
                    {plan.ctaText}
                  </a>
                </div>
              );
            })
          ) : (
            ecommPlans.map((plan, idx) => {
              const priceDisplay = `₹${plan.price.toLocaleString('en-IN')}`;
              const renewalText = `Renew at just ${plan.renewal} + GST per year after validity`;

              return (
                <div key={idx} className={`pricing-card card ${plan.popular ? 'popular' : ''}`}>
                  {plan.popular && <span className="popular-badge">RECOMMENDED</span>}
                  
                  <div className="plan-header">
                    <h4 className="plan-name">{plan.name}</h4>
                    <p className="plan-desc">{plan.description}</p>
                    
                    <div className="plan-price-row">
                      <span className="plan-price text-gradient">{priceDisplay}</span>
                      <div className="plan-validity-box">
                        <span className="plan-subtext">{plan.validity}</span>
                        <span className="plan-renewal-sub">{renewalText}</span>
                      </div>
                    </div>
                  </div>

                  <div className="plan-divider"></div>

                  <div className="plan-features-list">
                    {plan.features.map((feature, fIdx) => (
                      <div key={fIdx} className={`plan-feature-item ${!feature.included ? 'disabled' : ''}`}>
                        {feature.included ? (
                          <Check size={18} className="feat-icon-check" />
                        ) : (
                          <X size={18} className="feat-icon-cross" />
                        )}
                        <span>{feature.text}</span>
                      </div>
                    ))}
                  </div>

                  <a 
                    href="#contact" 
                    className={`btn plan-cta-btn ${plan.popular ? 'btn-primary' : 'btn-secondary'}`}
                  >
                    {plan.ctaText}
                  </a>
                </div>
              );
            })
          )}
        </div>

        {/* Addon Modules Section */}
        <div className="addons-section">
          <div className="text-center addons-header">
            <div className="badge badge-primary">CUSTOM ADD-ON MODULES</div>
            <h3 className="addons-title">Pay Only For What You Need</h3>
            <p className="addons-subtitle">
              Need custom barcodes, e-commerce sync, or dedicated apps? Add these modules individually to any plan.
            </p>
          </div>

          <div className="addons-grid grid-3">
            {addons.map((addon, idx) => (
              <div key={idx} className="addon-card card">
                <div className="addon-card-header">
                  <div className="addon-icon-box">{addon.icon}</div>
                  <div className="addon-price-box">
                    <span className="addon-price">{addon.price}</span>
                    <span className="addon-type">{addon.type}</span>
                  </div>
                </div>
                <h4 className="addon-name">{addon.name}</h4>
                <p className="addon-desc">{addon.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="pricing-safety-card">
          <div className="safety-icon-box"><ShieldAlert size={20} /></div>
          <p>
            <strong>All plans include:</strong> Unlimited GST Invoices, offline database backup, secure data encryption, and regular product upgrades. 18% GST applicable extra on all plans.
          </p>
        </div>

      </div>

      <style>{`
        .pricing-section {
          background-color: var(--white);
        }

        .pricing-category-tabs {
          display: inline-flex;
          gap: 12px;
          margin-top: 32px;
          background-color: var(--light);
          padding: 6px;
          border-radius: 12px;
          border: 1px solid var(--border);
        }

        .category-tab-btn {
          font-family: var(--font-family);
          font-size: 0.95rem;
          font-weight: 700;
          padding: 12px 24px;
          border-radius: 8px;
          border: none;
          cursor: pointer;
          transition: var(--transition);
          display: flex;
          align-items: center;
          gap: 8px;
          background-color: transparent;
          color: var(--text-muted);
        }

        .category-tab-btn.active {
          background: var(--grad-primary);
          color: var(--white);
          box-shadow: var(--shadow-md);
        }

        .pricing-toggle-container {
          display: inline-flex;
          align-items: center;
          gap: 16px;
          background-color: var(--light);
          padding: 8px 16px;
          border-radius: 50px;
          border: 1px solid var(--border);
          margin-top: 24px;
        }

        .pricing-info-tag {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background-color: rgba(var(--secondary-rgb), 0.05);
          color: var(--secondary);
          border: 1px solid rgba(var(--secondary-rgb), 0.1);
          padding: 8px 16px;
          border-radius: 50px;
          font-size: 0.85rem;
          font-weight: 600;
          margin-top: 24px;
        }

        .toggle-label {
          font-size: 0.95rem;
          font-weight: 700;
          color: var(--text-muted);
          transition: var(--transition);
        }

        .toggle-label.active {
          color: var(--dark);
        }

        .discount-tag {
          background: var(--grad-primary);
          color: var(--white);
          font-size: 0.7rem;
          padding: 2px 8px;
          border-radius: 10px;
          font-weight: 700;
          margin-left: 4px;
        }

        .toggle-switch {
          width: 50px;
          height: 26px;
          background-color: var(--border);
          border-radius: 13px;
          border: none;
          cursor: pointer;
          position: relative;
          outline: none;
          transition: var(--transition);
        }

        .toggle-slider {
          width: 20px;
          height: 20px;
          background-color: var(--white);
          border-radius: 50%;
          position: absolute;
          left: 3px;
          top: 3px;
          transition: var(--transition);
          box-shadow: var(--shadow-sm);
        }

        .toggle-switch.yearly-active {
          background: var(--grad-primary);
        }

        .toggle-switch.yearly-active .toggle-slider {
          left: 27px;
        }

        /* Pricing Grid */
        .pricing-grid {
          margin-top: 40px;
          align-items: stretch;
        }

        .pricing-card {
          position: relative;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 40px 32px;
          background-color: var(--white);
        }

        .pricing-card.popular {
          border: 2px solid var(--primary);
          box-shadow: var(--shadow-xl);
          transform: scale(1.03);
        }

        .popular-badge {
          position: absolute;
          top: -15px;
          left: 50%;
          transform: translateX(-50%);
          background: var(--grad-primary);
          color: var(--white);
          font-size: 0.75rem;
          font-weight: 800;
          padding: 6px 16px;
          border-radius: 20px;
          letter-spacing: 0.05em;
          box-shadow: 0 4px 10px rgba(0, 181, 165, 0.3);
        }

        .plan-header {
          text-align: left;
        }

        .plan-name {
          font-size: 1.5rem;
          color: var(--dark);
          margin-bottom: 8px;
        }

        .plan-desc {
          font-size: 0.85rem;
          color: var(--text-muted);
          line-height: 1.4;
          margin-bottom: 24px;
        }

        .plan-price-row {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .plan-price {
          font-size: 3rem;
          font-weight: 800;
          line-height: 1;
        }

        .plan-validity-box {
          display: flex;
          flex-direction: column;
          text-align: left;
        }

        .plan-subtext {
          font-size: 0.95rem;
          color: var(--text-main);
          font-weight: 700;
        }

        .plan-renewal-sub {
          font-size: 0.7rem;
          color: var(--text-muted);
          line-height: 1.2;
          margin-top: 2px;
        }

        .plan-divider {
          height: 1px;
          background-color: var(--border);
          margin: 24px 0;
        }

        .plan-features-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
          text-align: left;
          margin-bottom: 32px;
        }

        .plan-feature-item {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--dark-light);
        }

        .plan-feature-item.disabled {
          color: var(--text-muted);
          text-decoration: line-through;
          opacity: 0.6;
        }

        .feat-icon-check {
          color: var(--primary);
          flex-shrink: 0;
        }

        .feat-icon-cross {
          color: #ef4444;
          flex-shrink: 0;
        }

        .plan-cta-btn {
          width: 100%;
        }

        /* Addons Section */
        .addons-section {
          margin-top: 80px;
          border-top: 1px solid var(--border);
          padding-top: 80px;
        }

        .addons-header {
          margin-bottom: 40px;
        }

        .addons-title {
          font-size: 2.2rem;
          color: var(--dark);
          margin-top: 8px;
          margin-bottom: 12px;
        }

        .addons-subtitle {
          max-width: 600px;
          margin: 0 auto;
          font-size: 1.1rem;
          color: var(--text-muted);
        }

        .addons-grid {
          margin-top: 32px;
        }

        .addon-card {
          text-align: left;
          padding: 24px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .addon-card-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 16px;
        }

        .addon-icon-box {
          background-color: rgba(0, 181, 165, 0.1);
          color: var(--primary);
          padding: 10px;
          border-radius: var(--radius-sm);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .addon-price-box {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
        }

        .addon-price {
          font-size: 1.3rem;
          font-weight: 700;
          color: var(--secondary);
        }

        .addon-type {
          font-size: 0.7rem;
          color: var(--text-muted);
          font-weight: 600;
        }

        .addon-name {
          font-size: 1.1rem;
          color: var(--dark);
          margin-bottom: 8px;
        }

        .addon-desc {
          font-size: 0.85rem;
          color: var(--text-muted);
          line-height: 1.4;
        }

        .pricing-safety-card {
          margin-top: 50px;
          background-color: var(--light);
          border: 1px solid var(--border);
          border-radius: var(--radius-sm);
          padding: 16px 24px;
          display: inline-flex;
          align-items: center;
          gap: 12px;
          max-width: 800px;
          text-align: left;
        }

        .safety-icon-box {
          color: var(--secondary);
          background-color: rgba(var(--secondary-rgb), 0.1);
          padding: 8px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .pricing-safety-card p {
          font-size: 0.85rem;
          color: var(--text-main);
        }

        @media (max-width: 1024px) {
          .pricing-card.popular {
            transform: none;
          }
          .pricing-grid, .addons-grid {
            gap: 32px;
          }
          .pricing-category-tabs {
            flex-direction: row;
            width: 100%;
            overflow-x: auto;
            -webkit-overflow-scrolling: touch;
            justify-content: flex-start;
            padding: 8px;
          }
          .pricing-category-tabs::-webkit-scrollbar {
            display: none;
          }
          .category-tab-btn {
            white-space: nowrap;
            flex-shrink: 0;
            padding: 10px 20px;
          }
        }

        @media (max-width: 768px) {
          .plan-price-row {
            flex-direction: column;
            align-items: flex-start;
            gap: 4px;
          }
          .pricing-toggle-container {
            flex-wrap: wrap;
            padding: 12px;
          }
          .discount-tag {
            display: inline-block;
            white-space: nowrap;
            margin-top: 4px;
          }
        }
      `}</style>
    </section>
  );
}
