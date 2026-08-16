import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { spacesData, SpaceItem } from '../data/spacesData';
import { ImageReveal } from '../components/ui/ImageReveal';
import { Button } from '../components/ui/Button';
import { Users, Tv, Mic, Wifi, Coffee } from 'lucide-react';

interface EventsPageProps {
  onOpenEventInquire: () => void;
}

export const EventsPage: React.FC<EventsPageProps> = ({ onOpenEventInquire }) => {
  const { locale } = useLanguage();
  const eventSpaces = spacesData.filter((s) => s.type !== 'dining');

  return (
    <div className="events-page" style={{ paddingTop: 'var(--header-height)' }}>
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
            {locale === 'ar' ? 'الفعاليات ومجالس الإدارة' : 'CORPORATE SUMMITS & CONFERENCES'}
          </div>
          <h1 className="headline-lg" style={{ color: 'var(--ivory)', marginBottom: '20px' }}>
            {locale === 'ar' ? 'حيث تلتقي الأعمال بأعلى معايير الضيافة' : 'Executive Hospitality for High-Impact Events'}
          </h1>
          <p className="body-editorial" style={{ color: 'rgba(247, 244, 237, 0.85)' }}>
            {locale === 'ar'
              ? 'مرافق متطورة صُممت لخدمة قطاعات الصناعة والطاقة والاستثمار في مدينة الجبيل، مع تجهيزات صوتية ومرئية متكاملة وقاعات مجهزة لأكثر من 180 ضيفاً.'
              : 'State-of-the-art corporate venues tailored for Jubail’s industrial, energy, and commercial leaders requiring high-definition conferencing, banquet catering, and impeccable service.'}
          </p>
        </div>
      </section>

      {/* Venues Showcase */}
      <section className="section bg-ivory">
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '80px' }}>
            {eventSpaces.map((space: SpaceItem, idx: number) => {
              const isInverted = idx % 2 !== 0;
              return (
                <div
                  key={space.id}
                  id={space.id}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: isInverted ? '1fr 1.3fr' : '1.3fr 1fr',
                    gap: '60px',
                    alignItems: 'center'
                  }}
                  className="event-space-row"
                >
                  {!isInverted && (
                    <ImageReveal
                      src={space.image}
                      alt={space.name[locale]}
                      aspectRatio="16/10"
                    />
                  )}

                  <div>
                    <div className="overline" style={{ color: 'var(--puli-brown)', marginBottom: '8px' }}>
                      {space.subtitle[locale]}
                    </div>
                    <h2 className="headline-md" style={{ color: 'var(--ink)', marginBottom: '16px' }}>
                      {space.name[locale]}
                    </h2>
                    <p className="body-lg" style={{ color: 'var(--muted)', marginBottom: '24px', lineHeight: 1.7 }}>
                      {space.description[locale]}
                    </p>

                    <div
                      style={{
                        backgroundColor: 'var(--warm-white)',
                        border: '1px solid var(--border)',
                        padding: '24px',
                        marginBottom: '28px'
                      }}
                    >
                      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', marginBottom: '16px', fontWeight: 600, color: 'var(--ink)', fontSize: '14px' }}>
                        <div>
                          <Users size={16} color="var(--puli-brown)" style={{ display: 'inline', marginInlineEnd: '6px' }} />
                          <span>{locale === 'ar' ? 'جلوس:' : 'Seated:'} {space.capacity.seated}</span>
                        </div>
                        {space.capacity.standing && (
                          <div>
                            <span>{locale === 'ar' ? 'استقبال:' : 'Reception:'} {space.capacity.standing}</span>
                          </div>
                        )}
                      </div>

                      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '8px' }}>
                        {space.features[locale].map((feat: string, fIdx: number) => (
                          <div key={fIdx} style={{ fontSize: '13px', color: 'var(--muted)' }}>
                            • {feat}
                          </div>
                        ))}
                      </div>
                    </div>

                    <Button variant="primary" onClick={onOpenEventInquire}>
                      {locale === 'ar' ? 'طلب عرض أسعار لهذه القاعة' : 'Request Proposal for this Space'}
                    </Button>
                  </div>

                  {isInverted && (
                    <ImageReveal
                      src={space.image}
                      alt={space.name[locale]}
                      aspectRatio="16/10"
                    />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Corporate Amenities & Spec Sheet */}
      <section className="section bg-warm-white">
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 60px' }}>
            <div className="overline" style={{ color: 'var(--puli-brown)', marginBottom: '16px' }}>
              {locale === 'ar' ? 'التجهيزات التقنية والضيافة' : 'CONFERENCE INFRASTRUCTURE'}
            </div>
            <h2 className="headline-md" style={{ color: 'var(--ink)' }}>
              {locale === 'ar' ? 'معايير تقنية تلبي تطلعات قادة الأعمال' : 'Engineered for Flawless Corporate Execution'}
            </h2>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '30px'
            }}
          >
            <div style={{ backgroundColor: 'var(--ivory)', padding: '32px', border: '1px solid var(--border)' }}>
              <Tv size={24} color="var(--puli-brown)" style={{ marginBottom: '16px' }} />
              <h3 className="title-serif" style={{ color: 'var(--ink)', marginBottom: '8px' }}>
                {locale === 'ar' ? 'شاشات ليزر 4K' : '4K Laser Displays'}
              </h3>
              <p className="body-sm" style={{ color: 'var(--muted)' }}>
                {locale === 'ar' ? 'شاشات عرض فائقة الوضوح متوافقة مع جميع منصات الاجتماعات والتقديم.' : 'Ultra-bright high resolution displays for crisp presentation readability.'}
              </p>
            </div>

            <div style={{ backgroundColor: 'var(--ivory)', padding: '32px', border: '1px solid var(--border)' }}>
              <Mic size={24} color="var(--puli-brown)" style={{ marginBottom: '16px' }} />
              <h3 className="title-serif" style={{ color: 'var(--ink)', marginBottom: '8px' }}>
                {locale === 'ar' ? 'هندسة صوتية متكاملة' : 'Acoustic Audio'}
              </h3>
              <p className="body-sm" style={{ color: 'var(--muted)' }}>
                {locale === 'ar' ? 'ميكروفونات لاسلكية ومكبرات صوت موزعة هندسياً لعزل الصدى.' : 'Ceiling microphone arrays and spatial sound distribution for hybrid meetings.'}
              </p>
            </div>

            <div style={{ backgroundColor: 'var(--ivory)', padding: '32px', border: '1px solid var(--border)' }}>
              <Wifi size={24} color="var(--puli-brown)" style={{ marginBottom: '16px' }} />
              <h3 className="title-serif" style={{ color: 'var(--ink)', marginBottom: '8px' }}>
                {locale === 'ar' ? 'ألياف ضوئية فائقة السرعة' : 'Dedicated Gigabit Fiber'}
              </h3>
              <p className="body-sm" style={{ color: 'var(--muted)' }}>
                {locale === 'ar' ? 'شبكة إنترنت مستقلة ومحمية تضمن استقرار البث والاتصال الدولي.' : 'Isolated high-speed Wi-Fi network supporting hundreds of concurrent connections.'}
              </p>
            </div>

            <div style={{ backgroundColor: 'var(--ivory)', padding: '32px', border: '1px solid var(--border)' }}>
              <Coffee size={24} color="var(--puli-brown)" style={{ marginBottom: '16px' }} />
              <h3 className="title-serif" style={{ color: 'var(--ink)', marginBottom: '8px' }}>
                {locale === 'ar' ? 'بوفيه ضيافة متواصل' : 'Executive Break Service'}
              </h3>
              <p className="body-sm" style={{ color: 'var(--muted)' }}>
                {locale === 'ar' ? 'قهوة مختصة وشاي ومقبلات طازجة مقدمة طوال فترة الاجتماع.' : 'Continuous artisan coffee, organic teas, and gourmet finger bites.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-charcoal" style={{ color: 'var(--ivory)', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '680px' }}>
          <h2 className="headline-md" style={{ color: 'var(--ivory)', marginBottom: '20px' }}>
            {locale === 'ar' ? 'ابدأ في التخطيط لفعاليتك القادمة' : 'Plan Your Next Executive Event'}
          </h2>
          <p className="body-lg" style={{ color: 'var(--muted-light)', marginBottom: '32px' }}>
            {locale === 'ar'
              ? 'تواصل مع فريق إدارة الفعاليات لدينا للحصول على مقترح مفصل خلال 24 ساعة.'
              : 'Our dedicated events team will prepare a bespoke proposal tailored to your company’s requirements.'}
          </p>
          <Button variant="primary" size="lg" onClick={onOpenEventInquire}>
            {locale === 'ar' ? 'طلب عرض أسعار فوري' : 'Request an Event Proposal'}
          </Button>
        </div>
      </section>

      <style>{`
        @media (max-width: 880px) {
          .event-space-row {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
        }
      `}</style>
    </div>
  );
};
