import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import CompaniesMarquee from '@/components/CompaniesMarquee';
import Features from '@/components/Features';
import ShopSectors from '@/components/ShopSectors';
import PosFeatures from '@/components/PosFeatures';
import GrowthImpact from '@/components/GrowthImpact';
import InteractiveDemo from '@/components/InteractiveDemo';
import Calculator from '@/components/Calculator';
import Pricing from '@/components/Pricing';
import Testimonials from '@/components/Testimonials';
import AboutUs from '@/components/AboutUs';
import FAQ from '@/components/FAQ';
import Careers from '@/components/Careers';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ClientObserver from '@/components/ClientObserver';
import ScrollPopupForm from '@/components/ScrollPopupForm';
import DelayPopupForm from '@/components/DelayPopupForm';
import SchemaMarkup from '@/components/SchemaMarkup';
import IndustrySpecificHighlight from '@/components/IndustrySpecificHighlight';

export default function LandingPageTemplate({ heroTitle, heroSubtitle, heroBadge, industry }) {
  return (
    <div className="app-landing-page">
      <SchemaMarkup />
      <ClientObserver />
      <ScrollPopupForm />
      <DelayPopupForm />
      
      <Navbar />
      <Hero title={heroTitle} subtitle={heroSubtitle} badgeText={heroBadge} industry={industry} />
      <IndustrySpecificHighlight industry={industry} />
      <Stats />
      <CompaniesMarquee />
      <Features />
      <ShopSectors />
      <PosFeatures />
      <GrowthImpact />
      <InteractiveDemo />
      <Calculator />
      <Pricing />
      <Testimonials />
      <FAQ />
      <AboutUs />
      <Careers />
      <Contact />
      <Footer />
    </div>
  );
}
