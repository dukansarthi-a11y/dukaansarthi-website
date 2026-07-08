"use client";
import React, { useState } from 'react';
import { Plus, Trash2, Printer, CheckCircle, RefreshCw, ShoppingCart } from 'lucide-react';

export default function InteractiveDemo() {
  const [shopName, setShopName] = useState("Apna Bazar Kirana Store");
  const [items, setItems] = useState([
    { id: 1, name: "Basmati Rice (Premium)", price: 95, qty: 10 },
    { id: 2, name: "Tata Salt 1kg", price: 25, qty: 5 },
    { id: 3, name: "Amul Butter 500g", price: 275, qty: 2 }
  ]);
  
  const [newItemName, setNewItemName] = useState("");
  const [newItemPrice, setNewItemPrice] = useState("");
  const [newItemQty, setNewItemQty] = useState(1);
  const [invoiceStatus, setInvoiceStatus] = useState("draft"); // draft, printing, printed

  // Common quick items for easy click-to-add
  const quickItems = [
    { name: "Aashirvaad Atta 10kg", price: 440 },
    { name: "Fortune Mustard Oil 1L", price: 175 },
    { name: "Maggi Noodles 12-Pack", price: 168 },
    { name: "Dettol Soap 125g", price: 55 }
  ];

  const handleAddItem = (e) => {
    if (e) e.preventDefault();
    if (!newItemName.trim() || !newItemPrice || newItemQty <= 0) return;

    const newItem = {
      id: Date.now(),
      name: newItemName,
      price: parseFloat(newItemPrice),
      qty: parseInt(newItemQty)
    };

    setItems([...items, newItem]);
    setNewItemName("");
    setNewItemPrice("");
    setNewItemQty(1);
  };

  const handleQuickAdd = (qItem) => {
    const existingItem = items.find(item => item.name === qItem.name);
    if (existingItem) {
      setItems(items.map(item => 
        item.name === qItem.name ? { ...item, qty: item.qty + 1 } : item
      ));
    } else {
      setItems([...items, {
        id: Date.now(),
        name: qItem.name,
        price: qItem.price,
        qty: 1
      }]);
    }
  };

  const handleDeleteItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  const handleClearAll = () => {
    setItems([]);
    setInvoiceStatus("draft");
  };

  const handlePrint = () => {
    if (items.length === 0) return;
    setInvoiceStatus("printing");
    setTimeout(() => {
      setInvoiceStatus("printed");
      // Open print window configured for just this mockup, or fake it
      window.print();
    }, 1500);
  };

  // Calculations
  const subTotal = items.reduce((acc, curr) => acc + (curr.price * curr.qty), 0);
  const cgst = subTotal * 0.09; // 9% CGST
  const sgst = subTotal * 0.09; // 9% SGST
  const grandTotal = subTotal + cgst + sgst;

  return (
    <section className="demo-section section" id="demo">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header text-center">
          <div className="badge badge-primary">LIVE INTERACTIVE TRIAL</div>
          <h2 className="with-line center">Try DukaanSarthi Billing Live!</h2>
          <p className="section-subtitle">
            Don't just believe our words. Test-drive our billing speed right now. Edit shop name, add items, and watch the GST tax invoice generate instantly below.
          </p>
        </div>

        {/* Demo Core Wrapper */}
        <div className="demo-grid grid-2">
          
          {/* Left: Input Controller Panel */}
          <div className="demo-control-panel card">
            <div className="panel-section-title">
              <ShoppingCart size={20} className="panel-title-icon" />
              <h4>Billing Terminal Inputs</h4>
            </div>

            {/* Shop Details */}
            <div className="form-group">
              <label htmlFor="shopNameInput">Your Shop/Business Name</label>
              <input 
                id="shopNameInput"
                type="text" 
                className="form-control"
                value={shopName} 
                onChange={(e) => setShopName(e.target.value)} 
                placeholder="Enter shop name..."
              />
            </div>

            {/* Quick click items */}
            <div className="quick-add-section">
              <span className="quick-add-label">Quick Add Common Items:</span>
              <div className="quick-add-buttons">
                {quickItems.map((qi, idx) => (
                  <button 
                    key={idx} 
                    className="quick-add-btn" 
                    onClick={() => handleQuickAdd(qi)}
                    type="button"
                  >
                    + {qi.name} (₹{qi.price})
                  </button>
                ))}
              </div>
            </div>

            <div className="divider-line"></div>

            {/* Add Custom Item Form */}
            <form onSubmit={handleAddItem} className="add-item-form">
              <span className="form-section-label">Add Custom Item:</span>
              <div className="form-row-three">
                <div className="form-group flex-2">
                  <label htmlFor="customItemName">Item Name</label>
                  <input 
                    id="customItemName"
                    type="text" 
                    className="form-control"
                    placeholder="E.g., Dove Soap 75g" 
                    value={newItemName}
                    onChange={(e) => setNewItemName(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="customItemPrice">Price (₹)</label>
                  <input 
                    id="customItemPrice"
                    type="number" 
                    className="form-control"
                    placeholder="Rate" 
                    value={newItemPrice}
                    onChange={(e) => setNewItemPrice(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="customItemQty">Qty</label>
                  <input 
                    id="customItemQty"
                    type="number" 
                    className="form-control"
                    value={newItemQty}
                    onChange={(e) => setNewItemQty(Math.max(1, parseInt(e.target.value) || 1))}
                    min="1"
                  />
                </div>
              </div>

              <button type="submit" className="btn btn-outline-primary btn-sm add-btn-full">
                <Plus size={16} /> Add Item to Invoice
              </button>
            </form>

            <div className="divider-line"></div>

            {/* Selected Items summary list */}
            <div className="added-items-summary">
              <div className="summary-header">
                <span>Items added to bill ({items.length})</span>
                {items.length > 0 && (
                  <button className="clear-all-btn" onClick={handleClearAll}>
                    <RefreshCw size={12} /> Clear Bill
                  </button>
                )}
              </div>
              
              {items.length === 0 ? (
                <div className="empty-bill-state">
                  <p>No items added yet. Click 'Quick Add' buttons above or add custom items.</p>
                </div>
              ) : (
                <div className="items-list-terminal">
                  {items.map((item) => (
                    <div key={item.id} className="terminal-item-row">
                      <div className="t-item-name">
                        <strong>{item.name}</strong>
                        <span>₹{item.price} x {item.qty}</span>
                      </div>
                      <div className="t-item-actions">
                        <span className="t-item-total">₹{item.price * item.qty}</span>
                        <button className="delete-item-btn" onClick={() => handleDeleteItem(item.id)} aria-label="Delete item">
                          <Trash2 size={14} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Right: Live Rendered Invoice */}
          <div className="demo-invoice-preview">
            <div className="print-area-wrapper">
              <div className={`invoice-paper ${invoiceStatus === 'printed' ? 'printed-flash' : ''}`}>
                
                {/* Invoice Header */}
                <div className="inv-paper-header">
                  <div className="inv-shop-details">
                    <h3 className="inv-shop-name">{shopName || "My Smart Shop"}</h3>
                    <p className="inv-subtitle-address">124, Main Road Market, Sector 15, New Delhi</p>
                    <p className="inv-subtitle-gst">GSTIN: 07DSBPS8451Z1Z5</p>
                  </div>
                  <div className="inv-label-box">
                    <span className="tax-invoice-lbl">TAX INVOICE</span>
                    <p>Bill No: <strong>DS-2026-904</strong></p>
                    <p>Date: {new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}</p>
                  </div>
                </div>

                <div className="invoice-divider-thick"></div>

                {/* Bill To */}
                <div className="inv-bill-to">
                  <div>
                    <span className="bill-to-lbl">BILL TO:</span>
                    <h4 className="bill-to-name">Walk-in Customer</h4>
                    <p className="bill-to-contact">Mobile: +91 98765 43210</p>
                  </div>
                  <div className="text-right">
                    <p>Payment Mode: <strong>UPI (GPay)</strong></p>
                    <p>State Code: <strong>07 (Delhi)</strong></p>
                  </div>
                </div>

                {/* Invoice Table */}
                <table className="inv-paper-table">
                  <thead>
                    <tr>
                      <th style={{ width: '45%' }}>Item Description</th>
                      <th className="text-right" style={{ width: '15%' }}>Price</th>
                      <th className="text-center" style={{ width: '15%' }}>Qty</th>
                      <th className="text-right" style={{ width: '25%' }}>Total (₹)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {items.length === 0 ? (
                      <tr>
                        <td colSpan="4" className="text-center empty-table-row">
                          No items added to the bill. Terminal is empty.
                        </td>
                      </tr>
                    ) : (
                      items.map((item, index) => (
                        <tr key={item.id}>
                          <td>{index + 1}. {item.name}</td>
                          <td className="text-right">₹{item.price.toFixed(2)}</td>
                          <td className="text-center">{item.qty}</td>
                          <td className="text-right">₹{(item.price * item.qty).toFixed(2)}</td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>

                {/* Invoice Footer / Totals */}
                <div className="inv-paper-totals-box">
                  <div className="terms-conditions-mock">
                    <strong>Terms & Conditions:</strong>
                    <p>1. Goods once sold will not be taken back.</p>
                    <p>2. Thank you for shopping with us!</p>
                  </div>
                  
                  <div className="totals-calculations">
                    <div className="tot-calc-row">
                      <span>Subtotal:</span>
                      <strong>₹{subTotal.toFixed(2)}</strong>
                    </div>
                    <div className="tot-calc-row">
                      <span>CGST (9%):</span>
                      <span>₹{cgst.toFixed(2)}</span>
                    </div>
                    <div className="tot-calc-row">
                      <span>SGST (9%):</span>
                      <span>₹{sgst.toFixed(2)}</span>
                    </div>
                    <div className="tot-calc-row grand-total-row">
                      <span>Grand Total:</span>
                      <strong className="text-gradient">₹{grandTotal.toFixed(2)}</strong>
                    </div>
                  </div>
                </div>

                <div className="invoice-divider-thick" style={{ marginTop: '20px' }}></div>
                
                <div className="inv-signature-row">
                  <div className="barcode-mock">||||||| | ||||| | |||</div>
                  <div className="signature-box">
                    <p>For {shopName || "My Smart Shop"}</p>
                    <div className="sig-space"></div>
                    <p className="sig-lbl">Authorized Signatory</p>
                  </div>
                </div>

              </div>
            </div>

            {/* Action buttons */}
            <div className="invoice-actions-bar">
              <button 
                className={`btn btn-primary print-trigger-btn ${items.length === 0 ? 'disabled' : ''}`}
                onClick={handlePrint}
                disabled={items.length === 0 || invoiceStatus === 'printing'}
              >
                {invoiceStatus === 'printing' ? (
                  <>Printing Invoice...</>
                ) : (
                  <>
                    <Printer size={18} /> Print Invoice
                  </>
                )}
              </button>
            </div>
            
            {invoiceStatus === 'printed' && (
              <div className="printed-success-message">
                <CheckCircle size={16} /> Invoice DS-2026-904 print call completed!
              </div>
            )}
          </div>

        </div>

      </div>

      <style>{`
        .demo-section {
          background-color: var(--white);
        }

        .demo-grid {
          align-items: flex-start;
          gap: 40px;
        }

        /* Control Panel */
        .demo-control-panel {
          padding: 24px;
        }

        .panel-section-title {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 20px;
          color: var(--primary);
        }

        .panel-section-title h4 {
          font-size: 1.15rem;
          color: var(--dark);
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 6px;
          margin-bottom: 16px;
          text-align: left;
        }

        .form-group label {
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--dark-light);
        }

        .form-control {
          font-family: var(--font-family);
          font-size: 0.95rem;
          padding: 10px 14px;
          border: 1px solid var(--border);
          border-radius: var(--radius-sm);
          outline: none;
          transition: var(--transition);
          background-color: var(--light);
        }

        .form-control:focus {
          border-color: var(--primary);
          background-color: var(--white);
          box-shadow: 0 0 0 3px rgba(0, 181, 165, 0.1);
        }

        .quick-add-section {
          text-align: left;
          margin-bottom: 16px;
        }

        .quick-add-label {
          display: block;
          font-size: 0.8rem;
          font-weight: 700;
          color: var(--text-muted);
          margin-bottom: 8px;
        }

        .quick-add-buttons {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
        }

        .quick-add-btn {
          font-family: var(--font-family);
          font-size: 0.75rem;
          font-weight: 600;
          background-color: var(--light);
          border: 1px solid var(--border);
          padding: 6px 12px;
          border-radius: 4px;
          cursor: pointer;
          color: var(--dark-light);
          transition: var(--transition);
        }

        .quick-add-btn:hover {
          background-color: rgba(var(--primary-rgb), 0.05);
          color: var(--primary);
          border-color: var(--primary);
        }

        .divider-line {
          height: 1px;
          background-color: var(--border);
          margin: 20px 0;
        }

        .add-item-form {
          text-align: left;
        }

        .form-section-label {
          display: block;
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--dark);
          margin-bottom: 12px;
        }

        .form-row-three {
          display: flex;
          gap: 12px;
          margin-bottom: 12px;
        }

        .flex-2 {
          flex: 2;
        }

        .add-btn-full {
          width: 100%;
          padding: 10px;
        }

        .added-items-summary {
          text-align: left;
        }

        .summary-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--dark);
          margin-bottom: 12px;
        }

        .clear-all-btn {
          background: none;
          border: none;
          color: var(--text-muted);
          cursor: pointer;
          font-size: 0.75rem;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 4px;
          transition: var(--transition);
        }

        .clear-all-btn:hover {
          color: #ef4444;
        }

        .empty-bill-state {
          padding: 24px;
          text-align: center;
          background-color: var(--light);
          border: 1px dashed var(--border);
          border-radius: var(--radius-sm);
        }

        .empty-bill-state p {
          font-size: 0.85rem;
          color: var(--text-muted);
        }

        .items-list-terminal {
          max-height: 160px;
          overflow-y: auto;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .terminal-item-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 8px 12px;
          background-color: var(--light);
          border: 1px solid var(--border);
          border-radius: 6px;
        }

        .t-item-name {
          display: flex;
          flex-direction: column;
        }

        .t-item-name strong {
          font-size: 0.85rem;
          color: var(--dark);
        }

        .t-item-name span {
          font-size: 0.7rem;
          color: var(--text-muted);
        }

        .t-item-actions {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .t-item-total {
          font-weight: 700;
          font-size: 0.85rem;
          color: var(--dark);
        }

        .delete-item-btn {
          background: none;
          border: none;
          color: var(--text-muted);
          cursor: pointer;
          transition: var(--transition);
        }

        .delete-item-btn:hover {
          color: #ef4444;
        }

        /* Invoice Preview Paper */
        .demo-invoice-preview {
          position: sticky;
          top: 100px;
        }

        .print-area-wrapper {
          background-color: #f1f5f9;
          border-radius: var(--radius-md);
          padding: 24px;
          border: 1px solid var(--border);
        }

        .invoice-paper {
          background-color: var(--white);
          border-radius: 4px;
          box-shadow: var(--shadow-xl);
          padding: 32px;
          text-align: left;
          font-family: var(--font-family);
          color: #1e293b;
          border: 1px solid #cbd5e1;
          transition: var(--transition);
        }

        .printed-flash {
          animation: print-glow 0.8s ease;
        }

        @keyframes print-glow {
          0% { box-shadow: 0 0 0 4px rgba(0, 181, 165, 0.4); }
          100% { box-shadow: var(--shadow-xl); }
        }

        .inv-paper-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 20px;
        }

        .inv-shop-name {
          font-size: 1.25rem;
          color: var(--dark);
          font-weight: 800;
          margin-bottom: 4px;
        }

        .inv-subtitle-address,
        .inv-subtitle-gst {
          font-size: 0.7rem;
          color: #64748b;
          line-height: 1.3;
        }

        .inv-label-box {
          text-align: right;
          font-size: 0.7rem;
        }

        .tax-invoice-lbl {
          display: block;
          font-size: 0.95rem;
          font-weight: 900;
          color: var(--primary);
          letter-spacing: 0.05em;
          margin-bottom: 4px;
        }

        .invoice-divider-thick {
          height: 3px;
          background-color: var(--dark);
          margin: 16px 0;
        }

        .inv-bill-to {
          display: flex;
          justify-content: space-between;
          font-size: 0.75rem;
          margin-bottom: 20px;
        }

        .bill-to-lbl {
          font-size: 0.65rem;
          font-weight: 700;
          color: #64748b;
          display: block;
          margin-bottom: 2px;
        }

        .bill-to-name {
          font-size: 0.85rem;
          font-weight: 800;
          color: var(--dark);
        }

        .bill-to-contact {
          font-size: 0.7rem;
          color: #64748b;
        }

        .inv-paper-table {
          width: 100%;
          border-collapse: collapse;
          font-size: 0.75rem;
          margin-bottom: 24px;
        }

        .inv-paper-table th {
          border-top: 1px solid #94a3b8;
          border-bottom: 1px solid #94a3b8;
          padding: 8px 4px;
          font-weight: 700;
          text-align: left;
          background-color: #f8fafc;
        }

        .inv-paper-table td {
          border-bottom: 1px solid #e2e8f0;
          padding: 8px 4px;
        }

        .empty-table-row {
          padding: 24px !important;
          color: #94a3b8;
          font-style: italic;
        }

        .inv-paper-totals-box {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 20px;
        }

        .terms-conditions-mock {
          font-size: 0.6rem;
          color: #64748b;
          width: 50%;
        }

        .terms-conditions-mock strong {
          color: #334155;
          display: block;
          margin-bottom: 2px;
        }

        .totals-calculations {
          width: 45%;
          display: flex;
          flex-direction: column;
          gap: 4px;
          font-size: 0.75rem;
        }

        .tot-calc-row {
          display: flex;
          justify-content: space-between;
          color: #475569;
        }

        .grand-total-row {
          border-top: 1px solid #94a3b8;
          padding-top: 6px;
          margin-top: 4px;
          font-size: 0.85rem;
          font-weight: 800;
        }

        .inv-signature-row {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          margin-top: 24px;
        }

        .barcode-mock {
          font-family: monospace;
          font-size: 0.65rem;
          color: #94a3b8;
          letter-spacing: 2px;
        }

        .signature-box {
          text-align: right;
          font-size: 0.7rem;
        }

        .sig-space {
          height: 35px;
        }

        .sig-lbl {
          border-top: 1px dashed #cbd5e1;
          padding-top: 4px;
          display: inline-block;
          font-weight: 600;
          color: #64748b;
        }

        .invoice-actions-bar {
          margin-top: 16px;
          display: flex;
          justify-content: center;
        }

        .print-trigger-btn {
          width: 100%;
          max-width: 240px;
        }

        .print-trigger-btn.disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .printed-success-message {
          margin-top: 12px;
          font-size: 0.85rem;
          color: #166534;
          background-color: #dcfce7;
          border: 1px solid #bbf7d0;
          padding: 8px 16px;
          border-radius: 4px;
          display: inline-flex;
          align-items: center;
          gap: 6px;
        }

        @media print {
          /* Hide all other page sections */
          .navbar,
          .hero-section,
          .stats-section,
          .marquee-section,
          .features-section,
          .shop-sectors-section,
          .about-us-section,
          .pos-features-section,
          .growth-section,
          .calc-section,
          .pricing-section,
          .testimonials-section,
          .faq-section,
          .careers-section,
          .contact-section,
          footer,
          .footer,
          .scroll-popup-overlay,
          .demo-control-panel,
          .section-header,
          .invoice-actions-bar,
          .printed-success-message {
            display: none !important;
          }

          /* Reset layouts of parent containers */
          html, body {
            background-color: #fff !important;
            color: #000 !important;
            padding: 0 !important;
            margin: 0 !important;
          }

          .app-landing-page {
            padding: 0 !important;
            margin: 0 !important;
          }

          .demo-section {
            padding: 0 !important;
            margin: 0 !important;
            background: none !important;
          }

          .container {
            max-width: 100% !important;
            width: 100% !important;
            padding: 0 !important;
            margin: 0 !important;
          }

          .demo-grid {
            display: block !important;
            gap: 0 !important;
            margin: 0 !important;
            padding: 0 !important;
          }

          .demo-invoice-preview {
            width: 100% !important;
            padding: 0 !important;
            margin: 0 !important;
            background: none !important;
            border: none !important;
            box-shadow: none !important;
          }

          .print-area-wrapper {
            position: static !important;
            width: 100% !important;
            padding: 0 !important;
            margin: 0 !important;
            background: none !important;
            border: none !important;
            overflow: visible !important;
          }

          .invoice-paper {
            border: none !important;
            box-shadow: none !important;
            padding: 0 !important;
            width: 100% !important;
            max-width: 100% !important;
            background: white !important;
            color: black !important;
          }
        }

        @media (max-width: 1024px) {
          .demo-invoice-preview {
            position: static;
          }
          .print-area-wrapper {
            overflow-x: auto;
            -webkit-overflow-scrolling: touch;
          }
          .invoice-paper {
            min-width: 500px;
          }
        }

        @media (max-width: 480px) {
          .form-row-three {
            flex-direction: column;
            gap: 8px;
          }
          .invoice-paper {
            padding: 16px;
          }
          .inv-paper-header {
            flex-direction: column;
            gap: 12px;
          }
          .inv-label-box {
            text-align: left;
          }
          .inv-paper-totals-box {
            flex-direction: column;
            gap: 16px;
          }
          .terms-conditions-mock,
          .totals-calculations {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
}
