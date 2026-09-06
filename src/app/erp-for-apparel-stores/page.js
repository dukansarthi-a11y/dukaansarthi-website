import React from 'react';
import LandingPageTemplate from '@/components/LandingPageTemplate';

export const metadata = {
  title: "ERP & Billing Software for Apparel Stores - DukaanSarthi",
  description: "DukaanSarthi is the ultimate ERP for clothing and apparel stores. Manage variants, barcode scanning, zero dead stock, and fast billing.",
};

export default function ApparelPage() {
  return (
    <LandingPageTemplate 
      heroTitle={
        <>Smart ERP for <span className="text-gradient">Apparel & Clothing</span></>
      }
      heroSubtitle="Handle sizes, colors, and brands with ease. DukaanSarthi offers Matrix inventory, barcode generation, and quick billing specifically designed for garment and shoe stores."
      heroBadge="Built for Fashion & Retail"
      industry="apparel"
    />
  );
}
