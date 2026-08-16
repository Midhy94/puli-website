import React, { useState, useEffect } from 'react';
import { useLanguage } from '../../i18n/LanguageContext';
import { Menu, Globe } from 'lucide-react';
import { Button } from '../ui/Button';
import { restaurantInfo, restaurantLogos } from '../../data/restaurantInfo';

interface HeaderProps {
  onOpenNav: () => void;
  onOpenReserve: () => void;
  currentPath: string;
  onNavigate: (path: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenNav,
  onOpenReserve,
  currentPath,
  onNavigate
}) => {
  const { locale, toggleLocale, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHome = currentPath === '/' || currentPath === '/en' || currentPath === '/ar' || currentPath === '/en/' || currentPath === '/ar/';

  const headerBg = isScrolled
    ? 'rgba(23, 22, 21, 0.95)'
    : isHome
    ? 'linear-gradient(to bottom, rgba(14, 9, 2, 0.75), rgba(14, 9, 2, 0))'
    : 'rgba(23, 22, 21, 0.9)';

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: isScrolled ? '76px' : '96px',
        background: headerBg,
        backdropFilter: isScrolled ? 'blur(12px)' : 'none',
        zIndex: 'var(--z-header)',
        transition: 'all 0.35s ease',
        borderBottom: isScrolled ? '1px solid rgba(255, 255, 255, 0.08)' : 'none'
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '100%'
        }}
      >
        {/* Left: Menu Hamburger Trigger & Language Toggle */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
          <button
            onClick={onOpenNav}
            aria-label="Open Navigation Menu"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              background: 'none',
              border: 'none',
              color: 'var(--ivory)',
              cursor: 'pointer',
              padding: '8px 0',
              fontFamily: 'var(--font-utility)',
              fontSize: '13px',
              fontWeight: 600,
              letterSpacing: '2px',
              textTransform: 'uppercase'
            }}
          >
            <Menu size={20} strokeWidth={1.5} />
            <span style={{ display: 'inline-block' }}>{t.nav.menu}</span>
          </button>

          <button
            onClick={toggleLocale}
            aria-label="Switch Language"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              background: 'none',
              border: 'none',
              color: 'var(--muted-light)',
              cursor: 'pointer',
              fontFamily: 'var(--font-utility)',
              fontSize: '12px',
              fontWeight: 500,
              letterSpacing: '1px',
              padding: '6px 10px',
              borderRadius: 'var(--radius-sm)',
              transition: 'color 0.2s ease'
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--ivory)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--muted-light)')}
          >
            <Globe size={14} />
            <span>{t.nav.language}</span>
          </button>
        </div>

        {/* Center: Brand Wordmark Logo */}
        <div style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)' }}>
          <a
            href={locale === 'ar' ? '/ar' : '/en'}
            onClick={(e) => {
              e.preventDefault();
              onNavigate(locale === 'ar' ? '/ar' : '/en');
            }}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              textDecoration: 'none'
            }}
            aria-label={locale === 'ar' ? 'بولي - الصفحة الرئيسية' : 'Puli - Home'}
          >
            <img
              src={locale === 'ar' ? restaurantLogos.light.ar : restaurantLogos.light.en}
              alt={locale === 'ar' ? 'بولي' : 'Puli'}
              style={{
                height: isScrolled ? '46px' : '56px',
                width: 'auto',
                maxWidth: '190px',
                objectFit: 'contain',
                transition: 'height 0.3s ease'
              }}
            />
          </a>
        </div>

        {/* Right: Quick Nav & Primary Reserve Action */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <nav
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '24px'
            }}
            className="desktop-nav-links"
          >
            <a
              href={restaurantInfo.menuUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="luxury-underline"
              style={{
                color: 'var(--ivory)',
                fontSize: '13px',
                fontWeight: 500,
                letterSpacing: '1.5px',
                textTransform: 'uppercase'
              }}
            >
              {t.nav.menu}
            </a>
          </nav>

          <Button
            variant="primary"
            size="sm"
            onClick={onOpenReserve}
            style={{
              letterSpacing: '2px',
              padding: '10px 20px',
              minHeight: '40px',
              fontSize: '12px'
            }}
          >
            {t.nav.reserve}
          </Button>
        </div>
      </div>
      <style>{`
        @media (max-width: 860px) {
          .desktop-nav-links {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
};
