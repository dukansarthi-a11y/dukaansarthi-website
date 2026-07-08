import React from 'react';

export default function Logo({ width = 220, height = 65, showText = true, className = "", colorMode = "cyan" }) {
  
  // Premium Depth Gradient matching the original brand blue
  const gradStart = "#1877F2"; // Bright Blue
  const gradEnd = "#0052CC"; // Deep Brand Blue
  const textColor = "#0052CC"; // Brand Blue for text
  
  return (
    <svg 
      width={width} 
      height={height} 
      viewBox={showText ? "0 0 320 80" : "0 0 80 80"} 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className={`dukaansarthi-logo ${className}`}
      style={{ display: 'inline-block', verticalAlign: 'middle' }}
    >
      <defs>
        <linearGradient id="logo-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={gradStart} />
          <stop offset="100%" stopColor={gradEnd} />
        </linearGradient>
        <linearGradient id="text-grad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={gradStart} />
          <stop offset="100%" stopColor={textColor} />
        </linearGradient>
        <filter id="logo-shadow" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="4" stdDeviation="5" floodColor={gradEnd} floodOpacity="0.35" />
        </filter>
        <filter id="swoosh-shadow" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor={gradEnd} floodOpacity="0.25" />
        </filter>
      </defs>

      <g filter="url(#logo-shadow)">
        {/* Shopping Bag Handle (Top of the D) */}
        <path 
          d="M25 21 C25 11, 47 11, 47 21" 
          stroke="url(#logo-grad)" 
          strokeWidth="3.5" 
          strokeLinecap="round" 
          fill="none" 
        />
        
        {/* The Shopping Bag Pins/Dots */}
        <circle cx="25" cy="21" r="2.5" fill="url(#logo-grad)" />
        <circle cx="47" cy="21" r="2.5" fill="url(#logo-grad)" />

        {/* Letter 'D' Base */}
        <path 
          d="M17 19 H43 C56 19, 61 29, 61 40 C61 51, 56 61, 43 61 H17 V19 Z" 
          fill="url(#logo-grad)" 
        />

        {/* Inner cutout of the D (to create the D ring) */}
        <path 
          d="M27 25 H43 C49 25, 52 31, 52 40 C52 49, 49 55, 43 55 H27 V25 Z" 
          fill="#ffffff" 
        />

        {/* Storefront Icon inside the 'D' */}
        <g transform="translate(25, 29)">
          {/* Store Awning (Roof) */}
          <path 
            d="M-2 10 L2 6 H22 L26 10 H-2 Z" 
            fill="url(#logo-grad)" 
          />
          {/* Awning stripes */}
          <path d="M1 10 V6" stroke="#ffffff" strokeWidth="1.5" />
          <path d="M6 10 V6" stroke="#ffffff" strokeWidth="1.5" />
          <path d="M11 10 V6" stroke="#ffffff" strokeWidth="1.5" />
          <path d="M16 10 V6" stroke="#ffffff" strokeWidth="1.5" />
          <path d="M21 10 V6" stroke="#ffffff" strokeWidth="1.5" />

          {/* Scallops/Awnings bottom detail */}
          <path 
            d="M-2 10 Q1 12 3 10 Q6 12 8 10 Q11 12 13 10 Q16 12 18 10 Q21 12 23 10 Q25 12 26 10" 
            stroke="url(#logo-grad)" 
            strokeWidth="1.5" 
            fill="#ffffff"
          />

          {/* Store body/walls */}
          <rect x="0" y="10" width="24" height="15" fill="#f0fdfa" stroke="url(#logo-grad)" strokeWidth="1.5" rx="1" />
          
          {/* Store window/details on left */}
          <line x1="3" y1="13" x2="9" y2="13" stroke="url(#logo-grad)" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="3" y1="16" x2="9" y2="16" stroke="url(#logo-grad)" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="3" y1="19" x2="9" y2="19" stroke="url(#logo-grad)" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="3" y1="22" x2="9" y2="22" stroke="url(#logo-grad)" strokeWidth="1.5" strokeLinecap="round" />

          {/* Store Door */}
          <rect x="13" y="13" width="7" height="12" fill="url(#logo-grad)" rx="1" />
          {/* Door knob */}
          <circle cx="15" cy="19" r="1" fill="#ffffff" />
        </g>
      </g>

      {showText && (
        <g>
          {/* Text: "ukaansarthi" */}
          <text 
            x="67" 
            y="52" 
            fill="url(#text-grad)" 
            fontFamily="Outfit, system-ui, -apple-system, sans-serif" 
            fontSize="35" 
            fontWeight="800" 
            letterSpacing="-0.5"
          >
            ukaansarthi
          </text>

          {/* Premium Swoosh Underline */}
          <path 
            d="M17 64 C 60 65, 110 61, 170 56 C 210 52, 250 52, 290 60 C 240 57, 190 58, 140 62 C 90 66, 50 66, 17 64 Z" 
            fill="url(#logo-grad)" 
            filter="url(#swoosh-shadow)"
          />
        </g>
      )}
    </svg>
  );
}
