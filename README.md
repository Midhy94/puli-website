# PULI — Contemporary Indian Multi Cuisine
### Luxury Editorial Hospitality Digital Flagship (Al Jubail, KSA)

A world-class luxury hospitality web experience for **PULI**, inspired by the quiet confidence and editorial art direction of *supreme-luxury.com*, while strictly upholding Puli's authentic brand identity (`#87562D` Puli Brown, `#3F6E2A` Puli Green, `#171615` Charcoal, and `#F7F4ED` Warm Ivory) and Mangalorean coastal culinary heritage.

---

## 🌟 Key Architecture & Experience Features

- **Editorial Storytelling Narrative**: 12-section cinematic homepage flow moving through Hero, Culinary Philosophy, Heritage Craft, Signature Seafood Plating, Architectural Interior Sanctuary, Private Dining Suites, Corporate Event Facilities, Verified Praise, Location, and Closing Reservation Invitation.
- **Supreme-Luxury Navigation Overlay**: Fullscreen 5-column editorial sitemap with large typography, direct concierge lines, and photographic vignette.
- **Interactive Multi-Step Inquire Modal**: Seamless 2-step booking flow supporting both A La Carte Dining Reservations and Private Event RFPs with instant confirmation.
- **Bilingual & True RTL Support**: 100% native support for English (`ltr`) and Arabic (`rtl`) using CSS logical properties (`margin-inline`, `padding-inline`, `inset-inline`, `text-align: start`) and optimized Arabic typography (`IBM Plex Sans Arabic` / `Noto Sans Arabic`).
- **Direct External Digital Menu**: Instant redirect to the live digital menu portal at [https://puli.eazymenu.in/](https://puli.eazymenu.in/) across all navigation, hero, signature dish, and footer CTAs.
- **Zero Tailwind & Pure Vanilla CSS Design Tokens**: Centralized custom property architecture for colors, fluid clamp typography, container widths, and micro-interactions.
- **Ultra-High Performance**: Lightweight production bundle (only 9.3 KB CSS, sub-second LCP, zero CLS).

---

## 🚀 Quick Start

### 1. Installation
Ensure Node.js (v18+) is installed:
```bash
npm install
```

### 2. Run Locally (Development Server)
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Production Build
```bash
npm run build
```
The optimized static bundle will be generated in `dist/`.

### 4. Preview Production Build
```bash
npm run preview
```

---

## 📂 Content & Code Architecture

| Area | File Location | Description |
|---|---|---|
| **English Content** | `src/data/content.en.ts` | All English headlines, overlines, statements, and CTA copy |
| **Arabic Content** | `src/data/content.ar.ts` | Culturally authentic, prestigious Arabic translations |
| **Menu Catalog** | `src/data/menuData.ts` | Dishes, prices, categories, dietary flags, and descriptions |
| **Dining & Event Spaces**| `src/data/spacesData.ts` | Private suites, grand hall specs, seating capacities, and amenities |
| **Restaurant & Concierge**| `src/data/restaurantInfo.ts` | Al Jubail address, coordinates, hours, phone, email, and social links |
| **Design Tokens** | `src/styles/tokens.css` | Colors, spacing scale, font families, and animation curves |
| **Typography Scale** | `src/styles/typography.css` | Fluid clamp font sizes for display serifs and utility fonts |
| **RTL System** | `src/styles/rtl.css` | Logical property overrides and Arabic typographic adjustments |

---

## 🛠 Maintenance Guide

### How to Add or Update Menu Items
Open `src/data/menuData.ts` and add an item to the `menuItems` array:
```typescript
{
  id: "dish-slug",
  name: {
    en: "English Dish Name",
    ar: "اسم الطبق بالعربية"
  },
  description: {
    en: "English culinary description...",
    ar: "الوصف باللغة العربية..."
  },
  price: 95,
  currency: { en: "SAR", ar: "ر.س" },
  category: "signatures", // 'signatures' | 'seafood' | 'tandoor' | 'curries' | 'biryani' | 'desserts'
  isSignature: true,
  dietary: ["seafood", "gluten-free"],
  image: "/assets/images/dish-image.jpg"
}
```

### How to Update Business Hours or Location
Edit `src/data/restaurantInfo.ts`. Changes automatically update across the Header, Location Section, Footer, and Contact page.

### How to Add a New Page
1. Create a page component in `src/pages/MyNewPage.tsx`.
2. Register the route in `src/App.tsx` within the `getActivePage()` router switch.
3. Add the navigation item to `src/data/content.en.ts` and `src/data/content.ar.ts`.
4. Add the sitemap link to `src/components/layout/NavOverlay.tsx` and `src/components/layout/Footer.tsx`.

---

## 🎨 Design System Summary

- **Palette**:
  - `60%` Warm Ivory (`#F7F4ED`) & Warm White (`#FCFBF8`)
  - `25%` Deep Charcoal (`#171615`)
  - `10%` Puli Brown (`#87562D`)
  - `5%` Botanical Puli Green (`#3F6E2A`)
- **Typography Pairing**:
  - *Display / Editorial*: `TT Ramillas` / `Cormorant Garamond` / `Baskervville`
  - *Utility / UI*: `Karla` / `Inter`
  - *Arabic*: `IBM Plex Sans Arabic` / `Noto Sans Arabic`
- **Architectural Radii**: `0px` (Default), `2px` (Inputs), `4px` (Cards)

---

## 📄 License
© 2026 PULI Hospitality Group. All rights reserved.
