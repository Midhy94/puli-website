import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { spacesData, SpaceItem } from '../data/spacesData';
import { ImageReveal } from '../components/ui/ImageReveal';
import { Button } from '../components/ui/Button';
import { Users } from 'lucide-react';

interface PrivateDiningPageProps {
  onOpenReserve: () => void;
}

export const PrivateDiningPage: React.FC<PrivateDiningPageProps> = ({ onOpenReserve }) => {
  const { locale } = useLanguage();
  const diningSuites = spacesData.filter((s) => s.type === 'dining');

  return (
    <div className="private-dining-page" style={{ paddingTop: 'var(--header-height)' }}>
      {/* Hero */}
      <section
        style={{
          backgroundColor: 'var(--charcoal)',
          color: 'var(--ivory)',
          paddingBlock: '100px 70px',
          textAlign: 'center',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
        }}
      >
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="overline" style={{ color: 'var(--puli-brown-light)', marginBottom: '16px' }}>
            {locale === 'ar' ? 'الأجنحة التنفيذية الخاصة' : 'PRIVATE DINING SALONS'}
          </div>
          <h1 className="headline-lg" style={{ color: 'var(--ivory)', marginBottom: '20px' }}>
            {locale === 'ar' ? 'طاولة للحظات والقرارات الاستثنائية' : 'A Table for Discretion & Milestone Occasions'}
          </h1>
          <p className="body-editorial" style={{ color: 'rgba(247, 244, 237, 0.85)' }}>
            {locale === 'ar'
              ? 'صُممت أجنحة الطعام الخاصة في بولي لتلبي متطلبات كبار التنفيذيين والوفود الدبلوماسية والعائلات الكريمة في الجبيل، مع خدمة نادل مخصص وقوائم طعام مصممة حسب الطلب.'
              : 'Our private salons provide complete seclusion, dedicated sommelier and butler service, and tailored multi-course degustation menus.'}
          </p>
        </div>
      </section>

      {/* Private Suites List */}
      <section className="section bg-ivory">
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '80px' }}>
            {diningSuites.map((suite: SpaceItem, idx: number) => {
              const isInverted = idx % 2 !== 0;
              return (
                <div
                  key={suite.id}
                  id={suite.id}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: isInverted ? '1fr 1.3fr' : '1.3fr 1fr',
                    gap: '60px',
                    alignItems: 'center'
                  }}
                  className="suite-row"
                >
                  {!isInverted && (
                    <ImageReveal
                      src={suite.image}
                      alt={suite.name[locale]}
                      aspectRatio="16/11"
                    />
                  )}

                  <div>
                    <div className="overline" style={{ color: 'var(--puli-brown)', marginBottom: '8px' }}>
                      {suite.subtitle[locale]}
                    </div>
                    <h2 className="headline-md" style={{ color: 'var(--ink)', marginBottom: '16px' }}>
                      {suite.name[locale]}
                    </h2>
                    <p className="body-lg" style={{ color: 'var(--muted)', marginBottom: '24px', lineHeight: 1.7 }}>
                      {suite.description[locale]}
                    </p>

                    <div
                      style={{
                        backgroundColor: 'var(--warm-white)',
                        border: '1px solid var(--border)',
                        padding: '20px',
                        marginBottom: '28px'
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 600, fontSize: '14px', marginBottom: '12px', color: 'var(--ink)' }}>
                        <Users size={16} color="var(--puli-brown)" />
                        <span>{locale === 'ar' ? 'السعة:' : 'Capacity:'} {suite.capacity.seated} {locale === 'ar' ? 'مقعداً جلوس' : 'Seated Guests'}</span>
                      </div>
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '8px' }}>
                        {suite.features[locale].map((feat: string, fIdx: number) => (
                          <div key={fIdx} style={{ fontSize: '13px', color: 'var(--muted)' }}>
                            • {feat}
                          </div>
                        ))}
                      </div>
                    </div>

                    <Button variant="primary" onClick={onOpenReserve}>
                      {locale === 'ar' ? 'حجز هذا الجناح' : 'Inquire for this Suite'}
                    </Button>
                  </div>

                  {isInverted && (
                    <ImageReveal
                      src={suite.image}
                      alt={suite.name[locale]}
                      aspectRatio="16/11"
                    />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bespoke Degustation Info */}
      <section className="section bg-charcoal" style={{ color: 'var(--ivory)' }}>
        <div className="container" style={{ maxWidth: '880px', textAlign: 'center' }}>
          <div className="overline" style={{ color: 'var(--puli-brown-light)', marginBottom: '16px' }}>
            {locale === 'ar' ? 'قوائم التذوق الحصرية' : 'BESPOKE CULINARY CURATION'}
          </div>
          <h2 className="headline-lg" style={{ color: 'var(--ivory)', marginBottom: '24px' }}>
            {locale === 'ar' ? 'قوائم طعام مصممة خصيصاً لمناسبتك' : 'Custom Menus Designed by Executive Chefs'}
          </h2>
          <p className="body-lg" style={{ color: 'var(--muted-light)', lineHeight: 1.7, marginBottom: '36px' }}>
            {locale === 'ar'
              ? 'بالتعاون مع رئيس الطهاة، نبتكر قوائم تذوق خاصة من 5 إلى 7 أطباق تعكس تفضيلات ضيوفك الدقيقة، مع خيارات المأكولات البحرية النادرة ومشاوي التندور والحلويات المبتكرة.'
              : 'Our culinary directors collaborate directly with hosts to craft 5 to 7-course bespoke tasting journeys featuring seasonal Gulf seafood, heritage tandoor cuts, and botanical refreshments.'}
          </p>
          <Button variant="primary" size="lg" onClick={onOpenReserve}>
            {locale === 'ar' ? 'حجز تجربة طعام خاصة' : 'Plan Your Private Dining'}
          </Button>
        </div>
      </section>

      <style>{`
        @media (max-width: 880px) {
          .suite-row {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
        }
      `}</style>
    </div>
  );
};
