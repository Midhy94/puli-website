# PULI --- Contemporary Luxury Design System

**Version:** 1.0\
**Brand:** Puli Contemporary Multi Cuisine\
**Design Direction:** Quiet Luxury Hospitality\
**Primary Audience:** Affluent diners, executives, business owners,
corporate guests, private-event customers, and premium hospitality
customers in Al Jubail, Saudi Arabia.

------------------------------------------------------------------------

## 1. Design Intent

Puli must not look like a conventional Indian restaurant website, a
generic luxury template, or a decorative "royal Indian" brand.

The digital experience should feel like a **high-end hospitality
brand**: restrained, editorial, cinematic, architectural, warm, and
exceptionally well considered.

The design should communicate:

-   Premium hospitality
-   Culinary confidence
-   Mangalorean heritage
-   Contemporary Indian cuisine
-   Seafood expertise
-   Established culinary credibility
-   Private dining
-   Corporate hospitality
-   Exclusivity without arrogance

### Core principle

> **Luxury is achieved through restraint, not decoration.**

The website should never look busy simply because the brand is premium.

Use fewer elements, better photography, stronger typography, more
whitespace, and precise interaction design.

------------------------------------------------------------------------

# 2. Brand Identity

The existing Puli logo is the primary visual reference.

The logo contains three important visual signals:

1.  **Warm Puli Brown** --- the dominant hand-drawn wordmark.
2.  **Natural Puli Green** --- the botanical/leaf detail.
3.  **Charcoal** --- the supporting typography.

The website must preserve these brand signals rather than replacing them
with a generic black-and-gold luxury palette.

### Brand personality

Puli should feel:

-   Sophisticated
-   Established
-   Warm
-   Confident
-   Cultured
-   Contemporary
-   Culinary
-   Exclusive
-   Authentic
-   Professional

Puli should **not** feel:

-   Loud
-   Flashy
-   Overly traditional
-   Corporate
-   Cheap
-   Trendy for the sake of being trendy
-   "Indian wedding" themed
-   Generic five-star hotel
-   Like a SaaS product
-   Like a restaurant template

------------------------------------------------------------------------

# 3. Visual Reference Direction

The visual quality should be inspired by the restraint and art direction
found in high-end hospitality and fine-dining experiences such as:

-   Aman --- luxury hospitality and restraint
-   Eleven Madison Park --- fine-dining editorial presentation
-   Noma --- photography and editorial storytelling
-   Atomix --- premium Asian culinary identity
-   Alinea --- immersive experience

These are **directional references only**.

Do not clone their layouts, branding, typography, content, or visual
identity.

The final result must remain unmistakably **Puli**.

------------------------------------------------------------------------

# 4. Core Design Philosophy

The design system follows six principles.

## 4.1 Restraint

Do not fill every available space.

Allow photography, typography, and whitespace to create the premium
feeling.

## 4.2 Editorial Composition

Avoid repetitive card grids.

Use:

-   Full-bleed photography
-   Asymmetrical compositions
-   Large editorial headlines
-   Vertical rhythm
-   Intentional cropping
-   Strong image-to-text relationships

## 4.3 Hospitality First

Every interaction must feel calm, effortless, and welcoming.

Users should never struggle to:

-   View the menu
-   Reserve a table
-   Call the restaurant
-   Find the location
-   Request private dining
-   Enquire about events

## 4.4 Brand Before Decoration

The Puli logo, photography, typography, and colour palette should create
the identity.

Do not rely on decorative Indian patterns, ornamental borders, excessive
gold, or visual gimmicks.

## 4.5 Confidence

Avoid excessive marketing language.

Do not repeatedly use words such as:

-   Luxury
-   Premium
-   Exquisite
-   Best
-   Unforgettable
-   Authentic
-   World-class

Let the design and experience communicate quality.

## 4.6 Timelessness

The website should look sophisticated today and still feel appropriate
several years from now.

Avoid short-lived UI trends.

------------------------------------------------------------------------

# 5. Colour System

The colour system is derived directly from the Puli logo.

## 5.1 Brand Colours

``` yaml
brand-primary: "#87562D"
brand-primary-dark: "#633C1F"
brand-primary-light: "#B8895B"

brand-secondary: "#3F6E2A"
brand-secondary-dark: "#29491D"
brand-secondary-light: "#6F914F"
```

### Puli Brown --- #87562D

The primary brand signature.

Use for:

-   Primary CTA
-   Selected navigation states
-   Key links
-   Brand accents
-   Small editorial details
-   Active states
-   Underlines
-   Important interface moments

Do not use it as the dominant page background.

### Puli Green --- #3F6E2A

Derived from the botanical element in the logo.

Use sparingly for:

-   Botanical references
-   Ingredient-related content
-   Culinary/natural accents
-   Secondary highlights
-   Small decorative details

Green must remain secondary to the brown.

------------------------------------------------------------------------

# 6. Neutral Palette

``` yaml
ink: "#2B2A29"
charcoal: "#171615"

ivory: "#F7F4ED"
warm-white: "#FCFBF8"
sand: "#E8DFD2"

white: "#FFFFFF"

border: "#D8CEC0"
border-dark: "#403B36"
muted: "#746D65"

error: "#A63D32"
overlay: "#00000080"
```

## Colour Usage Ratio

Use approximately:

-   **60%** Warm White / Ivory
-   **25%** Charcoal / Dark surfaces
-   **10%** Puli Brown
-   **5%** Puli Green

This is a guideline, not a literal page-by-page calculation.

The interface should never become predominantly brown or green.

------------------------------------------------------------------------

# 7. Strict Colour Rules

### DO

-   Use ivory instead of cold white for editorial sections.
-   Use charcoal for sophisticated dark sections.
-   Use Puli Brown for important actions.
-   Use Puli Green very selectively.
-   Use photography as a major source of colour.
-   Maintain strong contrast.

### DO NOT

-   Use generic gold.
-   Use metallic gradients.
-   Use bright orange.
-   Use bright yellow.
-   Use royal purple.
-   Use saturated red except for errors.
-   Use blue unless required for a third-party system.
-   Use green as the dominant CTA colour.
-   Use brown for every heading and button.
-   Create brown/gold decorative Indian styling.
-   Use colour merely to make empty areas feel "designed."

------------------------------------------------------------------------

# 8. Typography

Typography must feel editorial and sophisticated.

## Preferred pairing

### Display / Editorial

**Reckless Neue** or the closest licensed equivalent.

### Interface / Body

Use a highly legible modern grotesk such as:

**Neue Haas Grotesk**, **Helvetica Neue**, or a close licensed
equivalent.

If these fonts are unavailable, use:

**Manrope** for interface/body text.

Do not use more than two primary type families.

------------------------------------------------------------------------

# 9. Typography Hierarchy

``` yaml
display-xl:
  fontSize: "clamp(64px, 8vw, 128px)"
  lineHeight: "0.92"
  fontWeight: 400
  letterSpacing: "-0.045em"

display-lg:
  fontSize: "clamp(52px, 6vw, 96px)"
  lineHeight: "0.95"
  fontWeight: 400
  letterSpacing: "-0.04em"

display-md:
  fontSize: "clamp(40px, 4.5vw, 72px)"
  lineHeight: "1.0"
  fontWeight: 400
  letterSpacing: "-0.035em"

heading-xl:
  fontSize: "48px"
  lineHeight: "1.05"
  fontWeight: 400
  letterSpacing: "-0.025em"

heading-lg:
  fontSize: "40px"
  lineHeight: "1.08"
  fontWeight: 400
  letterSpacing: "-0.02em"

heading-md:
  fontSize: "30px"
  lineHeight: "1.15"
  fontWeight: 400
  letterSpacing: "-0.015em"

heading-sm:
  fontSize: "24px"
  lineHeight: "1.2"
  fontWeight: 400
  letterSpacing: "0em"

body-lg:
  fontSize: "18px"
  lineHeight: "1.65"
  fontWeight: 400

body-md:
  fontSize: "16px"
  lineHeight: "1.6"
  fontWeight: 400

body-sm:
  fontSize: "14px"
  lineHeight: "1.5"
  fontWeight: 400

label-lg:
  fontSize: "14px"
  lineHeight: "1.2"
  fontWeight: 500
  letterSpacing: "0.08em"

label-md:
  fontSize: "12px"
  lineHeight: "1.2"
  fontWeight: 500
  letterSpacing: "0.10em"

caption:
  fontSize: "12px"
  lineHeight: "1.4"
  fontWeight: 400
```

------------------------------------------------------------------------

# 10. Typography Rules

Large display typography should feel **quiet and expensive**, never
loud.

Use serif typography for:

-   Hero statements
-   Heritage moments
-   Editorial headlines
-   Signature dish storytelling
-   Major section introductions

Use sans-serif typography for:

-   Navigation
-   Buttons
-   Forms
-   Menu metadata
-   Prices
-   Practical information
-   Booking UI
-   Event forms

Do not use serif typography for dense interface controls simply because
it looks elegant.

------------------------------------------------------------------------

# 11. Layout System

Use a responsive editorial grid.

## Desktop

``` yaml
maxWidth: "1440px"
columns: 12
gutter: "24px"
outerMargin: "48px–80px"
```

## Tablet

``` yaml
columns: 8
gutter: "20px"
outerMargin: "32px"
```

## Mobile

``` yaml
columns: 4
gutter: "16px"
outerMargin: "20px"
```

The grid should be flexible rather than visually obvious.

Do not make every component appear inside a centred card.

------------------------------------------------------------------------

# 12. Spacing System

``` yaml
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

Large editorial sections should use generous spacing.

Premium does not mean "everything is huge."

Use hierarchy:

-   Tight spacing inside components
-   Moderate spacing between related elements
-   Large spacing between concepts
-   Very large spacing around major editorial moments

------------------------------------------------------------------------

# 13. Containers

Avoid excessive nested containers.

Preferred structure:

``` text
Full-width section
    ↓
12-column editorial grid
    ↓
Image / typography / content
```

Avoid:

``` text
section
  → container
    → card
      → inner-card
        → content-box
```

This creates the typical AI-generated website aesthetic.

------------------------------------------------------------------------

# 14. Border Radius

The visual language is architectural and refined.

``` yaml
none: "0px"
sm: "2px"
md: "4px"
lg: "8px"
full: "9999px"
```

Default:

**0px**

Use small radii only when functionally useful.

Do not use:

-   20px cards
-   24px cards
-   pill-shaped navigation
-   pill-shaped buttons everywhere
-   excessive rounded UI

------------------------------------------------------------------------

# 15. Photography Direction

Photography is one of the primary design components.

## Food Photography

Images should feel:

-   Cinematic
-   Editorial
-   Tactile
-   Sophisticated
-   Natural
-   High contrast
-   Carefully lit
-   Ingredient-focused

Capture:

-   Seafood texture
-   Charred surfaces
-   Sauce
-   Steam
-   Fresh ingredients
-   Hands and preparation where appropriate
-   Plating
-   Detail shots

Avoid generic stock photography.

Avoid overly bright commercial food photography.

Avoid excessive props.

------------------------------------------------------------------------

# 16. Restaurant Photography

Show:

-   Architecture
-   Materials
-   Lighting
-   Tables
-   Dining atmosphere
-   Guests interacting naturally
-   Private dining
-   Corporate spaces

The customer should be able to imagine themselves inside Puli.

------------------------------------------------------------------------

# 17. Hero Experience

The homepage hero should be cinematic.

Preferred structure:

``` text
Full viewport image/video

PULI
CONTEMPORARY INDIAN CUISINE

Short supporting statement

RESERVE A TABLE
```

Navigation should remain visually quiet.

Do not place:

-   Multiple promotional banners
-   Four CTA buttons
-   Large badge collections
-   Rating badges everywhere
-   Decorative shapes
-   Excessive text

The hero should immediately communicate:

**Puli + food + atmosphere + premium positioning.**

------------------------------------------------------------------------

# 18. Navigation

## Desktop

Recommended:

``` text
PULI

Menu
Our Story
Dining
Events
Gallery

                         Reserve
```

Keep the navigation minimal.

The primary CTA should remain visible.

## Mobile

``` text
PULI                         MENU
```

Navigation drawer:

``` text
MENU

OUR STORY

DINING
  Restaurant
  Private Dining

EVENTS
  Conference Hall
  Board Rooms
  Celebrations

GALLERY

CONTACT

────────────

RESERVE A TABLE
```

Do not overcrowd the mobile drawer.

------------------------------------------------------------------------

# 19. Reservation UX

Reservation is the most important commercial action.

It must always be easy to reach.

Primary CTA:

**RESERVE A TABLE**

Secondary actions:

-   Call
-   Directions
-   WhatsApp if officially supported

On mobile, consider a fixed bottom action bar:

``` text
CALL    DIRECTIONS    RESERVE
```

Do not hide booking behind several layers.

------------------------------------------------------------------------

# 20. Homepage Architecture

The homepage should follow this high-level narrative.

## 01 --- Hero

Puli identity + cinematic food/restaurant imagery.

## 02 --- Culinary Philosophy

Short editorial statement.

## 03 --- Heritage

Large **1977** moment.

Explain the culinary connection and heritage behind Puli.

## 04 --- Signature Cuisine

Feature selected signature dishes using editorial photography.

## 05 --- The Restaurant

Show the physical dining environment.

## 06 --- Private Dining

Present private dining as a premium hospitality experience.

## 07 --- Events

Present corporate events, celebrations, conference facilities, and board
rooms.

## 08 --- Menu

Provide a direct path to the full menu.

## 09 --- Social Proof

Use verified reviews and trust signals.

## 10 --- Location

Address, hours, phone, and directions.

## 11 --- Final Reservation CTA

End with a calm, high-impact reservation moment.

------------------------------------------------------------------------

# 21. Menu Experience

The menu is a primary product experience.

Categories should be easy to scan.

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

Do not present the menu as a PDF unless there is a business requirement.

Prefer a responsive digital menu.

## Menu item hierarchy

``` text
DISH NAME

Short description

Dietary information

Price
```

Use photography selectively.

Not every dish needs an image.

------------------------------------------------------------------------

# 22. Signature Dish Presentation

Do not use a repetitive 3-column card grid for every dish.

Use:

-   One dominant feature
-   Secondary dishes
-   Editorial image crops
-   Large typography
-   Short descriptions
-   Subtle interaction

The goal is to make signature dishes feel curated.

------------------------------------------------------------------------

# 23. Heritage Section

Puli's culinary history should be treated as a premium brand asset.

Use a strong visual moment:

``` text
1977
```

Then concise storytelling.

Avoid a long "About Us" wall of text.

The story should communicate:

-   Culinary heritage
-   Mangalorean roots
-   Mahesh Lunch Home connection
-   Evolution toward Puli
-   Contemporary positioning

The heritage section should feel like a luxury brand story, not a
corporate timeline.

------------------------------------------------------------------------

# 24. Private Dining

Private dining is a separate conversion opportunity.

Present it as:

**PRIVATE DINING**

A more intimate Puli experience.

Communicate:

-   Capacity
-   Atmosphere
-   Suitable occasions
-   Dining experience
-   Enquiry CTA

Primary action:

**PLAN YOUR PRIVATE DINING**

------------------------------------------------------------------------

# 25. Events

Events should be positioned as a premium hospitality service.

Relevant categories:

-   Corporate Events
-   Conferences
-   Board Meetings
-   Celebrations
-   Family Gatherings
-   Private Functions

Present available spaces clearly.

Use capacity information where verified.

Primary CTA:

**PLAN AN EVENT**

Do not bury event enquiries inside the generic contact page.

------------------------------------------------------------------------

# 26. Corporate Audience

The website must work for executives and business decision-makers.

Corporate visitors should immediately understand:

-   Venue capability
-   Board rooms
-   Conference facilities
-   Private dining
-   Group dining
-   Event capacity
-   Professional hospitality

The tone should be sophisticated and direct.

Avoid casual restaurant language.

------------------------------------------------------------------------

# 27. Cards

Cards should be used sparingly.

Use cards when grouping genuinely related information.

Do not turn every section into cards.

Preferred:

-   Flat surfaces
-   Thin borders
-   Strong typography
-   Photography-led layouts

Avoid:

-   Large shadows
-   Floating glass cards
-   Gradient cards
-   Excessive radius
-   Decorative icons

------------------------------------------------------------------------

# 28. Buttons

Buttons must be elegant and compact.

``` yaml
button-primary:
  background: "#87562D"
  color: "#FFFFFF"
  height: "52px"
  padding: "14px 28px"
  radius: "0px"

button-secondary:
  background: "transparent"
  color: "#87562D"
  border: "1px solid #87562D"
  height: "52px"
  padding: "14px 28px"
  radius: "0px"

button-dark:
  background: "#171615"
  color: "#F7F4ED"
  height: "52px"
  padding: "14px 28px"
  radius: "0px"
```

Buttons should never feel oversized.

------------------------------------------------------------------------

# 29. Forms

Forms should feel like part of the hospitality experience.

Use:

-   Clear labels
-   Large touch targets
-   Minimal borders
-   Strong focus states
-   Simple validation
-   Short forms

Avoid:

-   Huge boxed form cards
-   Excessive fields
-   Decorative form backgrounds
-   Tiny inputs

Event enquiry forms may contain more fields than reservation forms.

------------------------------------------------------------------------

# 30. Iconography

Use a single consistent icon family.

Icons should be:

-   Thin
-   Minimal
-   Geometric
-   Quiet

Avoid:

-   Emoji
-   Cartoon icons
-   Thick colourful icons
-   Mixed icon families
-   Decorative Indian illustrations unless specifically art-directed

------------------------------------------------------------------------

# 31. Motion System

Motion must communicate refinement.

Preferred:

-   Fade
-   Slow reveal
-   Subtle vertical movement
-   Image scale from 1.00 to 1.03
-   Underline animation
-   Gentle navigation transitions

Avoid:

-   Bounce
-   Elastic animation
-   Excessive parallax
-   Scroll hijacking
-   Large transforms
-   Long page loaders
-   Constant movement

Respect:

`prefers-reduced-motion`

------------------------------------------------------------------------

# 32. Image Transitions

Images may use:

``` text
opacity: 0 → 1
transform: scale(1.02) → scale(1)
```

Keep transitions approximately:

``` text
500ms–900ms
```

Use easing that feels smooth and natural.

Never delay content visibility unnecessarily.

------------------------------------------------------------------------

# 33. Responsive Design

Mobile is a first-class experience.

Do not simply shrink the desktop layout.

## Mobile priorities

1.  Reserve
2.  Menu
3.  Call
4.  Directions
5.  Events
6.  Story

Typography should scale fluidly.

Images should remain high quality but optimized.

Editorial compositions may change significantly on mobile.

------------------------------------------------------------------------

# 34. Mobile Navigation

Mobile navigation should be simple and premium.

Use:

-   Full-screen or near-full-screen drawer
-   Large typography
-   Generous spacing
-   Minimal icons
-   Strong reservation CTA

Do not create a dense mega-menu.

------------------------------------------------------------------------

# 35. Accessibility

Target WCAG 2.2 AA where practical.

Requirements:

-   Semantic HTML
-   Correct heading hierarchy
-   Keyboard navigation
-   Visible focus states
-   Accessible labels
-   Alt text
-   Adequate contrast
-   Touch targets of at least approximately 44px
-   Reduced-motion support
-   Form error messaging
-   Screen-reader-friendly navigation

Luxury must never come at the expense of usability.

------------------------------------------------------------------------

# 36. Performance

The visual design depends heavily on imagery, so performance is
critical.

Target:

``` text
LCP < 2.5s
INP < 200ms
CLS < 0.1
```

Use:

-   AVIF/WebP
-   Responsive image sources
-   `srcset`
-   Lazy loading
-   CDN delivery
-   Correct image dimensions
-   Image compression
-   Minimal JavaScript
-   Preload only critical assets

The hero image is the most important performance asset.

Do not load multiple huge images immediately on page load.

------------------------------------------------------------------------

# 37. SEO

Build around actual customer intent.

Important topics include:

-   Indian restaurant in Jubail
-   Seafood restaurant in Jubail
-   Mangalorean cuisine in Jubail
-   Private dining in Jubail
-   Corporate events in Jubail
-   Conference venue in Jubail
-   Restaurant for celebrations in Jubail

Use:

-   Semantic HTML
-   Unique page titles
-   Meta descriptions
-   Open Graph metadata
-   Structured data
-   Restaurant schema where appropriate
-   Location information
-   Descriptive image alt text

SEO content must remain natural.

Do not keyword-stuff.

------------------------------------------------------------------------

# 38. Content Tone

Puli's copy should be:

-   Short
-   Confident
-   Sophisticated
-   Specific
-   Warm
-   Human

Avoid exaggerated advertising.

### Prefer

> A culinary tradition shaped by the coast of Mangalore.

### Avoid

> Experience the most exquisite and unforgettable premium Indian
> culinary journey in Jubail.

Specificity is more premium than exaggeration.

------------------------------------------------------------------------

# 39. Editorial Content Rules

Use short paragraphs.

Prefer:

-   One strong statement
-   One supporting paragraph
-   One action

Avoid:

-   Large text walls
-   Repeated brand claims
-   Generic marketing adjectives
-   Multiple paragraphs saying the same thing

------------------------------------------------------------------------

# 40. Dark Sections

Dark sections should use:

``` text
Background: #171615
Primary text: #F7F4ED
Secondary text: #C9C1B7
Accent: #87562D
```

Do not automatically make every section dark.

Use dark sections strategically for:

-   Hero
-   Heritage
-   Signature cuisine
-   Final CTA
-   Selected editorial moments

Light sections provide visual breathing room.

------------------------------------------------------------------------

# 41. Light Sections

Primary light background:

``` text
#F7F4ED
```

Secondary:

``` text
#FCFBF8
```

Use:

``` text
Text: #2B2A29
Secondary text: #746D65
Accent: #87562D
```

Avoid pure white everywhere.

The warm neutral background should make the website feel tactile and
hospitality-oriented.

------------------------------------------------------------------------

# 42. Decorative Language

Decorative elements must be extremely restrained.

Possible references:

-   Organic botanical forms
-   Ingredient details
-   Subtle coastal textures
-   Material-inspired textures

Do not use:

-   Mandala patterns
-   Paisley borders
-   Ornate frames
-   Excessive leaves
-   Gold ornaments
-   Decorative Indian motifs across every section

Cultural identity should be communicated through **food, story,
photography, and subtle art direction**, not visual clichés.

------------------------------------------------------------------------

# 43. Brand Logo Usage

The Puli logo must retain its original proportions and colours.

Do not:

-   Recolour the logo arbitrarily
-   Add effects
-   Add shadows
-   Place it inside unnecessary containers
-   Stretch it
-   distort it
-   apply gradients
-   place it over visually noisy photography without sufficient contrast

Use sufficient clear space around the logo.

------------------------------------------------------------------------

# 44. Component Architecture

Components should be reusable and composable.

Recommended categories:

``` text
/layout
  Header
  Footer
  Container
  Section

/navigation
  DesktopNav
  MobileNav
  Breadcrumbs

/typography
  Display
  Heading
  Body
  Label

/media
  Image
  EditorialImage
  ImageReveal
  VideoHero

/restaurant
  Dish
  MenuCategory
  SignatureDish
  DiningExperience

/events
  EventSpace
  EventEnquiry

/forms
  ReservationForm
  EventForm
  ContactForm

/ui
  Button
  Link
  Divider
  Modal
  Drawer
```

Avoid creating components for every tiny visual element.

------------------------------------------------------------------------

# 45. Technical Design Tokens

Expose design tokens as CSS variables.

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

  --border: #D8CEC0;
  --border-dark: #403B36;
  --muted: #746D65;

  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 24px;
  --space-6: 32px;
  --space-7: 48px;
  --space-8: 64px;
  --space-9: 80px;
  --space-10: 120px;
  --space-11: 160px;
  --space-12: 200px;
}
```

No arbitrary colours should be introduced without a clear reason.

No arbitrary spacing values should be introduced when an existing token
is suitable.

------------------------------------------------------------------------

# 46. Design Anti-Patterns

The following are explicitly prohibited.

## Visual

-   Generic luxury restaurant template
-   Excessive gold
-   Gold gradients
-   Glassmorphism
-   Neumorphism
-   Bright gradients
-   Excessive shadows
-   Excessive rounded cards
-   Giant pills
-   Excessive borders
-   Excessive decorative shapes
-   Stock imagery
-   Emoji
-   Cartoon graphics
-   Overly bright colours

## Layout

-   Repetitive 3-column card grids everywhere
-   Every section centred
-   Every section using the same layout
-   Excessive containers
-   Dense content blocks
-   Excessive carousels
-   Full-page sliders
-   Auto-advancing content that users cannot control

## Copy

-   Generic luxury claims
-   Keyword stuffing
-   Long marketing paragraphs
-   Repeated "exquisite", "premium", "luxurious", "unforgettable"
-   Fake awards or reviews
-   Unverified statistics

## Motion

-   Bounce
-   Spin
-   Scroll-jacking
-   Excessive parallax
-   Long loading animations
-   Continuous animation

------------------------------------------------------------------------

# 47. The "Luxury Test"

Before approving any section, ask:

### Can this section be simplified?

If yes, simplify it.

### Can one image replace three UI elements?

If yes, use the image.

### Can one sentence replace a paragraph?

If yes, use the sentence.

### Can whitespace improve the composition?

If yes, add whitespace.

### Does the component look like it came from a generic UI library?

If yes, redesign it.

### Does the page feel like a premium hospitality brand?

If no, remove rather than add.

------------------------------------------------------------------------

# 48. Final Visual Benchmark

The final experience should feel:

**Quiet.**

**Editorial.**

**Cinematic.**

**Architectural.**

**Warm.**

**Confident.**

**Highly intentional.**

It should look appropriate for:

-   An executive dinner
-   A private business meeting
-   A high-end family celebration
-   A corporate event
-   An intimate private dining experience

The customer should feel that Puli is **established, selective, and
worth visiting** before they ever read the menu.

------------------------------------------------------------------------

# 49. Final Design Statement

> **Puli is not a restaurant website with luxury decoration.**
>
> **Puli is a luxury hospitality experience expressed through a
> restaurant brand.**

The design should therefore rely on:

**Puli's real identity + exceptional photography + editorial
typography + restrained colour + precise spacing + effortless UX.**

The goal is not to make the website look expensive.

The goal is to make the customer **feel the value of Puli**.

------------------------------------------------------------------------

# 50. Implementation Priority

When design decisions conflict, use this order:

1.  **Usability**
2.  **Brand authenticity**
3.  **Content clarity**
4.  **Conversion**
5.  **Performance**
6.  **Accessibility**
7.  **Visual refinement**
8.  **Decorative detail**

Never sacrifice usability for visual experimentation.

Never sacrifice performance for animation.

Never sacrifice brand identity for trendiness.

Never sacrifice clarity for minimalism.

------------------------------------------------------------------------

# 51. Source of Truth

This document is the authoritative visual design system for the Puli
website redesign.

Any AI coding or design agent must treat this document as the primary
design constraint.

When making implementation decisions:

1.  Follow the brand colour system.
2.  Follow the typography system.
3.  Follow the spacing system.
4.  Follow the layout principles.
5.  Follow the photography direction.
6.  Follow the component rules.
7.  Follow the anti-patterns.
8.  Preserve the Puli brand identity.
9.  Prioritize premium hospitality UX.
10. Do not introduce visual trends that conflict with this system.

**When uncertain, choose the simpler, quieter, more refined solution.**
