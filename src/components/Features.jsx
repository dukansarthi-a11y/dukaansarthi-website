"use client";
import React, { useState } from 'react';
import { FileText, Inbox, CreditCard, BarChart3, CheckCircle2, QrCode, Bell, MessageSquare, Award, ShoppingCart, Globe } from 'lucide-react';

export default function Features() {
  const [activeTab, setActiveTab] = useState('billing');

  const tabs = [
    {
      id: 'billing',
      label: 'GST Invoicing',
      icon: <FileText size={18} />,
      title: 'Generate Professional GST Invoices in Seconds',
      description: 'DukaanSarthi simplifies invoicing. Customize formats, calculate taxes automatically, and share directly with customers.',
      bullets: [
        'Print A4, A5, and 2-inch or 3-inch thermal receipts.',
        'Supports both GST and Non-GST bills with tax auto-calculations.',
        'Fully customizable formats (fonts, logo, signatures, colors).',
        'Directly share bills via WhatsApp or Email in one click.'
      ]
    },
    {
      id: 'inventory',
      label: 'Smart Stock',
      icon: <Inbox size={18} />,
      title: 'Never Run Out of Stock with Live Tracking',
      description: 'Manage items by categories, track batch numbers, expiry dates, and scan barcodes using your phone camera or PC scanner.',
      bullets: [
        'Real-time stock valuation based on FIFO or average cost.',
        'Auto-low-stock alerts on dashboard and via push notifications.',
        'Smart barcode generation and scanning support.',
        'Group items by category, brand, or custom tags.'
      ]
    },
    {
      id: 'udhaar',
      label: 'Credit Ledger (Khata)',
      icon: <CreditCard size={18} />,
      title: 'Recover Udhaar 3x Faster with Auto Reminders',
      description: 'Maintain customer/vendor ledgers with full transparency. Set due dates and send free payment collection links via SMS or WhatsApp.',
      bullets: [
        'Digital credit register showing balance for every customer.',
        'One-click WhatsApp payment reminders with UPI QR codes.',
        'Complete transaction history (Ledger statements) in PDF format.',
        'Automated credit limit settings per customer.'
      ]
    },
    {
      id: 'reports',
      label: '30+ Business Reports',
      icon: <BarChart3 size={18} />,
      title: 'Data-Driven Decisions for Tax & Growth',
      description: 'Generate comprehensive reports for sales, stock status, profit & loss, and GST filings (GSTR-1, GSTR-3B) with zero manual math.',
      bullets: [
        'One-click GSTR-1, GSTR-2, and GSTR-3B report generation.',
        'Live Profit & Loss statement and Balance Sheet dashboards.',
        'Best-selling product rankings and sales team performance.',
        'Export reports instantly to Excel or PDF.'
      ]
    },
    {
      id: 'b2b',
      label: 'B2B Purchase & Sales',
      icon: <ShoppingCart size={18} />,
      title: 'Streamline Your Wholesale & Distribution',
      description: 'Easily manage bulk orders, create purchase orders, track vendor bills, and handle B2B sales with custom pricing tiers.',
      bullets: [
        'Generate Professional Purchase Orders and manage vendor bills.',
        'Set multiple pricing tiers for wholesale and retail customers.',
        'Bulk inventory updates and purchase inwards tracking.',
        'Maintain party-wise purchase and sales ledgers effortlessly.'
      ]
    },
    {
      id: 'omnichannel',
      label: 'Omni-Channel Sync',
      icon: <Globe size={18} />,
      title: 'Sync Offline & Online Sales Automatically',
      description: 'DukaanSarthi provides seamless omni-channel capabilities. Connect your retail POS with your custom e-commerce website and mobile apps.',
      bullets: [
        'Live inventory sync between your physical store and online website.',
        'Accept online e-commerce orders directly on your POS.',
        'Unified dashboard to track offline footfall and online traffic.',
        'One centralized catalog management for all sales channels.'
      ]
    }
  ];

  const currentTab = tabs.find(t => t.id === activeTab);

  return (
    <section className="features-section section-bg-light" id="features">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header text-center">
          <div className="badge badge-primary">POWERFUL ERP MODULES</div>
          <h2 className="with-line center">GST Billing & Inventory Management Features</h2>
          <p className="section-subtitle">
            All the powerful business modules you need, designed to run smoothly on PCs, tablets, and smartphones.
          </p>
        </div>

        {/* Interactive Tab Switcher */}
        <div className="features-tabs-wrapper">
          <div className="tabs-navigation">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Tab Content Area */}
          <div className="tab-content-grid grid-2 card">
            {/* Left: Info Content */}
            <div className="tab-info-side">
              <h3 className="tab-info-title">{currentTab.title}</h3>
              <p className="tab-info-desc">{currentTab.description}</p>
              
              <div className="tab-bullets-list">
                {currentTab.bullets.map((bullet, index) => (
                  <div key={index} className="bullet-item">
                    <CheckCircle2 size={20} className="bullet-icon" />
                    <span>{bullet}</span>
                  </div>
                ))}
              </div>

              <a href="#contact" className="btn btn-primary tab-cta-btn">
                Try {currentTab.label} Now
              </a>
            </div>

            {/* Right: Custom Mock Visual representation */}
            <div className="tab-visual-side">
              <div className="tab-mock-frame">
                {activeTab === 'billing' && (
                  <div className="mock-billing-screen">
                    <div className="invoice-title-row">
                      <h4>TAX INVOICE</h4>
                      <div className="logo-box-mock">DS</div>
                    </div>
                    <div className="invoice-meta-row">
                      <div>
                        <strong>Billed To:</strong>
                        <p>Karan General Store</p>
                        <p>GSTIN: 07AAAAA1111A1Z1</p>
                      </div>
                      <div className="text-right">
                        <p>Invoice #: <strong>DS-2026-004</strong></p>
                        <p>Date: 25 Jun 2026</p>
                      </div>
                    </div>
                    <table className="invoice-table-mock">
                      <thead>
                        <tr>
                          <th>Item Description</th>
                          <th className="text-center">Qty</th>
                          <th className="text-right">Rate</th>
                          <th className="text-right">Amount</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Fortune Sunflower Oil (1L)</td>
                          <td className="text-center">10</td>
                          <td className="text-right">₹145</td>
                          <td className="text-right">₹1,450</td>
                        </tr>
                        <tr>
                          <td>Aashirvaad Shudh Chakki Atta (5kg)</td>
                          <td className="text-center">5</td>
                          <td className="text-right">₹220</td>
                          <td className="text-right">₹1,100</td>
                        </tr>
                        <tr>
                          <td>Surf Excel Easy Wash (1kg)</td>
                          <td className="text-center">8</td>
                          <td className="text-right">₹120</td>
                          <td className="text-right">₹960</td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="invoice-total-row">
                      <div className="gst-breakdown">
                        <p>CGST (9%): ₹315.90</p>
                        <p>SGST (9%): ₹315.90</p>
                      </div>
                      <div className="grand-total text-right">
                        <p>Grand Total:</p>
                        <h3>₹3,510.00</h3>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'inventory' && (
                  <div className="mock-inventory-screen">
                    <div className="inventory-header">
                      <h4>Inventory stock status</h4>
                      <div className="search-mock">Search item...</div>
                    </div>
                    
                    <div className="inventory-list">
                      <div className="inv-item">
                        <div className="inv-info">
                          <h5>Fortune Mustard Oil</h5>
                          <span>Code: 89012356 | SKU: OIL-01</span>
                        </div>
                        <div className="inv-stock">
                          <span className="stock-level ok">120 Units</span>
                          <span className="stock-label">In Stock</span>
                        </div>
                      </div>

                      <div className="inv-item danger-row">
                        <div className="inv-info">
                          <h5>Tata Salt Iodized 1kg</h5>
                          <span>Code: 89010254 | SKU: SALT-05</span>
                        </div>
                        <div className="inv-stock">
                          <span className="stock-level low">8 Units</span>
                          <span className="stock-label text-danger">Low Stock Alert</span>
                        </div>
                      </div>

                      <div className="inv-item">
                        <div className="inv-info">
                          <h5>Britannia Marie Gold Biscuit</h5>
                          <span>Code: 89014526 | SKU: BISC-12</span>
                        </div>
                        <div className="inv-stock">
                          <span className="stock-level ok">240 Units</span>
                          <span className="stock-label">In Stock</span>
                        </div>
                      </div>

                      <div className="inv-item warning-row">
                        <div className="inv-info">
                          <h5>Dettol Liquid Handwash</h5>
                          <span>Code: 89011122 | SKU: SOAP-08</span>
                        </div>
                        <div className="inv-stock">
                          <span className="stock-level mid">18 Units</span>
                          <span className="stock-label text-warning">Restock Soon</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'udhaar' && (
                  <div className="mock-udhaar-screen">
                    <div className="udhaar-header">
                      <h4>Customers Credit Book</h4>
                      <div className="udhaar-stats">
                        <div className="u-stat">
                          <span>Total Receivables</span>
                          <h5 className="text-green">₹1,45,200</h5>
                        </div>
                      </div>
                    </div>

                    <div className="udhaar-list">
                      <div className="udhaar-item">
                        <div className="u-client">
                          <div className="client-avatar bg-blue">R</div>
                          <div>
                            <h5>Rajesh Kumar</h5>
                            <span className="last-seen">Due in: 3 days</span>
                          </div>
                        </div>
                        <div className="u-amount">
                          <span className="u-label">YOU GET</span>
                          <span className="u-val text-green">₹12,500</span>
                        </div>
                      </div>

                      <div className="udhaar-item warning-alert">
                        <div className="u-client">
                          <div className="client-avatar bg-red">S</div>
                          <div>
                            <h5>Sharma Kirana</h5>
                            <span className="last-seen text-red">Overdue by 12 days</span>
                          </div>
                        </div>
                        <div className="u-amount">
                          <span className="u-label">OVERDUE</span>
                          <span className="u-val text-red">₹34,800</span>
                          <button className="remind-btn"><MessageSquare size={12} /> WhatsApp</button>
                        </div>
                      </div>

                      <div className="udhaar-item">
                        <div className="u-client">
                          <div className="client-avatar bg-orange">M</div>
                          <div>
                            <h5>Manoj Distributors</h5>
                            <span className="last-seen">No due date</span>
                          </div>
                        </div>
                        <div className="u-amount">
                          <span className="u-label">YOU PAY</span>
                          <span className="u-val text-red">₹8,400</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'reports' && (
                  <div className="mock-reports-screen">
                    <div className="reports-header">
                      <h4>Sales & Profit Analytics</h4>
                      <span className="date-picker">This Month (Jun 2026)</span>
                    </div>

                    <div className="reports-metrics-row">
                      <div className="r-metric">
                        <span>Total Revenue</span>
                        <h5>₹4,82,500</h5>
                        <span className="growth text-green">+14.2% vs last month</span>
                      </div>
                      <div className="r-metric">
                        <span>Net Profit</span>
                        <h5 className="text-gradient">₹72,400</h5>
                        <span className="growth text-green">+11.5% profit margin</span>
                      </div>
                    </div>

                    <div className="reports-chart-box">
                      <div className="chart-bar-wrapper">
                        <div className="chart-bar" style={{ height: '40%' }}><span>₹1.2L</span></div>
                        <div className="chart-bar" style={{ height: '65%' }}><span>₹2.1L</span></div>
                        <div className="chart-bar" style={{ height: '85%' }}><span>₹3.2L</span></div>
                        <div className="chart-bar active" style={{ height: '95%' }}><span>₹4.8L</span></div>
                      </div>
                      <div className="chart-labels">
                        <span>Mar</span>
                        <span>Apr</span>
                        <span>May</span>
                        <span>Jun</span>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'b2b' && (
                  <div className="mock-b2b-screen">
                    <div className="b2b-header">
                      <h4>Purchase Orders</h4>
                      <button style={{ padding: '4px 12px', fontSize: '0.75rem', border: 'none', borderRadius: '4px', background: 'var(--primary)', color: 'white', cursor: 'pointer', fontWeight: 'bold' }}>New PO</button>
                    </div>
                    <div className="b2b-list">
                      <div className="b2b-item ok-row">
                        <div className="b2b-info">
                          <h5>V-Mart Distributors</h5>
                          <span>PO: #PO-2026-089 | 24 Jun 2026</span>
                        </div>
                        <div className="b2b-status">
                          <span className="status-badge delivered">Delivered</span>
                          <span className="b2b-amt">₹45,000</span>
                        </div>
                      </div>
                      <div className="b2b-item pending-row">
                        <div className="b2b-info">
                          <h5>Metro Wholesale</h5>
                          <span>PO: #PO-2026-092 | 26 Jun 2026</span>
                        </div>
                        <div className="b2b-status">
                          <span className="status-badge pending">Pending</span>
                          <span className="b2b-amt">₹1,12,400</span>
                        </div>
                      </div>
                      <div className="b2b-item">
                        <div className="b2b-info">
                          <h5>HUL Supplier Center</h5>
                          <span>PO: #PO-2026-095 | 28 Jun 2026</span>
                        </div>
                        <div className="b2b-status">
                          <span className="status-badge processing">Processing</span>
                          <span className="b2b-amt">₹89,500</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'omnichannel' && (
                  <div className="mock-b2b-screen">
                    <div className="b2b-header">
                      <h4>Omni-Channel Sync</h4>
                      <div className="status-badge delivered" style={{ background: '#ecfdf5', color: '#10b981', border: '1px solid #10b981' }}>Live Sync</div>
                    </div>
                    <div className="b2b-list">
                      <div className="b2b-item ok-row">
                        <div className="b2b-info">
                          <h5>Custom E-Commerce Website</h5>
                          <span>Auto-Sync Active | 1,200 Items synced</span>
                        </div>
                        <div className="b2b-status">
                          <span className="status-badge delivered">Connected</span>
                        </div>
                      </div>
                      <div className="b2b-item ok-row">
                        <div className="b2b-info">
                          <h5>Mobile App (Android/iOS)</h5>
                          <span>Auto-Sync Active | 1,200 Items synced</span>
                        </div>
                        <div className="b2b-status">
                          <span className="status-badge delivered">Connected</span>
                        </div>
                      </div>
                      <div className="b2b-item pending-row">
                        <div className="b2b-info">
                          <h5>B2B Wholesale Portal</h5>
                          <span>Awaiting configuration</span>
                        </div>
                        <div className="b2b-status">
                          <span className="status-badge pending">Pending</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

      </div>

      <style>{`
        .features-section {
          position: relative;
        }

        .section-header {
          margin-bottom: 60px;
        }

        .section-subtitle {
          max-width: 700px;
          margin: 12px auto 0 auto;
        }

        /* Tabs Nav */
        .features-tabs-wrapper {
          display: flex;
          flex-direction: column;
          gap: 32px;
          width: 100%;
          min-width: 0;
        }

        .tabs-navigation {
          display: flex;
          justify-content: center;
          gap: 16px;
          flex-wrap: wrap;
          width: 100%;
          max-width: 100%;
        }

        .tab-btn {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 14px 24px;
          background-color: var(--white);
          border: 1px solid var(--border);
          border-radius: var(--radius-sm);
          font-family: var(--font-family);
          font-size: 1rem;
          font-weight: 600;
          color: var(--text-muted);
          cursor: pointer;
          transition: var(--transition);
        }

        .tab-btn:hover {
          color: var(--primary);
          border-color: rgba(var(--primary-rgb), 0.3);
          background-color: rgba(var(--primary-rgb), 0.02);
        }

        .tab-btn.active {
          background: var(--grad-primary);
          color: var(--white);
          border-color: transparent;
          box-shadow: var(--shadow-primary);
        }

        /* Tab Content */
        .tab-content-grid {
          background-color: var(--white);
          padding: 48px;
          align-items: center;
          gap: 60px;
        }

        .tab-info-side {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .tab-info-title {
          font-size: 2rem;
          color: var(--dark);
        }

        .tab-info-desc {
          font-size: 1.1rem;
          color: var(--text-muted);
          margin-bottom: 8px;
        }

        .tab-bullets-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .bullet-item {
          display: flex;
          align-items: flex-start;
          gap: 12px;
        }

        .bullet-icon {
          color: var(--primary);
          flex-shrink: 0;
          margin-top: 2px;
        }

        .bullet-item span {
          font-weight: 500;
          color: var(--dark-light);
          font-size: 1.05rem;
        }

        .tab-cta-btn {
          align-self: flex-start;
          margin-top: 16px;
        }

        /* Mock Screen styling */
        .tab-visual-side {
          background-color: var(--light);
          border-radius: var(--radius-md);
          padding: 24px;
          border: 1px solid var(--border);
          min-height: 380px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .tab-mock-frame {
          width: 100%;
          background-color: var(--white);
          border-radius: var(--radius-sm);
          box-shadow: var(--shadow-lg);
          border: 1px solid var(--border);
          overflow: hidden;
          padding: 20px;
          font-size: 0.85rem;
        }

        /* Billing Mock */
        .mock-billing-screen {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .invoice-title-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 2px solid var(--primary);
          padding-bottom: 8px;
        }

        .invoice-title-row h4 {
          color: var(--primary);
          font-weight: 800;
        }

        .logo-box-mock {
          width: 32px;
          height: 32px;
          background-color: var(--primary);
          color: var(--white);
          border-radius: 6px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 800;
        }

        .invoice-meta-row {
          display: flex;
          justify-content: space-between;
          font-size: 0.75rem;
          color: var(--text-muted);
        }

        .invoice-table-mock {
          width: 100%;
          border-collapse: collapse;
          font-size: 0.75rem;
        }

        .invoice-table-mock th,
        .invoice-table-mock td {
          padding: 8px;
          text-align: left;
          border-bottom: 1px solid var(--border);
        }

        .invoice-table-mock th {
          background-color: var(--light);
          color: var(--dark);
          font-weight: 700;
        }

        .text-center { text-align: center !important; }
        .text-right { text-align: right !important; }

        .invoice-total-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-top: 2px solid var(--border);
          padding-top: 12px;
        }

        .gst-breakdown p {
          font-size: 0.7rem;
          color: var(--text-muted);
        }

        .grand-total h3 {
          color: var(--primary);
          font-size: 1.4rem;
        }

        /* Inventory Mock */
        .mock-inventory-screen {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .inventory-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid var(--border);
          padding-bottom: 8px;
        }

        .search-mock {
          background-color: var(--light);
          border: 1px solid var(--border);
          border-radius: 4px;
          padding: 4px 12px;
          color: var(--text-muted);
          font-size: 0.75rem;
        }

        .inventory-list {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .inv-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 8px 12px;
          background-color: var(--light);
          border-radius: 6px;
          border: 1px solid var(--border);
        }

        .inv-info h5 {
          font-size: 0.85rem;
          color: var(--dark);
        }

        .inv-info span {
          font-size: 0.65rem;
          color: var(--text-muted);
        }

        .inv-stock {
          text-align: right;
          display: flex;
          flex-direction: column;
        }

        .stock-level {
          font-weight: 700;
          font-size: 0.85rem;
        }

        .stock-level.ok { color: #166534; }
        .stock-level.low { color: #991b1b; }
        .stock-level.mid { color: #854d0e; }

        .stock-label {
          font-size: 0.6rem;
          color: var(--text-muted);
        }

        .danger-row {
          background-color: #fef2f2;
          border-color: #fee2e2;
        }

        .warning-row {
          background-color: #fef9c3;
          border-color: #fef08a;
        }

        /* Udhaar Mock */
        .mock-udhaar-screen {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .udhaar-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid var(--border);
          padding-bottom: 8px;
        }

        .text-green { color: #22c55e !important; }
        .text-red { color: #ef4444 !important; }

        .u-stat span {
          font-size: 0.7rem;
          color: var(--text-muted);
        }

        .u-stat h5 {
          font-size: 1.1rem;
        }

        .udhaar-list {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .udhaar-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 8px 12px;
          background-color: var(--light);
          border-radius: 6px;
          border: 1px solid var(--border);
        }

        .warning-alert {
          background-color: #fef2f2;
          border-color: #fee2e2;
        }

        .u-client {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .client-avatar {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          color: var(--white);
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 0.85rem;
        }

        .bg-blue { background-color: var(--secondary); }
        .bg-red { background-color: #ef4444; }
        .bg-orange { background-color: #f97316; }

        .u-client h5 {
          font-size: 0.85rem;
          color: var(--dark);
        }

        .last-seen {
          font-size: 0.65rem;
          color: var(--text-muted);
        }

        .u-amount {
          text-align: right;
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 2px;
        }

        .u-label {
          font-size: 0.55rem;
          color: var(--text-muted);
          font-weight: 600;
        }

        .u-val {
          font-weight: 700;
          font-size: 0.85rem;
        }

        .remind-btn {
          background-color: #22c55e;
          color: var(--white);
          border: none;
          padding: 2px 6px;
          border-radius: 4px;
          font-size: 0.6rem;
          font-weight: 700;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 4px;
          margin-top: 4px;
        }

        /* Reports Mock */
        .mock-reports-screen {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .reports-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid var(--border);
          padding-bottom: 8px;
        }

        .date-picker {
          font-size: 0.7rem;
          background-color: rgba(var(--primary-rgb), 0.1);
          color: var(--primary);
          padding: 2px 8px;
          border-radius: 4px;
          font-weight: 600;
        }

        .reports-metrics-row {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 12px;
        }

        .r-metric {
          background-color: var(--light);
          padding: 10px;
          border-radius: 6px;
          border: 1px solid var(--border);
        }

        .r-metric span {
          font-size: 0.65rem;
          color: var(--text-muted);
        }

        .r-metric h5 {
          font-size: 1.15rem;
        }

        .growth {
          font-size: 0.6rem !important;
          font-weight: 600;
        }

        /* B2B Mock */
        .mock-b2b-screen {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .b2b-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid var(--border);
          padding-bottom: 8px;
        }
        .b2b-list {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .b2b-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 8px 12px;
          background-color: var(--light);
          border-radius: 6px;
          border: 1px solid var(--border);
        }
        .b2b-info h5 {
          font-size: 0.85rem;
          color: var(--dark);
        }
        .b2b-info span {
          font-size: 0.65rem;
          color: var(--text-muted);
        }
        .b2b-status {
          text-align: right;
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 4px;
        }
        .b2b-amt {
          font-weight: 700;
          font-size: 0.85rem;
        }
        .status-badge {
          font-size: 0.55rem;
          padding: 2px 6px;
          border-radius: 10px;
          font-weight: 700;
          text-transform: uppercase;
        }
        .status-badge.delivered { background: #dcfce7; color: #166534; }
        .status-badge.pending { background: #fee2e2; color: #991b1b; }
        .status-badge.processing { background: #fef3c7; color: #92400e; }
        .ok-row { border-left: 3px solid #22c55e; }
        .pending-row { border-left: 3px solid #ef4444; }

        .reports-chart-box {
          background-color: var(--light);
          border-radius: 6px;
          padding: 16px;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .chart-bar-wrapper {
          height: 100px;
          display: flex;
          justify-content: space-around;
          align-items: flex-end;
          border-bottom: 1px solid var(--border);
          padding-bottom: 8px;
        }

        .chart-bar {
          width: 32px;
          background-color: var(--border);
          border-radius: 4px 4px 0 0;
          position: relative;
          transition: height 0.6s ease;
        }

        .chart-bar.active {
          background: var(--grad-primary);
        }

        .chart-bar span {
          position: absolute;
          top: -16px;
          left: 50%;
          transform: translateX(-50%);
          font-size: 0.6rem;
          font-weight: 700;
          color: var(--dark);
        }

        .chart-labels {
          display: flex;
          justify-content: space-around;
          font-size: 0.65rem;
          color: var(--text-muted);
          font-weight: 600;
        }

        @media (max-width: 1024px) {
          .tab-content-grid {
            padding: 24px;
            gap: 32px;
          }
          .tab-info-title {
            font-size: 1.75rem;
          }
          .tab-visual-side {
            min-height: auto;
            width: 100%;
          }
          .tabs-navigation {
            flex-wrap: nowrap;
            justify-content: flex-start;
            overflow-x: auto;
            -webkit-overflow-scrolling: touch;
            padding-bottom: 8px;
          }
          .tabs-navigation::-webkit-scrollbar {
            display: none;
          }
          .tab-btn {
            flex-shrink: 0;
            white-space: nowrap;
          }
          .tab-mock-frame {
            overflow-x: hidden;
            width: 100%;
          }
          .mock-billing-screen,
          .mock-inventory-screen,
          .mock-udhaar-screen,
          .mock-reports-screen {
            min-width: 0;
            width: 100%;
          }
        }

        @media (max-width: 576px) {
          .invoice-table-mock th:nth-child(3),
          .invoice-table-mock td:nth-child(3) {
            display: none; /* Hide Rate column on mobile */
          }
          .invoice-table-mock {
            font-size: 0.65rem;
          }
          .tab-mock-frame {
            padding: 12px;
          }
          .reports-metrics-row {
            grid-template-columns: 1fr;
            gap: 8px;
          }
          .chart-bar-wrapper {
            height: 80px;
          }
          .chart-bar {
            width: 20px;
          }
          .chart-bar span {
            font-size: 0.55rem;
            top: -12px;
          }
        }
      `}</style>
    </section>
  );
}
