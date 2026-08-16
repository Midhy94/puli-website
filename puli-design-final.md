---
brand: Puli Contemporary Multi Cuisine
description: A refined hospitality system combining Puli's authentic
  brown-and-green brand identity with calm editorial typography,
  spacious layouts, premium photography, and practical modern UI.
design_direction: Contemporary Luxury Hospitality
name: Puli Contemporary Luxury Hospitality
version: 1.0
---

# Puli Contemporary Luxury Hospitality

## 1. Overview

Puli is a contemporary multi-cuisine restaurant and hospitality
destination in Al Jubail, Saudi Arabia.

This design system combines Puli's existing visual identity with a
refined, premium hospitality experience suitable for affluent diners,
executives, business owners, corporate customers, private dining
customers, and event and conference customers.

The website should feel like a high-end hospitality brand, not a generic
restaurant template.

### Core principle

> Luxury is achieved through restraint, not decoration.

Puli's actual brand colours must remain visible and recognizable, but
they must be used with discipline. The website should never become
overwhelmingly brown or green.

## 2. Brand Identity

The existing Puli logo is the primary source for the brand colour
system.

The logo contains:

1.  Warm earthy brown --- the dominant Puli wordmark.
2.  Natural botanical green --- the leaf/organic detail.
3.  Deep charcoal --- supporting typography.

Do not replace Puli's identity with a generic black-and-gold luxury
palette.

Do not introduce decorative Indian visual clichés simply to communicate
heritage.

Puli's heritage should be communicated through food, photography,
storytelling, typography, materials, ingredients, and subtle organic
references.

## 3. Brand Personality

Puli should feel:

-   Established
-   Sophisticated
-   Warm
-   Confident
-   Cultured
-   Contemporary
-   Culinary
-   Authentic
-   Professional
-   Premium without being pretentious

Puli should NOT feel:

-   Loud
-   Flashy
-   Over-decorated
-   Rustic
-   Corporate
-   Cheap
-   Trend-driven
-   Generic
-   Overly traditional
-   Like a wedding venue template
-   Like a SaaS interface

## 4. Visual Direction

The system combines editorial luxury, hospitality, contemporary Indian
identity, premium corporate appeal, and cinematic photography.

Use large typography, generous whitespace, strong visual hierarchy, warm
welcoming interactions, cultural confidence without decorative
stereotypes, and photography that carries much of the emotional weight.

## 5. Colour System

### Official Puli Brand Colours

``` yaml
brand-primary: "#87562D"
brand-primary-dark: "#633C1F"
brand-primary-light: "#B8895B"

brand-secondary: "#3F6E2A"
brand-secondary-dark: "#29491D"
brand-secondary-light: "#6F914F"
```

### Puli Brown --- #87562D

The dominant brand accent.

Use for primary CTAs, active navigation states, important links, brand
accents, selected UI states, small editorial details, underlines, and
key interactive elements.

Do not use it as the default background for large areas.

### Puli Green --- #3F6E2A

Derived from the botanical element in the logo.

Use sparingly for ingredient-related content, botanical references,
natural details, secondary accents, selected states, and subtle
decorative details.

Green must remain secondary to Puli Brown.

## 6. Neutral Colour System

``` yaml
ink: "#2B2A29"
charcoal: "#171615"

ivory: "#F7F4ED"
warm-white: "#FCFBF8"
sand: "#E8DFD2"

white: "#FFFFFF"
muted: "#746D65"

border: "#D8CEC0"
border-dark: "#403B36"

error: "#A63D32"
overlay: "#00000080"
```

Use Ink for primary text, Charcoal for premium dark surfaces, Ivory as
the primary warm background, Warm White for clean secondary backgrounds,
Sand for subtle layering, and Muted for supporting information.

## 7. Colour Distribution

Use approximately:

-   60% Ivory / Warm White
-   25% Charcoal / Dark surfaces
-   10% Puli Brown
-   5% Puli Green

Brand colours should identify Puli without overwhelming the luxury
aesthetic.

## 8. Colour Rules

### DO

-   Use Puli Brown as the primary interactive colour.
-   Use Puli Green as a restrained secondary accent.
-   Use warm neutrals instead of cold whites.
-   Use charcoal for cinematic dark sections.
-   Allow photography to introduce additional natural colour.
-   Maintain strong contrast.

### DO NOT

-   Replace Puli Brown with generic gold.
-   Use metallic gold gradients.
-   Use bright orange, yellow, saturated purple, or blue as brand
    colours.
-   Make green the dominant CTA colour.
-   Make every heading brown.
-   Make every section green.
-   Use brown and gold together in a traditional "royal Indian" style.
-   Introduce arbitrary colours without a strong functional reason.

## 9. Typography

### Primary Editorial Font

TT Ramillas

Use for hero headlines, major editorial headlines, culinary
storytelling, heritage moments, large section statements, and selected
descriptive copy.

### Primary Utility Font

Karla

Use for navigation, buttons, labels, forms, menu metadata, prices,
practical information, event details, and supporting UI.

If either font cannot be legally loaded, use a carefully selected
equivalent while preserving the same editorial/utility relationship.

Do not introduce more than two primary font families.

## 10. Typography Scale

``` yaml
headline-display:
  fontFamily: "TT Ramillas"
  fontSize: "clamp(64px, 8vw, 128px)"
  fontWeight: 400
  lineHeight: 0.94
  letterSpacing: "-0.04em"

headline-lg:
  fontFamily: "TT Ramillas"
  fontSize: "clamp(48px, 6vw, 88px)"
  fontWeight: 400
  lineHeight: 1
  letterSpacing: "-0.035em"

headline-md:
  fontFamily: "Karla"
  fontSize: "clamp(30px, 4vw, 48px)"
  fontWeight: 600
  lineHeight: 1.1
  letterSpacing: "-0.02em"

headline-sm:
  fontFamily: "Karla"
  fontSize: "24px"
  fontWeight: 600
  lineHeight: 1.2
  letterSpacing: "-0.01em"

body-lg:
  fontFamily: "TT Ramillas"
  fontSize: "19px"
  fontWeight: 400
  lineHeight: 1.55
  letterSpacing: "0"

body-md:
  fontFamily: "TT Ramillas"
  fontSize: "16px"
  fontWeight: 400
  lineHeight: 1.7
  letterSpacing: "0"

body-sm:
  fontFamily: "Karla"
  fontSize: "14px"
  fontWeight: 400
  lineHeight: 1.5
  letterSpacing: "0.01em"

label-lg:
  fontFamily: "Karla"
  fontSize: "14px"
  fontWeight: 500
  lineHeight: 1.2
  letterSpacing: "0.08em"

label-md:
  fontFamily: "Karla"
  fontSize: "12px"
  fontWeight: 500
  lineHeight: 1.2
  letterSpacing: "0.10em"

label-sm:
  fontFamily: "Karla"
  fontSize: "11px"
  fontWeight: 500
  lineHeight: 1.2
  letterSpacing: "0.08em"

caption:
  fontFamily: "Karla"
  fontSize: "11px"
  fontWeight: 400
  lineHeight: 1.3
  letterSpacing: "0.06em"
```

Large serif typography should feel editorial, calm, sophisticated, and
confident. Karla should provide practical clarity. Use uppercase/tracked
labels sparingly.

## 11. Arabic Typography

Arabic is a first-class language.

Use a modern premium Arabic typeface such as Noto Sans Arabic, IBM Plex
Sans Arabic, or Noto Kufi Arabic, selected to harmonize with Karla.

Do not use decorative Arabic fonts.

## 12. Spacing

``` yaml
xs: "6px"
sm: "16px"
md: "24px"
lg: "48px"
xl: "96px"

space-1: "4px"
space-2: "8px"
space-3: "12px"
space-4: "16px"
space-5: "24px"
space-6: "32px"
space-7: "48px"
space-8: "64px"
space-9: "80px"
space-10: "120px"
space-11: "160px"
space-12: "200px"
```

## 13. Grid

### Desktop

``` yaml
maxWidth: "1440px"
columns: 12
gutter: "24px"
outerMargin: "48px–80px"
```

### Tablet

``` yaml
columns: 8
gutter: "20px"
outerMargin: "32px"
```

### Mobile

``` yaml
columns: 4
gutter: "16px"
outerMargin: "20px"
```

Use CSS Grid wherever appropriate. Use asymmetry deliberately. Do not
make every section a centred text block.

## 14. Layout Philosophy

Prefer:

-   Full-bleed images
-   Large image crops
-   Text/image splits
-   Asymmetric grids
-   Large typography
-   Quiet whitespace
-   Strong vertical rhythm

Avoid repetitive image → heading → paragraph → button layouts throughout
the entire site.

## 15. Shapes

``` yaml
none: "0px"
sm: "2px"
md: "4px"
lg: "8px"
xl: "16px"
full: "9999px"
```

Default: 0px.

Use subtle rounding only where it improves usability. Do not use large
pill-shaped UI as the dominant visual language.

## 16. Buttons

``` yaml
button-primary:
  backgroundColor: "#87562D"
  textColor: "#FFFFFF"
  typography: "label-md"
  rounded: "0px"
  padding: "14px 28px"
  height: "52px"

button-secondary:
  backgroundColor: "transparent"
  textColor: "#87562D"
  border: "1px solid #87562D"
  typography: "label-md"
  rounded: "0px"
  padding: "14px 28px"
  height: "52px"

button-dark:
  backgroundColor: "#171615"
  textColor: "#F7F4ED"
  typography: "label-md"
  rounded: "0px"
  padding: "14px 28px"
  height: "52px"

button-link:
  backgroundColor: "transparent"
  textColor: "#87562D"
  typography: "label-md"
  rounded: "0px"
  padding: "0px"
```

Do not use oversized or pill-shaped buttons as the primary design
language.

## 17. Cards

Use cards only when they provide meaningful grouping.

``` yaml
card:
  backgroundColor: "#F7F4ED"
  textColor: "#2B2A29"
  border: "1px solid #D8CEC0"
  rounded: "4px"
  padding: "24px"
```

Avoid heavy shadows, glossy effects, floating card stacks, excessive
rounding, and gradient cards.

## 18. Inputs

``` yaml
input:
  backgroundColor: "#FCFBF8"
  textColor: "#2B2A29"
  border: "1px solid #D8CEC0"
  typography: "body-sm"
  rounded: "2px"
  padding: "14px 16px"
  minHeight: "48px"
```

Focus states should use a clear border or outline, not a large glow.

## 19. Photography

Photography is one of the primary design elements.

### Food

Use cinematic lighting, strong texture, natural ingredients, seafood
detail, controlled shadows, editorial compositions, and high-quality
plating photography.

Avoid generic stock food imagery, excessively bright commercial
photography, cluttered props, poorly cropped food, and low-resolution
images.

### Restaurant

Show interior architecture, tables, materials, lighting, guests, private
dining, and corporate spaces.

The photography should allow users to imagine themselves at Puli.

## 20. Hero

The hero should be immersive.

Preferred structure:

``` text
Full-width / near full-height image

PULI

CONTEMPORARY INDIAN CUISINE

Short supporting statement

RESERVE A TABLE
```

Navigation should remain quiet.

Do not overload the hero with multiple badges, ratings, four CTAs, large
promotional banners, or decorative graphics.

## 21. Homepage Structure

1.  Hero
2.  Culinary Philosophy
3.  Heritage
4.  Signature Cuisine
5.  The Restaurant
6.  Private Dining
7.  Events
8.  Menu
9.  Social Proof
10. Location
11. Final CTA

The homepage should tell a deliberate story rather than behaving like a
collection of marketing blocks.

## 22. Navigation

Recommended primary navigation:

``` text
MENU
OUR STORY
DINING
EVENTS
GALLERY
```

Primary CTA:

``` text
RESERVE
```

Dining:

``` text
Restaurant
Private Dining
```

Events:

``` text
Conference Hall
Board Rooms
Celebrations
Corporate Events
```

Keep navigation concise.

## 23. Mobile Navigation

Use a refined mobile drawer with the same information hierarchy.

Ensure Arabic reverses the layout correctly.

## 24. Reservation

Reservation is the primary commercial conversion.

Primary CTA:

**RESERVE A TABLE**

On mobile, consider:

``` text
CALL | DIRECTIONS | RESERVE
```

The sticky bar must never obscure important content.

## 25. Menu

The menu should be digital and data-driven.

Potential categories:

-   Breakfast
-   Puli Signatures
-   Seafood
-   Indian
-   Chinese
-   Vegetarian
-   Non-Vegetarian
-   Biryani & Rice
-   Desserts
-   Beverages

Menu items should be stored as structured data and support both English
and Arabic.

Never invent missing prices or menu information.

## 26. Heritage

Treat Puli's culinary heritage as a premium brand asset.

Use strong typography and photography. Avoid long corporate timelines.
Use concise storytelling.

## 27. Private Dining

Treat private dining as a separate premium product.

Communicate capacity, atmosphere, suitable occasions, dining experience,
and enquiry.

Primary CTA:

**PLAN YOUR PRIVATE DINING**

## 28. Events

Present:

-   Corporate Events
-   Conferences
-   Board Meetings
-   Celebrations
-   Family Functions
-   Private Events

Primary CTA:

**PLAN AN EVENT**

Do not hide event enquiries inside the generic contact page.

## 29. Corporate Experience

The site must work for executives and business decision-makers.

Corporate visitors should quickly understand venue capabilities, board
rooms, conference facilities, private dining, group dining, event
capacity, and professional hospitality.

## 30. Arabic / English

English and Arabic are first-class experiences.

Recommended routing:

``` text
/en/
/ar/
```

or the framework-native equivalent.

Use:

``` html
<html lang="en" dir="ltr">
```

for English and:

``` html
<html lang="ar" dir="rtl">
```

for Arabic.

Use logical CSS properties such as `margin-inline`, `padding-inline`,
`inset-inline`, `border-inline`, and `text-align: start`.

## 31. Language Switching

The language switcher should preserve the current page and context,
update direction and document language, update SEO metadata, and support
`hreflang`.

Example:

``` text
EN | العربية
```

Do not duplicate UI components for each language.

## 32. Content Architecture

Keep content separate from components.

``` text
content/
├── en/
│   ├── home
│   ├── menu
│   ├── story
│   ├── dining
│   └── events
│
└── ar/
    ├── home
    ├── menu
    ├── story
    ├── dining
    └── events
```

Frequently changed information should not be buried in components.

Centralize menu, prices, opening hours, contact details, address, event
information, reviews, and social links.

## 33. Component Philosophy

Build reusable components such as:

``` text
Header
MobileNavigation
Footer
Button
SectionHeading
EditorialImage
Hero
RestaurantStory
SignatureDish
MenuCategory
MenuItem
DiningExperience
PrivateDining
EventSpace
Review
ReservationCTA
LocationSection
ReservationForm
EventEnquiryForm
LanguageSwitcher
```

Avoid duplicated markup and giant page components.

## 34. Design Tokens

Expose the system through CSS variables or the framework equivalent.

``` css
:root {
  --puli-brown: #87562D;
  --puli-brown-dark: #633C1F;
  --puli-brown-light: #B8895B;

  --puli-green: #3F6E2A;
  --puli-green-dark: #29491D;
  --puli-green-light: #6F914F;

  --ink: #2B2A29;
  --charcoal: #171615;

  --ivory: #F7F4ED;
  --warm-white: #FCFBF8;
  --sand: #E8DFD2;

  --white: #FFFFFF;
  --muted: #746D65;

  --border: #D8CEC0;
  --border-dark: #403B36;

  --space-xs: 6px;
  --space-sm: 16px;
  --space-md: 24px;
  --space-lg: 48px;
  --space-xl: 96px;
}
```

Do not introduce arbitrary colours when an existing token is
appropriate.

## 35. Elevation

The design is primarily flat.

Use contrast, borders, whitespace, tonal layering, and photography
instead of heavy shadows.

Shadows should be rare.

## 36. Motion

Preferred:

-   Fade
-   Gentle vertical reveal
-   Image scale from 1.00 to 1.03
-   Underline animation
-   Smooth drawer transitions

Avoid bounce, spin, scroll hijacking, excessive parallax, large animated
typography, constant movement, and long loaders.

Respect `prefers-reduced-motion`.

## 37. Responsive Behaviour

The design must work on:

``` text
320px
375px
390px
430px
768px
1024px
1280px
1440px
1920px
2560px
```

There must be no accidental horizontal scrolling, content clipping, or
unreadable typography.

Desktop and mobile layouts may use different compositions where
necessary.

## 38. Accessibility

Target WCAG 2.2 AA where practical.

Implement:

-   Semantic HTML
-   Correct headings
-   Keyboard navigation
-   Visible focus
-   Accessible labels
-   Alt text
-   Adequate contrast
-   44px minimum touch targets
-   Reduced motion
-   Accessible forms
-   Accessible dialogs/drawers
-   Screen-reader support

## 39. Performance

Target:

``` text
LCP < 2.5s
INP < 200ms
CLS < 0.1
```

Use AVIF/WebP, responsive image sources, `srcset`, lazy loading, correct
image dimensions, CDN delivery, minimal JavaScript, and minimal
third-party dependencies.

Do not load huge images unnecessarily.

## 40. SEO

Every page should include:

-   Unique title
-   Meta description
-   Canonical URL
-   Open Graph metadata
-   Appropriate structured data
-   Correct language metadata
-   `hreflang`
-   Semantic headings
-   Descriptive alt text

Target real customer intent such as Indian restaurant in Jubail, seafood
restaurant in Jubail, Mangalorean cuisine in Jubail, private dining in
Jubail, corporate events in Jubail, and conference venue in Jubail.

Never keyword-stuff.

Never fabricate reviews, ratings, awards, or statistics.

## 41. Content Tone

Copy should be concise, sophisticated, specific, warm, confident, and
human.

Avoid generic claims such as "The most luxurious", "Unforgettable
experience", "World-class", "Best restaurant", and "Exquisite in every
bite".

Prefer specific statements.

Example:

> A contemporary dining experience shaped by the flavours and culinary
> heritage of Mangalore.

## 42. Anti-Patterns

Never introduce:

-   Generic restaurant templates
-   Excessive gold
-   Gold gradients
-   Glassmorphism
-   Neumorphism
-   Bright gradients
-   Excessive shadows
-   Huge rounded cards
-   Pill-shaped navigation everywhere
-   Decorative Indian patterns
-   Mandalas
-   Paisley borders
-   Excessive leaves
-   Emoji
-   Cartoon icons
-   Stock photography
-   Repetitive 3-column card grids
-   Excessive carousels
-   Fake statistics
-   Fake reviews
-   Excessive badges
-   Giant promotional banners
-   Excessive animation
-   Unnecessary popups

## 43. Luxury Test

Before approving a section, ask:

-   Can this be simplified?
-   Can one image replace multiple UI elements?
-   Can one sentence replace a paragraph?
-   Does this look like a generic component library?
-   Does the section strengthen Puli's identity?
-   Does it feel appropriate for an executive customer?

If the answer is no, refine or simplify.

## 44. Final Experience

The finished website should feel like Puli's actual brand identity
combined with quiet luxury hospitality and editorial contemporary
design.

It should be appropriate for:

-   An executive dinner
-   A private business meeting
-   A premium family gathering
-   A corporate event
-   An intimate private dining experience

The design should not try to convince users that Puli is premium.

It should make premium quality feel obvious.

## 45. Source of Truth

This document is the authoritative design system for the Puli website
redesign.

When uncertain:

1.  Preserve Puli's brand identity.
2.  Prefer simplicity.
3.  Prefer photography over decoration.
4.  Prefer whitespace over unnecessary UI.
5.  Prefer reusable components.
6.  Prefer data-driven content.
7.  Prefer performance.
8.  Prefer accessibility.
9.  Prefer usability.
10. Choose the quieter and more refined solution.

## 46. Final Design Statement

> **Puli is not a restaurant website with luxury decoration.**
>
> **Puli is a contemporary hospitality brand expressed through food,
> place, heritage, and service.**

**Brand Brown. Natural Green. Warm Ivory. Deep Charcoal. Editorial
Typography. Exceptional Photography. Precise UX.**

That is the Puli digital design language.
