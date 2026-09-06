"use client";
import React, { useState } from 'react';
import { Calculator as CalcIcon, TrendingUp, Clock, AlertOctagon, HelpCircle } from 'lucide-react';

export default function Calculator() {
  const [dailyBills, setDailyBills] = useState(50);
  const [manualTime, setManualTime] = useState(4); // minutes per bill
  const [leakageAmount, setLeakageAmount] = useState(3000); // rupees lost to forgotten credit/errors

  // Constant estimations
  const wagePerHour = 120; // Estimated cost of staff labor per hour in Rupees
  
  // Calculations
  const hoursSavedPerMonth = Math.round((dailyBills * (manualTime - 0.5) * 30) / 60); 
  // We assume DukaanSarthi takes 30 seconds (0.5 mins) per bill, saving (manualTime - 0.5) mins.
  
  const laborSavings = hoursSavedPerMonth * wagePerHour;
  const leakageRecovered = Math.round(leakageAmount * 0.85); // 85% recovery rate with automated reminders
  const totalMonthlySavings = laborSavings + leakageRecovered;
  const annualSavings = totalMonthlySavings * 12;

  return (
    <section className="calc-section section section-bg-light" id="calculator">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header text-center">
          <div className="badge badge-primary">ROI SAVINGS CALCULATOR</div>
          <h2 className="with-line center">How Much Can You Save?</h2>
          <p className="section-subtitle">
            Manual calculations, billing delays, and forgotten credits (Udhaar) cost your business money. Use our calculator to see how much DukaanSarthi will save you.
          </p>
        </div>

        {/* Calculator Main Grid */}
        <div className="calc-grid grid-2">
          
          {/* Left: Input Sliders */}
          <div className="calc-inputs card">
            <div className="panel-title-row">
              <CalcIcon size={20} className="calc-icon-title" />
              <h4>Adjust Your Business Parameters</h4>
            </div>

            {/* Input 1: Daily Bills */}
            <div className="slider-group">
              <div className="slider-labels">
                <span className="slider-lbl">Invoices Generated Daily:</span>
                <span className="slider-val text-gradient">{dailyBills} Bills</span>
              </div>
              <input 
                type="range" 
                min="5" 
                max="300" 
                step="5"
                value={dailyBills} 
                onChange={(e) => setDailyBills(parseInt(e.target.value))}
                className="custom-range-slider"
                aria-label="Daily bills count"
              />
              <div className="slider-range-limits">
                <span>5</span>
                <span>300+</span>
              </div>
            </div>

            {/* Input 2: Manual Invoicing Time */}
            <div className="slider-group">
              <div className="slider-labels">
                <span className="slider-lbl">Time spent writing one manual bill:</span>
                <span className="slider-val text-gradient">{manualTime} Minutes</span>
              </div>
              <input 
                type="range" 
                min="1" 
                max="10" 
                step="1"
                value={manualTime} 
                onChange={(e) => setManualTime(parseInt(e.target.value))}
                className="custom-range-slider"
                aria-label="Minutes per bill"
              />
              <div className="slider-range-limits">
                <span>1 min</span>
                <span>10 mins</span>
              </div>
            </div>

            {/* Input 3: Credit Leakage */}
            <div className="slider-group">
              <div className="slider-labels">
                <span className="slider-lbl">Uncollected Udhaar / Math Errors (Monthly):</span>
                <span className="slider-val text-gradient">₹{leakageAmount.toLocaleString('en-IN')}</span>
              </div>
              <input 
                type="range" 
                min="500" 
                max="25000" 
                step="500"
                value={leakageAmount} 
                onChange={(e) => setLeakageAmount(parseInt(e.target.value))}
                className="custom-range-slider"
                aria-label="Monthly credit leakage amount"
              />
              <div className="slider-range-limits">
                <span>₹500</span>
                <span>₹25,000</span>
              </div>
            </div>
            
            <div className="calc-note">
              <AlertOctagon size={14} className="note-icon" />
              <p>Estimates are based on average retail operations and 85% credit recovery via automated WhatsApp alerts.</p>
            </div>
          </div>

          {/* Right: Output Calculations Dashboard */}
          <div className="calc-outputs-dashboard card section-bg-dark">
            <h3 className="dashboard-title">Your Estimated Business Lift</h3>
            
            <div className="outputs-metrics-grid">
              
              {/* Output 1: Hours Saved */}
              <div className="output-metric-card">
                <div className="out-icon"><Clock size={20} /></div>
                <div className="out-details">
                  <span className="out-label">Time Saved Monthly</span>
                  <h4 className="out-val">{hoursSavedPerMonth} Hours</h4>
                  <p className="out-desc">Get back precious hours to focus on customers & family.</p>
                </div>
              </div>

              {/* Output 2: Cash Recovered */}
              <div className="output-metric-card">
                <div className="out-icon"><TrendingUp size={20} /></div>
                <div className="out-details">
                  <span className="out-label">Credit Recovered Monthly</span>
                  <h4 className="out-val">₹{leakageRecovered.toLocaleString('en-IN')}</h4>
                  <p className="out-desc">Automated SMS/WhatsApp ledger links bring forgotten debts back.</p>
                </div>
              </div>

            </div>

            <div className="calc-divider-thick"></div>

            {/* Final Total Savings display */}
            <div className="total-savings-highlight text-center">
              <span className="grand-savings-lbl">TOTAL ESTIMATED ANNUAL SAVINGS</span>
              <h1 className="grand-savings-amount">₹{annualSavings.toLocaleString('en-IN')}</h1>
              <p className="grand-savings-sub">Equivalent to adding <strong className="text-green">₹{Math.round(annualSavings / dailyBills)}</strong> extra value on every single transaction!</p>
            </div>

            <a href="#contact" className="btn btn-white btn-lg calc-cta-btn">
              Book Free Demo - Get DukaanSarthi
            </a>
          </div>

        </div>

      </div>

      <style>{`
        .calc-section {
          position: relative;
        }

        .calc-grid {
          align-items: stretch;
          gap: 40px;
        }

        /* Inputs Panel */
        .calc-inputs {
          padding: 32px;
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .panel-title-row {
          display: flex;
          align-items: center;
          gap: 10px;
          border-bottom: 1px solid var(--border);
          padding-bottom: 16px;
        }

        .calc-icon-title {
          color: var(--primary);
        }

        .panel-title-row h4 {
          font-size: 1.15rem;
          color: var(--dark);
        }

        .slider-group {
          display: flex;
          flex-direction: column;
          gap: 12px;
          text-align: left;
        }

        .slider-labels {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .slider-lbl {
          font-weight: 700;
          font-size: 0.95rem;
          color: var(--dark-light);
        }

        .slider-val {
          font-weight: 800;
          font-size: 1.1rem;
        }

        .custom-range-slider {
          -webkit-appearance: none;
          width: 100%;
          height: 6px;
          border-radius: 3px;
          background: #cbd5e1;
          outline: none;
          transition: background 0.3s;
        }

        .custom-range-slider::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: var(--primary);
          cursor: pointer;
          box-shadow: 0 2px 6px rgba(0, 181, 165, 0.4);
          transition: transform 0.1s;
        }

        .custom-range-slider::-webkit-slider-thumb:hover {
          transform: scale(1.2);
        }

        .slider-range-limits {
          display: flex;
          justify-content: space-between;
          font-size: 0.75rem;
          color: var(--text-muted);
          font-weight: 600;
        }

        .calc-note {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          background-color: #fef3c7;
          border: 1px solid #fde68a;
          padding: 12px;
          border-radius: var(--radius-sm);
        }

        .note-icon {
          color: #d97706;
          flex-shrink: 0;
          margin-top: 3px;
        }

        .calc-note p {
          font-size: 0.8rem;
          color: #92400e;
          text-align: left;
          font-weight: 500;
        }

        /* Outputs Panel (Dark styled) */
        .calc-outputs-dashboard {
          padding: 40px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          border: none;
        }

        .dashboard-title {
          font-size: 1.5rem;
          margin-bottom: 24px;
          text-align: left;
        }

        .outputs-metrics-grid {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .output-metric-card {
          display: flex;
          align-items: flex-start;
          gap: 16px;
          background-color: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          padding: 20px;
          border-radius: var(--radius-sm);
        }

        .out-icon {
          background-color: rgba(0, 181, 165, 0.2);
          color: var(--primary);
          padding: 10px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .out-details {
          text-align: left;
        }

        .out-label {
          display: block;
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--text-muted);
          letter-spacing: 0.05em;
          margin-bottom: 2px;
        }

        .out-val {
          font-size: 1.5rem;
          font-weight: 800;
          color: var(--white);
          margin-bottom: 4px;
        }

        .out-desc {
          font-size: 0.85rem;
          color: #94a3b8;
        }

        .calc-divider-thick {
          height: 1px;
          background-color: rgba(255, 255, 255, 0.1);
          margin: 28px 0;
        }

        .total-savings-highlight {
          margin-bottom: 28px;
        }

        .grand-savings-lbl {
          font-size: 0.8rem;
          font-weight: 700;
          color: var(--text-muted);
          letter-spacing: 0.1em;
          display: block;
          margin-bottom: 8px;
        }

        .grand-savings-amount {
          font-size: 3.5rem;
          color: var(--primary);
          line-height: 1;
          margin-bottom: 12px;
        }

        .grand-savings-sub {
          font-size: 0.9rem;
          color: #94a3b8;
        }

        .calc-cta-btn {
          width: 100%;
        }

        @media (max-width: 480px) {
          .calc-outputs-dashboard {
            padding: 24px;
          }
          .grand-savings-amount {
            font-size: 2.5rem;
          }
        }
      `}</style>
    </section>
  );
}
