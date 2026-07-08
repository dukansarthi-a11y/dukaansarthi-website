"use client";
import { useEffect } from 'react';

export default function ClientObserver() {
  useEffect(() => {
    // Select elements that should animate independently (headers, wrappers)
    const elementsToAnimate = document.querySelectorAll(
      '.section-header, .demo-invoice-preview, .story-card'
    );
    
    // Select containers that contain multiple items to stagger (grids, flex rows)
    const staggeredContainers = document.querySelectorAll(
      '.grid-2, .grid-3, .grid-4, .impact-grid, .plan-features-list, .success-stories-wrapper'
    );
    
    // Add the hidden class to them before observing
    elementsToAnimate.forEach(el => {
      if (!el.closest('.hero-section') && !el.closest('.navbar')) {
        el.classList.add('scroll-reveal');
      }
    });

    staggeredContainers.forEach(el => {
      if (!el.closest('.hero-section')) {
        el.classList.add('stagger-reveal');
      }
    });

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          // Unobserve so it stays visible
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: "0px 0px -20px 0px"
    });

    // Observe all elements that have the scroll-reveal or stagger-reveal class
    document.querySelectorAll('.scroll-reveal, .stagger-reveal').forEach(el => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return null;
}
