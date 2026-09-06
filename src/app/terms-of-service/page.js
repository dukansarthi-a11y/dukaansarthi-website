import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Terms of Service | DukaanSarthi',
};

export default function TermsOfService() {
  return (
    <div className="pt-20">
      <Navbar />
      <div className="container py-16 max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-dark">Terms of Service</h1>
        <div className="prose text-muted">
          <p className="mb-4">Last updated: {new Date().toLocaleDateString()}</p>
          <p className="mb-4">By accessing or using the DukaanSarthi website and software, you agree to be bound by these Terms of Service.</p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4 text-dark">1. License and Access</h2>
          <p className="mb-4">DukaanSarthi grants you a limited, non-exclusive, non-transferable license to access and use our ERP software for your business operations, subject to your compliance with these terms and payment of applicable fees.</p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4 text-dark">2. User Responsibilities</h2>
          <p className="mb-4">You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to use the software only for lawful purposes.</p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4 text-dark">3. Service Availability</h2>
          <p className="mb-4">While we strive for 99.9% uptime, DukaanSarthi does not guarantee uninterrupted access to the service. We reserve the right to perform scheduled maintenance.</p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4 text-dark">4. Termination</h2>
          <p className="mb-4">We may terminate or suspend your access to our service immediately, without prior notice, if you breach these Terms of Service.</p>
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
