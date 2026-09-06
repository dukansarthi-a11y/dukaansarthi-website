import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Privacy Policy | DukaanSarthi',
};

export default function PrivacyPolicy() {
  return (
    <div className="pt-20">
      <Navbar />
      <div className="container py-16 max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-dark">Privacy Policy</h1>
        <div className="prose text-muted">
          <p className="mb-4">Last updated: {new Date().toLocaleDateString()}</p>
          <p className="mb-4">At DukaanSarthi, we take your privacy seriously. This Privacy Policy explains how we collect, use, and protect your information when you use our software and website.</p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4 text-dark">1. Information We Collect</h2>
          <p className="mb-4">We collect information you provide directly to us when you create an account, such as your name, business name, email address, and phone number. We also securely store your inventory and billing data to provide our ERP services.</p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4 text-dark">2. How We Use Your Data</h2>
          <p className="mb-4">Your data is strictly used to provide, maintain, and improve DukaanSarthi services. We do not sell your personal or business data to third parties.</p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4 text-dark">3. Data Security</h2>
          <p className="mb-4">We implement enterprise-grade security measures to protect your data from unauthorized access, including 256-bit encryption and regular security audits.</p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4 text-dark">4. Contact Us</h2>
          <p className="mb-4">If you have any questions about this Privacy Policy, please contact us via the contact form on our homepage.</p>
        </div>
      </div>
      <Footer />
      
      <style>{`
        .pt-20 { padding-top: 100px; }
        .py-16 { padding: 64px 0; }
        .max-w-3xl { max-width: 48rem; }
        .mx-auto { margin-left: auto; margin-right: auto; }
        .text-4xl { font-size: 2.25rem; }
        .text-2xl { font-size: 1.5rem; }
        .font-bold { font-weight: 700; }
        .mb-4 { margin-bottom: 16px; }
        .mb-8 { margin-bottom: 32px; }
        .mt-8 { margin-top: 32px; }
        .text-dark { color: var(--dark); }
        .text-muted { color: var(--text-muted); line-height: 1.8; }
      `}</style>
    </div>
  );
}
