/**
 * AKSHAR SWEETS & FARSAN - UNIFIED MULTI-PLATFORM SCRIPT ENGINE
 * Handles:
 * 1. Shared In-Memory & LocalStorage State Store
 * 2. 35 Realistic Gujarati Sweets & Farsan Seed Products
 * 3. 15 Pre-Seeded Realistic Orders with Full Lifecycles
 * 4. Retail & Wholesale Pricing & Quotation (RFQ) System
 * 5. Customer Android Simulator UI & Interactions
 * 6. Customer Responsive Web UI & Interactions
 * 7. Business Admin ERP Panel (Dashboard, Orders, Products CRUD, Wholesale, Inventory, Reports)
 * 8. Real-time Order Status Synchronization & Live Stepper
 * 9. Real Working CSV Exports for Orders and Inventory
 * 10. Interactive Step-by-Step Acceptance Criteria Tour
 */

(function () {
  'use strict';

  // ============================================================
  // 1. DEFAULT SEED DATA (35 Products, 15 Orders, 15 Customers)
  // ============================================================

  const DEFAULT_CATEGORIES = [
    { id: 'Sweets', name: 'Sweets & Mithai', icon: 'fa-cookie-bite', img: 'https://images.unsplash.com/photo-1599785209707-a456fc1337bb?auto=format&fit=crop&w=140&q=80', desc: 'Gir Cow Desi Ghee Mithai' },
    { id: 'Farsan', name: 'Gujarati Farsan', icon: 'fa-bowl-food', img: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=140&q=80', desc: 'Fresh Crispy Gathiya & Sev' },
    { id: 'Snacks', name: 'Morning Fresh', icon: 'fa-sun', img: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=140&q=80', desc: 'Hot Fafda & Steamed Khaman' },
    { id: 'Dry Fruits', name: 'Dry Fruits & Shrikhand', icon: 'fa-jar', img: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=140&q=80', desc: 'Rajbhog Shrikhand & Nuts' },
    { id: 'Hampers', name: 'Festive Hampers', icon: 'fa-gifts', img: 'https://images.unsplash.com/photo-1513201099705-a9746e1e201f?auto=format&fit=crop&w=140&q=80', desc: 'Diwali & Wedding Gift Boxes' },
    { id: 'Khakhra', name: 'Diet Khakhra & Namkeen', icon: 'fa-wheat-awn', img: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=140&q=80', desc: '100% Roasted Vacuum Packed' }
  ];

  const DEFAULT_PRODUCTS = [
    {
      id: 1,
      sku: 'AKS-SWT-001',
      name: 'Grand Festive Mithai Box (16 Pcs)',
      category: 'Hampers',
      desc: 'Assorted 16 artisanal bites crafted fresh at dawn. Includes Kaju Katli, Pista Roll, Kesar Peda & Anjeer Barfi. Sealed for gifting.',
      image: 'https://images.unsplash.com/photo-1599785209707-a456fc1337bb?auto=format&fit=crop&w=480&q=80',
      rating: 4.9,
      reviews: 1240,
      isVeg: true,
      isFreshBatch: true,
      isPureGhee: true,
      tag: 'Bestseller Combo',
      variants: {
        '250g': { price: 220, mrp: 260 },
        '500g': { price: 420, mrp: 490 },
        '1kg':   { price: 649, mrp: 799 }
      },
      wholesaleRatePerKg: 520,
      stockKg: 45,
      thresholdKg: 10,
      shelfLife: '20 Days'
    },
    {
      id: 2,
      sku: 'AKS-FAR-001',
      name: 'Special Bhavnagari Gathiya',
      category: 'Farsan',
      desc: 'Extra soft & melt-in-mouth ajwain infused gathiya fried in pure groundnut oil at 6 AM. Authentic Bhavnagar heritage recipe.',
      image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=480&q=80',
      rating: 4.8,
      reviews: 850,
      isVeg: true,
      isFreshBatch: true,
      isPureGhee: false,
      tag: 'Fresh Batch: 8 AM',
      variants: {
        '250g': { price: 85, mrp: 100 },
        '500g': { price: 165, mrp: 195 },
        '1kg':   { price: 320, mrp: 380 }
      },
      wholesaleRatePerKg: 240,
      stockKg: 8, // Low stock demo!
      thresholdKg: 15,
      shelfLife: '30 Days'
    },
    {
      id: 3,
      sku: 'AKS-SWT-002',
      name: 'Royal Kaju Katli (Goan Cashew)',
      category: 'Sweets',
      desc: 'Crafted from premium grade Goan cashews, pure silver vark, and natural cardamom. Zero essence or fillers.',
      image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=480&q=80',
      rating: 4.9,
      reviews: 1420,
      isVeg: true,
      isFreshBatch: true,
      isPureGhee: true,
      tag: 'Pure Ghee',
      variants: {
        '250g': { price: 240, mrp: 280 },
        '500g': { price: 470, mrp: 540 },
        '1kg':   { price: 920, mrp: 1050 }
      },
      wholesaleRatePerKg: 780,
      stockKg: 35,
      thresholdKg: 10,
      shelfLife: '25 Days'
    },
    {
      id: 4,
      sku: 'AKS-FAR-002',
      name: 'Spicy Ratlami Sev',
      category: 'Farsan',
      desc: 'Bold clove (laung) and black pepper spiced crispy sev. Authentic Ratlam street style crunch.',
      image: 'https://images.unsplash.com/photo-1567337710282-00832b415979?auto=format&fit=crop&w=480&q=80',
      rating: 4.8,
      reviews: 612,
      isVeg: true,
      isFreshBatch: true,
      isPureGhee: false,
      tag: 'Extra Clove',
      variants: {
        '250g': { price: 75, mrp: 90 },
        '500g': { price: 140, mrp: 170 },
        '1kg':   { price: 270, mrp: 320 }
      },
      wholesaleRatePerKg: 210,
      stockKg: 40,
      thresholdKg: 10,
      shelfLife: '45 Days'
    },
    {
      id: 5,
      sku: 'AKS-SNK-001',
      name: 'Fafda with Papaya Sambharo & Kadhi',
      category: 'Snacks',
      desc: 'Crisp golden gram flour fafda served with authentic Gujarati warm sweet-spicy besan kadhi, raw papaya relish & fried green chillies.',
      image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=480&q=80',
      rating: 4.9,
      reviews: 1260,
      isVeg: true,
      isFreshBatch: true,
      isPureGhee: false,
      tag: 'Morning Hit',
      variants: {
        '250g': { price: 120, mrp: 140 },
        '500g': { price: 230, mrp: 270 },
        '1kg':   { price: 440, mrp: 500 }
      },
      wholesaleRatePerKg: 360,
      stockKg: 20,
      thresholdKg: 5,
      shelfLife: 'Same Day'
    },
    {
      id: 6,
      sku: 'AKS-SWT-003',
      name: 'Mohanthal (Traditional Gir Cow Desi Ghee)',
      category: 'Sweets',
      desc: 'Slow-roasted coarse gram flour confection simmered in pure Gir cow ghee, saffron, and slivered almonds.',
      image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=480&q=80',
      rating: 4.9,
      reviews: 514,
      isVeg: true,
      isFreshBatch: true,
      isPureGhee: true,
      tag: 'Slow Roasted',
      variants: {
        '250g': { price: 210, mrp: 240 },
        '500g': { price: 400, mrp: 460 },
        '1kg':   { price: 780, mrp: 880 }
      },
      wholesaleRatePerKg: 640,
      stockKg: 18,
      thresholdKg: 8,
      shelfLife: '15 Days'
    },
    {
      id: 7,
      sku: 'AKS-SNK-002',
      name: 'Steamed Nylon Khaman Dhokla',
      category: 'Snacks',
      desc: 'Super soft, juicy steamed gram flour sponge tempered with black mustard seeds, fresh green chillies and coriander.',
      image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=480&q=80',
      rating: 4.8,
      reviews: 860,
      isVeg: true,
      isFreshBatch: true,
      isPureGhee: false,
      tag: 'Steamed',
      variants: {
        '250g': { price: 70, mrp: 85 },
        '500g': { price: 130, mrp: 160 },
        '1kg':   { price: 250, mrp: 300 }
      },
      wholesaleRatePerKg: 190,
      stockKg: 25,
      thresholdKg: 5,
      shelfLife: 'Same Day'
    },
    {
      id: 8,
      sku: 'AKS-SWT-004',
      name: 'Royal Kesar Peda',
      category: 'Sweets',
      desc: 'Silky evaporated milk mawa blended with Kashmiri saffron threads and green cardamom. Sourced from Mathura traditions.',
      image: 'https://images.unsplash.com/photo-1599785209707-a456fc1337bb?auto=format&fit=crop&w=480&q=80',
      rating: 5.0,
      reviews: 390,
      isVeg: true,
      isFreshBatch: true,
      isPureGhee: true,
      tag: 'Kashmiri Kesar',
      variants: {
        '250g': { price: 240, mrp: 280 },
        '500g': { price: 460, mrp: 540 },
        '1kg':   { price: 890, mrp: 1020 }
      },
      wholesaleRatePerKg: 720,
      stockKg: 6, // Low stock demo!
      thresholdKg: 12,
      shelfLife: '12 Days'
    },
    {
      id: 9,
      sku: 'AKS-FAR-003',
      name: 'Mini Bhakarwadi',
      category: 'Farsan',
      desc: 'Crispy fried pinwheel rolls stuffed with a sweet, sour, and fiery blend of coconut, poppy seeds and secret spices.',
      image: 'https://images.unsplash.com/photo-1567337710282-00832b415979?auto=format&fit=crop&w=480&q=80',
      rating: 4.7,
      reviews: 350,
      isVeg: true,
      isFreshBatch: true,
      isPureGhee: false,
      tag: 'Sweet & Tangy',
      variants: {
        '250g': { price: 115, mrp: 135 },
        '500g': { price: 220, mrp: 260 },
        '1kg':   { price: 420, mrp: 490 }
      },
      wholesaleRatePerKg: 320,
      stockKg: 30,
      thresholdKg: 8,
      shelfLife: '60 Days'
    },
    {
      id: 10,
      sku: 'AKS-KHK-001',
      name: 'Methi Masala Khakhra (Vacuum Packed)',
      category: 'Khakhra',
      desc: '100% whole wheat hand-roasted paper thin crisps infused with fresh fenugreek leaves and cumin. Zero oil diet snack.',
      image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=480&q=80',
      rating: 4.6,
      reviews: 215,
      isVeg: true,
      isFreshBatch: true,
      isPureGhee: false,
      tag: 'Vacuum Packed',
      variants: {
        '250g': { price: 90, mrp: 105 },
        '500g': { price: 170, mrp: 200 },
        '1kg':   { price: 320, mrp: 380 }
      },
      wholesaleRatePerKg: 240,
      stockKg: 50,
      thresholdKg: 10,
      shelfLife: '90 Days'
    },
    {
      id: 11,
      sku: 'AKS-SWT-005',
      name: 'Motichoor Laddu (Pure Desi Ghee)',
      category: 'Sweets',
      desc: 'Tiny gram flour pearls fried in desi ghee, soaked in saffron syrup, and garnished with roasted pistachios.',
      image: 'https://images.unsplash.com/photo-1599785209707-a456fc1337bb?auto=format&fit=crop&w=480&q=80',
      rating: 4.9,
      reviews: 980,
      isVeg: true,
      isFreshBatch: true,
      isPureGhee: true,
      tag: 'Gir Cow Ghee',
      variants: {
        '250g': { price: 190, mrp: 220 },
        '500g': { price: 360, mrp: 420 },
        '1kg':   { price: 690, mrp: 800 }
      },
      wholesaleRatePerKg: 560,
      stockKg: 28,
      thresholdKg: 10,
      shelfLife: '7 Days'
    },
    {
      id: 12,
      sku: 'AKS-DRY-001',
      name: 'Kesar Rajbhog Shrikhand (Chilled)',
      category: 'Dry Fruits',
      desc: 'Velvety strained hung curd sweetened with saffron, green cardamom, almond slivers and pistachios.',
      image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=480&q=80',
      rating: 4.9,
      reviews: 730,
      isVeg: true,
      isFreshBatch: true,
      isPureGhee: false,
      tag: 'Chilled Daily',
      variants: {
        '250g': { price: 125, mrp: 150 },
        '500g': { price: 240, mrp: 280 },
        '1kg':   { price: 460, mrp: 530 }
      },
      wholesaleRatePerKg: 360,
      stockKg: 22,
      thresholdKg: 6,
      shelfLife: '6 Days'
    },
    {
      id: 13,
      sku: 'AKS-FAR-004',
      name: 'Champakali Gathiya',
      category: 'Farsan',
      desc: 'Artisanal flower-cut crisp gathiya with a crunchy texture and mild black pepper punch.',
      image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=480&q=80',
      rating: 4.7,
      reviews: 412,
      isVeg: true,
      isFreshBatch: true,
      isPureGhee: false,
      tag: 'Spicy & Crunchy',
      variants: {
        '250g': { price: 90, mrp: 105 },
        '500g': { price: 175, mrp: 200 },
        '1kg':   { price: 340, mrp: 390 }
      },
      wholesaleRatePerKg: 260,
      stockKg: 34,
      thresholdKg: 10,
      shelfLife: '30 Days'
    },
    {
      id: 14,
      sku: 'AKS-FAR-005',
      name: 'Nylon Papdi Gathiya',
      category: 'Farsan',
      desc: 'Paper-thin golden crisp ribbons of spiced gram flour. Perfect tea-time companion.',
      image: 'https://images.unsplash.com/photo-1567337710282-00832b415979?auto=format&fit=crop&w=480&q=80',
      rating: 4.8,
      reviews: 580,
      isVeg: true,
      isFreshBatch: true,
      isPureGhee: false,
      tag: 'Tea-time Classic',
      variants: {
        '250g': { price: 85, mrp: 100 },
        '500g': { price: 160, mrp: 190 },
        '1kg':   { price: 310, mrp: 370 }
      },
      wholesaleRatePerKg: 240,
      stockKg: 24,
      thresholdKg: 8,
      shelfLife: '30 Days'
    },
    {
      id: 15,
      sku: 'AKS-SWT-006',
      name: 'Anjeer Dry Fruit Barfi (Sugar-Free)',
      category: 'Sweets',
      desc: 'Naturally sweet Turkish figs simmered with roasted almonds, pistachios and cashew nuts. Zero refined sugar.',
      image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=480&q=80',
      rating: 4.9,
      reviews: 620,
      isVeg: true,
      isFreshBatch: true,
      isPureGhee: true,
      tag: 'Sugar-Free Diet',
      variants: {
        '250g': { price: 310, mrp: 360 },
        '500g': { price: 600, mrp: 700 },
        '1kg':   { price: 1150, mrp: 1350 }
      },
      wholesaleRatePerKg: 950,
      stockKg: 19,
      thresholdKg: 5,
      shelfLife: '30 Days'
    },
    {
      id: 16,
      sku: 'AKS-SNK-003',
      name: 'Sev Khamani (Garnished)',
      category: 'Snacks',
      desc: 'Crumbled chana dal savory mash sautéed with mustard, sesame, and topped with pomegranate pearls, coconut & nylon sev.',
      image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=480&q=80',
      rating: 4.7,
      reviews: 310,
      isVeg: true,
      isFreshBatch: true,
      isPureGhee: false,
      tag: 'Fresh Kitchen',
      variants: {
        '250g': { price: 80, mrp: 95 },
        '500g': { price: 150, mrp: 180 },
        '1kg':   { price: 290, mrp: 340 }
      },
      wholesaleRatePerKg: 220,
      stockKg: 15,
      thresholdKg: 5,
      shelfLife: 'Same Day'
    },
    {
      id: 17,
      sku: 'AKS-SWT-007',
      name: 'Surati Ghari (Mawa & Pista)',
      category: 'Sweets',
      desc: 'Legendary Surat sweet made of rich mawa and dry fruits enclosed in a fine puri, bathed in pure ghee.',
      image: 'https://images.unsplash.com/photo-1599785209707-a456fc1337bb?auto=format&fit=crop&w=480&q=80',
      rating: 4.9,
      reviews: 440,
      isVeg: true,
      isFreshBatch: true,
      isPureGhee: true,
      tag: 'Chandani Padva Special',
      variants: {
        '250g': { price: 260, mrp: 300 },
        '500g': { price: 500, mrp: 580 },
        '1kg':   { price: 960, mrp: 1100 }
      },
      wholesaleRatePerKg: 800,
      stockKg: 14,
      thresholdKg: 5,
      shelfLife: '15 Days'
    },
    {
      id: 18,
      sku: 'AKS-FAR-006',
      name: 'Fiery Chorafali with Masala',
      category: 'Farsan',
      desc: 'Super light, puffed crispy strips made from urad and chana dal flour dusted with sour-fiery dry masala.',
      image: 'https://images.unsplash.com/photo-1567337710282-00832b415979?auto=format&fit=crop&w=480&q=80',
      rating: 4.8,
      reviews: 520,
      isVeg: true,
      isFreshBatch: true,
      isPureGhee: false,
      tag: 'Festival Favorite',
      variants: {
        '250g': { price: 95, mrp: 115 },
        '500g': { price: 180, mrp: 215 },
        '1kg':   { price: 350, mrp: 410 }
      },
      wholesaleRatePerKg: 270,
      stockKg: 25,
      thresholdKg: 8,
      shelfLife: '45 Days'
    },
    {
      id: 19,
      sku: 'AKS-DRY-002',
      name: 'Roasted Salted Cashews & Almonds (Jumbo)',
      category: 'Dry Fruits',
      desc: 'Hand-picked W240 Goan cashews and Californian Mamra almonds slow dry-roasted with rock salt.',
      image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=480&q=80',
      rating: 4.9,
      reviews: 310,
      isVeg: true,
      isFreshBatch: false,
      isPureGhee: false,
      tag: 'Gifting Ready',
      variants: {
        '250g': { price: 340, mrp: 399 },
        '500g': { price: 660, mrp: 780 },
        '1kg':   { price: 1280, mrp: 1500 }
      },
      wholesaleRatePerKg: 1050,
      stockKg: 40,
      thresholdKg: 10,
      shelfLife: '90 Days'
    },
    {
      id: 20,
      sku: 'AKS-FAR-007',
      name: 'Cornflakes Chivda (Sweet & Spicy)',
      category: 'Farsan',
      desc: 'Golden crisp corn flakes tossed with fried peanuts, raisins, curry leaves, and secret spice blend.',
      image: 'https://images.unsplash.com/photo-1567337710282-00832b415979?auto=format&fit=crop&w=480&q=80',
      rating: 4.6,
      reviews: 290,
      isVeg: true,
      isFreshBatch: true,
      isPureGhee: false,
      tag: 'All-Day Munch',
      variants: {
        '250g': { price: 80, mrp: 95 },
        '500g': { price: 150, mrp: 180 },
        '1kg':   { price: 290, mrp: 340 }
      },
      wholesaleRatePerKg: 220,
      stockKg: 32,
      thresholdKg: 8,
      shelfLife: '60 Days'
    },
    {
      id: 21,
      sku: 'AKS-SWT-008',
      name: 'Besan Ladoo (Gir Cow Ghee)',
      category: 'Sweets',
      desc: 'Aromatic roasted chickpea flour spheres with desi ghee, boora sugar and green cardamom.',
      image: 'https://images.unsplash.com/photo-1599785209707-a456fc1337bb?auto=format&fit=crop&w=480&q=80',
      rating: 4.8,
      reviews: 670,
      isVeg: true,
      isFreshBatch: true,
      isPureGhee: true,
      tag: 'Pure Ghee',
      variants: {
        '250g': { price: 170, mrp: 200 },
        '500g': { price: 320, mrp: 380 },
        '1kg':   { price: 620, mrp: 720 }
      },
      wholesaleRatePerKg: 500,
      stockKg: 26,
      thresholdKg: 8,
      shelfLife: '30 Days'
    },
    {
      id: 22,
      sku: 'AKS-FAR-008',
      name: 'Lasan Sev (Garlic Sev)',
      category: 'Farsan',
      desc: 'Pungent fresh garlic infused gram flour sev with fiery red chilli. Authentic Saurashtra taste.',
      image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=480&q=80',
      rating: 4.7,
      reviews: 430,
      isVeg: true,
      isFreshBatch: true,
      isPureGhee: false,
      tag: 'Garlic Crunch',
      variants: {
        '250g': { price: 75, mrp: 90 },
        '500g': { price: 140, mrp: 170 },
        '1kg':   { price: 270, mrp: 320 }
      },
      wholesaleRatePerKg: 210,
      stockKg: 28,
      thresholdKg: 8,
      shelfLife: '45 Days'
    },
    {
      id: 23,
      sku: 'AKS-KHK-002',
      name: 'Jeera Masala Khakhra',
      category: 'Khakhra',
      desc: 'Hand-pressed roasted wheat crackers loaded with roasted cumin and mild carom seeds.',
      image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=480&q=80',
      rating: 4.7,
      reviews: 180,
      isVeg: true,
      isFreshBatch: true,
      isPureGhee: false,
      tag: '100% Whole Wheat',
      variants: {
        '250g': { price: 90, mrp: 105 },
        '500g': { price: 170, mrp: 200 },
        '1kg':   { price: 320, mrp: 380 }
      },
      wholesaleRatePerKg: 240,
      stockKg: 44,
      thresholdKg: 10,
      shelfLife: '90 Days'
    },
    {
      id: 24,
      sku: 'AKS-SWT-009',
      name: 'Royal Pista Roll',
      category: 'Sweets',
      desc: 'Lush Iranian pistachio core wrapped inside rich cashew fudge sheet.',
      image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=480&q=80',
      rating: 4.9,
      reviews: 510,
      isVeg: true,
      isFreshBatch: true,
      isPureGhee: true,
      tag: 'Signature Mithai',
      variants: {
        '250g': { price: 280, mrp: 320 },
        '500g': { price: 540, mrp: 620 },
        '1kg':   { price: 1050, mrp: 1200 }
      },
      wholesaleRatePerKg: 870,
      stockKg: 17,
      thresholdKg: 5,
      shelfLife: '20 Days'
    },
    {
      id: 25,
      sku: 'AKS-HMP-001',
      name: 'Royal Velvet Wedding Hamper (1kg)',
      category: 'Hampers',
      desc: 'Embossed velvet chest containing 4 premium sweets: Kaju Katli, Kesar Peda, Anjeer Barfi & Roasted Almonds.',
      image: 'https://images.unsplash.com/photo-1513201099705-a9746e1e201f?auto=format&fit=crop&w=480&q=80',
      rating: 5.0,
      reviews: 210,
      isVeg: true,
      isFreshBatch: true,
      isPureGhee: true,
      tag: 'Wedding Gift Box',
      variants: {
        '250g': { price: 380, mrp: 450 },
        '500g': { price: 720, mrp: 850 },
        '1kg':   { price: 1399, mrp: 1650 }
      },
      wholesaleRatePerKg: 1100,
      stockKg: 15,
      thresholdKg: 5,
      shelfLife: '25 Days'
    },
    {
      id: 26,
      sku: 'AKS-KHK-003',
      name: 'Roasted Diet Makhana (Pink Salt)',
      category: 'Khakhra',
      desc: 'Crunchy fox nuts lightly roasted in a whisper of olive oil and pink Himalayan salt.',
      image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=480&q=80',
      rating: 4.6,
      reviews: 140,
      isVeg: true,
      isFreshBatch: false,
      isPureGhee: false,
      tag: 'Healthy Snacking',
      variants: {
        '250g': { price: 160, mrp: 190 },
        '500g': { price: 300, mrp: 360 },
        '1kg':   { price: 580, mrp: 680 }
      },
      wholesaleRatePerKg: 460,
      stockKg: 35,
      thresholdKg: 10,
      shelfLife: '90 Days'
    },
    {
      id: 27,
      sku: 'AKS-SNK-004',
      name: 'Gujarati Moong Dal Kachori',
      category: 'Snacks',
      desc: 'Flaky golden pastry filled with spicy asafoetida and yellow moong dal mixture.',
      image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=480&q=80',
      rating: 4.8,
      reviews: 320,
      isVeg: true,
      isFreshBatch: true,
      isPureGhee: false,
      tag: 'Morning Frying',
      variants: {
        '250g': { price: 85, mrp: 100 },
        '500g': { price: 160, mrp: 190 },
        '1kg':   { price: 310, mrp: 360 }
      },
      wholesaleRatePerKg: 240,
      stockKg: 18,
      thresholdKg: 5,
      shelfLife: 'Same Day'
    },
    {
      id: 28,
      sku: 'AKS-SWT-010',
      name: 'Traditional Dry Fruit Halwasan',
      category: 'Sweets',
      desc: 'Famous Khambhat sweet made from sprouted wheat, caramelized milk, and abundant nutmeg & dry fruits.',
      image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=480&q=80',
      rating: 4.8,
      reviews: 240,
      isVeg: true,
      isFreshBatch: true,
      isPureGhee: true,
      tag: 'Khambhat Heritage',
      variants: {
        '250g': { price: 230, mrp: 270 },
        '500g': { price: 440, mrp: 520 },
        '1kg':   { price: 850, mrp: 980 }
      },
      wholesaleRatePerKg: 690,
      stockKg: 16,
      thresholdKg: 5,
      shelfLife: '20 Days'
    },
    {
      id: 29,
      sku: 'AKS-FAR-009',
      name: 'Tikha Gathiya (Red Hot Twist)',
      category: 'Farsan',
      desc: 'Fiery red chilli and carom seeds spiced crispy gathiya. Loved across Ahmedabad.',
      image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=480&q=80',
      rating: 4.7,
      reviews: 490,
      isVeg: true,
      isFreshBatch: true,
      isPureGhee: false,
      tag: 'Spicy 🌶️',
      variants: {
        '250g': { price: 85, mrp: 100 },
        '500g': { price: 160, mrp: 190 },
        '1kg':   { price: 310, mrp: 370 }
      },
      wholesaleRatePerKg: 240,
      stockKg: 22,
      thresholdKg: 8,
      shelfLife: '30 Days'
    },
    {
      id: 30,
      sku: 'AKS-SWT-011',
      name: 'Kopra Paak (Fresh Coconut Mawa)',
      category: 'Sweets',
      desc: 'Tender freshly grated coconut confection simmered with khoya and rose petals.',
      image: 'https://images.unsplash.com/photo-1599785209707-a456fc1337bb?auto=format&fit=crop&w=480&q=80',
      rating: 4.8,
      reviews: 310,
      isVeg: true,
      isFreshBatch: true,
      isPureGhee: true,
      tag: 'Rose Infused',
      variants: {
        '250g': { price: 180, mrp: 210 },
        '500g': { price: 340, mrp: 400 },
        '1kg':   { price: 650, mrp: 760 }
      },
      wholesaleRatePerKg: 520,
      stockKg: 20,
      thresholdKg: 6,
      shelfLife: '10 Days'
    },
    {
      id: 31,
      sku: 'AKS-DRY-003',
      name: 'Dry Fruit Shahi Chikki',
      category: 'Dry Fruits',
      desc: 'Crisp wafer-thin brittle packed with cashews, almonds, pistachios and organic jaggery.',
      image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=480&q=80',
      rating: 4.9,
      reviews: 430,
      isVeg: true,
      isFreshBatch: false,
      isPureGhee: true,
      tag: 'Organic Jaggery',
      variants: {
        '250g': { price: 220, mrp: 260 },
        '500g': { price: 420, mrp: 500 },
        '1kg':   { price: 800, mrp: 950 }
      },
      wholesaleRatePerKg: 650,
      stockKg: 30,
      thresholdKg: 8,
      shelfLife: '60 Days'
    },
    {
      id: 32,
      sku: 'AKS-FAR-010',
      name: 'Roasted Bajra Puff Mixture',
      category: 'Khakhra',
      desc: 'Crispy roasted pearl millet puffs tossed with dry roasted peanuts and turmeric.',
      image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=480&q=80',
      rating: 4.5,
      reviews: 160,
      isVeg: true,
      isFreshBatch: false,
      isPureGhee: false,
      tag: 'Zero Oil Diet',
      variants: {
        '250g': { price: 75, mrp: 90 },
        '500g': { price: 140, mrp: 170 },
        '1kg':   { price: 270, mrp: 320 }
      },
      wholesaleRatePerKg: 210,
      stockKg: 38,
      thresholdKg: 8,
      shelfLife: '90 Days'
    },
    {
      id: 33,
      sku: 'AKS-SWT-012',
      name: 'Gulab Jamun (Pure Desi Ghee)',
      category: 'Sweets',
      desc: 'Melt-in-mouth milk solids dumplings fried in desi ghee, soaked in rose and green cardamom syrup.',
      image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=480&q=80',
      rating: 4.9,
      reviews: 790,
      isVeg: true,
      isFreshBatch: true,
      isPureGhee: true,
      tag: 'Hot & Juicy',
      variants: {
        '250g': { price: 160, mrp: 190 },
        '500g': { price: 300, mrp: 360 },
        '1kg':   { price: 580, mrp: 680 }
      },
      wholesaleRatePerKg: 460,
      stockKg: 22,
      thresholdKg: 6,
      shelfLife: '8 Days'
    },
    {
      id: 34,
      sku: 'AKS-HMP-002',
      name: 'Diwali Mithai & Namkeen Celebration Box',
      category: 'Hampers',
      desc: 'Festive hamper with 500g Kaju Katli, 250g Bhavnagari Gathiya, 250g Ratlami Sev and diya set.',
      image: 'https://images.unsplash.com/photo-1513201099705-a9746e1e201f?auto=format&fit=crop&w=480&q=80',
      rating: 4.9,
      reviews: 380,
      isVeg: true,
      isFreshBatch: true,
      isPureGhee: true,
      tag: 'Festive Box',
      variants: {
        '250g': { price: 290, mrp: 350 },
        '500g': { price: 560, mrp: 650 },
        '1kg':   { price: 1080, mrp: 1250 }
      },
      wholesaleRatePerKg: 890,
      stockKg: 18,
      thresholdKg: 5,
      shelfLife: '25 Days'
    },
    {
      id: 35,
      sku: 'AKS-FAR-011',
      name: 'White Sweet Kadhi & Papaya Sambharo (Side Pack)',
      category: 'Snacks',
      desc: 'Authentic accompaniment tub of warm sweet Gujarati besan kadhi, raw mustard papaya relish & fried green chillies.',
      image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=480&q=80',
      rating: 4.9,
      reviews: 890,
      isVeg: true,
      isFreshBatch: true,
      isPureGhee: false,
      tag: 'Essential Side',
      variants: {
        '250g': { price: 40, mrp: 50 },
        '500g': { price: 75, mrp: 90 },
        '1kg':   { price: 140, mrp: 170 }
      },
      wholesaleRatePerKg: 110,
      stockKg: 40,
      thresholdKg: 10,
      shelfLife: 'Same Day'
    }
  ];

  const DEFAULT_CUSTOMERS = [
    // 10 Retail Customers
    { id: 'ret-1', name: 'Pooja Shah', type: 'Retail', phone: '+91 98250 84721', email: 'pooja.shah@gmail.com', address: 'B-402, Shivalik Heights, Bodakdev, Ahmedabad 380054', ordersCount: 4, ltv: 3120, status: 'Active' },
    { id: 'ret-2', name: 'Mehul Patel', type: 'Retail', phone: '+91 98251 90234', email: 'mehul.p@yahoo.com', address: '12, Sunrise Bungalows, Vastrapur, Ahmedabad 380015', ordersCount: 3, ltv: 2450, status: 'Active' },
    { id: 'ret-3', name: 'Ananya Desai', type: 'Retail', phone: '+91 98980 12345', email: 'ananya.d@outlook.com', address: 'A-701, Titanium City Center, Prahlad Nagar, Ahmedabad', ordersCount: 2, ltv: 1680, status: 'Active' },
    { id: 'ret-4', name: 'Parth Joshi', type: 'Retail', phone: '+91 98240 54321', email: 'parth.joshi@gmail.com', address: '44, Swastik Society, Navrangpura, Ahmedabad 380009', ordersCount: 5, ltv: 4320, status: 'Active' },
    { id: 'ret-5', name: 'Ritu Trivedi', type: 'Retail', phone: '+91 98252 67890', email: 'ritu.trivedi@gmail.com', address: 'B-14, Prernatirth Derasar Road, Satellite, Ahmedabad', ordersCount: 2, ltv: 1240, status: 'Active' },
    { id: 'ret-6', name: 'Chirag Brahmbhatt', type: 'Retail', phone: '+91 98253 11223', email: 'chirag.b@gmail.com', address: '7, Jal Vihar, Thaltej, Ahmedabad 380059', ordersCount: 1, ltv: 380, status: 'Active' },
    { id: 'ret-7', name: 'Deepali Mehta', type: 'Retail', phone: '+91 98254 99887', email: 'deepali.m@gmail.com', address: '302, Samarpan Flats, Ambawadi, Ahmedabad 380006', ordersCount: 3, ltv: 2890, status: 'Active' },
    { id: 'ret-8', name: 'Jignesh Panchal', type: 'Retail', phone: '+91 98255 44332', email: 'jignesh.p@gmail.com', address: '15, Anjali Park, Paldi, Ahmedabad 380007', ordersCount: 2, ltv: 1020, status: 'Active' },
    { id: 'ret-9', name: 'Shreya Parekh', type: 'Retail', phone: '+91 98256 77665', email: 'shreya.p@gmail.com', address: 'B-22, Kankaria Enclave, Maninagar, Ahmedabad 380008', ordersCount: 3, ltv: 2190, status: 'Active' },
    { id: 'ret-10', name: 'Bhavin Raval', type: 'Retail', phone: '+91 98257 88990', email: 'bhavin.raval@gmail.com', address: 'E-504, Vande Mataram City, Gota, Ahmedabad 382481', ordersCount: 1, ltv: 415, status: 'Active' },

    // 5 Wholesale Customers
    { id: 'wh-1', name: 'Swagat Caterers & Events', type: 'Wholesale', contactPerson: 'Haresh Patel', phone: '+91 98251 33445', email: 'orders@swagatcaterers.com', gstin: '24AAACS1429B1Z8', address: 'Swagat Compound, Near SG Highway Toll, Ahmedabad', ordersCount: 6, ltv: 142000, status: 'Approved' },
    { id: 'wh-2', name: 'Rajvi Hotel & Banquets', type: 'Wholesale', contactPerson: 'Nilesh Vyas', phone: '+91 98252 44556', email: 'kitchen@rajvihotel.com', gstin: '24AABCR5678M1Z4', address: 'Rajvi Plaza, Sindhu Bhavan Road, Bodakdev, Ahmedabad', ordersCount: 4, ltv: 98000, status: 'Approved' },
    { id: 'wh-3', name: 'Shubh Vivah Event Planners', type: 'Wholesale', contactPerson: 'Sanjay Somani', phone: '+91 98253 55667', email: 'info@shubhvivahevents.com', gstin: '24AAECS9012N1Z2', address: 'Somani Tower, Drive-In Road, Ahmedabad', ordersCount: 3, ltv: 65000, status: 'Approved' },
    { id: 'wh-4', name: 'Shreeji Supermart Retailers', type: 'Wholesale', contactPerson: 'Manoj Shah', phone: '+91 98254 66778', email: 'purchase@shreejimart.com', gstin: '24AAECS3456P1Z1', address: 'Shreeji Arcade, Science City Road, Sola, Ahmedabad', ordersCount: 5, ltv: 84000, status: 'Approved' },
    { id: 'wh-5', name: 'Royal Banquets & Party Plot', type: 'Wholesale', contactPerson: 'Kirit Desai', phone: '+91 98255 77889', email: 'admin@royalbanquets.com', gstin: '24AAKCR7890Q1Z9', address: 'Opp. YMCA Club, SG Highway, Ahmedabad', ordersCount: 0, ltv: 0, status: 'Pending Approval' }
  ];

  const DEFAULT_ORDERS = [
    {
      id: 'AKS-2026-101',
      date: '2026-11-04 18:20',
      customer: 'Pooja Shah',
      type: 'Retail',
      items: [
        { name: 'Royal Kaju Katli', variant: '500g', qty: 1, price: 470 },
        { name: 'Special Bhavnagari Gathiya', variant: '250g', qty: 2, price: 85 },
        { name: 'Mohanthal Desi Ghee', variant: '250g', qty: 1, price: 210 }
      ],
      amount: 850,
      deliveryFee: 0,
      packagingFee: 15,
      discount: 0,
      total: 865,
      deliveryMode: 'Delivery (Bodakdev)',
      status: 'Completed',
      paymentMethod: 'UPI (GPay)',
      deliveryAddress: 'B-402, Shivalik Heights, Bodakdev, Ahmedabad 380054',
      eta: 'Delivered at 19:05'
    },
    {
      id: 'AKS-2026-102',
      date: '2026-11-04 19:40',
      customer: 'Mehul Patel',
      type: 'Retail',
      items: [
        { name: 'Grand Festive Mithai Box', variant: '1kg', qty: 1, price: 649 },
        { name: 'Royal Kesar Peda', variant: '500g', qty: 1, price: 460 },
        { name: 'Methi Masala Khakhra', variant: '500g', qty: 1, price: 170 }
      ],
      amount: 1279,
      deliveryFee: 0,
      packagingFee: 15,
      discount: 0,
      total: 1294,
      deliveryMode: 'Delivery (Vastrapur)',
      status: 'Completed',
      paymentMethod: 'UPI (PhonePe)',
      deliveryAddress: '12, Sunrise Bungalows, Vastrapur, Ahmedabad',
      eta: 'Delivered at 20:25'
    },
    {
      id: 'AKS-2026-103',
      date: '2026-11-04 20:10',
      customer: 'Swagat Caterers & Events',
      type: 'Wholesale',
      items: [
        { name: 'Special Bhavnagari Gathiya (Bulk 10kg Tin)', variant: '10kg', qty: 4, price: 2400 },
        { name: 'Spicy Ratlami Sev (Bulk 10kg)', variant: '10kg', qty: 4, price: 2100 }
      ],
      amount: 18000,
      deliveryFee: 0,
      packagingFee: 0,
      discount: 0,
      total: 18000,
      deliveryMode: 'Store Pickup (Tempo)',
      status: 'Completed',
      paymentMethod: 'Wholesale 15-Day Credit',
      deliveryAddress: 'Swagat Compound, Near SG Highway Toll, Ahmedabad',
      eta: 'Picked up by Haresh Patel'
    },
    {
      id: 'AKS-2026-104',
      date: '2026-11-04 21:00',
      customer: 'Ananya Desai',
      type: 'Retail',
      items: [
        { name: 'Kesar Rajbhog Shrikhand', variant: '500g', qty: 1, price: 240 },
        { name: 'Fafda with Papaya Sambharo', variant: '500g', qty: 1, price: 230 }
      ],
      amount: 470,
      deliveryFee: 40,
      packagingFee: 15,
      discount: 0,
      total: 525,
      deliveryMode: 'Delivery (Prahlad Nagar)',
      status: 'Completed',
      paymentMethod: 'Cash on Delivery',
      deliveryAddress: 'A-701, Titanium City Center, Prahlad Nagar',
      eta: 'Delivered at 21:40'
    },
    {
      id: 'AKS-2026-105',
      date: '2026-11-05 06:30',
      customer: 'Rajvi Hotel & Banquets',
      type: 'Wholesale',
      items: [
        { name: 'Royal Kaju Katli (Bulk 5kg Tin)', variant: '5kg', qty: 6, price: 3900 },
        { name: 'Mohanthal Desi Ghee (Bulk 5kg)', variant: '5kg', qty: 2, price: 3200 }
      ],
      amount: 29800,
      deliveryFee: 0,
      packagingFee: 0,
      discount: 0,
      total: 29800,
      deliveryMode: 'Van Delivery (Sindhu Bhavan)',
      status: 'Completed',
      paymentMethod: 'Wholesale 15-Day Credit',
      deliveryAddress: 'Rajvi Plaza, Sindhu Bhavan Road, Bodakdev',
      eta: 'Delivered to Chef Nilesh'
    },
    {
      id: 'AKS-2026-106',
      date: '2026-11-05 07:15',
      customer: 'Chirag Brahmbhatt',
      type: 'Retail',
      items: [
        { name: 'Spicy Ratlami Sev', variant: '500g', qty: 1, price: 140 },
        { name: 'Fafda with Papaya Sambharo', variant: '250g', qty: 1, price: 120 },
        { name: 'Nylon Khaman Dhokla', variant: '250g', qty: 1, price: 70 }
      ],
      amount: 330,
      deliveryFee: 40,
      packagingFee: 15,
      discount: 0,
      total: 385,
      deliveryMode: 'Delivery (Thaltej)',
      status: 'Cancelled',
      paymentMethod: 'UPI',
      deliveryAddress: '7, Jal Vihar, Thaltej, Ahmedabad',
      eta: 'Customer requested cancellation (Guest rescheduled)'
    },
    {
      id: 'AKS-2026-107',
      date: '2026-11-05 08:10',
      customer: 'Pooja Shah',
      type: 'Retail',
      items: [
        { name: 'Royal Kaju Katli', variant: '500g', qty: 1, price: 470 },
        { name: 'Special Bhavnagari Gathiya', variant: '250g', qty: 2, price: 85 },
        { name: 'Mohanthal Desi Ghee', variant: '250g', qty: 1, price: 210 }
      ],
      amount: 850,
      deliveryFee: 0,
      packagingFee: 15,
      discount: 180, // FESTIVE20 coupon
      total: 685,
      deliveryMode: 'Delivery (Bodakdev)',
      status: 'Out for Delivery',
      paymentMethod: 'UPI (GPay)',
      deliveryAddress: 'B-402, Shivalik Heights, Bodakdev, Ahmedabad 380054',
      eta: 'Rider Ramesh (+91 98251 00221) is 8 mins away'
    },
    {
      id: 'AKS-2026-108',
      date: '2026-11-05 08:35',
      customer: 'Parth Joshi',
      type: 'Retail',
      items: [
        { name: 'Grand Festive Mithai Box', variant: '1kg', qty: 1, price: 649 },
        { name: 'Surati Ghari', variant: '500g', qty: 1, price: 500 }
      ],
      amount: 1149,
      deliveryFee: 0,
      packagingFee: 15,
      discount: 0,
      total: 1164,
      deliveryMode: 'Delivery (Navrangpura)',
      status: 'Out for Delivery',
      paymentMethod: 'Credit Card',
      deliveryAddress: '44, Swastik Society, Navrangpura, Ahmedabad',
      eta: 'Rider Vijay is out for dispatch'
    },
    {
      id: 'AKS-2026-109',
      date: '2026-11-05 08:50',
      customer: 'Ritu Trivedi',
      type: 'Retail',
      items: [
        { name: 'Motichoor Laddu (Pure Ghee)', variant: '500g', qty: 1, price: 360 },
        { name: 'Steamed Nylon Khaman', variant: '500g', qty: 1, price: 130 },
        { name: 'Fried Chillies & Sambharo', variant: 'Side', qty: 2, price: 30 }
      ],
      amount: 550,
      deliveryFee: 40,
      packagingFee: 15,
      discount: 0,
      total: 605,
      deliveryMode: 'Delivery (Satellite)',
      status: 'Preparing',
      paymentMethod: 'UPI',
      deliveryAddress: 'B-14, Prernatirth Derasar Road, Satellite',
      eta: 'Chef frying fresh batch in kitchen'
    },
    {
      id: 'AKS-2026-110',
      date: '2026-11-05 09:05',
      customer: 'Deepali Mehta',
      type: 'Retail',
      items: [
        { name: 'Royal Kesar Peda', variant: '500g', qty: 1, price: 460 },
        { name: 'Anjeer Dry Fruit Barfi', variant: '250g', qty: 1, price: 310 },
        { name: 'Special Bhavnagari Gathiya', variant: '250g', qty: 1, price: 85 }
      ],
      amount: 855,
      deliveryFee: 0,
      packagingFee: 15,
      discount: 85, // AKSHAR10
      total: 785,
      deliveryMode: 'Store Pickup (Bodakdev)',
      status: 'Preparing',
      paymentMethod: 'UPI',
      deliveryAddress: 'Store Pickup Counter, Bodakdev',
      eta: 'Packaging in Stay-Crisp box'
    },
    {
      id: 'AKS-2026-111',
      date: '2026-11-05 09:12',
      customer: 'Swagat Caterers & Events',
      type: 'Wholesale',
      items: [
        { name: 'Special Bhavnagari Gathiya', variant: 'Bulk 20kg', qty: 1, price: 4800 },
        { name: 'Mini Bhakarwadi', variant: 'Bulk 15kg', qty: 1, price: 4800 },
        { name: 'Fafda with Papaya Sambharo', variant: 'Bulk 10kg', qty: 1, price: 3600 }
      ],
      amount: 13200,
      deliveryFee: 0,
      packagingFee: 0,
      discount: 0,
      total: 13200,
      deliveryMode: 'Store Pickup (Vehicle)',
      status: 'Preparing',
      paymentMethod: 'Wholesale 15-Day Credit',
      deliveryAddress: 'Swagat Compound, SG Highway',
      eta: 'Kitchen dispatch packaging in progress'
    },
    {
      id: 'AKS-2026-112',
      date: '2026-11-05 09:20',
      customer: 'Jignesh Panchal',
      type: 'Retail',
      items: [
        { name: 'Spicy Ratlami Sev', variant: '500g', qty: 1, price: 140 },
        { name: 'Nylon Papdi Gathiya', variant: '500g', qty: 1, price: 160 },
        { name: 'Jeera Masala Khakhra', variant: '500g', qty: 1, price: 170 }
      ],
      amount: 470,
      deliveryFee: 40,
      packagingFee: 15,
      discount: 0,
      total: 525,
      deliveryMode: 'Delivery (Paldi)',
      status: 'Accepted',
      paymentMethod: 'Cash on Delivery',
      deliveryAddress: '15, Anjali Park, Paldi, Ahmedabad',
      eta: 'Kitchen acknowledged order'
    },
    {
      id: 'AKS-2026-113',
      date: '2026-11-05 09:25',
      customer: 'Shreya Parekh',
      type: 'Retail',
      items: [
        { name: 'Royal Pista Roll', variant: '500g', qty: 1, price: 540 },
        { name: 'Mini Bhakarwadi', variant: '250g', qty: 1, price: 115 },
        { name: 'Roasted Salted Cashews', variant: '250g', qty: 1, price: 340 }
      ],
      amount: 995,
      deliveryFee: 40,
      packagingFee: 15,
      discount: 99,
      total: 951,
      deliveryMode: 'Delivery (Maninagar)',
      status: 'Accepted',
      paymentMethod: 'UPI',
      deliveryAddress: 'B-22, Kankaria Enclave, Maninagar',
      eta: 'Order assigned to Bodakdev kitchen'
    },
    {
      id: 'AKS-2026-114',
      date: '2026-11-05 09:32',
      customer: 'Bhavin Raval',
      type: 'Retail',
      items: [
        { name: 'Special Bhavnagari Gathiya', variant: '500g', qty: 1, price: 165 },
        { name: 'Fafda with Papaya Sambharo', variant: '250g', qty: 1, price: 120 },
        { name: 'Steamed Nylon Khaman', variant: '250g', qty: 1, price: 70 }
      ],
      amount: 355,
      deliveryFee: 40,
      packagingFee: 15,
      discount: 0,
      total: 410,
      deliveryMode: 'Delivery (Gota)',
      status: 'Placed',
      paymentMethod: 'UPI',
      deliveryAddress: 'E-504, Vande Mataram City, Gota',
      eta: 'Waiting for store acceptance'
    },
    {
      id: 'AKS-2026-115',
      date: '2026-11-05 09:38',
      customer: 'Shubh Vivah Event Planners',
      type: 'Wholesale',
      items: [
        { name: 'Grand Festive Mithai Box (Bulk 1kg)', variant: '1kg', qty: 30, price: 520 },
        { name: 'Special Bhavnagari Gathiya (Bulk 10kg)', variant: '10kg', qty: 3, price: 2400 }
      ],
      amount: 22800,
      deliveryFee: 0,
      packagingFee: 0,
      discount: 0,
      total: 22800,
      deliveryMode: 'Van Delivery (Drive-In Road)',
      status: 'Placed',
      paymentMethod: 'Wholesale 15-Day Credit',
      deliveryAddress: 'Somani Tower, Drive-In Road, Ahmedabad',
      eta: 'New wholesale order received'
    }
  ];

  const DEFAULT_QUOTES = [
    {
      id: 'RFQ-2026-081',
      client: 'Swagat Caterers & Events',
      contact: 'Haresh Patel (+91 98251 33445)',
      product: 'Special Bhavnagari Gathiya (10kg bulk packs)',
      qty: 60,
      date: '2026-11-24',
      estVal: '₹14,400',
      quotedPrice: 230,
      status: 'Quoted',
      notes: 'For wedding at Rajpath Club. Needs fresh 6 AM batch.'
    },
    {
      id: 'RFQ-2026-082',
      client: 'Royal Banquets & Party Plot',
      contact: 'Kirit Desai (+91 98255 77889)',
      product: 'Custom Wedding Mithai Box (16 Pcs)',
      qty: 120,
      date: '2026-12-05',
      estVal: '₹62,400',
      quotedPrice: 490,
      status: 'Pending Admin Quote',
      notes: 'Custom gold foil embossed box with couple initials.'
    }
  ];

  const DEFAULT_COUPONS = [
    { code: 'FESTIVE20', discountPercent: 20, maxDiscount: 250, minOrder: 500, label: '20% Off Festive Sweets', usageCount: 42, active: true },
    { code: 'AKSHAR10',  discountPercent: 10, maxDiscount: 150, minOrder: 300, label: '10% Off Storewide', usageCount: 88, active: true },
    { code: 'BULK500',   discountPercent: 0, flatDiscount: 500, minOrder: 3000, label: 'Flat ₹500 Off Bulk Orders', usageCount: 15, active: true }
  ];

  const DEFAULT_STAFF = [
    { name: 'Ramesh Shah', email: 'ramesh@aksharsweets.com', role: 'Super Admin (Owner)', permissions: 'Full System Access, Approvals & Financials', shift: 'Morning & Evening' },
    { name: 'Chirag Patel', email: 'chirag@aksharsweets.com', role: 'Kitchen & Dispatches Manager', permissions: 'Orders Management, Inventory, KOT Print', shift: '6:00 AM - 3:00 PM' },
    { name: 'Neha Joshi', email: 'neha@aksharsweets.com', role: 'Billing & Cashier', permissions: 'Invoicing, POS Checkout, Delivery Handover', shift: '10:00 AM - 8:00 PM' }
  ];

  // ============================================================
  // 2. STATE MANAGER & PERSISTENCE
  // ============================================================

  const STORAGE_KEY = 'AKSHAR_SWEETS_STATE_v1';

  let state = {
    products: [],
    categories: [],
    customers: [],
    orders: [],
    quotes: [],
    coupons: [],
    staff: [],
    activeView: 'android', // 'android', 'web', 'admin'
    activePersona: 'retail-1', // 'retail-1', 'wholesale-approved', 'admin-owner', etc.
    activeUser: null,
    cart: [
      { id: 3, name: 'Royal Kaju Katli (Goan Cashew)', variant: '500g', price: 470, mrp: 540, qty: 1, image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=480&q=80' },
      { id: 2, name: 'Special Bhavnagari Gathiya', variant: '250g', price: 85, mrp: 100, qty: 2, image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=480&q=80' },
      { id: 6, name: 'Mohanthal Desi Ghee', variant: '250g', price: 210, mrp: 240, qty: 1, image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=480&q=80' }
    ],
    appliedCoupon: { code: 'FESTIVE20', discountAmt: 180 },
    fulfillment: 'delivery',
    deliveryInstruction: 'Avoid doorbell',
    selectedVariants: {}, // productId -> '250g' | '500g' | '1kg'
    wholesaleMode: false,
    activeTrackingOrderId: 'AKS-2026-107',
    guidedStep: 1
  };

  function loadState() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        state.products = parsed.products || DEFAULT_PRODUCTS;
        state.categories = parsed.categories || DEFAULT_CATEGORIES;
        state.customers = parsed.customers || DEFAULT_CUSTOMERS;
        state.orders = parsed.orders || DEFAULT_ORDERS;
        state.quotes = parsed.quotes || DEFAULT_QUOTES;
        state.coupons = parsed.coupons || DEFAULT_COUPONS;
        state.staff = parsed.staff || DEFAULT_STAFF;
        if (parsed.cart) state.cart = parsed.cart;
        if (parsed.activeTrackingOrderId) state.activeTrackingOrderId = parsed.activeTrackingOrderId;
        return;
      }
    } catch (e) {
      console.warn('Could not read from localStorage, using seed data.', e);
    }
    // If not found, use default seed data
    state.products = JSON.parse(JSON.stringify(DEFAULT_PRODUCTS));
    state.categories = JSON.parse(JSON.stringify(DEFAULT_CATEGORIES));
    state.customers = JSON.parse(JSON.stringify(DEFAULT_CUSTOMERS));
    state.orders = JSON.parse(JSON.stringify(DEFAULT_ORDERS));
    state.quotes = JSON.parse(JSON.stringify(DEFAULT_QUOTES));
    state.coupons = JSON.parse(JSON.stringify(DEFAULT_COUPONS));
    state.staff = JSON.parse(JSON.stringify(DEFAULT_STAFF));
  }

  function saveState() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({
        products: state.products,
        categories: state.categories,
        customers: state.customers,
        orders: state.orders,
        quotes: state.quotes,
        coupons: state.coupons,
        staff: state.staff,
        cart: state.cart,
        activeTrackingOrderId: state.activeTrackingOrderId
      }));
    } catch (e) {
      console.warn('Storage full or unavailable', e);
    }
  }

  function resetAllData() {
    localStorage.removeItem(STORAGE_KEY);
    loadState();
    state.cart = [
      { id: 3, name: 'Royal Kaju Katli (Goan Cashew)', variant: '500g', price: 470, mrp: 540, qty: 1, image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=480&q=80' },
      { id: 2, name: 'Special Bhavnagari Gathiya', variant: '250g', price: 85, mrp: 100, qty: 2, image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=480&q=80' },
      { id: 6, name: 'Mohanthal Desi Ghee', variant: '250g', price: 210, mrp: 240, qty: 1, image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=480&q=80' }
    ];
    state.appliedCoupon = { code: 'FESTIVE20', discountAmt: 180 };
    state.activeTrackingOrderId = 'AKS-2026-107';
    saveState();
    renderAllViews();
    showToast('Demo data reset to fresh 35 products and 15 orders.', 'info');
  }

  // ============================================================
  // 3. TOAST & NOTIFICATION SYSTEM
  // ============================================================
  function showToast(message, type = 'info') {
    const container = document.getElementById('toast-container');
    if (!container) return;
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    let icon = 'fa-circle-info';
    if (type === 'success') icon = 'fa-circle-check';
    if (type === 'warning') icon = 'fa-triangle-exclamation';

    toast.innerHTML = `<i class="fa-solid ${icon}"></i> <span>${message}</span>`;
    container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
      setTimeout(() => toast.remove(), 300);
    }, 3800);
  }

  // ============================================================
  // 4. PRICE & VARIANT CALCULATION LOGIC
  // ============================================================
  function getProductVariant(prodId) {
    return state.selectedVariants[prodId] || '250g';
  }

  function setProductVariant(prodId, variantKey) {
    state.selectedVariants[prodId] = variantKey;
  }

  function getProductPrice(product, variantKey) {
    const v = variantKey || getProductVariant(product.id);
    if (state.wholesaleMode) {
      // Tiered wholesale pricing: roughly wholesaleRatePerKg * multiplier
      if (v === '1kg') return { price: product.wholesaleRatePerKg, mrp: product.variants['1kg'].mrp };
      if (v === '500g') return { price: Math.round(product.wholesaleRatePerKg * 0.52), mrp: product.variants['500g'].mrp };
      return { price: Math.round(product.wholesaleRatePerKg * 0.28), mrp: product.variants['250g'].mrp };
    }
    return product.variants[v] || product.variants['250g'];
  }

  // ============================================================
  // 5. CART ENGINE
  // ============================================================
  function addToCart(productId, customVariant = null) {
    const prod = state.products.find(p => p.id === productId);
    if (!prod) return;
    const variantKey = customVariant || getProductVariant(productId);
    const priceInfo = getProductPrice(prod, variantKey);

    const existingIndex = state.cart.findIndex(item => item.id === productId && item.variant === variantKey);
    if (existingIndex > -1) {
      state.cart[existingIndex].qty += 1;
    } else {
      state.cart.push({
        id: prod.id,
        name: prod.name,
        variant: variantKey,
        price: priceInfo.price,
        mrp: priceInfo.mrp,
        qty: 1,
        image: prod.image
      });
    }

    saveState();
    renderCart();
    renderAndroidProducts();
    renderWebProducts();
    showToast(`Added ${prod.name} (${variantKey}) to Cart`, 'success');
  }

  function updateCartQty(index, delta) {
    if (!state.cart[index]) return;
    state.cart[index].qty += delta;
    if (state.cart[index].qty <= 0) {
      state.cart.splice(index, 1);
    }
    saveState();
    renderCart();
    renderAndroidProducts();
    renderWebProducts();
  }

  function removeCartItem(index) {
    if (!state.cart[index]) return;
    const name = state.cart[index].name;
    state.cart.splice(index, 1);
    saveState();
    renderCart();
    renderAndroidProducts();
    renderWebProducts();
    showToast(`Removed ${name} from cart`, 'info');
  }

  function calculateCartTotals() {
    let itemsMrp = 0;
    let itemsPrice = 0;
    let totalItemsCount = 0;

    state.cart.forEach(item => {
      itemsMrp += (item.mrp || item.price) * item.qty;
      itemsPrice += item.price * item.qty;
      totalItemsCount += item.qty;
    });

    const productDiscount = Math.max(0, itemsMrp - itemsPrice);
    let couponDiscount = 0;

    if (state.appliedCoupon) {
      const coup = state.coupons.find(c => c.code === state.appliedCoupon.code);
      if (coup) {
        if (coup.flatDiscount) {
          couponDiscount = itemsPrice >= coup.minOrder ? coup.flatDiscount : 0;
        } else {
          couponDiscount = itemsPrice >= coup.minOrder ? Math.min(coup.maxDiscount, Math.round(itemsPrice * (coup.discountPercent / 100))) : 0;
        }
      } else {
        couponDiscount = state.appliedCoupon.discountAmt || 0;
      }
    }

    const freeDeliveryThreshold = 1000;
    const standardDeliveryFee = state.fulfillment === 'pickup' ? 0 : (itemsPrice >= freeDeliveryThreshold ? 0 : 40);
    const packagingFee = state.cart.length > 0 ? 15 : 0;

    const grandTotal = Math.max(0, itemsPrice - couponDiscount + standardDeliveryFee + packagingFee);
    const totalSavings = productDiscount + couponDiscount;

    return {
      itemsMrp,
      itemsPrice,
      totalItemsCount,
      productDiscount,
      couponDiscount,
      deliveryFee: standardDeliveryFee,
      packagingFee,
      grandTotal,
      totalSavings,
      freeDeliveryThreshold
    };
  }

  // ============================================================
  // 6. RENDER CUSTOMER ANDROID APP
  // ============================================================
  function renderAndroidHome() {
    // 1. Cravings circles
    const cravingsList = document.getElementById('android-cravings-list');
    if (cravingsList) {
      cravingsList.innerHTML = state.categories.map((cat, idx) => `
        <div class="craving-item" data-category="${cat.id}">
          <div class="craving-avatar">
            <img src="${cat.img}" alt="${cat.name}">
            <span class="craving-tag ${idx === 1 ? 'green' : ''}">${idx === 0 ? 'HOT' : idx === 1 ? 'PURE GHEE' : 'FRESH'}</span>
          </div>
          <span class="craving-name">${cat.name.split(' ')[0]}</span>
        </div>
      `).join('');

      cravingsList.querySelectorAll('.craving-item').forEach(item => {
        item.addEventListener('click', () => {
          const catId = item.getAttribute('data-category');
          switchAndroidTab('android-tab-products');
          filterAndroidProducts(catId);
        });
      });
    }

    // 2. Fresh batch grid (First 4 items)
    const freshGrid = document.getElementById('android-fresh-batch-grid');
    if (freshGrid) {
      const freshItems = state.products.filter(p => p.isFreshBatch).slice(0, 4);
      freshGrid.innerHTML = freshItems.map(p => renderNeoProductCardHTML(p, 'android')).join('');
      attachProductCardEvents(freshGrid, 'android');
    }
  }

  function renderAndroidProducts(filter = 'all') {
    const grid = document.getElementById('android-catalogue-grid');
    const countEl = document.getElementById('android-product-count');
    if (!grid) return;

    let items = state.products;
    if (filter === 'in-stock') items = items.filter(p => p.stockKg > p.thresholdKg);
    else if (filter === 'under-250') items = items.filter(p => p.variants['250g'].price < 250);
    else if (filter === 'pure-ghee') items = items.filter(p => p.isPureGhee);
    else if (filter === 'wholesale') items = items.filter(p => p.wholesaleRatePerKg > 0);
    else if (filter !== 'all') items = items.filter(p => p.category === filter);

    if (countEl) countEl.textContent = items.length;
    grid.innerHTML = items.map(p => renderNeoProductCardHTML(p, 'android')).join('');
    attachProductCardEvents(grid, 'android');

    // Subcategory pill row
    const subcats = document.getElementById('android-cat-filter-tabs');
    if (subcats) {
      subcats.innerHTML = `
        <button type="button" class="subcat-tab-btn ${filter === 'all' ? 'active' : ''}" data-cat="all">All (${state.products.length})</button>
        ${state.categories.map(c => `
          <button type="button" class="subcat-tab-btn ${filter === c.id ? 'active' : ''}" data-cat="${c.id}">${c.name}</button>
        `).join('')}
      `;
      subcats.querySelectorAll('.subcat-tab-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          const cat = btn.getAttribute('data-cat');
          renderAndroidProducts(cat);
        });
      });
    }
  }

  function renderAndroidOrders() {
    const activeCard = document.getElementById('android-active-order-card');
    const historyList = document.getElementById('android-order-history-list');

    const activeOrder = state.orders.find(o => o.id === state.activeTrackingOrderId) || state.orders[0];

    if (activeCard && activeOrder) {
      activeCard.classList.remove('hidden');
      const isComplete = activeOrder.status === 'Completed';
      activeCard.innerHTML = `
        <div class="history-card-header">
          <div>
            <strong>Active Order: ${activeOrder.id}</strong>
            <div class="text-muted" style="font-size:10px;">${activeOrder.date} &bull; ${activeOrder.deliveryMode}</div>
          </div>
          <span class="status-badge ${activeOrder.status.toLowerCase().replace(/\s+/g, '')}">${activeOrder.status}</span>
        </div>
        <div style="font-size:12px; margin-bottom:8px;">
          <strong>${activeOrder.items.map(i => `${i.qty}x ${i.name} (${i.variant})`).join(', ')}</strong>
        </div>
        <div class="flex-between">
          <strong style="color:var(--primary); font-size:14px;">₹${activeOrder.total}</strong>
          <button type="button" class="btn-flow-action primary" id="btn-open-active-tracking" style="padding:4px 10px; font-size:11px;">
            <i class="fa-solid fa-route"></i> Live Track Stepper
          </button>
        </div>
      `;

      const trackBtn = document.getElementById('btn-open-active-tracking');
      if (trackBtn) {
        trackBtn.addEventListener('click', () => openTrackingModal(activeOrder.id));
      }
    }

    if (historyList) {
      const pastOrders = state.orders.filter(o => o.id !== (activeOrder ? activeOrder.id : ''));
      historyList.innerHTML = pastOrders.map(order => `
        <div class="history-order-card">
          <div class="history-card-header">
            <div>
              <strong>${order.id}</strong>
              <div style="font-size:10px; color:#868E96;">${order.date} &bull; ${order.deliveryMode}</div>
            </div>
            <span class="status-badge ${order.status.toLowerCase().replace(/\s+/g, '')}">${order.status}</span>
          </div>
          <div class="history-card-body">
            <p>${order.items.map(i => `${i.qty}x ${i.name} (${i.variant})`).join(', ')}</p>
          </div>
          <div class="history-card-footer">
            <strong style="font-size:13px;">₹${order.total}</strong>
            <div class="flex-align gap-2">
              <button type="button" class="link-btn small reorder-btn" data-order-id="${order.id}">
                <i class="fa-solid fa-arrow-rotate-right"></i> Reorder
              </button>
              <button type="button" class="link-btn small view-track-btn" data-order-id="${order.id}">
                Track
              </button>
            </div>
          </div>
        </div>
      `).join('');

      historyList.querySelectorAll('.reorder-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          const ordId = btn.getAttribute('data-order-id');
          reorderPastOrder(ordId);
        });
      });

      historyList.querySelectorAll('.view-track-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          const ordId = btn.getAttribute('data-order-id');
          openTrackingModal(ordId);
        });
      });
    }
  }

  // ============================================================
  // 7. RENDER CUSTOMER RESPONSIVE WEB
  // ============================================================
  function renderWebCategoriesNav() {
    const navList = document.getElementById('web-cat-nav-list');
    if (navList) {
      navList.innerHTML = `
        <li><a href="javascript:void(0)" class="active" data-cat="all">All Specialties</a></li>
        ${state.categories.map(c => `
          <li><a href="javascript:void(0)" data-cat="${c.id}">${c.name}</a></li>
        `).join('')}
      `;
      navList.querySelectorAll('a').forEach(a => {
        a.addEventListener('click', () => {
          navList.querySelectorAll('a').forEach(el => el.classList.remove('active'));
          a.classList.add('active');
          const cat = a.getAttribute('data-cat');
          renderWebProducts(cat);
        });
      });
    }

    const checkboxList = document.getElementById('web-cat-checkboxes');
    if (checkboxList) {
      checkboxList.innerHTML = state.categories.map(c => `
        <label class="filter-check-row">
          <input type="checkbox" name="web-cat-filter" value="${c.id}">
          <span>${c.name}</span>
        </label>
      `).join('');

      checkboxList.querySelectorAll('input').forEach(chk => {
        chk.addEventListener('change', () => applyWebSidebarFilters());
      });
    }
  }

  function renderWebProducts(category = 'all') {
    const grid = document.getElementById('web-product-cards-container');
    const countEl = document.getElementById('web-items-count');
    const titleEl = document.getElementById('web-results-title');
    if (!grid) return;

    let items = state.products;
    if (category !== 'all') {
      items = items.filter(p => p.category === category);
      if (titleEl) titleEl.textContent = state.categories.find(c => c.id === category)?.name || 'Filtered Products';
    } else {
      if (titleEl) titleEl.textContent = 'All Products & Mithai';
    }

    if (countEl) countEl.textContent = `${items.length} Products Available`;
    grid.innerHTML = items.map(p => renderNeoProductCardHTML(p, 'web')).join('');
    attachProductCardEvents(grid, 'web');
  }

  function applyWebSidebarFilters() {
    const selectedCats = Array.from(document.querySelectorAll('input[name="web-cat-filter"]:checked')).map(el => el.value);
    const maxPrice = parseInt(document.getElementById('web-price-range')?.value || 2500, 10);
    const onlyGhee = document.getElementById('web-filter-ghee')?.checked;
    const onlyFresh = document.getElementById('web-filter-fresh')?.checked;
    const onlySugarFree = document.getElementById('web-filter-sugarfree')?.checked;

    let filtered = state.products;
    if (selectedCats.length > 0) {
      filtered = filtered.filter(p => selectedCats.includes(p.category));
    }
    filtered = filtered.filter(p => p.variants['250g'].price <= maxPrice);
    if (onlyGhee) filtered = filtered.filter(p => p.isPureGhee);
    if (onlyFresh) filtered = filtered.filter(p => p.isFreshBatch);
    if (onlySugarFree) filtered = filtered.filter(p => p.name.toLowerCase().includes('sugar-free') || p.tag.toLowerCase().includes('sugar-free'));

    const grid = document.getElementById('web-product-cards-container');
    const countEl = document.getElementById('web-items-count');
    if (countEl) countEl.textContent = `${filtered.length} Products Found`;
    if (grid) {
      grid.innerHTML = filtered.map(p => renderNeoProductCardHTML(p, 'web')).join('');
      attachProductCardEvents(grid, 'web');
    }
  }

  // ============================================================
  // 8. UNIFIED PRODUCT CARD GENERATOR (Neo-Bazaar Design)
  // ============================================================
  function renderNeoProductCardHTML(product, viewType = 'android') {
    const selectedVariant = getProductVariant(product.id);
    const priceInfo = getProductPrice(product, selectedVariant);
    const inCartItem = state.cart.find(item => item.id === product.id && item.variant === selectedVariant);

    const discountPercent = Math.round(((priceInfo.mrp - priceInfo.price) / priceInfo.mrp) * 100);

    return `
      <div class="neo-product-card" data-product-id="${product.id}">
        <div class="card-media-wrap">
          <img src="${product.image}" alt="${product.name}" class="card-prod-img" loading="lazy">
          ${discountPercent > 0 ? `<span class="card-discount-badge">${discountPercent}% OFF</span>` : ''}
          <div class="card-veg-mark" title="100% Pure Vegetarian"><span></span></div>
          ${product.tag ? `<span class="card-feature-pill"><i class="fa-solid fa-sparkles"></i> ${product.tag}</span>` : ''}
        </div>

        <div class="card-body-content">
          <div class="card-rating-row">
            <span class="card-stars">★ ${product.rating} <small>(${product.reviews})</small></span>
            <span class="card-subdetail">${product.isPureGhee ? 'Pure Ghee' : 'Groundnut Oil'}</span>
          </div>

          <h4 class="card-title" title="${product.name}">${product.name}</h4>
          <p class="card-spec-text">${product.desc}</p>

          <!-- Weight Variant Selector -->
          <div class="weight-variant-selector" data-product-id="${product.id}">
            <button type="button" class="variant-btn ${selectedVariant === '250g' ? 'active' : ''}" data-variant="250g">250g</button>
            <button type="button" class="variant-btn ${selectedVariant === '500g' ? 'active' : ''}" data-variant="500g">500g</button>
            <button type="button" class="variant-btn ${selectedVariant === '1kg' ? 'active' : ''}" data-variant="1kg">1kg</button>
          </div>

          <!-- Price & Add Button Row -->
          <div class="card-action-row">
            <div class="card-price-group">
              <span class="card-price-current">₹${priceInfo.price}</span>
              ${priceInfo.mrp > priceInfo.price ? `<span class="card-price-mrp">₹${priceInfo.mrp}</span>` : ''}
            </div>

            <div class="card-button-wrap">
              ${inCartItem ? `
                <div class="qty-stepper-inline">
                  <button type="button" class="qty-step-btn btn-card-minus" data-product-id="${product.id}">-</button>
                  <span class="qty-step-val">${inCartItem.qty}</span>
                  <button type="button" class="qty-step-btn btn-card-plus" data-product-id="${product.id}">+</button>
                </div>
              ` : `
                <button type="button" class="btn-add-cart btn-card-add" data-product-id="${product.id}">
                  <span>ADD</span> <i class="fa-solid fa-plus"></i>
                </button>
              `}
            </div>
          </div>
        </div>
      </div>
    `;
  }

  function attachProductCardEvents(container, viewType) {
    if (!container) return;

    // Weight variant selector buttons
    container.querySelectorAll('.variant-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const card = btn.closest('.neo-product-card');
        const prodId = parseInt(card.getAttribute('data-product-id'), 10);
        const variant = btn.getAttribute('data-variant');
        setProductVariant(prodId, variant);

        // Re-render card
        const prod = state.products.find(p => p.id === prodId);
        if (prod) {
          card.outerHTML = renderNeoProductCardHTML(prod, viewType);
          // Re-attach listener on new element parent
          attachProductCardEvents(container, viewType);
        }
      });
    });

    // Add to cart button
    container.querySelectorAll('.btn-card-add').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const prodId = parseInt(btn.getAttribute('data-product-id'), 10);
        addToCart(prodId);
      });
    });

    // Step plus
    container.querySelectorAll('.btn-card-plus').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const prodId = parseInt(btn.getAttribute('data-product-id'), 10);
        const variant = getProductVariant(prodId);
        const cartIndex = state.cart.findIndex(i => i.id === prodId && i.variant === variant);
        if (cartIndex > -1) updateCartQty(cartIndex, 1);
      });
    });

    // Step minus
    container.querySelectorAll('.btn-card-minus').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const prodId = parseInt(btn.getAttribute('data-product-id'), 10);
        const variant = getProductVariant(prodId);
        const cartIndex = state.cart.findIndex(i => i.id === prodId && i.variant === variant);
        if (cartIndex > -1) updateCartQty(cartIndex, -1);
      });
    });
  }

  // ============================================================
  // 9. RENDER CART DRAWER & CHECKOUT
  // ============================================================
  function renderCart() {
    const cartList = document.getElementById('cart-items-list');
    const totals = calculateCartTotals();

    // Floating badges & headers
    const androidBadge = document.getElementById('android-cart-badge');
    const webBadge = document.getElementById('web-cart-count');
    const webTotalDisplay = document.getElementById('web-cart-total-display');
    const androidFloatingCart = document.getElementById('android-floating-cart');
    const androidFloatingCount = document.getElementById('android-cart-pill-count');
    const androidFloatingTotal = document.getElementById('android-cart-pill-total');

    if (androidBadge) androidBadge.textContent = totals.totalItemsCount;
    if (webBadge) webBadge.textContent = totals.totalItemsCount;
    if (webTotalDisplay) webTotalDisplay.textContent = `₹${totals.grandTotal}`;

    if (androidFloatingCart) {
      if (totals.totalItemsCount > 0) {
        androidFloatingCart.classList.remove('hidden');
        if (androidFloatingCount) androidFloatingCount.textContent = `${totals.totalItemsCount} Items In Cart`;
        if (androidFloatingTotal) androidFloatingTotal.textContent = `₹${totals.grandTotal} plus taxes`;
      } else {
        androidFloatingCart.classList.add('hidden');
      }
      if (typeof updateTopbarHeight === 'function') {
        updateTopbarHeight();
      }
    }

    // Bill summary in Drawer
    const mrpEl = document.getElementById('bill-mrp');
    const discEl = document.getElementById('bill-discount');
    const coupRow = document.getElementById('bill-coupon-row');
    const coupName = document.getElementById('bill-coupon-name');
    const coupAmt = document.getElementById('bill-coupon-amt');
    const delivEl = document.getElementById('bill-delivery-fee');
    const totalEl = document.getElementById('bill-grand-total');
    const drawerTotalEl = document.getElementById('drawer-total-price');
    const savingsEl = document.getElementById('bill-saved-amount');
    const savingsBanner = document.getElementById('bill-savings-banner');
    const checkoutPayable = document.getElementById('checkout-payable-val');

    if (mrpEl) mrpEl.textContent = `₹${totals.itemsMrp}`;
    if (discEl) discEl.textContent = `-₹${totals.productDiscount}`;

    if (coupRow) {
      if (totals.couponDiscount > 0 && state.appliedCoupon) {
        coupRow.classList.remove('hidden');
        if (coupName) coupName.textContent = state.appliedCoupon.code;
        if (coupAmt) coupAmt.textContent = `-₹${totals.couponDiscount}`;
      } else {
        coupRow.classList.add('hidden');
      }
    }

    if (delivEl) delivEl.textContent = totals.deliveryFee === 0 ? 'FREE' : `₹${totals.deliveryFee}`;
    if (totalEl) totalEl.textContent = `₹${totals.grandTotal}`;
    if (drawerTotalEl) drawerTotalEl.textContent = `₹${totals.grandTotal}`;
    if (checkoutPayable) checkoutPayable.textContent = `₹${totals.grandTotal}`;

    if (savingsBanner) {
      if (totals.totalSavings > 0) {
        savingsBanner.classList.remove('hidden');
        if (savingsEl) savingsEl.textContent = `₹${totals.totalSavings}`;
      } else {
        savingsBanner.classList.add('hidden');
      }
    }

    // Free delivery progress tracker
    const freeText = document.getElementById('free-delivery-text');
    const freeCalc = document.getElementById('free-delivery-calc');
    const freeBar = document.getElementById('free-delivery-bar');

    if (totals.itemsPrice >= totals.freeDeliveryThreshold) {
      if (freeText) freeText.innerHTML = `<i class="fa-solid fa-circle-check" style="color:var(--veg-green)"></i> <strong>FREE Express Delivery Unlocked!</strong>`;
      if (freeCalc) freeCalc.textContent = `₹${totals.itemsPrice} / ₹${totals.freeDeliveryThreshold}`;
      if (freeBar) freeBar.style.width = '100%';
    } else {
      const remaining = totals.freeDeliveryThreshold - totals.itemsPrice;
      const pct = Math.min(100, Math.round((totals.itemsPrice / totals.freeDeliveryThreshold) * 100));
      if (freeText) freeText.innerHTML = `<i class="fa-solid fa-truck"></i> Add items worth <strong>₹${remaining}</strong> more for <strong>FREE Delivery</strong>`;
      if (freeCalc) freeCalc.textContent = `₹${totals.itemsPrice} / ₹${totals.freeDeliveryThreshold}`;
      if (freeBar) freeBar.style.width = `${pct}%`;
    }

    // Coupon applied pill
    const couponMsg = document.getElementById('coupon-applied-message');
    const couponCodeDisp = document.getElementById('applied-coupon-code');
    const couponAmtDisp = document.getElementById('coupon-discount-amt');

    if (couponMsg) {
      if (state.appliedCoupon && totals.couponDiscount > 0) {
        couponMsg.classList.remove('hidden');
        if (couponCodeDisp) couponCodeDisp.textContent = state.appliedCoupon.code;
        if (couponAmtDisp) couponAmtDisp.textContent = totals.couponDiscount;
      } else {
        couponMsg.classList.add('hidden');
      }
    }

    // Cart items listing
    if (!cartList) return;
    if (state.cart.length === 0) {
      cartList.innerHTML = `
        <div style="text-align:center; padding:30px 10px; color:#868E96;">
          <i class="fa-solid fa-bag-shopping" style="font-size:36px; margin-bottom:10px; color:#CED4DA;"></i>
          <p>Your shopping cart is empty.</p>
          <small>Add delicious Gujarati Farsan &amp; Sweets!</small>
        </div>
      `;
      return;
    }

    cartList.innerHTML = state.cart.map((item, idx) => `
      <div class="cart-item-card">
        <img src="${item.image}" alt="${item.name}" class="cart-item-thumb">
        <div class="cart-item-info">
          <strong>${item.name}</strong>
          <span class="cart-item-meta">${item.variant} &bull; ₹${item.price} each</span>
          <div style="margin-top:4px;">
            <strong class="cart-item-price">₹${item.price * item.qty}</strong>
          </div>
        </div>

        <div class="qty-stepper-inline">
          <button type="button" class="qty-step-btn cart-minus-btn" data-index="${idx}">-</button>
          <span class="qty-step-val">${item.qty}</span>
          <button type="button" class="qty-step-btn cart-plus-btn" data-index="${idx}">+</button>
        </div>

        <button type="button" class="cart-item-remove" data-index="${idx}" title="Remove Item">
          <i class="fa-regular fa-trash-can"></i>
        </button>
      </div>
    `).join('');

    // Attach listeners
    cartList.querySelectorAll('.cart-minus-btn').forEach(btn => {
      btn.addEventListener('click', () => updateCartQty(parseInt(btn.getAttribute('data-index'), 10), -1));
    });
    cartList.querySelectorAll('.cart-plus-btn').forEach(btn => {
      btn.addEventListener('click', () => updateCartQty(parseInt(btn.getAttribute('data-index'), 10), 1));
    });
    cartList.querySelectorAll('.cart-item-remove').forEach(btn => {
      btn.addEventListener('click', () => removeCartItem(parseInt(btn.getAttribute('data-index'), 10)));
    });
  }

  // ============================================================
  // 10. RENDER BUSINESS ADMIN PANEL (ERP)
  // ============================================================
  function renderAdminDashboard() {
    // 1. KPIs
    const completedOrders = state.orders.filter(o => o.status === 'Completed');
    const totalRev = completedOrders.reduce((sum, o) => sum + o.total, 0);
    const wholesaleRev = completedOrders.filter(o => o.type === 'Wholesale').reduce((sum, o) => sum + o.total, 0);
    const lowStockItems = state.products.filter(p => p.stockKg <= p.thresholdKg);

    const revEl = document.getElementById('kpi-total-revenue');
    const ordersEl = document.getElementById('kpi-today-orders');
    const wsEl = document.getElementById('kpi-wholesale-val');
    const lowEl = document.getElementById('kpi-low-stock');
    const topActive = document.getElementById('admin-topbar-active-count');
    const pendingBadge = document.getElementById('admin-pending-badge');
    const lowBadge = document.getElementById('admin-lowstock-badge');

    if (revEl) revEl.textContent = `₹${totalRev.toLocaleString('en-IN')}`;
    if (ordersEl) ordersEl.textContent = `${state.orders.length} Orders`;
    if (wsEl) wsEl.textContent = `₹${wholesaleRev.toLocaleString('en-IN')}`;
    if (lowEl) lowEl.textContent = `${lowStockItems.length} Products`;
    if (lowBadge) lowBadge.textContent = lowStockItems.length;

    const activeOrders = state.orders.filter(o => !['Completed', 'Cancelled'].includes(o.status));
    if (topActive) topActive.textContent = activeOrders.length;
    if (pendingBadge) pendingBadge.textContent = activeOrders.length;

    // 2. Real-Time Order Lifecycle Pipeline Grid
    renderAdminPipelineBoard();

    // 3. Recent orders preview
    const recentTbody = document.getElementById('dashboard-recent-orders-tbody');
    if (recentTbody) {
      const recent = [...state.orders].reverse().slice(0, 5);
      recentTbody.innerHTML = recent.map(o => `
        <tr>
          <td><strong style="color:var(--primary);">${o.id}</strong></td>
          <td>${o.customer}</td>
          <td><span class="badge-tag">${o.type}</span></td>
          <td><strong>₹${o.total}</strong></td>
          <td><span class="status-badge ${o.status.toLowerCase().replace(/\s+/g, '')}">${o.status}</span></td>
          <td>
            <button type="button" class="btn-flow-action secondary btn-open-status-modal" data-order-id="${o.id}">Update</button>
          </td>
        </tr>
      `).join('');

      recentTbody.querySelectorAll('.btn-open-status-modal').forEach(btn => {
        btn.addEventListener('click', () => openAdminStatusModal(btn.getAttribute('data-order-id')));
      });
    }

    // 4. Category revenue bars
    const catBars = document.getElementById('dashboard-cat-bars');
    if (catBars) {
      const categoriesStats = [
        { name: 'Sweets & Mithai (Pure Ghee)', share: '38%', rev: '₹1,83,400', color: '#D9480F' },
        { name: 'Gujarati Farsan (Gathiya & Sev)', share: '28%', rev: '₹1,35,100', color: '#F59F00' },
        { name: 'Morning Fresh (Fafda & Khaman)', share: '16%', rev: '₹77,200', color: '#2B8A3E' },
        { name: 'Wedding & Festive Hampers', share: '12%', rev: '₹57,900', color: '#845EF7' },
        { name: 'Diet Khakhra & Roasted', share: '6%', rev: '₹28,950', color: '#1098AD' }
      ];

      catBars.innerHTML = categoriesStats.map(c => `
        <div class="cat-bar-item">
          <div class="cat-bar-info">
            <strong>${c.name}</strong>
            <span>${c.share} &bull; ${c.rev}</span>
          </div>
          <div class="cat-bar-rail">
            <div class="cat-bar-fill" style="width: ${c.share}; background: ${c.color};"></div>
          </div>
        </div>
      `).join('');
    }
  }

  function renderAdminPipelineBoard() {
    const stages = ['Placed', 'Accepted', 'Preparing', 'Out for Delivery', 'Completed'];
    stages.forEach(stage => {
      const stageKey = stage === 'Out for Delivery' ? 'dispatch' : stage.toLowerCase();
      const countEl = document.getElementById(`count-stage-${stageKey}`);
      const bodyEl = document.getElementById(`pipeline-${stageKey}-items`);

      const stageOrders = state.orders.filter(o => o.status === stage);
      if (countEl) countEl.textContent = stageOrders.length;

      if (bodyEl) {
        if (stageOrders.length === 0) {
          bodyEl.innerHTML = `<span style="font-size:10px; color:#ADB5BD; text-align:center; padding:12px;">No orders</span>`;
        } else {
          bodyEl.innerHTML = stageOrders.map(o => `
            <div class="pipe-card" data-order-id="${o.id}">
              <div class="pipe-card-id">
                <span>${o.id}</span>
                <span class="badge-tag" style="font-size:9px;">${o.type}</span>
              </div>
              <div class="pipe-card-cust">${o.customer}</div>
              <div class="pipe-card-amt">₹${o.total} &bull; ${o.items.length} items</div>
            </div>
          `).join('');

          bodyEl.querySelectorAll('.pipe-card').forEach(card => {
            card.addEventListener('click', () => {
              const ordId = card.getAttribute('data-order-id');
              openAdminStatusModal(ordId);
            });
          });
        }
      }
    });
  }

  function renderAdminOrders(statusFilter = 'all', typeFilter = 'all', searchQuery = '') {
    const tbody = document.getElementById('admin-orders-tbody');
    const badgeAll = document.getElementById('admin-orders-count-badge');
    if (badgeAll) badgeAll.textContent = state.orders.length;

    // Filter counts update
    const cAll = document.getElementById('filter-count-all');
    const cPlaced = document.getElementById('filter-count-placed');
    const cAccepted = document.getElementById('filter-count-accepted');
    const cPrep = document.getElementById('filter-count-prep');
    const cDispatch = document.getElementById('filter-count-dispatch');
    const cCompleted = document.getElementById('filter-count-completed');
    const cCancelled = document.getElementById('filter-count-cancelled');

    if (cAll) cAll.textContent = state.orders.length;
    if (cPlaced) cPlaced.textContent = state.orders.filter(o => o.status === 'Placed').length;
    if (cAccepted) cAccepted.textContent = state.orders.filter(o => o.status === 'Accepted').length;
    if (cPrep) cPrep.textContent = state.orders.filter(o => o.status === 'Preparing').length;
    if (cDispatch) cDispatch.textContent = state.orders.filter(o => o.status === 'Out for Delivery').length;
    if (cCompleted) cCompleted.textContent = state.orders.filter(o => o.status === 'Completed').length;
    if (cCancelled) cCancelled.textContent = state.orders.filter(o => o.status === 'Cancelled').length;

    if (!tbody) return;

    let filtered = [...state.orders].reverse();
    if (statusFilter !== 'all') filtered = filtered.filter(o => o.status === statusFilter);
    if (typeFilter !== 'all') filtered = filtered.filter(o => o.type === typeFilter);
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      filtered = filtered.filter(o => o.id.toLowerCase().includes(q) || o.customer.toLowerCase().includes(q));
    }

    tbody.innerHTML = filtered.map(order => `
      <tr>
        <td><strong style="color:var(--primary);">${order.id}</strong></td>
        <td>${order.date}</td>
        <td>
          <strong>${order.customer}</strong>
          <div style="font-size:10px; color:#868E96;">${order.deliveryAddress || 'Ahmedabad'}</div>
        </td>
        <td><span class="badge-tag">${order.type}</span></td>
        <td>
          <span title="${order.items.map(i => `${i.qty}x ${i.name}`).join(', ')}">
            ${order.items.length} items (${order.items[0]?.name || ''}${order.items.length > 1 ? '...' : ''})
          </span>
        </td>
        <td>${order.deliveryMode}</td>
        <td><strong>₹${order.total}</strong></td>
        <td><span class="status-badge ${order.status.toLowerCase().replace(/\s+/g, '')}">${order.status}</span></td>
        <td>
          <button type="button" class="btn-flow-action secondary btn-update-status" data-order-id="${order.id}">
            <i class="fa-solid fa-pen"></i> Change
          </button>
        </td>
        <td>
          <button type="button" class="btn-flow-action secondary btn-open-invoice" data-order-id="${order.id}" title="View Receipt">
            <i class="fa-solid fa-receipt"></i> Bill
          </button>
        </td>
      </tr>
    `).join('');

    tbody.querySelectorAll('.btn-update-status').forEach(btn => {
      btn.addEventListener('click', () => openAdminStatusModal(btn.getAttribute('data-order-id')));
    });

    tbody.querySelectorAll('.btn-open-invoice').forEach(btn => {
      btn.addEventListener('click', () => openInvoiceModal(btn.getAttribute('data-order-id')));
    });
  }

  function renderAdminProducts(catFilter = 'all', searchQuery = '') {
    const tbody = document.getElementById('admin-products-tbody');
    const badgeProd = document.getElementById('admin-prod-count-badge');
    if (badgeProd) badgeProd.textContent = state.products.length;
    if (!tbody) return;

    let items = state.products;
    if (catFilter !== 'all') items = items.filter(p => p.category === catFilter);
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      items = items.filter(p => p.name.toLowerCase().includes(q) || p.sku.toLowerCase().includes(q));
    }

    tbody.innerHTML = items.map(p => {
      const isLow = p.stockKg <= p.thresholdKg;
      return `
        <tr>
          <td><img src="${p.image}" alt="${p.name}" style="width:40px; height:40px; border-radius:6px; object-fit:cover;"></td>
          <td>
            <strong>${p.name}</strong>
            <div style="font-size:10px; color:#868E96;">SKU: ${p.sku}</div>
          </td>
          <td><span class="badge-tag">${p.category}</span></td>
          <td>
            <div style="font-size:11px;">
              <span>250g: ₹${p.variants['250g'].price}</span> &bull; 
              <span>500g: ₹${p.variants['500g'].price}</span> &bull; 
              <span>1kg: ₹${p.variants['1kg'].price}</span>
            </div>
          </td>
          <td><strong>₹${p.wholesaleRatePerKg}/kg</strong></td>
          <td>
            <span class="status-badge ${isLow ? 'cancelled' : 'completed'}">
              ${p.stockKg} kg ${isLow ? '(Low)' : ''}
            </span>
          </td>
          <td>${p.isFreshBatch ? '<span style="color:#2B8A3E;">✓ 6 AM Fresh</span>' : '<span style="color:#868E96;">Standard</span>'}</td>
          <td>
            <div class="flex-align gap-2">
              <button type="button" class="btn-flow-action secondary btn-edit-prod" data-id="${p.id}" title="Edit Product"><i class="fa-solid fa-pen"></i></button>
              <button type="button" class="btn-flow-action secondary btn-delete-prod" data-id="${p.id}" title="Delete Product" style="color:#E03131;"><i class="fa-solid fa-trash"></i></button>
            </div>
          </td>
        </tr>
      `;
    }).join('');

    tbody.querySelectorAll('.btn-edit-prod').forEach(btn => {
      btn.addEventListener('click', () => openAdminProductModal(parseInt(btn.getAttribute('data-id'), 10)));
    });

    tbody.querySelectorAll('.btn-delete-prod').forEach(btn => {
      btn.addEventListener('click', () => {
        const prodId = parseInt(btn.getAttribute('data-id'), 10);
        if (confirm('Are you sure you want to delete this product?')) {
          deleteProduct(prodId);
        }
      });
    });
  }

  function renderAdminInventory() {
    const tbody = document.getElementById('admin-inventory-tbody');
    if (!tbody) return;

    tbody.innerHTML = state.products.map(p => {
      const isLow = p.stockKg <= p.thresholdKg;
      return `
        <tr>
          <td><strong>${p.name}</strong></td>
          <td><span class="badge-tag">${p.category}</span></td>
          <td><strong>${p.stockKg} kg</strong></td>
          <td>${p.thresholdKg} kg</td>
          <td>
            <span class="status-badge ${isLow ? 'cancelled' : 'completed'}">
              ${isLow ? '⚠️ Low Stock Alert' : '✓ Normal'}
            </span>
          </td>
          <td>Today 06:30 AM</td>
          <td>
            <button type="button" class="btn-flow-action primary btn-quick-restock" data-id="${p.id}">
              + Restock 20kg
            </button>
          </td>
        </tr>
      `;
    }).join('');

    tbody.querySelectorAll('.btn-quick-restock').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = parseInt(btn.getAttribute('data-id'), 10);
        const prod = state.products.find(p => p.id === id);
        if (prod) {
          prod.stockKg += 20;
          saveState();
          renderAdminInventory();
          renderAdminDashboard();
          showToast(`Restocked +20kg for ${prod.name}!`, 'success');
        }
      });
    });
  }

  function renderAdminWholesale() {
    // 1. Applications
    const accTbody = document.getElementById('admin-wholesale-accounts-tbody');
    if (accTbody) {
      const wholesaleCusts = state.customers.filter(c => c.type === 'Wholesale');
      accTbody.innerHTML = wholesaleCusts.map(c => `
        <tr>
          <td><strong>${c.name}</strong></td>
          <td>${c.contactPerson || '-'}</td>
          <td><code>${c.gstin || '-'}</code></td>
          <td>Catering & Banquets</td>
          <td>Ahmedabad</td>
          <td>
            <span class="status-badge ${c.status === 'Approved' ? 'completed' : 'preparing'}">
              ${c.status}
            </span>
          </td>
          <td>
            ${c.status === 'Pending Approval' ? `
              <div class="flex-align gap-2">
                <button type="button" class="btn-flow-action primary btn-approve-ws" data-id="${c.id}">Approve</button>
                <button type="button" class="btn-flow-action secondary btn-reject-ws" data-id="${c.id}">Reject</button>
              </div>
            ` : `
              <span class="text-muted" style="font-size:11px;">Account Active</span>
            `}
          </td>
        </tr>
      `).join('');

      accTbody.querySelectorAll('.btn-approve-ws').forEach(btn => {
        btn.addEventListener('click', () => {
          const id = btn.getAttribute('data-id');
          const cust = state.customers.find(c => c.id === id);
          if (cust) {
            cust.status = 'Approved';
            saveState();
            renderAdminWholesale();
            showToast(`Approved wholesale account for ${cust.name}!`, 'success');
          }
        });
      });
    }

    // 2. RFQ Quotes
    const quotesTbody = document.getElementById('admin-quotes-tbody');
    const rfqBadge = document.getElementById('admin-rfq-count-badge');
    if (rfqBadge) rfqBadge.textContent = state.quotes.length;

    if (quotesTbody) {
      quotesTbody.innerHTML = state.quotes.map(q => `
        <tr>
          <td><strong style="color:var(--primary);">${q.id}</strong></td>
          <td>
            <strong>${q.client}</strong>
            <div style="font-size:10px; color:#868E96;">${q.contact}</div>
          </td>
          <td>${q.product}</td>
          <td><strong>${q.qty} kg</strong></td>
          <td>${q.date}</td>
          <td>${q.estVal}</td>
          <td>
            <input type="number" class="form-control" style="width:90px; padding:3px 6px; font-size:12px;" value="${q.quotedPrice || 240}" id="quote-input-${q.id}">
          </td>
          <td><span class="status-badge ${q.status === 'Quoted' ? 'completed' : 'preparing'}">${q.status}</span></td>
          <td>
            <button type="button" class="btn-flow-action primary btn-send-quote" data-id="${q.id}">
              Send Quote
            </button>
          </td>
        </tr>
      `).join('');

      quotesTbody.querySelectorAll('.btn-send-quote').forEach(btn => {
        btn.addEventListener('click', () => {
          const id = btn.getAttribute('data-id');
          const input = document.getElementById(`quote-input-${id}`);
          const quote = state.quotes.find(q => q.id === id);
          if (quote && input) {
            quote.quotedPrice = parseInt(input.value, 10);
            quote.status = 'Quoted';
            saveState();
            renderAdminWholesale();
            showToast(`Quotation sent to ${quote.client} at ₹${quote.quotedPrice}/kg!`, 'success');
          }
        });
      });
    }
  }

  function renderAdminCustomers(typeFilter = 'all') {
    const tbody = document.getElementById('admin-customers-tbody');
    if (!tbody) return;

    let custs = state.customers;
    if (typeFilter === 'retail') custs = custs.filter(c => c.type === 'Retail');
    if (typeFilter === 'wholesale') custs = custs.filter(c => c.type === 'Wholesale');

    tbody.innerHTML = custs.map(c => `
      <tr>
        <td><strong>${c.name}</strong></td>
        <td><span class="badge-tag">${c.type}</span></td>
        <td>${c.phone}</td>
        <td>${c.email}</td>
        <td><small>${c.address}</small></td>
        <td>${c.ordersCount}</td>
        <td><strong>₹${(c.ltv || 0).toLocaleString('en-IN')}</strong></td>
        <td><span class="status-badge ${c.status === 'Active' || c.status === 'Approved' ? 'completed' : 'preparing'}">${c.status}</span></td>
      </tr>
    `).join('');
  }

  function renderAdminCoupons() {
    const tbody = document.getElementById('admin-coupons-tbody');
    if (!tbody) return;

    tbody.innerHTML = state.coupons.map(c => `
      <tr>
        <td><strong style="color:var(--primary); font-family:monospace; font-size:13px;">${c.code}</strong></td>
        <td>${c.flatDiscount ? `Flat ₹${c.flatDiscount} OFF` : `${c.discountPercent}% OFF (Max ₹${c.maxDiscount})`}</td>
        <td>₹${c.minOrder}</td>
        <td>${c.label}</td>
        <td><strong>${c.usageCount} times</strong></td>
        <td><span class="status-badge ${c.active ? 'completed' : 'cancelled'}">${c.active ? 'Active' : 'Disabled'}</span></td>
        <td>
          <button type="button" class="btn-flow-action secondary btn-toggle-coupon" data-code="${c.code}">
            ${c.active ? 'Disable' : 'Enable'}
          </button>
        </td>
      </tr>
    `).join('');

    tbody.querySelectorAll('.btn-toggle-coupon').forEach(btn => {
      btn.addEventListener('click', () => {
        const code = btn.getAttribute('data-code');
        const coup = state.coupons.find(c => c.code === code);
        if (coup) {
          coup.active = !coup.active;
          saveState();
          renderAdminCoupons();
          showToast(`Coupon ${code} is now ${coup.active ? 'Active' : 'Disabled'}`);
        }
      });
    });
  }

  function renderAdminReports() {
    const tbody = document.getElementById('admin-reports-tbody');
    if (!tbody) return;

    // Sort products by revenue
    const sorted = [...state.products].sort((a, b) => b.reviews - a.reviews).slice(0, 10);
    tbody.innerHTML = sorted.map((p, idx) => `
      <tr>
        <td><strong>#${idx + 1}</strong></td>
        <td><strong>${p.name}</strong></td>
        <td><span class="badge-tag">${p.category}</span></td>
        <td>${p.reviews * 3} kg</td>
        <td><strong>₹${(p.reviews * p.variants['1kg'].price * 2.2).toLocaleString('en-IN', { maximumFractionDigits: 0 })}</strong></td>
        <td>★ ${p.rating}</td>
      </tr>
    `).join('');
  }

  function renderAdminStaff() {
    const tbody = document.getElementById('admin-staff-tbody');
    if (!tbody) return;

    tbody.innerHTML = state.staff.map(s => `
      <tr>
        <td>
          <strong>${s.name}</strong>
          <div style="font-size:10px; color:#868E96;">${s.email}</div>
        </td>
        <td><span class="badge-tag" style="background:#EBFBEE; color:#2B8A3E;">${s.role}</span></td>
        <td><small>${s.permissions}</small></td>
        <td>${s.shift}</td>
      </tr>
    `).join('');
  }

  // ============================================================
  // 11. MODAL DIALOG CONTROLS & LIFECYCLE
  // ============================================================
  function openTrackingModal(orderId) {
    const modal = document.getElementById('order-tracking-modal');
    const order = state.orders.find(o => o.id === orderId) || state.orders[0];
    if (!modal || !order) return;

    state.activeTrackingOrderId = order.id;

    const idLabel = document.getElementById('track-modal-order-id');
    const headLabel = document.getElementById('track-status-heading');
    const etaText = document.getElementById('track-eta-text');
    const destAddr = document.getElementById('track-destination-addr');
    const itemsContainer = document.getElementById('track-items-container');
    const itemsCount = document.getElementById('track-items-count');

    if (idLabel) idLabel.textContent = `Order #${order.id}`;
    if (headLabel) headLabel.textContent = `Status: ${order.status}`;
    if (etaText) etaText.textContent = order.eta || 'Standard Dispatch';
    if (destAddr) destAddr.textContent = order.deliveryAddress || 'Bodakdev, Ahmedabad';

    if (itemsCount) itemsCount.textContent = order.items.length;
    if (itemsContainer) {
      itemsContainer.innerHTML = order.items.map(i => `
        <div class="flex-between">
          <span>${i.qty}x ${i.name} (${i.variant})</span>
          <strong>₹${i.price * i.qty}</strong>
        </div>
      `).join('');
    }

    // Update 5-step points
    const stages = ['Placed', 'Accepted', 'Preparing', 'Out for Delivery', 'Completed'];
    const currentIdx = stages.indexOf(order.status);

    stages.forEach((st, idx) => {
      const nodeKey = st === 'Out for Delivery' ? 'dispatch' : st.toLowerCase();
      const node = document.getElementById(`step-node-${nodeKey}`);
      if (node) {
        node.classList.remove('active', 'completed');
        if (order.status === 'Cancelled') {
          node.classList.remove('active', 'completed');
        } else if (idx < currentIdx) {
          node.classList.add('completed');
        } else if (idx === currentIdx) {
          node.classList.add('active');
        }
      }
    });

    // Update connecting lines
    for (let i = 1; i <= 4; i++) {
      const line = document.getElementById(`line-${i}`);
      if (line) {
        line.classList.toggle('active', currentIdx >= i);
      }
    }

    modal.classList.remove('hidden');
  }

  function openAdminStatusModal(orderId) {
    const modal = document.getElementById('admin-status-modal');
    const order = state.orders.find(o => o.id === orderId);
    if (!modal || !order) return;

    const idInput = document.getElementById('status-update-order-id');
    const summaryBox = document.getElementById('status-modal-order-summary');

    if (idInput) idInput.value = order.id;
    if (summaryBox) {
      summaryBox.innerHTML = `
        <div class="flex-between">
          <strong>${order.id} &bull; ${order.customer}</strong>
          <span class="status-badge ${order.status.toLowerCase().replace(/\s+/g, '')}">${order.status}</span>
        </div>
        <div style="font-size:12px; color:#495057; margin-top:4px;">
          ${order.items.map(i => `${i.qty}x ${i.name} (${i.variant})`).join(', ')}
        </div>
        <div style="font-size:12px; color:#868E96; margin-top:2px;">
          Total: <strong>₹${order.total}</strong> &bull; ${order.deliveryMode}
        </div>
      `;
    }

    // Highlight current status
    modal.querySelectorAll('.status-choice-btn').forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-status') === order.status);
    });

    modal.classList.remove('hidden');
  }

  function openAdminProductModal(productId = null) {
    const modal = document.getElementById('admin-product-modal');
    const titleEl = document.getElementById('admin-prod-modal-title');
    const idInput = document.getElementById('edit-prod-id');
    const nameInput = document.getElementById('edit-prod-name');
    const catInput = document.getElementById('edit-prod-cat');
    const descInput = document.getElementById('edit-prod-desc');
    const p250Input = document.getElementById('edit-prod-p250');
    const p500Input = document.getElementById('edit-prod-p500');
    const p1000Input = document.getElementById('edit-prod-p1000');
    const pwsInput = document.getElementById('edit-prod-pwholesale');
    const stockInput = document.getElementById('edit-prod-stock');
    const threshInput = document.getElementById('edit-prod-threshold');
    const imgInput = document.getElementById('edit-prod-img');

    if (productId) {
      const prod = state.products.find(p => p.id === productId);
      if (prod) {
        if (titleEl) titleEl.innerHTML = `<i class="fa-solid fa-pen"></i> Edit Product: ${prod.name}`;
        if (idInput) idInput.value = prod.id;
        if (nameInput) nameInput.value = prod.name;
        if (catInput) catInput.value = prod.category;
        if (descInput) descInput.value = prod.desc;
        if (p250Input) p250Input.value = prod.variants['250g'].price;
        if (p500Input) p500Input.value = prod.variants['500g'].price;
        if (p1000Input) p1000Input.value = prod.variants['1kg'].price;
        if (pwsInput) pwsInput.value = prod.wholesaleRatePerKg;
        if (stockInput) stockInput.value = prod.stockKg;
        if (threshInput) threshInput.value = prod.thresholdKg;
        if (imgInput) imgInput.value = prod.image;
      }
    } else {
      if (titleEl) titleEl.innerHTML = `<i class="fa-solid fa-box-open"></i> Add New Product`;
      if (idInput) idInput.value = '';
      document.getElementById('form-admin-product')?.reset();
    }

    modal?.classList.remove('hidden');
  }

  function deleteProduct(productId) {
    state.products = state.products.filter(p => p.id !== productId);
    saveState();
    renderAllViews();
    showToast('Product removed from catalog', 'info');
  }

  function openInvoiceModal(orderId) {
    const modal = document.getElementById('invoice-modal');
    const content = document.getElementById('invoice-content-area');
    const order = state.orders.find(o => o.id === orderId) || state.orders[0];
    if (!modal || !content || !order) return;

    content.innerHTML = `
      <div class="invoice-header-slip">
        <div class="slip-title">AKSHAR SWEETS & FARSAN LLP</div>
        <div>Shivalik Heights, Bodakdev, Ahmedabad - 380054</div>
        <div>GSTIN: 24AABCA1234F1Z9 &bull; FSSAI Lic: 10721026000412</div>
        <div>TAX INVOICE & DISPATCH SLIP</div>
      </div>
      <div>
        <strong>Invoice No:</strong> ${order.id} &nbsp;&nbsp;|&nbsp;&nbsp; <strong>Date:</strong> ${order.date}<br>
        <strong>Customer:</strong> ${order.customer} (${order.type})<br>
        <strong>Address:</strong> ${order.deliveryAddress || 'Flagship Store'}<br>
        <strong>Payment:</strong> ${order.paymentMethod || 'UPI Paid'} &nbsp;&nbsp;|&nbsp;&nbsp; <strong>Status:</strong> ${order.status}
      </div>
      <table class="slip-table">
        <thead>
          <tr>
            <th style="text-align:left;">Item</th>
            <th style="text-align:center;">Pack</th>
            <th style="text-align:center;">Qty</th>
            <th style="text-align:right;">Rate</th>
            <th style="text-align:right;">Total</th>
          </tr>
        </thead>
        <tbody>
          ${order.items.map(i => `
            <tr>
              <td>${i.name}</td>
              <td style="text-align:center;">${i.variant}</td>
              <td style="text-align:center;">${i.qty}</td>
              <td style="text-align:right;">₹${i.price}</td>
              <td style="text-align:right;">₹${i.price * i.qty}</td>
            </tr>
          `).join('')}
        </tbody>
      </table>
      <div style="text-align:right; margin:10px 0;">
        Subtotal: ₹${order.amount || order.total}<br>
        ${order.discount ? `Coupon Savings: -₹${order.discount}<br>` : ''}
        Delivery & Packaging: ₹${(order.deliveryFee || 0) + (order.packagingFee || 0)}<br>
        <div class="slip-total-row">GRAND TOTAL: ₹${order.total} (Inc. GST)</div>
      </div>
      <div style="text-align:center; margin-top:14px; font-size:10px;">
        *** Pure Desi Ghee Guarantee &bull; 100% Vegetarian ***<br>
        Thank you for ordering with Akshar Sweets!
      </div>
    `;

    modal.classList.remove('hidden');
  }

  // ============================================================
  // 12. CHECKOUT & ORDER PLACEMENT
  // ============================================================
  function placeCurrentOrder(payMethod) {
    if (state.cart.length === 0) {
      showToast('Cart is empty. Add products to place an order.', 'warning');
      return;
    }

    const totals = calculateCartTotals();
    const newOrderId = `AKS-2026-${state.orders.length + 101}`;

    const newOrder = {
      id: newOrderId,
      date: new Date().toISOString().replace('T', ' ').substring(0, 16),
      customer: state.wholesaleMode ? 'Swagat Caterers & Events' : 'Pooja Shah',
      type: state.wholesaleMode ? 'Wholesale' : 'Retail',
      items: state.cart.map(i => ({
        name: i.name,
        variant: i.variant,
        qty: i.qty,
        price: i.price
      })),
      amount: totals.itemsPrice,
      deliveryFee: totals.deliveryFee,
      packagingFee: totals.packagingFee,
      discount: totals.couponDiscount,
      total: totals.grandTotal,
      deliveryMode: state.fulfillment === 'pickup' ? 'Store Pickup (Bodakdev)' : 'Express Delivery (30-min)',
      status: 'Placed',
      paymentMethod: payMethod || 'UPI',
      deliveryAddress: 'B-402, Shivalik Heights, Bodakdev, Ahmedabad 380054',
      eta: 'Store acknowledged order'
    };

    // Deduct stock
    state.cart.forEach(item => {
      const prod = state.products.find(p => p.id === item.id);
      if (prod) {
        prod.stockKg = Math.max(0, prod.stockKg - item.qty);
      }
    });

    // Add to orders list
    state.orders.push(newOrder);
    state.activeTrackingOrderId = newOrderId;

    // Clear cart
    state.cart = [];
    saveState();

    // Close checkout modal & cart drawer
    document.getElementById('checkout-otp-modal')?.classList.add('hidden');
    document.getElementById('cart-drawer-modal')?.classList.add('hidden');

    // Update all interfaces
    renderAllViews();

    // Open real-time tracking modal
    openTrackingModal(newOrderId);
    showToast(`Order #${newOrderId} Placed Successfully!`, 'success');

    // Advance guided tour if on step 1
    if (state.guidedStep === 1) {
      setGuidedTourStep(2);
    }
  }

  function reorderPastOrder(orderId) {
    const order = state.orders.find(o => o.id === orderId);
    if (!order) return;

    order.items.forEach(item => {
      const prod = state.products.find(p => p.name === item.name) || state.products[0];
      state.cart.push({
        id: prod.id,
        name: prod.name,
        variant: item.variant || '250g',
        price: item.price,
        mrp: Math.round(item.price * 1.15),
        qty: item.qty || 1,
        image: prod.image
      });
    });

    saveState();
    renderCart();
    renderAndroidProducts();
    renderWebProducts();
    document.getElementById('cart-drawer-modal')?.classList.remove('hidden');
    showToast(`Reordered items from ${order.id} into cart!`, 'success');
  }

  // ============================================================
  // 13. CSV EXPORT ENGINE (Standard RFC 4180)
  // ============================================================
  function exportOrdersToCSV() {
    const headers = ['Order ID', 'Date', 'Customer Name', 'Type', 'Items Summary', 'Delivery Mode', 'Payment Method', 'Gross Amount', 'Discount', 'Total Amount', 'Status'];
    const rows = state.orders.map(o => [
      o.id,
      o.date,
      `"${o.customer.replace(/"/g, '""')}"`,
      o.type,
      `"${o.items.map(i => `${i.qty}x ${i.name} (${i.variant})`).join('; ').replace(/"/g, '""')}"`,
      `"${o.deliveryMode}"`,
      o.paymentMethod || 'UPI',
      o.amount || o.total,
      o.discount || 0,
      o.total,
      o.status
    ]);

    const csvContent = [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
    downloadFile(csvContent, `akshar_orders_export_${new Date().toISOString().slice(0, 10)}.csv`, 'text/csv');
    showToast('Orders CSV downloaded successfully!', 'success');
  }

  function exportProductsToCSV() {
    const headers = ['SKU', 'Product Name', 'Category', 'Price 250g', 'Price 500g', 'Price 1kg', 'Wholesale Rate / kg', 'Stock Kg', 'Low Stock Threshold', 'Fresh Batch', 'Pure Ghee', 'Rating'];
    const rows = state.products.map(p => [
      p.sku,
      `"${p.name.replace(/"/g, '""')}"`,
      p.category,
      p.variants['250g'].price,
      p.variants['500g'].price,
      p.variants['1kg'].price,
      p.wholesaleRatePerKg,
      p.stockKg,
      p.thresholdKg,
      p.isFreshBatch ? 'YES' : 'NO',
      p.isPureGhee ? 'YES' : 'NO',
      p.rating
    ]);

    const csvContent = [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
    downloadFile(csvContent, `akshar_inventory_export_${new Date().toISOString().slice(0, 10)}.csv`, 'text/csv');
    showToast('Products & Inventory CSV downloaded!', 'success');
  }

  function downloadFile(content, fileName, mimeType) {
    const blob = new Blob([content], { type: mimeType });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = fileName;
    document.body.appendChild(a);
    a.click();
    setTimeout(() => {
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }, 200);
  }

  // ============================================================
  // 14. GUIDED TOUR ACCEPTANCE FLOW ENGINE
  // ============================================================
  function setGuidedTourStep(stepNum) {
    state.guidedStep = stepNum;
    const banner = document.getElementById('guided-flow-banner');
    if (!banner) return;
    banner.classList.remove('hidden');

    banner.querySelectorAll('.flow-step-item').forEach(item => {
      const step = parseInt(item.getAttribute('data-step'), 10);
      item.classList.toggle('active', step === stepNum);
    });

    const hint = document.getElementById('flow-hint-text');
    if (stepNum === 1) {
      if (hint) hint.innerHTML = '<strong>Step 1:</strong> Place an order on Android or Web with demo items and proceed to checkout with demo OTP.';
      switchInterfaceView('android');
    } else if (stepNum === 2) {
      if (hint) hint.innerHTML = '<strong>Step 2:</strong> Notice how the order immediately appears in the <strong>Business Admin Panel</strong> under Orders & Pipeline!';
      switchInterfaceView('admin');
      switchAdminTab('admin-tab-orders');
    } else if (stepNum === 3) {
      if (hint) hint.innerHTML = '<strong>Step 3:</strong> Click <em>"Change"</em> on the newly placed order in Admin and update status to <strong>Preparing</strong> or <strong>Out for Delivery</strong>.';
      switchInterfaceView('admin');
    } else if (stepNum === 4) {
      if (hint) hint.innerHTML = '<strong>Step 4:</strong> Switch back to <strong>Android App</strong>. The live tracking stepper has advanced automatically!';
      switchInterfaceView('android');
      openTrackingModal(state.activeTrackingOrderId);
    } else if (stepNum === 5) {
      if (hint) hint.innerHTML = '<strong>Step 5:</strong> Request a wholesale bulk quote or view B2B accounts. Admin reviews, quotes custom rate, and approves!';
      switchInterfaceView('admin');
      switchAdminTab('admin-tab-wholesale');
    }
  }

  // ============================================================
  // 15. SWITCH VIEW / TABS NAVIGATION
  // ============================================================
  function switchInterfaceView(viewId) {
    state.activeView = viewId;
    document.querySelectorAll('.switch-btn').forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-view') === viewId);
    });

    document.querySelectorAll('.view-panel').forEach(panel => {
      panel.classList.add('hidden');
    });

    const target = document.getElementById(`view-${viewId}`);
    if (target) target.classList.remove('hidden');

    if (viewId === 'admin') {
      renderAdminDashboard();
      renderAdminOrders();
    }
  }

  function switchAndroidTab(tabId) {
    document.querySelectorAll('.android-tab-view').forEach(tab => tab.classList.add('hidden'));
    document.getElementById(tabId)?.classList.remove('hidden');

    document.querySelectorAll('#app-nav-bar .nav-item').forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-tab') === tabId);
    });

    window.scrollTo({ top: 0, behavior: 'smooth' });

    if (tabId === 'android-tab-orders') {
      renderAndroidOrders();
    }
  }

  function switchAdminTab(tabId) {
    document.querySelectorAll('.admin-nav-item').forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-tab') === tabId);
    });

    document.querySelectorAll('.admin-tab-page').forEach(page => {
      page.classList.add('hidden');
    });

    const target = document.getElementById(tabId);
    if (target) target.classList.remove('hidden');

    const titles = {
      'admin-tab-dashboard': 'Business Dashboard & Sales KPIs',
      'admin-tab-orders': 'Orders Management & Live Dispatch',
      'admin-tab-products': 'Product Catalogue & Variant Management',
      'admin-tab-inventory': 'Inventory Control & Low-Stock Alerts',
      'admin-tab-wholesale': 'Wholesale Accounts & RFQ Pipeline',
      'admin-tab-customers': 'Customer Directory & Accounts',
      'admin-tab-coupons': 'Discount Coupons & Offers',
      'admin-tab-reports': 'Sales Analytics & CSV Export',
      'admin-tab-settings': 'Shop Settings & Staff Roles'
    };

    const heading = document.getElementById('admin-section-heading');
    if (heading && titles[tabId]) heading.textContent = titles[tabId];

    if (tabId === 'admin-tab-dashboard') renderAdminDashboard();
    else if (tabId === 'admin-tab-orders') renderAdminOrders();
    else if (tabId === 'admin-tab-products') renderAdminProducts();
    else if (tabId === 'admin-tab-inventory') renderAdminInventory();
    else if (tabId === 'admin-tab-wholesale') renderAdminWholesale();
    else if (tabId === 'admin-tab-customers') renderAdminCustomers();
    else if (tabId === 'admin-tab-coupons') renderAdminCoupons();
    else if (tabId === 'admin-tab-reports') renderAdminReports();
    else if (tabId === 'admin-tab-settings') renderAdminStaff();
  }

  // ============================================================
  // 16. MASTER RENDER DISPATCHER
  // ============================================================
  function renderAllViews() {
    renderAndroidHome();
    renderAndroidProducts();
    renderAndroidOrders();
    renderWebCategoriesNav();
    renderWebProducts();
    renderCart();
    renderAdminDashboard();
    renderAdminOrders();
    renderAdminProducts();
    renderAdminInventory();
    renderAdminWholesale();
    renderAdminCustomers();
    renderAdminCoupons();
    renderAdminReports();
    renderAdminStaff();
  }

  // ============================================================
  // 17. GLOBAL EVENT LISTENERS BINDING
  // ============================================================
  function bindEventListeners() {
    // Top Switcher View Buttons
    document.querySelectorAll('.switch-btn').forEach(btn => {
      btn.addEventListener('click', () => switchInterfaceView(btn.getAttribute('data-view')));
    });

    // Persona Selector dropdown
    const personaSelect = document.getElementById('persona-select');
    if (personaSelect) {
      personaSelect.addEventListener('change', (e) => {
        const val = e.target.value;
        state.activePersona = val;
        if (val.includes('wholesale')) {
          state.wholesaleMode = true;
          document.getElementById('web-wholesale-alert-banner')?.classList.remove('hidden');
          const modeTxt = document.getElementById('wholesale-mode-text');
          if (modeTxt) modeTxt.textContent = 'Wholesale Mode: ON';
          document.getElementById('btn-web-wholesale-mode')?.classList.add('active');
          showToast('Switched to Wholesale Partner Mode (Tiered B2B Pricing Active)', 'info');
        } else {
          state.wholesaleMode = false;
          document.getElementById('web-wholesale-alert-banner')?.classList.add('hidden');
          const modeTxt = document.getElementById('wholesale-mode-text');
          if (modeTxt) modeTxt.textContent = 'Wholesale Mode: OFF';
          document.getElementById('btn-web-wholesale-mode')?.classList.remove('active');
        }

        if (val.includes('admin') || val.includes('staff')) {
          switchInterfaceView('admin');
        } else if (val.includes('wholesale') || val.includes('retail')) {
          renderAndroidProducts();
          renderWebProducts();
        }
      });
    }

    // Guided Flow banner controls
    document.getElementById('btn-guided-flow')?.addEventListener('click', () => {
      setGuidedTourStep(1);
    });
    document.getElementById('close-flow-banner')?.addEventListener('click', () => {
      document.getElementById('guided-flow-banner')?.classList.add('hidden');
    });
    document.getElementById('btn-flow-next')?.addEventListener('click', () => {
      if (state.guidedStep < 5) setGuidedTourStep(state.guidedStep + 1);
      else setGuidedTourStep(1);
    });
    document.getElementById('btn-flow-prev')?.addEventListener('click', () => {
      if (state.guidedStep > 1) setGuidedTourStep(state.guidedStep - 1);
    });

    // Reset Data
    document.getElementById('btn-reset-data')?.addEventListener('click', resetAllData);

    // App Navigation (Mobile Bottom Nav & Desktop Sidebar)
    document.querySelectorAll('#app-nav-bar .nav-item[data-tab]').forEach(item => {
      item.addEventListener('click', () => {
        const tab = item.getAttribute('data-tab');
        if (tab) switchAndroidTab(tab);
      });
    });

    // Open Cart Drawer
    const openCartDrawer = () => {
      document.getElementById('cart-drawer-modal')?.classList.remove('hidden');
      renderCart();
    };

    document.getElementById('app-cart-trigger')?.addEventListener('click', openCartDrawer);
    document.getElementById('android-nav-cart-btn')?.addEventListener('click', openCartDrawer);
    document.getElementById('web-cart-open-btn')?.addEventListener('click', openCartDrawer);
    document.getElementById('btn-open-cart-floating')?.addEventListener('click', openCartDrawer);
    document.getElementById('btn-close-cart')?.addEventListener('click', () => {
      document.getElementById('cart-drawer-modal')?.classList.add('hidden');
    });

    // Topbar Brand Home Click
    document.getElementById('topbar-brand-home')?.addEventListener('click', () => {
      switchAndroidTab('android-tab-home');
    });

    // Wholesale Triggers
    document.getElementById('top-wholesale-btn')?.addEventListener('click', () => openWholesaleModal('rfq'));
    document.getElementById('sidebar-wholesale-trigger')?.addEventListener('click', () => openWholesaleModal('rfq'));

    // Web Wholesale Mode Button
    document.getElementById('btn-web-wholesale-mode')?.addEventListener('click', () => {
      state.wholesaleMode = !state.wholesaleMode;
      const banner = document.getElementById('web-wholesale-alert-banner');
      const modeTxt = document.getElementById('wholesale-mode-text');
      const btn = document.getElementById('btn-web-wholesale-mode');

      if (state.wholesaleMode) {
        banner?.classList.remove('hidden');
        if (modeTxt) modeTxt.textContent = 'Wholesale Mode: ON';
        btn?.classList.add('active');
        showToast('Wholesale bulk mode enabled. B2B slab pricing displayed.', 'info');
      } else {
        banner?.classList.add('hidden');
        if (modeTxt) modeTxt.textContent = 'Wholesale Mode: OFF';
        btn?.classList.remove('active');
        showToast('Wholesale mode turned off. Retail pricing active.', 'info');
      }
      renderWebProducts();
      renderAndroidProducts();
    });

    // Wholesale RFQ Modals
    const openWholesaleModal = (tab = 'rfq') => {
      const modal = document.getElementById('wholesale-rfq-modal');
      modal?.classList.remove('hidden');
      document.querySelectorAll('.w-tab').forEach(t => t.classList.toggle('active', t.getAttribute('data-wtab') === tab));
      document.getElementById('wtab-rfq')?.classList.toggle('hidden', tab !== 'rfq');
      document.getElementById('wtab-register')?.classList.toggle('hidden', tab !== 'register');
    };

    document.getElementById('web-top-wholesale-btn')?.addEventListener('click', () => openWholesaleModal('rfq'));
    document.getElementById('btn-web-request-quote')?.addEventListener('click', () => openWholesaleModal('rfq'));
    document.getElementById('btn-web-quick-rfq')?.addEventListener('click', () => openWholesaleModal('rfq'));
    document.getElementById('web-nav-rfq')?.addEventListener('click', () => openWholesaleModal('rfq'));
    document.getElementById('android-hamper-btn')?.addEventListener('click', () => openWholesaleModal('rfq'));
    document.getElementById('close-wholesale-modal')?.addEventListener('click', () => {
      document.getElementById('wholesale-rfq-modal')?.classList.add('hidden');
    });

    // Submit RFQ Form
    document.getElementById('form-submit-rfq')?.addEventListener('submit', (e) => {
      e.preventDefault();
      const company = document.getElementById('rfq-company')?.value;
      const contact = document.getElementById('rfq-contact')?.value;
      const product = document.getElementById('rfq-product')?.value;
      const qty = parseInt(document.getElementById('rfq-qty')?.value || '50', 10);
      const date = document.getElementById('rfq-date')?.value;
      const notes = document.getElementById('rfq-notes')?.value;

      const newQuote = {
        id: `RFQ-2026-0${state.quotes.length + 83}`,
        client: company,
        contact: contact,
        product: product,
        qty: qty,
        date: date,
        estVal: `₹${(qty * 450).toLocaleString('en-IN')}`,
        quotedPrice: 0,
        status: 'Pending Admin Quote',
        notes: notes
      };

      state.quotes.push(newQuote);
      saveState();
      document.getElementById('wholesale-rfq-modal')?.classList.add('hidden');
      renderAdminWholesale();
      showToast(`Quotation Request #${newQuote.id} sent to Admin!`, 'success');

      if (state.guidedStep === 5) {
        switchInterfaceView('admin');
        switchAdminTab('admin-tab-wholesale');
      }
    });

    // Submit Wholesale Register Form
    document.getElementById('form-wholesale-register')?.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('wreg-name')?.value;
      const gst = document.getElementById('wreg-gst')?.value;
      const person = document.getElementById('wreg-person')?.value;
      const phone = document.getElementById('wreg-phone')?.value;
      const address = document.getElementById('wreg-address')?.value;

      const newCust = {
        id: `wh-${state.customers.length + 1}`,
        name: name,
        type: 'Wholesale',
        contactPerson: person,
        phone: phone,
        email: `${name.toLowerCase().replace(/[^a-z0-9]/g, '')}@gmail.com`,
        gstin: gst,
        address: address,
        ordersCount: 0,
        ltv: 0,
        status: 'Pending Approval'
      };

      state.customers.push(newCust);
      saveState();
      document.getElementById('wholesale-rfq-modal')?.classList.add('hidden');
      renderAdminWholesale();
      showToast(`Registration submitted for ${name}! Admin review pending.`, 'success');
    });

    // Coupon Apply / Remove
    document.getElementById('btn-apply-coupon')?.addEventListener('click', () => {
      const code = document.getElementById('coupon-input')?.value.trim().toUpperCase();
      if (!code) return;
      const found = state.coupons.find(c => c.code === code && c.active);
      if (found) {
        state.appliedCoupon = { code: found.code, discountAmt: 0 };
        saveState();
        renderCart();
        showToast(`Coupon ${code} applied successfully!`, 'success');
      } else {
        showToast('Invalid coupon code or expired', 'warning');
      }
    });

    document.getElementById('btn-remove-coupon')?.addEventListener('click', () => {
      state.appliedCoupon = null;
      saveState();
      renderCart();
      showToast('Coupon removed', 'info');
    });

    // Proceed to Checkout -> Open OTP Modal
    document.getElementById('btn-proceed-checkout')?.addEventListener('click', () => {
      if (state.cart.length === 0) {
        showToast('Cart is empty', 'warning');
        return;
      }
      document.getElementById('checkout-otp-modal')?.classList.remove('hidden');
      const totals = calculateCartTotals();
      const payable = document.getElementById('checkout-payable-val');
      if (payable) payable.textContent = `₹${totals.grandTotal}`;
    });

    document.getElementById('close-checkout-modal')?.addEventListener('click', () => {
      document.getElementById('checkout-otp-modal')?.classList.add('hidden');
    });

    // Confirm Place Order
    document.getElementById('btn-confirm-place-order')?.addEventListener('click', () => {
      const payRadio = document.querySelector('input[name="pay-method"]:checked');
      const payMethod = payRadio ? payRadio.value : 'UPI';
      placeCurrentOrder(payMethod);
    });

    // Tracking Modal Close
    document.getElementById('close-tracking-modal')?.addEventListener('click', () => {
      document.getElementById('order-tracking-modal')?.classList.add('hidden');
    });
    document.getElementById('btn-track-done')?.addEventListener('click', () => {
      document.getElementById('order-tracking-modal')?.classList.add('hidden');
    });
    document.getElementById('btn-track-view-bill')?.addEventListener('click', () => {
      openInvoiceModal(state.activeTrackingOrderId || state.orders[0]?.id);
    });
    document.getElementById('btn-track-view-admin')?.addEventListener('click', () => {
      document.getElementById('order-tracking-modal')?.classList.add('hidden');
      switchInterfaceView('admin');
      switchAdminTab('admin-tab-orders');
      if (state.guidedStep === 2) setGuidedTourStep(3);
    });

    // Admin Sidebar Navigation
    document.querySelectorAll('.admin-nav-item').forEach(item => {
      item.addEventListener('click', () => {
        const tab = item.getAttribute('data-tab');
        if (tab) switchAdminTab(tab);
      });
    });

    // Admin Status Update Modal Save
    document.getElementById('close-status-modal')?.addEventListener('click', () => {
      document.getElementById('admin-status-modal')?.classList.add('hidden');
    });

    document.querySelectorAll('.status-choice-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.status-choice-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
      });
    });

    document.getElementById('btn-save-order-status')?.addEventListener('click', () => {
      const orderId = document.getElementById('status-update-order-id')?.value;
      const activeBtn = document.querySelector('.status-choice-btn.active');
      if (!orderId || !activeBtn) return;

      const newStatus = activeBtn.getAttribute('data-status');
      const order = state.orders.find(o => o.id === orderId);

      if (order) {
        order.status = newStatus;
        if (newStatus === 'Accepted') order.eta = 'Kitchen acknowledged order';
        if (newStatus === 'Preparing') order.eta = 'Frying & packaging fresh batch in kitchen';
        if (newStatus === 'Out for Delivery') order.eta = 'Rider Ramesh (+91 98251 00221) is 10 mins away';
        if (newStatus === 'Completed') order.eta = 'Delivered successfully';
        if (newStatus === 'Cancelled') order.eta = 'Order cancelled by customer / store';

        saveState();
        document.getElementById('admin-status-modal')?.classList.add('hidden');
        renderAdminDashboard();
        renderAdminOrders();
        renderAndroidOrders();
        showToast(`Order #${orderId} status updated to: ${newStatus}`, 'success');

        if (state.guidedStep === 3) {
          setGuidedTourStep(4);
        }
      }
    });

    // Admin Add Product Modal
    document.getElementById('btn-admin-add-product')?.addEventListener('click', () => openAdminProductModal());
    document.getElementById('btn-admin-quick-add-prod')?.addEventListener('click', () => openAdminProductModal());
    document.getElementById('close-product-modal')?.addEventListener('click', () => {
      document.getElementById('admin-product-modal')?.classList.add('hidden');
    });

    document.getElementById('form-admin-product')?.addEventListener('submit', (e) => {
      e.preventDefault();
      const idVal = document.getElementById('edit-prod-id')?.value;
      const name = document.getElementById('edit-prod-name')?.value;
      const cat = document.getElementById('edit-prod-cat')?.value;
      const desc = document.getElementById('edit-prod-desc')?.value;
      const p250 = parseInt(document.getElementById('edit-prod-p250')?.value || '100', 10);
      const p500 = parseInt(document.getElementById('edit-prod-p500')?.value || '190', 10);
      const p1000 = parseInt(document.getElementById('edit-prod-p1000')?.value || '360', 10);
      const pws = parseInt(document.getElementById('edit-prod-pwholesale')?.value || '300', 10);
      const stock = parseInt(document.getElementById('edit-prod-stock')?.value || '40', 10);
      const threshold = parseInt(document.getElementById('edit-prod-threshold')?.value || '10', 10);
      const img = document.getElementById('edit-prod-img')?.value || 'https://images.unsplash.com/photo-1599785209707-a456fc1337bb?auto=format&fit=crop&w=480&q=80';
      const isFresh = document.getElementById('edit-prod-fresh')?.checked;
      const isGhee = document.getElementById('edit-prod-ghee')?.checked;

      if (idVal) {
        // Edit existing
        const prod = state.products.find(p => p.id === parseInt(idVal, 10));
        if (prod) {
          prod.name = name;
          prod.category = cat;
          prod.desc = desc;
          prod.variants['250g'].price = p250;
          prod.variants['500g'].price = p500;
          prod.variants['1kg'].price = p1000;
          prod.wholesaleRatePerKg = pws;
          prod.stockKg = stock;
          prod.thresholdKg = threshold;
          prod.image = img;
          prod.isFreshBatch = isFresh;
          prod.isPureGhee = isGhee;
          showToast(`Updated product ${name}`, 'success');
        }
      } else {
        // Add new
        const newProd = {
          id: state.products.length + 1,
          sku: `AKS-${cat.substring(0, 3).toUpperCase()}-0${state.products.length + 1}`,
          name: name,
          category: cat,
          desc: desc,
          image: img,
          rating: 4.8,
          reviews: 12,
          isVeg: true,
          isFreshBatch: isFresh,
          isPureGhee: isGhee,
          tag: isFresh ? 'Fresh Batch' : 'Pure Ghee',
          variants: {
            '250g': { price: p250, mrp: Math.round(p250 * 1.15) },
            '500g': { price: p500, mrp: Math.round(p500 * 1.15) },
            '1kg':   { price: p1000, mrp: Math.round(p1000 * 1.15) }
          },
          wholesaleRatePerKg: pws,
          stockKg: stock,
          thresholdKg: threshold,
          shelfLife: '20 Days'
        };
        state.products.push(newProd);
        showToast(`Added new product: ${name}`, 'success');
      }

      saveState();
      document.getElementById('admin-product-modal')?.classList.add('hidden');
      renderAllViews();
    });

    // Invoice Modal Close & Print
    document.getElementById('close-invoice-modal')?.addEventListener('click', () => {
      document.getElementById('invoice-modal')?.classList.add('hidden');
    });
    document.getElementById('btn-print-invoice')?.addEventListener('click', () => {
      window.print();
    });

    // CSV Exports
    document.getElementById('btn-export-orders-csv')?.addEventListener('click', exportOrdersToCSV);
    document.getElementById('btn-admin-quick-export')?.addEventListener('click', exportOrdersToCSV);
    document.getElementById('btn-export-products-csv')?.addEventListener('click', exportProductsToCSV);

    // Orders Filter Status Buttons
    document.querySelectorAll('.btn-filter-status[data-status-filter]').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.btn-filter-status[data-status-filter]').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const st = btn.getAttribute('data-status-filter');
        renderAdminOrders(st);
      });
    });

    // Orders Search input
    document.getElementById('admin-orders-search')?.addEventListener('input', (e) => {
      renderAdminOrders('all', 'all', e.target.value);
    });

    // Products Search in Admin
    document.getElementById('admin-products-search')?.addEventListener('input', (e) => {
      renderAdminProducts('all', e.target.value);
    });

    // Products Category Filter in Admin
    document.getElementById('admin-products-cat-filter')?.addEventListener('change', (e) => {
      renderAdminProducts(e.target.value);
    });

    // Web Search Input
    document.getElementById('web-search-input')?.addEventListener('input', (e) => {
      const q = e.target.value.toLowerCase();
      const filtered = state.products.filter(p => p.name.toLowerCase().includes(q) || p.desc.toLowerCase().includes(q) || p.category.toLowerCase().includes(q));
      const grid = document.getElementById('web-product-cards-container');
      if (grid) {
        grid.innerHTML = filtered.map(p => renderNeoProductCardHTML(p, 'web')).join('');
        attachProductCardEvents(grid, 'web');
      }
    });

    // Android Search Input
    document.getElementById('android-search-input')?.addEventListener('input', (e) => {
      const q = e.target.value.trim().toLowerCase();
      const clearBtn = document.getElementById('android-search-clear');
      if (clearBtn) clearBtn.classList.toggle('hidden', q.length === 0);

      if (q.length > 0) {
        switchAndroidTab('android-tab-search');
        const results = state.products.filter(p => p.name.toLowerCase().includes(q) || p.category.toLowerCase().includes(q));
        const resGrid = document.getElementById('android-search-results-grid');
        const resCount = document.getElementById('search-results-count');
        const resLbl = document.getElementById('search-query-label');
        if (resCount) resCount.textContent = `Found ${results.length} results`;
        if (resLbl) resLbl.textContent = `Results for "${q}"`;
        if (resGrid) {
          resGrid.innerHTML = results.map(p => renderNeoProductCardHTML(p, 'android')).join('');
          attachProductCardEvents(resGrid, 'android');
        }
      }
    });

    document.getElementById('android-search-clear')?.addEventListener('click', () => {
      const inp = document.getElementById('android-search-input');
      if (inp) inp.value = '';
      document.getElementById('android-search-clear')?.classList.add('hidden');
      switchAndroidTab('android-tab-home');
    });

    // Android Quick Search Tags
    document.querySelectorAll('.android-quick-tags .search-tag').forEach(tag => {
      tag.addEventListener('click', () => {
        const q = tag.getAttribute('data-query');
        const inp = document.getElementById('android-search-input');
        if (inp) {
          inp.value = q;
          inp.dispatchEvent(new Event('input'));
        }
      });
    });

    // Hero Promo Order CTA
    document.getElementById('btn-hero-order')?.addEventListener('click', () => {
      addToCart(1, '1kg');
      document.getElementById('cart-drawer-modal')?.classList.remove('hidden');
    });

    // Web Track Order Header Link
    document.getElementById('web-nav-track-order')?.addEventListener('click', () => {
      openTrackingModal(state.activeTrackingOrderId || state.orders[0]?.id);
    });

    // Price Slider Web
    document.getElementById('web-price-range')?.addEventListener('input', (e) => {
      const val = e.target.value;
      const lbl = document.getElementById('web-price-val');
      if (lbl) lbl.textContent = `Up to ₹${val}`;
      applyWebSidebarFilters();
    });

    // Filter reset web
    document.getElementById('web-filter-reset')?.addEventListener('click', () => {
      document.querySelectorAll('input[name="web-cat-filter"]').forEach(chk => chk.checked = false);
      const pr = document.getElementById('web-price-range');
      if (pr) pr.value = 2500;
      const lbl = document.getElementById('web-price-val');
      if (lbl) lbl.textContent = 'Up to ₹2,500';
      const g = document.getElementById('web-filter-ghee');
      if (g) g.checked = false;
      const f = document.getElementById('web-filter-fresh');
      if (f) f.checked = false;
      const s = document.getElementById('web-filter-sugarfree');
      if (s) s.checked = false;
      renderWebProducts('all');
    });

    // Addons row clicks in Cart
    document.querySelectorAll('.addon-card').forEach(card => {
      const btn = card.querySelector('.addon-add-btn');
      if (btn) {
        btn.addEventListener('click', () => {
          const name = card.getAttribute('data-addon-name');
          const price = parseInt(card.getAttribute('data-addon-price'), 10);
          state.cart.push({
            id: 990 + state.cart.length,
            name: name,
            variant: 'Side / Addon',
            price: price,
            mrp: price + 10,
            qty: 1,
            image: card.querySelector('img')?.src || ''
          });
          saveState();
          renderCart();
          showToast(`Added ${name} to cart!`, 'success');
        });
      }
    });

    // Android Simulator Frame Resize / Expand Toggle
    document.getElementById('sim-rotate')?.addEventListener('click', () => {
      const frame = document.getElementById('android-frame');
      frame?.classList.toggle('expanded');
    });
    document.getElementById('sim-fullscreen')?.addEventListener('click', () => {
      switchInterfaceView('web');
      showToast('Switched to Full Responsive Web View', 'info');
    });

    // Android See All Categories link
    document.getElementById('android-see-all-cats')?.addEventListener('click', () => {
      switchAndroidTab('android-tab-products');
    });

    document.getElementById('android-view-all-fresh')?.addEventListener('click', () => {
      switchAndroidTab('android-tab-products');
      renderAndroidProducts('in-stock');
    });
  }

  function updateTopbarHeight() {
    const topbar = document.getElementById('app-fixed-topbar');
    if (topbar) {
      const h = topbar.offsetHeight;
      document.documentElement.style.setProperty('--topbar-height', `${h}px`);
    }
  }

  // ============================================================
  // 18. INITIALIZATION ON DOM READY
  // ============================================================
  document.addEventListener('DOMContentLoaded', () => {
    loadState();
    bindEventListeners();
    renderAllViews();
    updateTopbarHeight();

    window.addEventListener('resize', updateTopbarHeight);
    window.addEventListener('orientationchange', () => setTimeout(updateTopbarHeight, 150));

    console.log('✓ Akshar Sweets Multi-Platform Platform initialized successfully with 35 products and live ERP state.');
  });

})();

