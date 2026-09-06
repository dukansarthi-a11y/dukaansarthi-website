import React from 'react';
import LandingPageTemplate from '@/components/LandingPageTemplate';

export const metadata = {
  title: "Restaurant POS & Billing Software - DukaanSarthi",
  description: "Fast, reliable restaurant POS and billing software. Manage tables, KOTs, takeaway orders, and inventory effortlessly with DukaanSarthi.",
};

export default function RestaurantPage() {
  return (
    <LandingPageTemplate 
      heroTitle={
        <>Lightning Fast POS for <span className="text-gradient">Restaurants</span></>
      }
      heroSubtitle="From QSRs to Fine Dining, handle rush hours smoothly with fast KOTs, table management, and Swiggy/Zomato integrations. Perfect for cafes and restaurants."
      heroBadge="Built for Food & Beverage"
      industry="restaurant"
    />
  );
}
