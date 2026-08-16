import React, { useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { ImageReveal } from '../components/ui/ImageReveal';
import { Button } from '../components/ui/Button';

interface GalleryPageProps {
  onOpenReserve: () => void;
}

export const GalleryPage: React.FC<GalleryPageProps> = ({ onOpenReserve }) => {
  const { locale } = useLanguage();
  const [filter, setFilter] = useState<'all' | 'cuisine' | 'interior' | 'events'>('all');

  const galleryItems = [
    {
      src: '/assets/images/hero.jpg',
      category: 'interior',
      caption: {
        en: 'Evening Ambiance in the Main Dining Room',
        ar: 'أجواء المساء في قاعة الطعام الرئيسية'
      },
      aspectRatio: '16/10'
    },
    {
      src: '/assets/images/dish-crab.jpg',
      category: 'cuisine',
      caption: {
        en: 'Mangalorean Butter Pepper Garlic Mud Crab',
        ar: 'سلطعون مانغلور بالزبدة والفلفل والثوم'
      },
      aspectRatio: '4/3'
    },
    {
      src: '/assets/images/dish-ghee-roast.jpg',
      category: 'cuisine',
      caption: {
        en: 'Tiger Prawns Kundapur Ghee Roast',
        ar: 'روبيان تايجر غي روست كونداپور'
      },
      aspectRatio: '4/3'
    },
    {
      src: '/assets/images/restaurant-interior.jpg',
      category: 'interior',
      caption: {
        en: 'Warm Walnut Architectural Details',
        ar: 'تفاصيل معمارية من خشب الجوز الدافئ'
      },
      aspectRatio: '16/10'
    },
    {
      src: '/assets/images/private-dining.jpg',
      category: 'interior',
      caption: {
        en: 'The 1977 Heritage Private Suite',
        ar: 'جناح 1977 التراثي الخاص'
      },
      aspectRatio: '16/10'
    },
    {
      src: '/assets/images/events-boardroom.jpg',
      category: 'events',
      caption: {
        en: 'Executive Boardroom Conference Setup',
        ar: 'تجهيزات قاعة مجلس الإدارة التنفيذي'
      },
      aspectRatio: '16/10'
    },
    {
      src: '/assets/images/heritage-craft.jpg',
      category: 'cuisine',
      caption: {
        en: 'Daily Coastal Spice Toasting & Grinding',
        ar: 'تحميص وطحن توابل الساحل يومياً'
      },
      aspectRatio: '16/9'
    }
  ];

  const filteredItems = galleryItems.filter(
    (item) => filter === 'all' || item.category === filter
  );

  return (
    <div className="gallery-page" style={{ paddingTop: 'var(--header-height)' }}>
      {/* Header */}
      <section
        style={{
          backgroundColor: 'var(--charcoal)',
          color: 'var(--ivory)',
          paddingBlock: '100px 60px',
          textAlign: 'center',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
        }}
      >
        <div className="container" style={{ maxWidth: '780px' }}>
          <div className="overline" style={{ color: 'var(--puli-brown-light)', marginBottom: '16px' }}>
            {locale === 'ar' ? 'معرض الصور الفوتوغرافية' : 'VISUAL ARCHIVES'}
          </div>
          <h1 className="headline-lg" style={{ color: 'var(--ivory)', marginBottom: '20px' }}>
            {locale === 'ar' ? 'أجواء ومذاقات بولي في صور' : 'Moments of Gastronomy & Architecture'}
          </h1>
          <p className="body-editorial" style={{ color: 'rgba(247, 244, 237, 0.85)' }}>
            {locale === 'ar'
              ? 'استكشف المزيج بين جمال المكان وحرفية أطباق الساحل وأناقة الضيافة في الجبيل.'
              : 'An editorial glimpse into our culinary craft, dining spaces, and executive hospitality.'}
          </p>

          {/* Filter Tabs */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '12px',
              marginTop: '36px',
              flexWrap: 'wrap'
            }}
          >
            {[
              { id: 'all', label: locale === 'ar' ? 'الكل' : 'All' },
              { id: 'cuisine', label: locale === 'ar' ? 'الأطباق والطهي' : 'Cuisine & Craft' },
              { id: 'interior', label: locale === 'ar' ? 'المطعم والأجنحة' : 'Architecture & Dining' },
              { id: 'events', label: locale === 'ar' ? 'الفعاليات' : 'Corporate Events' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id as any)}
                style={{
                  padding: '8px 20px',
                  border: `1px solid ${filter === tab.id ? 'var(--puli-brown)' : 'rgba(255, 255, 255, 0.2)'}`,
                  backgroundColor: filter === tab.id ? 'var(--puli-brown)' : 'transparent',
                  color: filter === tab.id ? '#fff' : 'var(--ivory)',
                  fontFamily: 'var(--font-utility)',
                  fontSize: '12px',
                  fontWeight: 600,
                  letterSpacing: '1.5px',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  transition: 'all 0.2s'
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section bg-ivory">
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(420px, 1fr))',
              gap: '40px'
            }}
            className="gallery-masonry"
          >
            {filteredItems.map((item, idx) => (
              <div key={idx} style={{ backgroundColor: 'var(--warm-white)', border: '1px solid var(--border)' }}>
                <ImageReveal
                  src={item.src}
                  alt={item.caption[locale]}
                  aspectRatio={item.aspectRatio}
                />
                <div style={{ padding: '16px 20px' }}>
                  <p className="caption" style={{ color: 'var(--ink)', fontWeight: 500, fontSize: '13px' }}>
                    {item.caption[locale]}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="section bg-charcoal" style={{ color: 'var(--ivory)', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '640px' }}>
          <h2 className="headline-md" style={{ color: 'var(--ivory)', marginBottom: '16px' }}>
            {locale === 'ar' ? 'عش التجربة بنفسك' : 'Experience It in Person'}
          </h2>
          <p className="body-lg" style={{ color: 'var(--muted-light)', marginBottom: '28px' }}>
            {locale === 'ar'
              ? 'طاولتك وجناحك الخاص في انتظارك في الجبيل.'
              : 'Book your table or private suite today.'}
          </p>
          <Button variant="primary" size="lg" onClick={onOpenReserve}>
            {locale === 'ar' ? 'حجز طاولة الآن' : 'Reserve a Table'}
          </Button>
        </div>
      </section>

      <style>{`
        @media (max-width: 640px) {
          .gallery-masonry {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
};
