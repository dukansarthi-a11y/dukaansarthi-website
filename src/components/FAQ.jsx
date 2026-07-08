"use client";
import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqData = [
    {
      question: "Is my business data safe and secure with DukaanSarthi?",
      answer: "Absolutely. Security is our top priority. DukaanSarthi encrypts all local databases on your device and provides double backup options. You can link your private Google Drive for automated daily cloud backups, so you never lose your data even if you lose your phone or PC."
    },
    {
      question: "Can I use the app completely offline without internet?",
      answer: "Yes! DukaanSarthi is designed with offline-first technology. All core features like billing, inventory updates, and ledger reviews run 100% offline. The next time your device connects to the internet, it seamlessly syncs the data across other logged-in devices."
    },
    {
      question: "How is DukaanSarthi different from Vyapaar App?",
      answer: "While Vyapaar is a great tool, DukaanSarthi is built on a lighter modern framework, meaning it opens faster, doesn't crash on older devices, and has a much more intuitive modern design. Additionally, our mobile sync is smoother, and we offer more affordable starter plans for smaller shop owners."
    },
    {
      question: "Can I import my existing product list from Excel or Vyapaar App?",
      answer: "Yes, you can. We support one-click spreadsheet imports. Simply download our Excel template, copy-paste your item names, prices, and opening stock levels, and upload it. Within seconds, your entire inventory is loaded."
    },
    {
      question: "What printers and hardware does DukaanSarthi support?",
      answer: "We support standard A4/A5 laser/inkjet printers, all major 2-inch and 3-inch thermal printers (USB, Bluetooth, and Wi-Fi), barcode scanning guns, and even phone cameras as mobile barcode scanners."
    }
  ];

  const handleToggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="faq-section section" id="faq">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header text-center">
          <div className="badge badge-primary">FREQUENTLY ASKED QUESTIONS</div>
          <h2 className="with-line center">Got Questions? We Have Answers</h2>
          <p className="section-subtitle">
            Find answers to common queries about DukaanSarthi ERP setups, device syncing, imports, and security.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="faq-accordion-container">
          {faqData.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div 
                key={idx} 
                className={`faq-item card ${isOpen ? 'open' : ''}`}
                onClick={() => handleToggle(idx)}
              >
                <div className="faq-question-row">
                  <div className="faq-q-text">
                    <HelpCircle size={18} className="faq-q-icon" />
                    <h4>{faq.question}</h4>
                  </div>
                  <button className="faq-toggle-btn" aria-label="Toggle answer accordion">
                    <ChevronDown size={18} className="chevron-icon" />
                  </button>
                </div>

                <div className="faq-answer-container">
                  <p className="faq-answer-text">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      <style>{`
        .faq-section {
          background-color: var(--white);
        }

        .faq-accordion-container {
          max-width: 800px;
          margin: 40px auto 0 auto;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .faq-item {
          padding: 24px;
          cursor: pointer;
          transition: var(--transition);
          background-color: var(--white);
          text-align: left;
        }

        .faq-item:hover {
          border-color: rgba(var(--primary-rgb), 0.3);
        }

        .faq-item.open {
          border-color: var(--primary);
          box-shadow: var(--shadow-md);
        }

        .faq-question-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 16px;
        }

        .faq-q-text {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .faq-q-icon {
          color: var(--primary);
          flex-shrink: 0;
        }

        .faq-question-row h4 {
          font-size: 1.05rem;
          color: var(--dark);
          font-weight: 700;
        }

        .faq-toggle-btn {
          background: none;
          border: none;
          color: var(--text-muted);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: var(--transition);
        }

        .faq-item.open .chevron-icon {
          transform: rotate(180deg);
          color: var(--primary);
        }

        /* Answer Height slide animation */
        .faq-answer-container {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.35s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .faq-item.open .faq-answer-container {
          max-height: 200px; /* Large enough to hold text */
        }

        .faq-answer-text {
          font-size: 0.95rem;
          line-height: 1.6;
          color: var(--text-main);
          padding-top: 16px;
          border-top: 1px solid var(--border);
          margin-top: 16px;
        }

        @media (max-width: 480px) {
          .faq-item {
            padding: 16px;
          }
          .faq-question-row h4 {
            font-size: 0.95rem;
          }
        }
      `}</style>
    </section>
  );
}
