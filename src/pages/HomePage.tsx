import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { Button } from '../components/ui/Button';
import { CtaLink } from '../components/ui/CtaLink';
import { SectionHeader } from '../components/ui/SectionHeader';
import { ImageReveal } from '../components/ui/ImageReveal';
import { menuItems } from '../data/menuData';
import { spacesData } from '../data/spacesData';
import { restaurantInfo } from '../data/restaurantInfo';
import { Clock, MapPin, Phone, ArrowDown } from 'lucide-react';

interface HomePageProps {
  onNavigate: (path: string) => void;
  onOpenReserve: () => void;
  onOpenEventInquire: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onOpenReserve,
  onOpenEventInquire
}) => {
  const { locale, t } = useLanguage();
  const prefix = locale === 'ar' ? '/ar' : '/en';

  const diningSpaces = spacesData.filter((s) => s.type === 'dining');
  const eventSpaces = spacesData.filter((s) => s.type !== 'dining');

  return (
    <div className="home-page">
      {/* =========================================================================
          SECTION 01: CINEMATIC HERO EXPERIENCE (Supreme Luxury inspired)
          ========================================================================= */}
      <section
        className="hero-section"
        style={{
          position: 'relative',
          height: '100vh',
          minHeight: '720px',
          maxHeight: '960px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'var(--charcoal)',
          color: 'var(--ivory)',
          overflow: 'hidden'
        }}
      >
        {/* Background Image with Cinematic Overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: 'url(/assets/images/hero.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.55,
            transform: 'scale(1.02)',
            transition: 'transform 2s ease'
          }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to bottom, rgba(14,9,2,0.4) 0%, rgba(14,9,2,0.7) 100%)'
          }}
        />

        {/* Hero Content */}
        <div
          className="container"
          style={{
            position: 'relative',
            zIndex: 10,
            textAlign: 'center',
            maxWidth: '880px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '24px'
          }}
        >
          <div
            className="overline animate-fade-in"
            style={{
              color: 'var(--puli-brown-light)',
              letterSpacing: '3px'
            }}
          >
            {t.hero.overline}
          </div>

          <h1
            className="headline-display animate-fade-in"
            style={{
              color: 'var(--ivory)',
              textShadow: '0 2px 20px rgba(0,0,0,0.5)'
            }}
          >
            {t.hero.title}
          </h1>

          <p
            className="body-editorial animate-fade-in-delayed"
            style={{
              color: 'rgba(247, 244, 237, 0.9)',
              maxWidth: '680px',
              marginInline: 'auto'
            }}
          >
            {t.hero.subtitle}
          </p>

          <div
            className="animate-fade-in-delayed"
            style={{
              display: 'flex',
              gap: '16px',
              flexWrap: 'wrap',
              justifyContent: 'center',
              marginTop: '12px'
            }}
          >
            <Button variant="primary" size="lg" onClick={onOpenReserve}>
              {t.hero.ctaPrimary}
            </Button>
            <Button
              variant="light"
              size="lg"
              onClick={() => window.open(restaurantInfo.menuUrl, '_blank', 'noopener,noreferrer')}
            >
              {t.hero.ctaSecondary}
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div
          style={{
            position: 'absolute',
            bottom: '36px',
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 10,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '8px',
            color: 'var(--muted-light)'
          }}
        >
          <span className="caption" style={{ letterSpacing: '2px', textTransform: 'uppercase' }}>
            {t.hero.scrollText}
          </span>
          <ArrowDown size={14} />
        </div>
      </section>

      {/* =========================================================================
          SECTION 02: CULINARY STATEMENT & PHILOSOPHY (Asymmetric split)
          ========================================================================= */}
      <section className="section bg-ivory">
        <div className="container">
          <div className="grid-split-60-40">
            <div>
              <div className="overline" style={{ color: 'var(--puli-brown)', marginBottom: '16px' }}>
                {t.statement.overline}
              </div>
              <blockquote
                className="headline-md font-serif"
                style={{
                  color: 'var(--ink)',
                  marginBottom: '28px',
                  fontStyle: 'italic',
                  lineHeight: 1.25
                }}
              >
                "{t.statement.quote}"
              </blockquote>
              <p
                className="body-lg"
                style={{
                  color: 'var(--muted)',
                  marginBottom: '32px',
                  lineHeight: 1.7
                }}
              >
                {t.statement.body}
              </p>
              <CtaLink
                label={t.statement.exploreStory}
                onClick={() => onNavigate(`${prefix}/our-story`)}
                variant="brown"
              />
            </div>

            <div style={{ position: 'relative' }}>
              <ImageReveal
                src="/assets/images/heritage-craft.jpg"
                alt="Artisanal spice craft"
                aspectRatio="4/5"
                caption={locale === 'ar' ? 'تحميص التوابل الساحلية الطازجة يومياً' : 'Daily artisanal roasting of whole coastal spices.'}
              />
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 03: HERITAGE & CRAFTSMANSHIP (Dark Cinematic Editorial)
          ========================================================================= */}
      <section className="section bg-charcoal">
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '60px',
              alignItems: 'center',
              marginBottom: '60px'
            }}
            className="heritage-grid"
          >
            <div>
              <div className="overline" style={{ color: 'var(--puli-brown-light)', marginBottom: '16px' }}>
                {t.heritage.overline}
              </div>
              <h2 className="headline-lg" style={{ color: 'var(--ivory)', marginBottom: '24px' }}>
                {t.heritage.title}
              </h2>
              <p className="body-lg" style={{ color: 'var(--muted-light)', lineHeight: 1.7 }}>
                {t.heritage.description}
              </p>
            </div>

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '24px',
                borderInlineStart: '1px solid rgba(255, 255, 255, 0.1)',
                paddingInlineStart: '32px'
              }}
            >
              {t.heritage.keyPoints.map((point: { number: string; title: string; text: string }, idx: number) => (
                <div key={idx} style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                  <span
                    className="font-serif"
                    style={{
                      fontSize: '24px',
                      color: 'var(--puli-brown-light)',
                      fontWeight: 600
                    }}
                  >
                    {point.number}
                  </span>
                  <div>
                    <h3
                      className="font-utility"
                      style={{
                        fontSize: '16px',
                        fontWeight: 600,
                        color: 'var(--ivory)',
                        marginBottom: '6px'
                      }}
                    >
                      {point.title}
                    </h3>
                    <p className="body-sm" style={{ color: 'var(--muted-light)' }}>
                      {point.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 04 & 05: SIGNATURE CUISINE & EDITORIAL FOOD SEQUENCE
          ========================================================================= */}
      <section className="section bg-warm-white">
        <div className="container">
          <SectionHeader
            overline={t.cuisine.overline}
            title={t.cuisine.title}
            description={t.cuisine.description}
          />

          {/* Dish 1: Butter Pepper Garlic Crab */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1.3fr 1fr',
              gap: '60px',
              alignItems: 'center',
              marginBottom: '80px'
            }}
            className="dish-feature-row"
          >
            <ImageReveal
              src="/assets/images/dish-crab.jpg"
              alt="Butter Pepper Garlic Mud Crab"
              aspectRatio="16/10"
            />
            <div>
              <span className="overline" style={{ color: 'var(--puli-brown)', marginBottom: '8px', display: 'block' }}>
                {locale === 'ar' ? 'الطبق المميز الأول' : 'SIGNATURE 01'}
              </span>
              <h3 className="headline-md" style={{ color: 'var(--ink)', marginBottom: '16px' }}>
                {menuItems[0].name[locale]}
              </h3>
              <p className="body-lg" style={{ color: 'var(--muted)', marginBottom: '24px', lineHeight: 1.65 }}>
                {menuItems[0].description[locale]}
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
                <span className="title-serif" style={{ color: 'var(--puli-brown)', fontWeight: 600 }}>
                  {menuItems[0].price} {menuItems[0].currency[locale]}
                </span>
                <CtaLink
                  label={locale === 'ar' ? 'استكشف القائمة' : 'Explore Menu'}
                  href={restaurantInfo.menuUrl}
                />
              </div>
            </div>
          </div>

          {/* Dish 2: Ghee Roast Tiger Prawns */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1.3fr',
              gap: '60px',
              alignItems: 'center',
              marginBottom: '60px'
            }}
            className="dish-feature-row inverted"
          >
            <div>
              <span className="overline" style={{ color: 'var(--puli-brown)', marginBottom: '8px', display: 'block' }}>
                {locale === 'ar' ? 'الطبق المميز الثاني' : 'SIGNATURE 02'}
              </span>
              <h3 className="headline-md" style={{ color: 'var(--ink)', marginBottom: '16px' }}>
                {menuItems[1].name[locale]}
              </h3>
              <p className="body-lg" style={{ color: 'var(--muted)', marginBottom: '24px', lineHeight: 1.65 }}>
                {menuItems[1].description[locale]}
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
                <span className="title-serif" style={{ color: 'var(--puli-brown)', fontWeight: 600 }}>
                  {menuItems[1].price} {menuItems[1].currency[locale]}
                </span>
                <CtaLink
                  label={locale === 'ar' ? 'استكشف القائمة' : 'Explore Menu'}
                  href={restaurantInfo.menuUrl}
                />
              </div>
            </div>
            <ImageReveal
              src="/assets/images/dish-ghee-roast.jpg"
              alt="Mangalorean Tiger Prawns Ghee Roast"
              aspectRatio="16/10"
            />
          </div>

          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <a
              href={restaurantInfo.menuUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-puli-secondary"
              style={{ padding: '16px 36px', minHeight: '56px', fontSize: '14px' }}
            >
              {t.cuisine.viewAllDishes}
            </a>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 06: THE RESTAURANT & ARCHITECTURAL SANCTUARY
          ========================================================================= */}
      <section className="section bg-sand">
        <div className="container">
          <div className="grid-split-60-40">
            <div>
              <ImageReveal
                src="/assets/images/restaurant-interior.jpg"
                alt="Puli Restaurant Interior Architecture"
                aspectRatio="16/11"
              />
            </div>
            <div>
              <div className="overline" style={{ color: 'var(--puli-brown)', marginBottom: '16px' }}>
                {t.restaurant.overline}
              </div>
              <h2 className="headline-md" style={{ color: 'var(--ink)', marginBottom: '20px' }}>
                {t.restaurant.title}
              </h2>
              <p className="body-lg" style={{ color: 'var(--muted)', marginBottom: '32px', lineHeight: 1.65 }}>
                {t.restaurant.description}
              </p>

              {/* Architectural Highlights */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr',
                  gap: '16px',
                  marginBottom: '32px',
                  borderTop: '1px solid var(--border)',
                  paddingTop: '20px'
                }}
              >
                {t.restaurant.highlights.map((h: { label: string; value: string }, i: number) => (
                  <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span className="label-sm" style={{ color: 'var(--muted)' }}>
                      {h.label}
                    </span>
                    <span className="body-md" style={{ fontWeight: 600, color: 'var(--ink)' }}>
                      {h.value}
                    </span>
                  </div>
                ))}
              </div>

              <Button
                variant="dark"
                onClick={() => onNavigate(`${prefix}/dining`)}
              >
                {t.restaurant.cta}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 07: PRIVATE DINING (Executive Luxury Product)
          ========================================================================= */}
      <section className="section bg-charcoal" style={{ color: 'var(--ivory)' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1.2fr',
              gap: '60px',
              alignItems: 'center'
            }}
            className="private-dining-grid"
          >
            <div>
              <div className="overline" style={{ color: 'var(--puli-brown-light)', marginBottom: '16px' }}>
                {t.privateDining.overline}
              </div>
              <h2 className="headline-lg" style={{ color: 'var(--ivory)', marginBottom: '24px' }}>
                {t.privateDining.title}
              </h2>
              <p className="body-lg" style={{ color: 'var(--muted-light)', marginBottom: '32px', lineHeight: 1.7 }}>
                {t.privateDining.description}
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '36px' }}>
                {diningSpaces[0]?.features[locale].map((feat: string, fIdx: number) => (
                  <div key={fIdx} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px' }}>
                    <div style={{ width: '6px', height: '6px', backgroundColor: 'var(--puli-brown-light)' }} />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                <Button variant="primary" size="md" onClick={onOpenReserve}>
                  {t.privateDining.cta}
                </Button>
                <Button
                  variant="light"
                  size="md"
                  onClick={() => onNavigate(`${prefix}/private-dining`)}
                >
                  {locale === 'ar' ? 'استعراض الأجنحة' : 'View All Suites'}
                </Button>
              </div>
            </div>

            <div>
              <ImageReveal
                src="/assets/images/private-dining.jpg"
                alt="Executive Private Dining Suite"
                aspectRatio="16/11"
              />
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 08: EVENTS & CORPORATE HOSPITALITY
          ========================================================================= */}
      <section className="section bg-warm-white">
        <div className="container">
          <div className="grid-split-60-40">
            <div>
              <ImageReveal
                src="/assets/images/events-boardroom.jpg"
                alt="Puli Corporate Conference Hall & Boardroom"
                aspectRatio="16/10"
              />
            </div>
            <div>
              <div className="overline" style={{ color: 'var(--puli-brown)', marginBottom: '16px' }}>
                {t.events.overline}
              </div>
              <h2 className="headline-md" style={{ color: 'var(--ink)', marginBottom: '20px' }}>
                {t.events.title}
              </h2>
              <p className="body-lg" style={{ color: 'var(--muted)', marginBottom: '32px', lineHeight: 1.65 }}>
                {t.events.description}
              </p>

              <div
                style={{
                  backgroundColor: 'var(--ivory)',
                  padding: '24px',
                  border: '1px solid var(--border)',
                  marginBottom: '32px'
                }}
              >
                <div style={{ fontWeight: 600, fontSize: '14px', marginBottom: '8px', color: 'var(--ink)' }}>
                  {locale === 'ar' ? 'المساحات المتاحة:' : 'Available Venues:'}
                </div>
                <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                  {eventSpaces.map((sp, idx) => (
                    <div key={idx} style={{ fontSize: '13px', color: 'var(--muted)' }}>
                      • <strong>{sp.name[locale]}</strong> ({locale === 'ar' ? `حتى ${sp.capacity.seated} ضيف` : `Up to ${sp.capacity.seated} guests`})
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                <Button variant="primary" onClick={onOpenEventInquire}>
                  {t.events.cta}
                </Button>
                <CtaLink
                  label={locale === 'ar' ? 'المواصفات التقنية للقاعات' : 'Technical Specifications'}
                  onClick={() => onNavigate(`${prefix}/events`)}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 09 & 10: SOCIAL PROOF & EDITORIAL TESTIMONIALS
          ========================================================================= */}
      <section className="section bg-ivory">
        <div className="container">
          <SectionHeader
            overline={t.socialProof.overline}
            title={t.socialProof.title}
            align="center"
          />

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '40px',
              maxWidth: '1080px',
              marginInline: 'auto'
            }}
            className="social-proof-grid"
          >
            {t.socialProof.quotes.map((q: { text: string; author: string; title: string }, idx: number) => (
              <div
                key={idx}
                style={{
                  backgroundColor: 'var(--warm-white)',
                  padding: '40px',
                  border: '1px solid var(--border)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}
              >
                <blockquote
                  className="body-editorial font-serif"
                  style={{
                    color: 'var(--ink)',
                    lineHeight: 1.45,
                    marginBottom: '24px'
                  }}
                >
                  "{q.text}"
                </blockquote>
                <div>
                  <div style={{ fontWeight: 600, fontSize: '14px', color: 'var(--puli-brown)' }}>
                    {q.author}
                  </div>
                  <div className="caption" style={{ color: 'var(--muted)' }}>
                    {q.title}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 11: LOCATION & VISITING DETAILS
          ========================================================================= */}
      <section className="section bg-warm-white">
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1.2fr 1fr',
              gap: '60px',
              alignItems: 'center'
            }}
            className="location-grid"
          >
            <div>
              <div className="overline" style={{ color: 'var(--puli-brown)', marginBottom: '16px' }}>
                {t.location.overline}
              </div>
              <h2 className="headline-lg" style={{ color: 'var(--ink)', marginBottom: '24px' }}>
                {t.location.title}
              </h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '36px' }}>
                <div style={{ display: 'flex', gap: '12px' }}>
                  <MapPin size={20} color="var(--puli-brown)" style={{ flexShrink: 0, marginTop: '3px' }} />
                  <div>
                    <strong style={{ display: 'block', marginBottom: '4px', fontSize: '14px' }}>
                      {t.location.addressTitle}
                    </strong>
                    <span className="body-md" style={{ color: 'var(--muted)' }}>
                      {restaurantInfo.address.full[locale]}
                    </span>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '12px' }}>
                  <Clock size={20} color="var(--puli-brown)" style={{ flexShrink: 0, marginTop: '3px' }} />
                  <div>
                    <strong style={{ display: 'block', marginBottom: '4px', fontSize: '14px' }}>
                      {t.location.hoursTitle}
                    </strong>
                    <div className="body-sm" style={{ color: 'var(--muted)', fontWeight: 500 }}>
                      {restaurantInfo.hours.general.days[locale]}: {restaurantInfo.hours.general.time[locale]}
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '12px' }}>
                  <Phone size={20} color="var(--puli-brown)" style={{ flexShrink: 0, marginTop: '3px' }} />
                  <div>
                    <strong style={{ display: 'block', marginBottom: '4px', fontSize: '14px' }}>
                      {t.location.phoneTitle}
                    </strong>
                    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                      <a href={`tel:${restaurantInfo.contact.phone}`} className="luxury-underline" style={{ color: 'var(--puli-brown)', fontWeight: 600 }}>
                        {restaurantInfo.contact.phoneFormatted}
                      </a>
                      <a
                        href={`https://wa.me/${restaurantInfo.contact.mobile.replace('+', '')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="luxury-underline"
                        style={{ color: 'var(--puli-brown)', fontWeight: 600 }}
                      >
                        WhatsApp: {restaurantInfo.contact.mobileFormatted}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                <a
                  href={`https://www.google.com/maps/dir/?api=1&destination=${restaurantInfo.coordinates.lat},${restaurantInfo.coordinates.lng}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-puli-primary"
                >
                  {t.location.getDirections}
                </a>
                <a
                  href={`tel:${restaurantInfo.contact.phone}`}
                  className="btn-puli-secondary"
                >
                  {t.location.callPuli}
                </a>
              </div>
            </div>

            {/* Map Visual / Architectural vignette */}
            <div style={{ position: 'relative' }}>
              <ImageReveal
                src="/assets/images/restaurant-interior.jpg"
                alt="Puli Jubail Restaurant Exterior and Entrance"
                aspectRatio="4/3"
                caption={locale === 'ar' ? 'موقع مميز في الجبيل مع مواقف سيارات خاصة لكبار الشخصيات' : 'Prime Al Jubail location with dedicated VIP valet & parking.'}
              />
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 12: FINAL CINEMATIC CTA
          ========================================================================= */}
      <section
        className="section bg-charcoal"
        style={{
          textAlign: 'center',
          position: 'relative',
          paddingBlock: '120px',
          overflow: 'hidden'
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: 'url(/assets/images/hero.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.25
          }}
        />
        <div className="container" style={{ position: 'relative', zIndex: 10, maxWidth: '720px' }}>
          <div className="overline" style={{ color: 'var(--puli-brown-light)', marginBottom: '16px' }}>
            {t.finalCta.overline}
          </div>
          <h2 className="headline-lg" style={{ color: 'var(--ivory)', marginBottom: '20px' }}>
            {t.finalCta.title}
          </h2>
          <p className="body-editorial" style={{ color: 'rgba(247,244,237,0.85)', marginBottom: '36px' }}>
            {t.finalCta.subtitle}
          </p>
          <Button variant="primary" size="lg" onClick={onOpenReserve}>
            {t.finalCta.button}
          </Button>
        </div>
      </section>

      {/* Responsive adjustments */}
      <style>{`
        @media (max-width: 990px) {
          .dish-feature-row,
          .heritage-grid,
          .private-dining-grid,
          .location-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          .dish-feature-row.inverted > div:first-child {
            order: 2;
          }
          .dish-feature-row.inverted > div:last-child {
            order: 1;
          }
        }
        @media (max-width: 768px) {
          .social-proof-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
};
