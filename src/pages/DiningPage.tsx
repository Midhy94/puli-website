import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { ImageReveal } from '../components/ui/ImageReveal';
import { Button } from '../components/ui/Button';

interface DiningPageProps {
  onOpenReserve: () => void;
  onNavigate: (path: string) => void;
}

export const DiningPage: React.FC<DiningPageProps> = ({ onOpenReserve, onNavigate }) => {
  const { locale } = useLanguage();
  const prefix = locale === 'ar' ? '/ar' : '/en';

  return (
    <div className="dining-page" style={{ paddingTop: 'var(--header-height)' }}>
      {/* Header */}
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
            {locale === 'ar' ? 'الأجواء والضيافة' : 'ATMOSPHERE & HOSPITALITY'}
          </div>
          <h1 className="headline-lg" style={{ color: 'var(--ivory)', marginBottom: '20px' }}>
            {locale === 'ar' ? 'ملاذ معماري من الدفء والسكينة' : 'A Sanctuary of Warmth & Tactile Beauty'}
          </h1>
          <p className="body-editorial" style={{ color: 'rgba(247,244,237,0.85)' }}>
            {locale === 'ar'
              ? 'صُممت قاعة الطعام في بولي لتمنح ضيوفنا شعوراً بالراحة والخصوصية، من خلال أخشاب الجوز الطبيعية، والجدران ذات الملمس الجصي، والإضاءة الدافئة المدروسة.'
              : 'Every architectural finish, acoustic detail, and pin-spot brass fixture has been calibrated to cultivate intimacy, warmth, and conversation.'}
          </p>
        </div>
      </section>

      {/* Main Dining Room Showcase */}
      <section className="section bg-ivory">
        <div className="container">
          <div className="grid-split-60-40">
            <div>
              <ImageReveal
                src="/assets/images/restaurant-interior.jpg"
                alt="Main Dining Room at Puli"
                aspectRatio="16/11"
                caption={locale === 'ar' ? 'قاعة الطعام الرئيسية مع إضاءة طبيعية وتوزيع مقاعد مريح' : 'The Main Dining Salon with spacious banquettes and acoustic warmth.'}
              />
            </div>
            <div>
              <div className="overline" style={{ color: 'var(--puli-brown)', marginBottom: '16px' }}>
                {locale === 'ar' ? 'قاعة الطعام الرئيسية' : 'THE MAIN SALON'}
              </div>
              <h2 className="headline-md" style={{ color: 'var(--ink)', marginBottom: '20px' }}>
                {locale === 'ar' ? 'أناقة عصرية وضيافة راقية' : 'Refined Dining for Important Occasions'}
              </h2>
              <p className="body-lg" style={{ color: 'var(--muted)', marginBottom: '24px', lineHeight: 1.7 }}>
                {locale === 'ar'
                  ? 'سواء كان عشاء عمل تنفيذي أو أمسية عائلية هادئة، توفر قاعة الطعام مساحات جلوس واسعة ومريحة مع خدمة ضيافة من الدرجة الأولى.'
                  : 'Accommodating up to 140 guests across banquette seating and secluded alcoves, the main dining room balances vibrant culinary energy with peaceful privacy.'}
              </p>
              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                <Button variant="primary" onClick={onOpenReserve}>
                  {locale === 'ar' ? 'حجز طاولة' : 'Reserve a Table'}
                </Button>
                <Button variant="secondary" onClick={() => onNavigate(`${prefix}/private-dining`)}>
                  {locale === 'ar' ? 'استعراض الأجنحة الخاصة' : 'View Private Suites'}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sensory Details */}
      <section className="section bg-warm-white">
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 60px' }}>
            <div className="overline" style={{ color: 'var(--puli-brown)', marginBottom: '16px' }}>
              {locale === 'ar' ? 'عناصر التجربة' : 'THE CRAFT OF COMFORT'}
            </div>
            <h2 className="headline-md" style={{ color: 'var(--ink)' }}>
              {locale === 'ar' ? 'تفاصيل صُنعت لراحتكم' : 'Designed for Discretion and Sensory Calm'}
            </h2>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '30px'
            }}
          >
            <div style={{ backgroundColor: 'var(--ivory)', padding: '32px', border: '1px solid var(--border)' }}>
              <h3 className="title-serif" style={{ color: 'var(--ink)', marginBottom: '12px' }}>
                {locale === 'ar' ? 'هندسة صوتية مريحة' : 'Acoustic Precision'}
              </h3>
              <p className="body-sm" style={{ color: 'var(--muted)' }}>
                {locale === 'ar'
                  ? 'ألواح خشبية وجدران جصية عازلة للضجيج لضمان وضوح الحوارات وسرية النقاشات.'
                  : 'Faceted acoustic timber panels and textured plaster ensure conversational clarity without reverberation.'}
              </p>
            </div>

            <div style={{ backgroundColor: 'var(--ivory)', padding: '32px', border: '1px solid var(--border)' }}>
              <h3 className="title-serif" style={{ color: 'var(--ink)', marginBottom: '12px' }}>
                {locale === 'ar' ? 'إضاءة نحاسية خافتة' : 'Warm Ambient Illumination'}
              </h3>
              <p className="body-sm" style={{ color: 'var(--muted)' }}>
                {locale === 'ar'
                  ? 'إضاءة مركزة بدقة على الطاولات لإبراز جمال الأطباق مع الحفاظ على أجواء حميمية هادئة.'
                  : 'Low brass spotlights focus softly upon the culinary presentations while keeping dining alcoves intimate.'}
              </p>
            </div>

            <div style={{ backgroundColor: 'var(--ivory)', padding: '32px', border: '1px solid var(--border)' }}>
              <h3 className="title-serif" style={{ color: 'var(--ink)', marginBottom: '12px' }}>
                {locale === 'ar' ? 'أوانٍ فخارية ونحاسية' : 'Artisanal Tableware'}
              </h3>
              <p className="body-sm" style={{ color: 'var(--muted)' }}>
                {locale === 'ar'
                  ? 'أوانٍ خزفية مصممة خصيصاً لمطعم بولي تعكس أصالة الطين الساحلي ورقي التقديم.'
                  : 'Handmade matte stoneware, copper degustation warmers, and crisp linen napkins enhance every course.'}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
