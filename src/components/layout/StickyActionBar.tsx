import React from 'react';
import { useLanguage } from '../../i18n/LanguageContext';
import { Phone, Navigation, Calendar } from 'lucide-react';
import { restaurantInfo } from '../../data/restaurantInfo';

interface StickyActionBarProps {
  onOpenReserve: () => void;
}

export const StickyActionBar: React.FC<StickyActionBarProps> = ({ onOpenReserve }) => {
  const { locale } = useLanguage();

  return (
    <aside
      aria-label="Quick Actions"
      className="mobile-sticky-bar"
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'var(--charcoal)',
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
        zIndex: 'var(--z-sticky)',
        display: 'none',
        gridTemplateColumns: '1fr 1fr 1.4fr',
        height: '60px',
        alignItems: 'stretch'
      }}
    >
      <a
        href={`tel:${restaurantInfo.contact.phone}`}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '6px',
          color: 'var(--ivory)',
          fontSize: '11px',
          fontWeight: 600,
          letterSpacing: '1px',
          textTransform: 'uppercase',
          borderInlineEnd: '1px solid rgba(255, 255, 255, 0.1)'
        }}
      >
        <Phone size={14} color="var(--puli-brown-light)" />
        <span>{locale === 'ar' ? 'اتصال' : 'CALL'}</span>
      </a>

      <a
        href={`https://www.google.com/maps/dir/?api=1&destination=${restaurantInfo.coordinates.lat},${restaurantInfo.coordinates.lng}`}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '6px',
          color: 'var(--ivory)',
          fontSize: '11px',
          fontWeight: 600,
          letterSpacing: '1px',
          textTransform: 'uppercase',
          borderInlineEnd: '1px solid rgba(255, 255, 255, 0.1)'
        }}
      >
        <Navigation size={14} color="var(--puli-brown-light)" />
        <span>{locale === 'ar' ? 'الخريطة' : 'MAP'}</span>
      </a>

      <button
        onClick={onOpenReserve}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '6px',
          backgroundColor: 'var(--puli-brown)',
          color: '#fff',
          fontSize: '11px',
          fontWeight: 600,
          letterSpacing: '1.5px',
          textTransform: 'uppercase',
          border: 'none',
          cursor: 'pointer'
        }}
      >
        <Calendar size={14} />
        <span>{locale === 'ar' ? 'حجز طاولة' : 'RESERVE'}</span>
      </button>

      <style>{`
        @media (max-width: 768px) {
          .mobile-sticky-bar {
            display: grid !important;
          }
        }
      `}</style>
    </aside>
  );
};
