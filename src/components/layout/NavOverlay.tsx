import React, { useEffect, useState, useRef } from 'react';
import { useLanguage } from '../../i18n/LanguageContext';
import { X, ArrowUpRight, Globe, Phone, MapPin } from 'lucide-react';
import { restaurantInfo, restaurantLogos } from '../../data/restaurantInfo';

interface NavOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (path: string) => void;
  onOpenReserve: () => void;
}

export const NavOverlay: React.FC<NavOverlayProps> = ({
  isOpen,
  onClose,
  onNavigate,
  onOpenReserve
}) => {
  const { locale, toggleLocale, t } = useLanguage();
  const prefix = locale === 'ar' ? '/ar' : '/en';
  const [isRendered, setIsRendered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Sync mount and trigger entrance/exit transitions
  useEffect(() => {
    if (isOpen) {
      if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
      setIsRendered(true);
      // Small timeout to allow DOM mounting before applying active transition classes
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 20);
      document.body.style.overflow = 'hidden';
      return () => clearTimeout(timer);
    } else if (isRendered) {
      setIsVisible(false);
      closeTimeoutRef.current = setTimeout(() => {
        setIsRendered(false);
        document.body.style.overflow = '';
      }, 500); // Wait for transition duration
    }
  }, [isOpen]);

  // Handle ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isVisible) {
        handleTriggerClose();
      }
    };
    if (isRendered) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isRendered, isVisible]);

  const handleTriggerClose = () => {
    setIsVisible(false);
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    closeTimeoutRef.current = setTimeout(() => {
      onClose();
      document.body.style.overflow = '';
    }, 450);
  };

  const handleItemNavigate = (path: string, isExternal?: boolean) => {
    if (isExternal) {
      window.open(path, '_blank', 'noopener,noreferrer');
      handleTriggerClose();
    } else {
      handleTriggerClose();
      setTimeout(() => {
        onNavigate(path);
      }, 200);
    }
  };

  if (!isRendered) return null;

  const primaryNavItems = [
    {
      title: t.nav.home,
      path: prefix,
      isExternal: false,
      num: '01'
    },
    {
      title: locale === 'ar' ? 'القائمة الرقمية' : 'Digital Menu',
      path: restaurantInfo.menuUrl,
      isExternal: true,
      num: '02'
    },
    {
      title: t.nav.story,
      path: `${prefix}/our-story`,
      isExternal: false,
      num: '03'
    },
    {
      title: t.nav.dining,
      path: `${prefix}/dining`,
      isExternal: false,
      num: '04'
    },
    {
      title: t.nav.privateDining,
      path: `${prefix}/private-dining`,
      isExternal: false,
      num: '05'
    },
    {
      title: t.nav.events,
      path: `${prefix}/events`,
      isExternal: false,
      num: '06'
    },
    {
      title: t.nav.gallery,
      path: `${prefix}/gallery`,
      isExternal: false,
      num: '07'
    }
  ];

  const secondaryNavItems = [
    {
      label: locale === 'ar' ? 'الكونسيرج والموقع' : 'Contact & Concierge',
      action: () => handleItemNavigate(`${prefix}/contact`)
    },
    {
      label: locale === 'ar' ? 'حجز طاولة' : 'Plan Your Dining',
      action: () => {
        handleTriggerClose();
        setTimeout(onOpenReserve, 250);
      }
    },
    {
      label: locale === 'ar' ? 'طلب فعالية خاصة' : 'Corporate Inquiries',
      action: () => handleItemNavigate(`${prefix}/events`)
    }
  ];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Site Navigation Menu"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 'var(--z-overlay)',
        display: 'flex',
        justifyContent: locale === 'ar' ? 'flex-start' : 'flex-end',
        pointerEvents: isVisible ? 'auto' : 'none'
      }}
      className="tengile-menu-root"
    >
      {/* Backdrop with Fade Animation */}
      <div
        onClick={handleTriggerClose}
        style={{
          position: 'absolute',
          inset: 0,
          backgroundColor: 'rgba(23, 22, 21, 0.72)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          opacity: isVisible ? 1 : 0,
          transition: 'opacity 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
        }}
        aria-hidden="true"
      />

      {/* Slide-and-Expand Drawer Panel (Tengile MalaMala Bezier Animation) */}
      <div
        style={{
          position: 'absolute',
          top: '0',
          insetInlineEnd: '0',
          width: '100%',
          maxWidth: '560px',
          height: '100dvh',
          backgroundColor: 'var(--charcoal)',
          color: 'var(--ivory)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: 'clamp(28px, 4.5vw, 56px)',
          overflowY: 'auto',
          boxShadow: locale === 'ar' ? '12px 0 48px rgba(0,0,0,0.6)' : '-12px 0 48px rgba(0,0,0,0.6)',
          transform: isVisible
            ? 'translateX(0)'
            : locale === 'ar'
            ? 'translateX(-100%)'
            : 'translateX(100%)',
          transition: 'transform 0.55s cubic-bezier(0.77, 0, 0.175, 1)',
          borderInlineStart: locale === 'ar' ? 'none' : '1px solid rgba(255, 255, 255, 0.08)',
          borderInlineEnd: locale === 'ar' ? '1px solid rgba(255, 255, 255, 0.08)' : 'none'
        }}
        className="tengile-drawer-panel"
      >
        {/* Top Header Row of Drawer */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingBottom: '24px',
            borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(-10px)',
            transition: 'opacity 0.45s cubic-bezier(0.19, 1, 0.22, 1) 0.1s, transform 0.45s cubic-bezier(0.19, 1, 0.22, 1) 0.1s'
          }}
        >
          <a
            href={prefix}
            onClick={(e) => {
              e.preventDefault();
              handleItemNavigate(prefix);
            }}
            style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}
            aria-label={locale === 'ar' ? 'بولي' : 'Puli'}
          >
            <img
              src={locale === 'ar' ? restaurantLogos.light.ar : restaurantLogos.light.en}
              alt={locale === 'ar' ? 'بولي' : 'Puli'}
              style={{
                height: '42px',
                width: 'auto',
                maxWidth: '150px',
                objectFit: 'contain'
              }}
            />
          </a>

          <button
            onClick={handleTriggerClose}
            aria-label="Close menu"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              backgroundColor: 'rgba(255, 255, 255, 0.06)',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              color: 'var(--ivory)',
              padding: '8px 16px',
              borderRadius: 'var(--radius-none)',
              fontSize: '12px',
              fontWeight: 600,
              letterSpacing: '2px',
              textTransform: 'uppercase',
              cursor: 'pointer',
              transition: 'all 0.25s ease'
            }}
            className="tengile-close-btn"
          >
            <span>{locale === 'ar' ? 'إغلاق' : 'Close'}</span>
            <X size={15} />
          </button>
        </div>

        {/* Primary Navigation Links with Staggered Kinetic Blur Reveal */}
        <nav
          role="navigation"
          aria-label="Main site navigation"
          style={{
            paddingBlock: '36px 24px'
          }}
        >
          <ul
            style={{
              listStyle: 'none',
              padding: 0,
              margin: 0,
              display: 'flex',
              flexDirection: 'column',
              gap: 'clamp(14px, 2.2vh, 24px)'
            }}
          >
            {primaryNavItems.map((item, idx) => {
              const delay = 0.12 + idx * 0.05;
              return (
                <li
                  key={idx}
                  style={{
                    opacity: isVisible ? 1 : 0,
                    filter: isVisible ? 'blur(0px)' : 'blur(5px)',
                    transform: isVisible ? 'translateY(0)' : 'translateY(24px)',
                    transition: `opacity 0.6s cubic-bezier(0.19, 1, 0.22, 1) ${delay}s, transform 0.6s cubic-bezier(0.19, 1, 0.22, 1) ${delay}s, filter 0.6s cubic-bezier(0.19, 1, 0.22, 1) ${delay}s`
                  }}
                >
                  <a
                    href={item.path}
                    onClick={(e) => {
                      e.preventDefault();
                      handleItemNavigate(item.path, item.isExternal);
                    }}
                    className="tengile-primary-link"
                    style={{
                      display: 'flex',
                      alignItems: 'baseline',
                      justifyContent: 'space-between',
                      color: 'var(--ivory)',
                      textDecoration: 'none',
                      fontFamily: 'var(--font-serif)',
                      fontSize: 'clamp(28px, 4.2vw, 42px)',
                      fontWeight: 400,
                      lineHeight: 1.1,
                      padding: '4px 0',
                      transition: 'color 0.25s ease'
                    }}
                  >
                    <span className="tengile-link-text">{item.title}</span>
                    {item.isExternal ? (
                      <ArrowUpRight
                        size={22}
                        style={{
                          color: 'var(--puli-brown-light)',
                          opacity: 0.8,
                          flexShrink: 0
                        }}
                        className="icon-directional"
                      />
                    ) : (
                      <span
                        className="font-utility"
                        style={{
                          fontSize: '12px',
                          color: 'var(--muted-light)',
                          letterSpacing: '1.5px',
                          fontStyle: 'normal'
                        }}
                      >
                        {item.num}
                      </span>
                    )}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Secondary Navigation with Staggered Entrance */}
        <div
          style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            paddingTop: '24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(16px)',
            transition: 'opacity 0.55s cubic-bezier(0.19, 1, 0.22, 1) 0.45s, transform 0.55s cubic-bezier(0.19, 1, 0.22, 1) 0.45s'
          }}
        >
          {/* Secondary Action Row */}
          <nav
            role="navigation"
            aria-label="Secondary links"
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '12px 20px'
            }}
          >
            {secondaryNavItems.map((item, idx) => (
              <button
                key={idx}
                onClick={item.action}
                className="luxury-underline"
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'var(--muted-light)',
                  fontFamily: 'var(--font-utility)',
                  fontSize: '12px',
                  fontWeight: 500,
                  letterSpacing: '1px',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  padding: 0
                }}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Bottom Direct Channels & Language Toggle */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '14px',
              paddingTop: '16px',
              borderTop: '1px solid rgba(255, 255, 255, 0.04)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', fontSize: '12px', color: 'var(--muted-light)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Phone size={13} color="var(--puli-brown-light)" />
                <a href={`tel:${restaurantInfo.contact.phone}`} style={{ color: 'var(--ivory)' }}>
                  {restaurantInfo.contact.phoneFormatted}
                </a>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <MapPin size={13} color="var(--puli-brown-light)" />
                <span>Al Jubail, KSA</span>
              </div>
            </div>

            <button
              onClick={() => {
                toggleLocale();
              }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: 'none',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                color: 'var(--ivory)',
                padding: '6px 12px',
                fontSize: '11px',
                fontWeight: 600,
                letterSpacing: '1px',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
              className="tengile-lang-btn"
            >
              <Globe size={12} />
              <span>{locale === 'en' ? 'العربية' : 'English'}</span>
            </button>
          </div>
        </div>
      </div>

      <style>{`
        .tengile-primary-link .tengile-link-text {
          transition: transform 0.35s cubic-bezier(0.19, 1, 0.22, 1), color 0.25s ease;
          display: inline-block;
        }
        .tengile-primary-link:hover .tengile-link-text {
          color: var(--puli-brown-light) !important;
          transform: translateX(10px);
        }
        [dir="rtl"] .tengile-primary-link:hover .tengile-link-text {
          transform: translateX(-10px);
        }
        .tengile-close-btn:hover {
          background-color: var(--puli-brown) !important;
          border-color: var(--puli-brown) !important;
          color: #fff !important;
        }
        .tengile-lang-btn:hover {
          border-color: var(--puli-brown-light) !important;
          color: var(--puli-brown-light) !important;
        }
      `}</style>
    </div>
  );
};
