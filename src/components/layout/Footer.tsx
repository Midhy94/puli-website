import React from 'react';
import { useLanguage } from '../../i18n/LanguageContext';
import { restaurantInfo, restaurantLogos } from '../../data/restaurantInfo';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

interface FooterProps {
  onNavigate: (path: string) => void;
  onOpenReserve: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const { locale, toggleLocale, t } = useLanguage();
  const prefix = locale === 'ar' ? '/ar' : '/en';

  return (
    <footer
      style={{
        backgroundColor: 'var(--charcoal)',
        color: 'var(--ivory)',
        paddingTop: '80px',
        paddingBottom: '60px',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)'
      }}
    >
      <div className="container">
        {/* Top Grid: Brand Statement & Navigation & Hours */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.2fr 1fr 1fr 1fr',
            gap: '40px',
            marginBottom: '60px'
          }}
          className="footer-grid"
        >
          {/* Column 1: Brand Statement */}
          <div>
            <a
              href={prefix}
              onClick={(e) => {
                e.preventDefault();
                onNavigate(prefix);
              }}
              style={{
                display: 'inline-block',
                marginBottom: '20px',
                textDecoration: 'none'
              }}
              aria-label={locale === 'ar' ? 'بولي' : 'Puli'}
            >
              <img
                src={locale === 'ar' ? restaurantLogos.light.ar : restaurantLogos.light.en}
                alt={locale === 'ar' ? 'بولي' : 'Puli'}
                style={{
                  height: '52px',
                  width: 'auto',
                  maxWidth: '180px',
                  objectFit: 'contain'
                }}
              />
            </a>
            <p
              className="body-sm"
              style={{
                color: 'var(--muted-light)',
                maxWidth: '280px',
                lineHeight: 1.6,
                marginBottom: '24px'
              }}
            >
              {t.footer.tagline}
            </p>
            <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
              {/* Custom SVG Instagram */}
              <a
                href={restaurantInfo.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                style={{ color: 'var(--muted-light)', transition: 'color 0.2s ease', display: 'flex' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--ivory)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--muted-light)')}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
              </a>
              {/* Custom SVG Facebook */}
              <a
                href={restaurantInfo.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                style={{ color: 'var(--muted-light)', transition: 'color 0.2s ease', display: 'flex' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--ivory)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--muted-light)')}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <div className="overline" style={{ color: 'var(--puli-brown-light)', marginBottom: '16px' }}>
              {locale === 'ar' ? 'التنقل' : 'EXPLORE'}
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <a
                href={restaurantInfo.menuUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="luxury-underline"
                style={{ fontSize: '13px', color: 'var(--muted-light)' }}
              >
                {t.nav.menu}
              </a>
              <a
                href={`${prefix}/our-story`}
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate(`${prefix}/our-story`);
                }}
                className="luxury-underline"
                style={{ fontSize: '13px', color: 'var(--muted-light)' }}
              >
                {t.nav.story}
              </a>
              <a
                href={`${prefix}/dining`}
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate(`${prefix}/dining`);
                }}
                className="luxury-underline"
                style={{ fontSize: '13px', color: 'var(--muted-light)' }}
              >
                {t.nav.dining}
              </a>
              <a
                href={`${prefix}/private-dining`}
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate(`${prefix}/private-dining`);
                }}
                className="luxury-underline"
                style={{ fontSize: '13px', color: 'var(--muted-light)' }}
              >
                {t.nav.privateDining}
              </a>
              <a
                href={`${prefix}/events`}
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate(`${prefix}/events`);
                }}
                className="luxury-underline"
                style={{ fontSize: '13px', color: 'var(--muted-light)' }}
              >
                {t.nav.events}
              </a>
              <a
                href={`${prefix}/gallery`}
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate(`${prefix}/gallery`);
                }}
                className="luxury-underline"
                style={{ fontSize: '13px', color: 'var(--muted-light)' }}
              >
                {t.nav.gallery}
              </a>
            </div>
          </div>

          {/* Column 3: Hours & Service */}
          <div>
            <div className="overline" style={{ color: 'var(--puli-brown-light)', marginBottom: '16px' }}>
              {t.location.hoursTitle}
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '13px', color: 'var(--muted-light)' }}>
              <div>
                <div style={{ fontWeight: 600, color: 'var(--ivory)' }}>
                  {locale === 'ar' ? 'الغداء:' : 'Lunch Service:'}
                </div>
                <div>{restaurantInfo.hours.lunch.time[locale]}</div>
              </div>
              <div>
                <div style={{ fontWeight: 600, color: 'var(--ivory)' }}>
                  {locale === 'ar' ? 'العشاء:' : 'Dinner Service:'}
                </div>
                <div>{restaurantInfo.hours.dinner.time[locale]}</div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--puli-green-light)', marginTop: '4px' }}>
                <Clock size={14} />
                <span>{locale === 'ar' ? 'مفتوح يومياً' : 'Open 7 Days a Week'}</span>
              </div>
            </div>
          </div>

          {/* Column 4: Location & Concierge */}
          <div>
            <div className="overline" style={{ color: 'var(--puli-brown-light)', marginBottom: '16px' }}>
              {t.location.addressTitle}
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '13px', color: 'var(--muted-light)' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                <MapPin size={16} color="var(--puli-brown-light)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span>{restaurantInfo.address.full[locale]}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Phone size={16} color="var(--puli-brown-light)" style={{ flexShrink: 0 }} />
                <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                  <a href={`tel:${restaurantInfo.contact.phone}`} className="luxury-underline" style={{ color: 'var(--ivory)' }}>
                    {restaurantInfo.contact.phoneFormatted}
                  </a>
                  <a
                    href={`https://wa.me/${restaurantInfo.contact.mobile.replace('+', '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="luxury-underline"
                    style={{ color: 'var(--puli-brown-light)', fontSize: '12px' }}
                  >
                    WhatsApp: {restaurantInfo.contact.mobileFormatted}
                  </a>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Mail size={16} color="var(--puli-brown-light)" style={{ flexShrink: 0 }} />
                <a href={`mailto:${restaurantInfo.contact.email}`} className="luxury-underline" style={{ color: 'var(--ivory)' }}>
                  {restaurantInfo.contact.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Supreme-Style Oversized Typography Brand Marquee Banner */}
        <div
          style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
            paddingBlock: '24px',
            textAlign: 'center',
            overflow: 'hidden'
          }}
        >
          <span
            className="font-serif"
            style={{
              fontSize: 'clamp(48px, 12vw, 150px)',
              fontWeight: 400,
              letterSpacing: 'clamp(6px, 1.5vw, 24px)',
              color: 'rgba(247, 244, 237, 0.12)',
              textTransform: 'uppercase',
              userSelect: 'none',
              lineHeight: 0.9,
              display: 'block'
            }}
          >
            PULI
          </span>
        </div>

        {/* Bottom Metadata & Language Switcher */}
        <div
          style={{
            paddingTop: '32px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '16px'
          }}
        >
          <div className="caption" style={{ color: 'var(--muted)' }}>
            {t.footer.copyright}
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
            <button
              onClick={toggleLocale}
              style={{
                background: 'none',
                border: 'none',
                color: 'var(--puli-brown-light)',
                cursor: 'pointer',
                fontSize: '12px',
                fontWeight: 600,
                letterSpacing: '1px'
              }}
              className="luxury-underline"
            >
              {locale === 'en' ? 'العربية' : 'English'}
            </button>
            <span className="caption" style={{ color: 'var(--muted)' }}>
              Al Jubail, KSA
            </span>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 640px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
};
