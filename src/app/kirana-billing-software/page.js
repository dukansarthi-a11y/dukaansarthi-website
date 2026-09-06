import React from 'react';
import LandingPageTemplate from '@/components/LandingPageTemplate';

export const metadata = {
  title: "Best Kirana Store Billing Software - DukaanSarthi",
  description: "DukaanSarthi is the best GST billing software for Kirana & Grocery stores. Manage Udhaar, track stock easily, and send automated WhatsApp reminders.",
};

export default function KiranaPage() {
  return (
    <LandingPageTemplate 
      heroTitle={
        <>Best Billing Software for <span className="text-gradient">Kirana Stores</span></>
      }
      heroSubtitle="Streamline your grocery and kirana shop with DukaanSarthi. Manage daily sales, track thousands of items, and send WhatsApp payment links to recover Udhaar faster."
      heroBadge="Built for Kirana & General Stores"
      industry="kirana"
    />
  );
}
