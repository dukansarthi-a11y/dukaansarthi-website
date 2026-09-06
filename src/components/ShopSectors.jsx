"use client";
import React, { useState, useRef } from 'react';
import { 
  Cookie, Layers, IceCream, Shirt, Footprints, Sparkles, 
  ShoppingBag, Store, ShoppingCart, Smartphone, Laptop, Gamepad2, 
  BookOpen, Factory, Scale, Wrench, Settings, CheckCircle2, 
  ArrowRight, ChevronLeft, ChevronRight, Zap, Star, Target, ShieldCheck, Activity, BarChart
} from 'lucide-react';

const TypewriterHeading = ({ text }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    if (elementRef.current) observer.observe(elementRef.current);
    return () => observer.disconnect();
  }, []);

  React.useEffect(() => {
    if (!isVisible) return;
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setDisplayedText(text.substring(0, i));
      if (i >= text.length) clearInterval(interval);
    }, 100); // Typing speed
    return () => clearInterval(interval);
  }, [text, isVisible]);

  return (
    <h2 className="with-line center" ref={elementRef}>
      {displayedText}
      <span className="typing-cursor">|</span>
    </h2>
  );
};

export default function ShopSectors() {
  const [activeCategory, setActiveCategory] = useState('retail');
  const [activeSubcategory, setActiveSubcategory] = useState('supermarket_fmcg');
  const [activeSector, setActiveSector] = useState('retail_kirana');

  const subcategoryListRef = useRef(null);

  // Sector Data Structure
  const sectorData = {
    retail: {
      label: "Retail ERP",
      subcategories: [
        {
          id: "supermarket_fmcg",
          label: "Supermarket & FMCG",
          sectors: [
            {
              id: "retail_kirana",
              label: "Kirana Store",
              icon: <Store size={18} />,
              title: "Kirana & Provision Store POS Billing",
              description: "Fast queue checkout, expiry management, and digital credit khata reminders.",
              bullets: [
                "Fast billing interface supporting barcoding and scanning.",
                "Low-stock alert logs with auto purchase list generation.",
                "Khata credit ledger showing customer balances with WhatsApp payment links.",
                "GST reports (GSTR-1, GSTR-3B) with zero manual calculations."
              ],
              ctaText: "Get ERP for Kirana Store",
              illustrationType: "retail_supermarket"
            },
            {
              id: "retail_supermarket",
              label: "Supermarket",
              icon: <ShoppingCart size={18} />,
              title: "Supermarket POS & Multi-Counter Software",
              description: "Manage multi-counter cash drawers, centralized product databases, and customer loyalty.",
              bullets: [
                "Sync multi-counter billing terminals with local main server.",
                "Manage inventory of 10,000+ items across aisles and racks.",
                "Customer database tracking loyalty points and custom discounts.",
                "User access roles for cashiers, managers, and warehouse staff."
              ],
              ctaText: "Get ERP for Supermarket",
              illustrationType: "retail_supermarket"
            }
          ]
        },
        {
          id: "food_confectionery",
          label: "Food & Confectionery",
          sectors: [
            {
              id: "retail_bakery",
              label: "Bakery Shop",
              icon: <Cookie size={18} />,
              title: "Bakery & Confectionery Billing Software",
              description: "Manage recipes, track batch shelf-life, and design customized gift hampers.",
              bullets: [
                "Track expiry dates and batches for fresh cream and raw items.",
                "Recipe Bill of Materials (BOM) for cakes, cookies, and pastries.",
                "Custom packaging and combo offer billing.",
                "Support quick barcode scan and thermal printing."
              ],
              ctaText: "Get ERP for Bakery Shop",
              illustrationType: "retail_food"
            },
            {
              id: "retail_sweet",
              label: "Sweet Shop",
              icon: <Layers size={18} />,
              title: "Sweets & Mithai Shop POS System",
              description: "Fast weighing scale integration, loose item billing, and inventory tracking by shelf-life.",
              bullets: [
                "Direct connection with electronic weighing scales for live weight reading.",
                "Manage pricing for loose vs packaged boxes dynamically.",
                "Track short shelf-life items and display warnings.",
                "Fast counter billing with touch-screen POS."
              ],
              ctaText: "Get ERP for Sweet Shop",
              illustrationType: "retail_food"
            },
            {
              id: "retail_icecream",
              label: "Ice Cream Shop",
              icon: <IceCream size={18} />,
              title: "Ice Cream Parlour & Dairy ERP",
              description: "Control cold-chain inventory, monitor batch codes, and run loyalty schemes.",
              bullets: [
                "Track inventory across freezer rooms and display counters.",
                "Manage batch numbers, manufacturing dates, and expiration cycles.",
                "Inbuilt loyalty points to reward repeat customers.",
                "Quick touch-friendly POS checkout supporting card, UPI, and cash."
              ],
              ctaText: "Get ERP for Ice Cream Shop",
              illustrationType: "retail_food"
            }
          ]
        },
        {
          id: "apparel_footwear",
          label: "Apparel & Footwear",
          sectors: [
            {
              id: "retail_garment",
              label: "Garment Store",
              icon: <Shirt size={18} />,
              title: "Garment & Fashion Store Billing Software",
              description: "Organize inventory by size, brand, and color, and manage staff commissions.",
              bullets: [
                "Complete Size-Color-Brand Matrix support during billing.",
                "Bulk generation and thermal printing of custom barcode price tags.",
                "Track sales representative performance and auto-calculate commissions.",
                "Create and run complex multi-buy discounts (e.g., Buy 2 Get 1 Free)."
              ],
              ctaText: "Get ERP for Garment Store",
              illustrationType: "retail_apparel"
            },
            {
              id: "retail_shoe",
              label: "Shoe Store",
              icon: <Footprints size={18} />,
              title: "Footwear & Shoe Salon ERP",
              description: "Track shoe sizes, brands, box locations, and clear out old stock with schemes.",
              bullets: [
                "Dual size matrix (UK/US sizing charts) matching styles.",
                "Shelf/Box location marking to retrieve shoe pairs quickly.",
                "Track and clear slow-moving inventory with discount campaigns.",
                "Multi-store stock synchronization and transfers."
              ],
              ctaText: "Get ERP for Shoe Store",
              illustrationType: "retail_apparel"
            },
            {
              id: "retail_boutique",
              label: "Fashion Boutique",
              icon: <Sparkles size={18} />,
              title: "Designer Boutique & Tailoring ERP",
              description: "Track custom measurements, manage tailoring queues, and book advance orders.",
              bullets: [
                "Record customer custom measurements and styling histories.",
                "Manage tailoring job cards, assign tailors, and track completion dates.",
                "Record advance deposits and payments with flexible invoices.",
                "WhatsApp updates to customers when design is ready."
              ],
              ctaText: "Get ERP for Fashion Boutique",
              illustrationType: "retail_apparel"
            }
          ]
        },

        {
          id: "electronics_mobiles",
          label: "Mobiles & Electronics",
          sectors: [
            {
              id: "retail_mobile",
              label: "Mobile Store",
              icon: <Smartphone size={18} />,
              title: "Mobile Shop & IMEI Tracking Software",
              description: "Track mobile inventory by unique IMEI numbers, manage serial lists, and activate warranties.",
              bullets: [
                "Mandatory IMEI/Serial number entry on purchase and sale bills.",
                "Manage brand-wise and model-wise stock matrix.",
                "Track manufacturer warranty active status.",
                "Customer device repair log and ticketing system."
              ],
              ctaText: "Get ERP for Mobile Store",
              illustrationType: "retail_electronics"
            },
            {
              id: "retail_electronics",
              label: "Electronics Store",
              icon: <Laptop size={18} />,
              title: "Home Appliances & Electronics ERP",
              description: "Track serial numbers, manage delivery dispatch, and schedule installations.",
              bullets: [
                "Track high-value inventory by unique machine serial numbers.",
                "Manage installation scheduling and technician assignments.",
                "Record extended warranties and EMI payment plans.",
                "Track bulk vendor purchase schemes and incentives."
              ],
              ctaText: "Get ERP for Electronics Store",
              illustrationType: "retail_electronics"
            }
          ]
        },
        {
          id: "other_retail",
          label: "Other Retail Stores",
          sectors: [
            {
              id: "retail_toys",
              label: "Toys Store",
              icon: <Gamepad2 size={18} />,
              title: "Toy Store & Gift Shop Management System",
              description: "Organize items by age categories, package combo gifts, and manage wrapping logs.",
              bullets: [
                "Filter and categorize toys based on age groups and brands.",
                "Kit/Combo building tool to sell multiple related items together.",
                "Automate billing for additional charges like gift wrapping.",
                "Quick invoicing with barcodes and UPI codes."
              ],
              ctaText: "Get ERP for Toy Store",
              illustrationType: "retail_supermarket"
            },
            {
              id: "retail_books",
              label: "Book Store",
              icon: <BookOpen size={18} />,
              title: "Book Store & Stationery ERP Solution",
              description: "Syllabus bundle management, publisher tagging, shelf indexing, and quick billing.",
              bullets: [
                "Track book inventory by Author, Edition, and Publisher.",
                "Map shelf/rack locations to find items inside the store instantly.",
                "Create predefined school book bundles for faster student invoicing.",
                "Bulk purchase orders and institutional invoicing."
              ],
              ctaText: "Get ERP for Book Store",
              illustrationType: "retail_supermarket"
            }
          ]
        }
      ]
    },
    manufacturing: {
      label: "Manufacturing ERP",
      subcategories: [
        {
          id: "food_beverage_prod",
          label: "Food & Beverage Production",
          sectors: [
            {
              id: "mfg_bakery",
              label: "Bakery Production",
              icon: <Factory size={18} />,
              title: "Bakery Factory Production ERP",
              description: "Track recipe ingredient consumption, calculate yield costs, and manage baking batch queues.",
              bullets: [
                "Define multi-layered Recipe Bill of Materials (BOM) for cakes, bread, and pastries.",
                "Auto-deduct raw flour, sugar, and butter from stock during production run.",
                "Monitor oven batch queues and baking schedules.",
                "Calculate accurate raw-to-finish production cost margins."
              ],
              ctaText: "Get ERP for Bakery Manufacturing",
              illustrationType: "mfg_food"
            },
            {
              id: "mfg_food",
              label: "Packaged Foods Mfg",
              icon: <Scale size={18} />,
              title: "Food Packing & Processing ERP",
              description: "Manage nutritional recipes, control machine lines, print batch codes, and track expiries.",
              bullets: [
                "Automated lot/batch numbering with expiry stamping.",
                "FSSAI batch logs and ingredient traceability records.",
                "Waste tracking and raw material replenishment alerts.",
                "Calculate multi-packaging costs (box vs pouch packaging)."
              ],
              ctaText: "Get ERP for Packaged Foods",
              illustrationType: "mfg_food"
            }
          ]
        },
        {
          id: "apparel_textiles_prod",
          label: "Apparel & Textiles",
          sectors: [
            {
              id: "mfg_garment",
              label: "Garment Factory",
              icon: <Settings size={18} />,
              title: "Garment Manufacturing & Job Work ERP",
              description: "Track fabric consumption, manage stitching/cutting job works, and optimize inventory.",
              bullets: [
                "Estimate fabric consumption per pattern design (BOM).",
                "Stitching, cutting, washing, and finishing job-card management.",
                "Manage subcontractor (karigar) payments and fabric balances.",
                "Order-wise shipping and bulk packaging bills."
              ],
              ctaText: "Get ERP for Garment Factory",
              illustrationType: "mfg_apparel"
            },
            {
              id: "mfg_shoe",
              label: "Shoe Factory",
              icon: <Wrench size={18} />,
              title: "Shoe & Leather Goods Production ERP",
              description: "Manage rubber, leather, and size mold inventories across assembly lines.",
              bullets: [
                "Manage shoe sole, upper fabric, and color combinations BOM.",
                "Track assembly line stages (Molding, Stitching, Pasting).",
                "Track raw leather and synthetic fabric roll inventory.",
                "Size-run scheduling based on client orders."
              ],
              ctaText: "Get ERP for Shoe Factory",
              illustrationType: "mfg_apparel"
            }
          ]
        },
        {
          id: "assembly_goods_prod",
          label: "Assembly & Goods",
          sectors: [
            {
              id: "mfg_electronics",
              label: "Electronics Assembly",
              icon: <Factory size={18} />,
              title: "Electronics Assembly & Hardware Mfg ERP",
              description: "Component-level BOM, multi-stage QA tests, serial printing, and assembly logs.",
              bullets: [
                "Detailed components BOM (Microchips, PCBs, capacitors, chassis).",
                "Quality Assurance (QA) checklists and testing log tickets.",
                "Generate and print unique serial code labels for finished products.",
                "Trace component batches to detect defects easily."
              ],
              ctaText: "Get ERP for Electronics Assembly",
              illustrationType: "mfg_assembly"
            },
            {
              id: "mfg_toys",
              label: "Toy Manufacturing",
              icon: <Settings size={18} />,
              title: "Toy Factory & Molding ERP",
              description: "Track mold usage, raw plastic polymer granules, assembly steps, and paint batches.",
              bullets: [
                "Track plastic mold machine runs and scrap rates.",
                "Chemical/paint batch logs for toy color consistency.",
                "BOM for packaging boxes, manuals, and accessories.",
                "Calculate factory machine productivity hours."
              ],
              ctaText: "Get ERP for Toy Manufacturing",
              illustrationType: "mfg_assembly"
            }
          ]
        }
      ]
    }
  };

  // Helper to change top level category (Retail / Manufacturing)
  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    const subcats = sectorData[category].subcategories;
    setActiveSubcategory(subcats[0].id);
    setActiveSector(subcats[0].sectors[0].id);
  };

  // Helper to change subcategory
  const handleSubcategoryChange = (subcatId) => {
    setActiveSubcategory(subcatId);
    const subcat = sectorData[activeCategory].subcategories.find(s => s.id === subcatId);
    if (subcat && subcat.sectors.length > 0) {
      setActiveSector(subcat.sectors[0].id);
    }
  };

  // Scroll subcategories slider left/right
  const scrollSubcategories = (direction) => {
    if (subcategoryListRef.current) {
      const scrollAmount = direction === 'left' ? -200 : 200;
      subcategoryListRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const handleSectorCTA = (sectorId) => {
    const sectorLinks = {
      "retail_kirana": "/kirana-billing-software",
      "retail_garment": "/erp-for-apparel-stores",
      "retail_shoe": "/erp-for-apparel-stores",
      "retail_boutique": "/erp-for-apparel-stores",
      "mfg_bakery": "/erp-for-manufacturing",
      "mfg_food": "/erp-for-manufacturing",
      "mfg_garment": "/erp-for-manufacturing",
      "mfg_shoe": "/erp-for-manufacturing",
      "mfg_electronics": "/erp-for-manufacturing",
      "mfg_toys": "/erp-for-manufacturing",
    };

    if (sectorLinks[sectorId]) {
      window.open(sectorLinks[sectorId], '_blank');
      return;
    }

    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
      const event = new CustomEvent('select-sector', { detail: { sector: sectorId } });
      window.dispatchEvent(event);
    }
  };

  const currentSubcategories = sectorData[activeCategory].subcategories;
  const currentSubcategoryData = currentSubcategories.find(s => s.id === activeSubcategory) || currentSubcategories[0];
  const currentSectorData = currentSubcategoryData.sectors.find(s => s.id === activeSector) || currentSubcategoryData.sectors[0];

  // Illustration Render function based on subcategory type
  const renderIllustration = (sector) => {
    // Specifically requested SVGs
    if (sector.id === 'retail_shoe' || sector.id === 'mfg_shoe') {
      return (
        <svg viewBox="0 0 400 300" className="sector-svg-graphic" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="shoe-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="var(--primary)" />
              <stop offset="100%" stopColor="var(--secondary)" />
            </linearGradient>
          </defs>
          <rect x="50" y="240" width="300" height="8" rx="4" fill="var(--border)" />
          {/* Shoe Outline */}
          <g className="floating-element anim-delay-1">
            <path d="M110 180 C110 160, 150 120, 180 120 C190 120, 200 130, 210 130 C230 110, 260 130, 280 150 L290 180 Z" fill="url(#shoe-grad)" />
            <rect x="110" y="180" width="180" height="15" rx="5" fill="var(--dark)" />
            <circle cx="210" cy="155" r="14" fill="var(--white)" opacity="0.8" />
            <path d="M205 155 L210 165 L220 150" stroke="var(--primary)" strokeWidth="3" strokeLinecap="round" />
          </g>
          {/* Box / Stand */}
          <g className="floating-element anim-delay-2">
            <rect x="250" y="80" width="80" height="60" rx="8" fill="var(--secondary)" opacity="0.3" />
            <rect x="260" y="70" width="80" height="60" rx="8" fill="var(--secondary)" />
            <text x="300" y="105" fill="var(--white)" fontSize="14" fontWeight="bold" textAnchor="middle">UK 9</text>
          </g>
        </svg>
      );
    }
    
    if (sector.id === 'retail_mobile') {
      return (
        <svg viewBox="0 0 400 300" className="sector-svg-graphic" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="mob-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="var(--dark)" />
              <stop offset="100%" stopColor="var(--primary)" />
            </linearGradient>
          </defs>
          <rect x="80" y="240" width="240" height="10" rx="5" fill="var(--border)" />
          {/* Smartphone */}
          <g className="floating-element anim-delay-1">
            <rect x="140" y="40" width="120" height="200" rx="16" fill="url(#mob-grad)" stroke="var(--border)" strokeWidth="3" />
            <rect x="146" y="50" width="108" height="180" rx="10" fill="var(--white)" />
            {/* Screen UI */}
            <rect x="156" y="60" width="88" height="30" rx="4" fill="var(--light)" />
            <rect x="156" y="100" width="88" height="110" rx="4" fill="rgba(0,181,165,0.1)" />
            <circle cx="200" cy="155" r="20" fill="var(--primary)" />
            <path d="M193 155 L198 162 L208 148" stroke="var(--white)" strokeWidth="3" strokeLinecap="round" />
          </g>
          {/* Box */}
          <g className="floating-element anim-delay-2">
            <rect x="250" y="140" width="100" height="60" rx="6" fill="var(--secondary)" />
            <text x="300" y="165" fill="var(--white)" fontSize="10" fontWeight="bold" textAnchor="middle">IMEI 2X3</text>
            <text x="300" y="180" fill="var(--white)" fontSize="9" textAnchor="middle">Active</text>
          </g>
        </svg>
      );
    }

    if (sector.id === 'retail_books' || sector.id === 'retail_toys') {
      return (
        <svg viewBox="0 0 400 300" className="sector-svg-graphic" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="50" y="240" width="300" height="8" rx="4" fill="var(--border)" />
          {/* Shelves */}
          <rect x="100" y="60" width="200" height="180" rx="8" fill="var(--light)" stroke="var(--border)" strokeWidth="3" />
          <line x1="100" y1="120" x2="300" y2="120" stroke="var(--border)" strokeWidth="3" />
          <line x1="100" y1="180" x2="300" y2="180" stroke="var(--border)" strokeWidth="3" />
          
          <g className="floating-element anim-delay-1">
            <rect x="120" y="70" width="30" height="50" fill="var(--primary)" />
            <rect x="160" y="80" width="30" height="40" fill="var(--secondary)" />
            <rect x="195" y="75" width="20" height="45" fill="var(--dark)" />
            <rect x="130" y="130" width="80" height="50" rx="4" fill="url(#mob-grad)" />
          </g>
          <g className="floating-element anim-delay-2">
            <rect x="220" y="190" width="100" height="40" rx="8" fill="var(--primary)" />
            <text x="270" y="215" fill="var(--white)" fontSize="12" fontWeight="bold" textAnchor="middle">{sector.id === 'retail_books' ? 'Bundle Sale' : 'Combo Offer'}</text>
          </g>
        </svg>
      );
    }

    switch (sector.illustrationType) {
      case "retail_food":
        return (
          <svg viewBox="0 0 400 300" className="sector-svg-graphic" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="food-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="var(--primary)" />
                <stop offset="100%" stopColor="var(--secondary)" />
              </linearGradient>
              <filter id="glow-food" x="-10%" y="-10%" width="120%" height="120%">
                <feDropShadow dx="0" dy="8" stdDeviation="6" floodColor="rgba(0, 181, 165, 0.2)" />
              </filter>
            </defs>
            <rect x="40" y="240" width="320" height="12" rx="6" fill="var(--border)" />
            {/* Dynamic Sector Sign */}
            <g className="floating-element">
              <rect x="160" y="20" width="80" height="80" rx="40" fill="var(--white)" stroke="var(--primary)" strokeWidth="3" filter="url(#glow-food)" />
              <foreignObject x="170" y="30" width="60" height="60">
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%', color: 'var(--primary)' }}>
                  {React.cloneElement(sector.icon, { size: 32, strokeWidth: 2 })}
                </div>
              </foreignObject>
            </g>
            {/* Shop Display Case */}
            <rect x="70" y="100" width="260" height="140" rx="10" fill="var(--white)" stroke="var(--border)" strokeWidth="3" />
            <line x1="70" y1="170" x2="330" y2="170" stroke="var(--border)" strokeWidth="2" />
            {/* Bakery Items */}
            <g className="floating-element anim-delay-1">
              <circle cx="110" cy="135" r="18" fill="url(#food-grad)" />
              <path d="M102 135 L118 135 M110 127 L110 143" stroke="var(--white)" strokeWidth="2" />
              <text x="110" y="205" fill="var(--dark)" fontSize="10" fontWeight="bold" textAnchor="middle">Fresh Stock</text>
            </g>
            <g className="floating-element anim-delay-2">
              <rect x="180" y="115" width="40" height="40" rx="8" fill="var(--secondary)" />
              <path d="M190 125 C195 120, 205 120, 210 125 L210 145 C205 150, 195 150, 190 145 Z" fill="var(--white)" opacity="0.4" />
              <circle cx="200" cy="135" r="4" fill="var(--white)" />
            </g>
            <g className="floating-element anim-delay-3">
              <rect x="250" y="120" width="45" height="30" rx="6" fill="var(--primary)" />
              <text x="272" y="138" fill="var(--white)" fontSize="9" fontWeight="bold" textAnchor="middle">BOM</text>
            </g>
            {/* Front counter scale sign */}
            <rect x="130" y="190" width="140" height="36" rx="6" fill="var(--dark)" />
            <text x="200" y="212" fill="var(--primary)" fontSize="11" fontWeight="extrabold" textAnchor="middle">Scale: 0.450 KG</text>
          </svg>
        );
      case "retail_apparel":
        return (
          <svg viewBox="0 0 400 300" className="sector-svg-graphic" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="apparel-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="var(--primary)" />
                <stop offset="100%" stopColor="var(--secondary)" />
              </linearGradient>
            </defs>
            <rect x="50" y="240" width="300" height="8" rx="4" fill="var(--border)" />
            <line x1="200" y1="60" x2="200" y2="240" stroke="var(--border)" strokeWidth="6" />
            <line x1="100" y1="80" x2="300" y2="80" stroke="var(--border)" strokeWidth="8" strokeLinecap="round" />
            {/* Dynamic Store Icon */}
            <g className="floating-element">
              <rect x="160" y="10" width="80" height="60" rx="12" fill="var(--white)" stroke="var(--primary)" strokeWidth="3" />
              <foreignObject x="170" y="15" width="60" height="50">
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%', color: 'var(--primary)' }}>
                  {React.cloneElement(sector.icon, { size: 28, strokeWidth: 2.5 })}
                </div>
              </foreignObject>
            </g>
            {/* Clothes */}
            <g className="floating-element anim-delay-1">
              <path d="M110 80 L110 95 L95 110 L105 135 L115 130 L115 210 L145 210 L145 130 L155 135 L165 110 L150 95 L150 80 Z" fill="url(#apparel-grad)" />
              <circle cx="130" cy="150" r="12" fill="var(--white)" opacity="0.9" />
              <text x="130" y="154" fill="var(--dark)" fontSize="10" fontWeight="bold" textAnchor="middle">XL</text>
            </g>
            <g className="floating-element anim-delay-2">
              <path d="M185 80 L185 95 L170 110 L180 135 L190 130 L190 220 L220 220 L220 130 L230 135 L240 110 L225 95 L225 80 Z" fill="var(--secondary)" />
              <circle cx="205" cy="160" r="12" fill="var(--white)" opacity="0.9" />
              <text x="205" y="164" fill="var(--dark)" fontSize="10" fontWeight="bold" textAnchor="middle">M</text>
            </g>
            <g className="floating-element anim-delay-3">
              <path d="M250 80 L250 95 L235 110 L245 135 L255 130 L255 215 L285 215 L285 130 L295 135 L305 110 L290 95 L290 80 Z" fill="var(--primary)" opacity="0.8" />
              <circle cx="270" cy="155" r="12" fill="var(--white)" opacity="0.9" />
              <text x="270" y="159" fill="var(--dark)" fontSize="10" fontWeight="bold" textAnchor="middle">S</text>
            </g>
          </svg>
        );
      case "retail_supermarket":
        return (
          <svg viewBox="0 0 400 300" className="sector-svg-graphic" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="50" y="240" width="300" height="12" rx="6" fill="var(--border)" />
            {/* Dynamic Large Icon Display */}
            <g className="floating-element anim-delay-3">
              <rect x="160" y="20" width="80" height="80" rx="40" fill="var(--light)" stroke="var(--secondary)" strokeWidth="3" />
              <foreignObject x="170" y="30" width="60" height="60">
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%', color: 'var(--secondary)' }}>
                  {React.cloneElement(sector.icon, { size: 36, strokeWidth: 2 })}
                </div>
              </foreignObject>
            </g>
            {/* POS Checkout Stand */}
            <rect x="90" y="120" width="220" height="120" rx="8" fill="var(--white)" stroke="var(--border)" strokeWidth="3" />
            <rect x="110" y="80" width="180" height="40" rx="6" fill="var(--dark)" />
            <text x="200" y="105" fill="var(--primary)" fontSize="13" fontWeight="bold" textAnchor="middle">TOTAL: ₹1,560</text>
            {/* Scanner beam */}
            <path d="M120 180 L280 180" stroke="#ef4444" strokeWidth="2" strokeDasharray="4 4" className="pulse-anim" />
            <g className="floating-element anim-delay-1">
              <rect x="140" y="140" width="30" height="60" rx="4" fill="var(--primary)" />
              <line x1="145" y1="150" x2="165" y2="150" stroke="var(--white)" strokeWidth="2" />
              <line x1="145" y1="160" x2="165" y2="160" stroke="var(--white)" strokeWidth="2" />
            </g>
            <g className="floating-element anim-delay-2">
              <rect x="230" y="150" width="35" height="50" rx="4" fill="var(--secondary)" />
              <circle cx="247" cy="175" r="8" fill="var(--white)" opacity="0.4" />
            </g>
          </svg>
        );
      case "retail_electronics":
        return (
          <svg viewBox="0 0 400 300" className="sector-svg-graphic" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="elec-grad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="var(--dark)" />
                <stop offset="100%" stopColor="var(--dark-light)" />
              </linearGradient>
            </defs>
            {/* Phone Display */}
            <rect x="130" y="40" width="140" height="220" rx="16" fill="url(#elec-grad)" stroke="var(--border)" strokeWidth="4" className="floating-element" />
            <rect x="140" y="56" width="120" height="188" rx="8" fill="#f8fafc" />
            {/* Dynamic Screen Icon */}
            <foreignObject x="150" y="130" width="100" height="100" className="floating-element anim-delay-1">
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%', color: 'rgba(0,181,165,0.15)' }}>
                {React.cloneElement(sector.icon, { size: 80, strokeWidth: 1.5 })}
              </div>
            </foreignObject>
            {/* IMEI info */}
            <rect x="150" y="80" width="100" height="36" rx="4" fill="var(--white)" stroke="var(--border)" strokeWidth="1" />
            <text x="156" y="93" fill="var(--text-muted)" fontSize="7" fontWeight="bold">IMEI / SERIAL NO.</text>
            <text x="156" y="106" fill="var(--dark)" fontSize="9" fontWeight="bold">890281039849201</text>
            {/* Active badge */}
            <g className="floating-element anim-delay-2">
              <rect x="200" y="150" width="110" height="54" rx="8" fill="var(--secondary)" />
              <text x="255" y="172" fill="var(--white)" fontSize="9" fontWeight="bold" textAnchor="middle">WARRANTY CARD</text>
              <text x="255" y="190" fill="var(--primary)" fontSize="11" fontWeight="bold" textAnchor="middle">12 Months Active</text>
            </g>
          </svg>
        );
      case "mfg_food":
        return (
          <svg viewBox="0 0 400 300" className="sector-svg-graphic" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Factory Line conveyor */}
            <rect x="40" y="220" width="320" height="16" rx="4" fill="var(--dark)" />
            <circle cx="80" cy="228" r="4" fill="var(--white)" />
            <circle cx="160" cy="228" r="4" fill="var(--white)" />
            <circle cx="240" cy="228" r="4" fill="var(--white)" />
            <circle cx="320" cy="228" r="4" fill="var(--white)" />
            {/* Dynamic Machine Icon */}
            <g className="floating-element">
              <rect x="150" y="10" width="100" height="50" rx="10" fill="var(--white)" stroke="var(--dark)" strokeWidth="3" />
              <foreignObject x="160" y="15" width="80" height="40">
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%', color: 'var(--dark)' }}>
                  {React.cloneElement(sector.icon, { size: 28 })}
                </div>
              </foreignObject>
              <line x1="200" y1="60" x2="200" y2="70" stroke="var(--dark)" strokeWidth="3" />
            </g>
            {/* Factory Mixer / Processing Unit */}
            <rect x="140" y="70" width="120" height="90" rx="10" fill="var(--white)" stroke="var(--border)" strokeWidth="3" />
            <rect x="160" y="80" width="80" height="40" rx="4" fill="var(--light)" stroke="var(--border)" strokeWidth="2" />
            <path d="M200 40 L200 60" stroke="var(--border)" strokeWidth="4" />
            {/* Batch items moving on belt */}
            <g className="floating-element anim-delay-1">
              <rect x="70" y="180" width="40" height="40" rx="4" fill="var(--primary)" />
              <text x="90" y="204" fill="var(--white)" fontSize="10" fontWeight="bold" textAnchor="middle">B1</text>
            </g>
            <g className="floating-element anim-delay-2">
              <rect x="280" y="180" width="40" height="40" rx="4" fill="var(--secondary)" />
              <text x="300" y="204" fill="var(--white)" fontSize="10" fontWeight="bold" textAnchor="middle">B2</text>
            </g>
          </svg>
        );
      case "mfg_apparel":
        return (
          <svg viewBox="0 0 400 300" className="sector-svg-graphic" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="40" y="240" width="320" height="12" rx="6" fill="var(--border)" />
            {/* Dynamic Factory Icon */}
            <g className="floating-element">
              <rect x="160" y="10" width="80" height="60" rx="30" fill="var(--white)" stroke="var(--primary)" strokeWidth="3" />
              <foreignObject x="170" y="15" width="60" height="50">
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%', color: 'var(--primary)' }}>
                  {React.cloneElement(sector.icon, { size: 28 })}
                </div>
              </foreignObject>
            </g>
            {/* Loom / Sewing Unit */}
            <rect x="120" y="80" width="160" height="130" rx="10" fill="var(--white)" stroke="var(--border)" strokeWidth="3" />
            <circle cx="200" cy="130" r="30" fill="var(--light)" stroke="var(--border)" strokeWidth="2" />
            <path d="M170 130 L230 130 M200 100 L200 160" stroke="var(--primary)" strokeWidth="4" strokeLinecap="round" />
            {/* Fabric rolls */}
            <g className="floating-element anim-delay-1">
              <rect x="60" y="170" width="40" height="70" rx="4" fill="var(--secondary)" transform="rotate(-15 60 170)" />
              <line x1="50" y1="180" x2="90" y2="180" stroke="var(--white)" strokeWidth="4" />
            </g>
            <g className="floating-element anim-delay-2">
              <rect x="300" y="170" width="40" height="70" rx="4" fill="var(--primary)" transform="rotate(15 300 170)" />
              <line x1="300" y1="185" x2="340" y2="185" stroke="var(--white)" strokeWidth="4" />
            </g>
          </svg>
        );
      case "mfg_assembly":
        return (
          <svg viewBox="0 0 400 300" className="sector-svg-graphic" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Circuit Board / Assembly visual */}
            <rect x="70" y="60" width="260" height="180" rx="12" fill="#0f172a" stroke="var(--border)" strokeWidth="3" />
            {/* Dynamic HUD Icon */}
            <foreignObject x="140" y="90" width="120" height="120" className="pulse-anim">
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%', color: 'rgba(255,255,255,0.08)' }}>
                {React.cloneElement(sector.icon, { size: 100, strokeWidth: 1 })}
              </div>
            </foreignObject>
            {/* Grid gridlines */}
            <line x1="120" y1="60" x2="120" y2="240" stroke="#1e293b" strokeWidth="1" />
            <line x1="200" y1="60" x2="200" y2="240" stroke="#1e293b" strokeWidth="1" />
            <line x1="280" y1="60" x2="280" y2="240" stroke="#1e293b" strokeWidth="1" />
            <line x1="70" y1="120" x2="330" y2="120" stroke="#1e293b" strokeWidth="1" />
            <line x1="70" y1="180" x2="330" y2="180" stroke="#1e293b" strokeWidth="1" />
            {/* Component block */}
            <g className="floating-element anim-delay-1">
              <rect x="100" y="90" width="40" height="40" rx="4" fill="var(--primary)" />
              <circle cx="120" cy="110" r="10" fill="var(--white)" opacity="0.2" />
            </g>
            <g className="floating-element anim-delay-2">
              <rect x="240" y="140" width="60" height="40" rx="4" fill="var(--secondary)" />
              <text x="270" y="164" fill="var(--white)" fontSize="9" fontWeight="bold" textAnchor="middle">QA PASS</text>
            </g>
            {/* Robotic pointer lines */}
            <line x1="200" y1="40" x2="200" y2="100" stroke="#ef4444" strokeWidth="3" />
            <circle cx="200" cy="100" r="5" fill="#ef4444" className="pulse-anim" />
          </svg>
        );
      default:
        return (
          <svg viewBox="0 0 400 300" className="sector-svg-graphic" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="50" y="50" width="300" height="200" rx="10" fill="var(--light)" stroke="var(--border)" strokeWidth="2" />
            <circle cx="200" cy="150" r="40" fill="var(--primary)" opacity="0.1" />
            <path d="M180 150 L220 150 M200 130 L200 170" stroke="var(--primary)" strokeWidth="6" strokeLinecap="round" />
          </svg>
        );
    }
  };

  // Dynamic Bullet Graphics
  const renderBulletGraphic = (index) => {
    const graphics = [
      { icon: <Zap size={18} strokeWidth={2.5} />, colorClass: "bg-grad-rose" },
      { icon: <Target size={18} strokeWidth={2.5} />, colorClass: "bg-grad-blue" },
      { icon: <Star size={18} strokeWidth={2.5} />, colorClass: "bg-grad-purple" },
      { icon: <ShieldCheck size={18} strokeWidth={2.5} />, colorClass: "bg-grad-emerald" },
      { icon: <Activity size={18} strokeWidth={2.5} />, colorClass: "bg-grad-amber" }
    ];
    const item = graphics[index % graphics.length];
    return (
      <div className={`bullet-graphic-wrapper ${item.colorClass}`}>
        {item.icon}
      </div>
    );
  };

  return (
    <section className="shop-sectors-section section" id="sectors">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header text-center">
          <div className="badge badge-primary">SOLVING CHALLENGES ACROSS SECTORS</div>
          <TypewriterHeading text="One Platform. Every Business." />
          <p className="section-subtitle">
            No matter your industry, DukaanSarthi empowers you to manage, grow, and scale your business with ease.
          </p>
        </div>

        {/* 1. Category Switcher (Retail vs Manufacturing Toggles) */}
        <div className="category-toggle-container">
          <button 
            className={`cat-toggle-btn ${activeCategory === 'retail' ? 'active' : ''}`}
            onClick={() => handleCategoryChange('retail')}
          >
            Retail Shop
          </button>
          <button 
            className={`cat-toggle-btn ${activeCategory === 'manufacturing' ? 'active' : ''}`}
            onClick={() => handleCategoryChange('manufacturing')}
          >
            Manufacturing Unit
          </button>
        </div>

        {/* 2. Hierarchical Grid Layout */}
        <div className="sectors-layout-grid-hierarchical">
          
          {/* Left Column: Hierarchical Navigation */}
          <div className="sectors-navigation-panel">
            
            {/* Subcategory Slider Header */}
            <div className="subcategory-slider-header">
              <button className="slider-arrow-btn" onClick={() => scrollSubcategories('left')}>
                <ChevronLeft size={18} />
              </button>
              
              <div className="subcategory-tabs-row" ref={subcategoryListRef}>
                {currentSubcategories.map((subcat) => (
                  <button
                    key={subcat.id}
                    className={`subcat-tab-btn ${activeSubcategory === subcat.id ? 'active' : ''}`}
                    onClick={() => handleSubcategoryChange(subcat.id)}
                  >
                    {subcat.label}
                  </button>
                ))}
              </div>

              <button className="slider-arrow-btn" onClick={() => scrollSubcategories('right')}>
                <ChevronRight size={18} />
              </button>
            </div>

            {/* Sub-sectors grid inside active Subcategory */}
            <div className="subsectors-grid-container">
              <h4 className="grid-label-title">{currentSubcategoryData.label} Sectors</h4>
              <div className="subsectors-cards-grid">
                {currentSubcategoryData.sectors.map((sector) => (
                  <div
                    key={sector.id}
                    className={`subsector-card-pill ${activeSector === sector.id ? 'active' : ''}`}
                    onClick={() => setActiveSector(sector.id)}
                  >
                    <div className="subsector-card-icon">
                      {sector.icon}
                    </div>
                    <span className="subsector-card-label">{sector.label}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Visual Showcase Panel */}
          <div className="sector-showcase-panel glass-card">
            
            {/* Dynamic Illustration Container */}
            <div className="showcase-visual-wrapper">
              {renderIllustration(currentSectorData)}
            </div>

            {/* Content Details */}
            <div className="showcase-content-details">
              <h3>{currentSectorData.title}</h3>
              <p className="showcase-description">{currentSectorData.description}</p>
              
              <div className="showcase-bullets-list">
                {currentSectorData.bullets.map((bullet, index) => (
                  <div key={index} className="showcase-bullet-item">
                    {renderBulletGraphic(index)}
                    <span>{bullet}</span>
                  </div>
                ))}
              </div>

              <button 
                className="btn btn-primary showcase-cta-btn" 
                onClick={() => handleSectorCTA(currentSectorData.id)}
              >
                <span>{currentSectorData.ctaText}</span>
                <ArrowRight size={16} />
              </button>
            </div>

          </div>

        </div>

      </div>

      <style>{`
        .shop-sectors-section {
          background-color: var(--white);
          position: relative;
          overflow: hidden;
          padding: 80px 0;
        }

        /* 1. Pill Toggles */
        .category-toggle-container {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 0;
          background-color: var(--light);
          border: 1px solid var(--border);
          padding: 6px;
          border-radius: 50px;
          max-width: 440px;
          margin: 0 auto 40px auto;
          box-shadow: var(--shadow-sm);
        }

        .cat-toggle-btn {
          flex: 1;
          padding: 12px 24px;
          font-family: var(--font-family);
          font-weight: 600;
          font-size: 1rem;
          color: var(--text-muted);
          border: none;
          background: transparent;
          border-radius: 50px;
          cursor: pointer;
          transition: var(--transition);
          white-space: nowrap;
        }

        .cat-toggle-btn:hover {
          color: var(--primary);
        }

        .cat-toggle-btn.active {
          background: var(--grad-primary);
          color: var(--white);
          box-shadow: var(--shadow-sm);
        }

        /* 2. Hierarchical Grid */
        .sectors-layout-grid-hierarchical {
          display: flex;
          flex-direction: column;
          gap: 40px;
          width: 100%;
          max-width: 1100px;
          margin: 0 auto;
        }

        /* Left Showcase card styling */
        .sector-showcase-panel {
          border: 1px solid var(--border);
          padding: 32px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: center;
          gap: 40px;
          border-radius: var(--radius-md);
          background: var(--white);
          box-shadow: var(--shadow-sm);
        }

        .showcase-visual-wrapper {
          background-color: var(--light);
          border-radius: var(--radius-md);
          border: 1px solid var(--border);
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 250px;
          padding: 16px;
        }

        .sector-svg-graphic {
          width: 100%;
          max-width: 320px;
          height: auto;
          display: block;
        }

        .showcase-content-details h3 {
          font-size: 1.6rem;
          color: var(--dark);
          margin-bottom: 10px;
        }

        .showcase-description {
          font-size: 1rem;
          color: var(--text-muted);
          margin-bottom: 20px;
          line-height: 1.5;
        }

        .showcase-bullets-list {
          display: flex;
          flex-direction: column;
          gap: 16px;
          margin-bottom: 32px;
        }

        .showcase-bullet-item {
          display: flex;
          align-items: center;
          gap: 14px;
          background: rgba(255, 255, 255, 0.6);
          padding: 12px 16px;
          border-radius: 12px;
          border: 1px solid var(--border);
          transition: var(--transition);
        }

        .showcase-bullet-item:hover {
          background: var(--white);
          transform: translateX(4px);
          box-shadow: var(--shadow-sm);
          border-color: rgba(var(--primary-rgb), 0.3);
        }

        .bullet-graphic-wrapper {
          width: 36px;
          height: 36px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--white);
          flex-shrink: 0;
          box-shadow: 0 4px 10px rgba(0,0,0,0.1);
        }

        .bg-grad-rose { background: linear-gradient(135deg, #f43f5e 0%, #fb923c 100%); }
        .bg-grad-blue { background: linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%); }
        .bg-grad-purple { background: linear-gradient(135deg, #8b5cf6 0%, #d946ef 100%); }
        .bg-grad-emerald { background: linear-gradient(135deg, #10b981 0%, #14b8a6 100%); }
        .bg-grad-amber { background: linear-gradient(135deg, #f59e0b 0%, #fcd34d 100%); }

        .showcase-bullet-item span {
          font-size: 0.95rem;
          color: var(--text-main);
          font-weight: 500;
          line-height: 1.4;
        }

        .showcase-cta-btn {
          align-self: flex-start;
        }

        /* Left Nav Panel */
        .sectors-navigation-panel {
          display: flex;
          flex-direction: column;
          gap: 30px;
          min-width: 0;
          width: 100%;
        }

        /* Subcategory tabs row */
        .subcategory-slider-header {
          display: flex;
          align-items: center;
          gap: 8px;
          background-color: var(--light);
          border-radius: 12px;
          padding: 8px;
          border: 1px solid var(--border);
          min-width: 0;
          width: 100%;
        }

        .slider-arrow-btn {
          width: 36px;
          height: 36px;
          border-radius: 8px;
          border: 1px solid var(--border);
          background-color: var(--white);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-muted);
          cursor: pointer;
          transition: var(--transition);
          flex-shrink: 0;
        }

        .slider-arrow-btn:hover {
          color: var(--primary);
          border-color: var(--primary);
          background-color: rgba(var(--primary-rgb), 0.05);
        }

        .subcategory-tabs-row {
          display: flex;
          align-items: center;
          gap: 10px;
          overflow-x: auto;
          scrollbar-width: none; /* Firefox */
          flex-grow: 1;
          scroll-behavior: smooth;
          min-width: 0;
        }

        .subcategory-tabs-row::-webkit-scrollbar {
          display: none; /* Chrome/Safari */
        }

        .subcat-tab-btn {
          padding: 8px 16px;
          font-family: var(--font-family);
          font-weight: 600;
          font-size: 0.9rem;
          color: var(--text-muted);
          background: transparent;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          white-space: nowrap;
          transition: var(--transition);
        }

        .subcat-tab-btn:hover {
          color: var(--dark);
        }

        .subcat-tab-btn.active {
          background-color: var(--white);
          color: var(--primary);
          box-shadow: var(--shadow-sm);
        }

        /* Sub-sectors grid */
        .subsectors-grid-container {
          background-color: var(--light);
          border: 1px solid var(--border);
          border-radius: var(--radius-md);
          padding: 24px;
          text-align: center;
        }

        .grid-label-title {
          font-size: 1.1rem;
          color: var(--dark);
          margin-bottom: 16px;
          font-weight: 700;
        }

        .subsectors-cards-grid {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 16px;
        }

        .subsector-card-pill {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 12px;
          padding: 16px 20px;
          min-width: 140px;
          background-color: var(--white);
          border: 1px solid var(--border);
          border-radius: 12px;
          cursor: pointer;
          text-align: center;
          transition: var(--transition);
        }

        .subsector-card-pill:hover {
          transform: translateY(-2px);
          border-color: rgba(var(--primary-rgb), 0.3);
          box-shadow: var(--shadow-sm);
        }

        .subsector-card-pill.active {
          border-color: var(--primary);
          background-color: rgba(var(--primary-rgb), 0.04);
          box-shadow: var(--shadow-md);
        }

        .subsector-card-icon {
          width: 36px;
          height: 36px;
          border-radius: 8px;
          background-color: var(--light);
          color: var(--text-muted);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: var(--transition);
        }

        .subsector-card-pill:hover .subsector-card-icon {
          color: var(--primary);
          background-color: rgba(var(--primary-rgb), 0.08);
        }

        .subsector-card-pill.active .subsector-card-icon {
          background: var(--grad-primary);
          color: var(--white);
        }

        .subsector-card-label {
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--text-main);
          line-height: 1.2;
        }

        .subsector-card-pill.active .subsector-card-label {
          color: var(--primary);
        }

        /* SVG Animations */
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
          100% { transform: translateY(0px); }
        }

        .floating-element {
          animation: float 4s ease-in-out infinite;
        }

        .anim-delay-1 {
          animation-delay: 0.6s;
        }

        .anim-delay-2 {
          animation-delay: 1.4s;
        }

        .anim-delay-3 {
          animation-delay: 2.2s;
        }

        /* Responsive Settings */
        @media (max-width: 1024px) {
          .sectors-layout-grid-hierarchical {
            display: flex;
            flex-direction: column;
            gap: 32px;
          }
          .sector-showcase-panel {
            grid-template-columns: 1fr;
            padding: 24px;
          }
          .showcase-visual-wrapper {
            min-height: 200px;
          }
        }

        @media (max-width: 576px) {
          .subcategory-slider-header {
            padding: 4px;
            border-radius: 8px;
          }
          .slider-arrow-btn {
            width: 30px;
            height: 30px;
          }
          .subcat-tab-btn {
            padding: 6px 12px;
            font-size: 0.8rem;
          }
          .subsectors-cards-grid {
            grid-template-columns: repeat(auto-fit, minmax(110px, 1fr));
            gap: 10px;
          }
          .sector-showcase-panel {
            padding: 20px;
            gap: 16px;
          }
          .showcase-visual-wrapper {
            min-height: 160px;
            padding: 10px;
          }
          .showcase-content-details h3 {
            font-size: 1.3rem;
          }
          .showcase-description {
            font-size: 0.95rem;
            margin-bottom: 16px;
          }
          .showcase-bullets-list {
            gap: 8px;
            margin-bottom: 20px;
          }
          .showcase-bullet-item span {
            font-size: 0.88rem;
          }
          .category-toggle-container {
            max-width: 320px;
            padding: 4px;
          }
          .cat-toggle-btn {
            padding: 8px 16px;
            font-size: 0.85rem;
          }
          .showcase-cta-btn:active {
            transform: translateY(0);
          }
        }

        .typing-cursor {
          animation: cursor-blink 0.8s step-end infinite;
          color: var(--primary);
          margin-left: 4px;
          font-weight: 300;
        }
        @keyframes cursor-blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </section>
  );
}
