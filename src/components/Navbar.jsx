"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Logo from './Logo';
import { Menu, X, ArrowRight, Download, ChevronDown } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Features', href: '#features' },
    { name: 'Live Invoicing', href: '#demo' },
    { name: 'ROI Calculator', href: '#calculator' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Careers', href: '#careers' },
    { name: 'About Us', href: '#about' },
  ];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <a href="/" className="nav-logo-link">
          <Logo width={180} height={45} colorMode="cyan" />
        </a>

        {/* Desktop Menu */}
        <div className="nav-menu-desktop">
          <div className="dropdown">
            <button className="nav-link dropdown-toggle">
              Solutions <ChevronDown size={14} />
            </button>
            <div className="dropdown-menu">
              <a href="/kirana-billing-software" target="_blank" rel="noopener noreferrer" className="dropdown-item">Kirana Store</a>
              <a href="/erp-for-apparel-stores" target="_blank" rel="noopener noreferrer" className="dropdown-item">Apparel & Clothing</a>
              <a href="/billing-software-for-restaurants" target="_blank" rel="noopener noreferrer" className="dropdown-item">Restaurants POS</a>
              <a href="/erp-for-manufacturing" target="_blank" rel="noopener noreferrer" className="dropdown-item">Manufacturing ERP</a>
            </div>
          </div>
          {navLinks.map((link) => (
            link.name === 'Resources' ? (
              <Link key={link.name} href={link.href} className="nav-link">
                {link.name}
              </Link>
            ) : (
              <a key={link.name} href={link.href} className="nav-link">
                {link.name}
              </a>
            )
          ))}
        </div>

        <div className="nav-actions-desktop">
          <a href="#download" className="btn btn-primary btn-sm">
            <Download size={16} /> Download App
          </a>
        </div>

        {/* Mobile Hamburger Trigger */}
        <button
          className="nav-mobile-toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Navigation Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      <div className={`nav-menu-mobile ${isOpen ? 'open' : ''}`}>
        <div className="nav-menu-mobile-content">
          <details className="mobile-dropdown">
            <summary className="nav-link-mobile">
              Solutions <ChevronDown size={18} style={{ float: 'right', marginTop: '4px' }} />
            </summary>
            <div className="mobile-dropdown-content">
              <a href="/kirana-billing-software" target="_blank" rel="noopener noreferrer" className="mobile-dropdown-item" onClick={() => setIsOpen(false)}>Kirana Store</a>
              <a href="/erp-for-apparel-stores" target="_blank" rel="noopener noreferrer" className="mobile-dropdown-item" onClick={() => setIsOpen(false)}>Apparel & Clothing</a>
              <a href="/billing-software-for-restaurants" target="_blank" rel="noopener noreferrer" className="mobile-dropdown-item" onClick={() => setIsOpen(false)}>Restaurants POS</a>
              <a href="/erp-for-manufacturing" target="_blank" rel="noopener noreferrer" className="mobile-dropdown-item" onClick={() => setIsOpen(false)}>Manufacturing ERP</a>
            </div>
          </details>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="nav-link-mobile"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <div className="nav-mobile-actions">
            <a
              href="#download"
              className="btn btn-primary"
              onClick={() => setIsOpen(false)}
            >
              <Download size={18} /> Download App
            </a>
          </div>
        </div>
      </div>

      {/* Navbar Custom Styles */}
      <style>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1000;
          transition: var(--transition);
          padding: 16px 0;
          background-color: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border-bottom: 1px solid var(--border);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
        }
        
        .navbar.scrolled {
          padding: 12px 0;
          background-color: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          box-shadow: var(--shadow-sm);
          border-bottom: 1px solid var(--border);
        }

        .nav-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .nav-logo-link {
          display: flex;
          align-items: center;
        }

        .nav-menu-desktop {
          display: flex;
          gap: 32px;
          flex: 1;
          justify-content: center;
        }

        .nav-link {
          font-weight: 500;
          color: var(--text-main);
          font-size: 0.95rem;
          position: relative;
          white-space: nowrap;
        }

        .nav-link::after {
          content: '';
          position: absolute;
          width: 0;
          height: 2px;
          bottom: -4px;
          left: 0;
          background-color: var(--primary);
          transition: var(--transition);
        }

        .nav-link:hover {
          color: var(--primary);
        }

        .nav-link:hover::after {
          width: 100%;
        }

        .nav-actions-desktop {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-left: 32px;
        }

        .nav-actions-desktop .btn {
          white-space: nowrap;
        }

        .nav-mobile-toggle {
          display: none;
          background: none;
          border: none;
          color: var(--dark);
          cursor: pointer;
          padding: 4px;
          z-index: 1001;
        }

        /* Mobile Drawer */
        .nav-menu-mobile {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100vh;
          background-color: var(--white);
          z-index: 999;
          transform: translateX(100%);
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          display: none;
        }

        .nav-menu-mobile.open {
          transform: translateX(0);
        }

        .nav-menu-mobile-content {
          display: flex;
          flex-direction: column;
          padding: 100px 24px 40px;
          height: 100%;
          gap: 24px;
          overflow-y: auto;
        }

        .nav-link-mobile {
          font-size: 1.25rem;
          font-weight: 600;
          color: var(--dark);
          padding: 8px 0;
          border-bottom: 1px solid var(--border);
        }

        .nav-link-mobile:hover {
          color: var(--primary);
          padding-left: 8px;
        }

        .mobile-dropdown summary {
          list-style: none;
          cursor: pointer;
        }

        .mobile-dropdown summary::-webkit-details-marker {
          display: none;
        }

        .mobile-dropdown-content {
          display: flex;
          flex-direction: column;
          background: rgba(0, 181, 165, 0.03);
          border-left: 2px solid var(--primary);
          margin-top: 8px;
          margin-bottom: 8px;
          border-radius: 0 8px 8px 0;
        }

        .mobile-dropdown-item {
          padding: 12px 16px;
          color: var(--text-main);
          font-weight: 500;
          font-size: 1rem;
          text-decoration: none;
          border-bottom: 1px solid rgba(0,0,0,0.03);
        }

        .mobile-dropdown-item:last-child {
          border-bottom: none;
        }

        .nav-mobile-actions {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-top: 20px;
        }

        .dropdown {
          position: relative;
          display: inline-block;
        }

        .dropdown-toggle {
          background: none;
          border: none;
          padding: 0;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 4px;
          font-family: inherit;
          font-size: inherit;
          color: inherit;
        }

        .dropdown-menu {
          position: absolute;
          top: 100%;
          left: 50%;
          transform: translateX(-50%) translateY(10px);
          background-color: var(--white);
          min-width: 200px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
          border-radius: 8px;
          border: 1px solid var(--border);
          opacity: 0;
          visibility: hidden;
          transition: all 0.2s ease;
          display: flex;
          flex-direction: column;
          padding: 8px 0;
          z-index: 1000;
        }

        .dropdown:hover .dropdown-menu {
          opacity: 1;
          visibility: visible;
          transform: translateX(-50%) translateY(0);
        }

        .dropdown-item {
          padding: 10px 20px;
          color: var(--text-main);
          text-decoration: none;
          font-weight: 500;
          font-size: 0.9rem;
          transition: background-color 0.2s, color 0.2s;
        }

        .dropdown-item:hover {
          background-color: rgba(0, 181, 165, 0.05);
          color: var(--primary);
        }

        @media (max-width: 1024px) {
          .nav-menu-desktop,
          .nav-actions-desktop {
            display: none;
          }
          .nav-mobile-toggle,
          .nav-menu-mobile {
            display: block;
          }
        }
      `}</style>
    </nav>
  );
}
