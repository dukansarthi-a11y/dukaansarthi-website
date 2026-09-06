import React from 'react';
import LandingPageTemplate from '@/components/LandingPageTemplate';

export const metadata = {
  title: "Manufacturing ERP & Inventory Software - DukaanSarthi",
  description: "DukaanSarthi ERP for manufacturers. Track raw materials, manage production batches, and simplify GST e-invoicing.",
};

export default function ManufacturingPage() {
  return (
    <LandingPageTemplate 
      heroTitle={
        <>Complete ERP for <span className="text-gradient">Manufacturers</span></>
      }
      heroSubtitle="Control your production line. Track raw materials in, finished goods out, and calculate exact production costs to protect your margins."
      heroBadge="Built for Manufacturers"
      industry="manufacturing"
    />
  );
}
