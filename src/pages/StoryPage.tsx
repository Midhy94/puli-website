import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { ImageReveal } from '../components/ui/ImageReveal';
import { Button } from '../components/ui/Button';

interface StoryPageProps {
  onOpenReserve: () => void;
}

export const StoryPage: React.FC<StoryPageProps> = ({ onOpenReserve }) => {
  const { locale } = useLanguage();

  return (
    <div className="story-page" style={{ paddingTop: 'var(--header-height)' }}>
      {/* Page Hero */}
      <section
        style={{
          backgroundColor: 'var(--charcoal)',
          color: 'var(--ivory)',
          paddingBlock: '100px 70px',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
          textAlign: 'center'
        }}
      >
        <div className="container" style={{ maxWidth: '840px' }}>
          <div className="overline" style={{ color: 'var(--puli-brown-light)', marginBottom: '16px' }}>
            {locale === 'ar' ? 'أصالة وتاريخ مانغلور' : 'MANGALOREAN LINEAGE & CRAFT'}
          </div>
          <h1 className="headline-lg" style={{ color: 'var(--ivory)', marginBottom: '24px' }}>
            {locale === 'ar' ? 'حكاية الساحل، النكهة، والضيافة' : 'The Journey of Coastal Gastronomy'}
          </h1>
          <p className="body-editorial" style={{ color: 'rgba(247, 244, 237, 0.85)', lineHeight: 1.6 }}>
            {locale === 'ar'
              ? 'تأسس شغفنا في موانئ مانغلور العريقة، حيث يلتقي بحر العرب بتوابل الساحل الغنية، لنحمل هذا الإرث العريق إلى مدينة الجبيل برؤية معاصرة.'
              : 'Born along the spice-scented shores of the Arabian Sea in Mangalore, our culinary philosophy arrives in Al Jubail with unyielding respect for authentic methods and modern refinement.'}
          </p>
        </div>
      </section>

      {/* Chapter 1: The Coastal Lineage */}
      <section className="section bg-ivory">
        <div className="container">
          <div className="grid-split-60-40">
            <div>
              <div className="overline" style={{ color: 'var(--puli-brown)', marginBottom: '16px' }}>
                {locale === 'ar' ? 'الفصل الأول: الجذور' : 'CHAPTER 01: THE ORIGIN'}
              </div>
              <h2 className="headline-md" style={{ color: 'var(--ink)', marginBottom: '20px' }}>
                {locale === 'ar' ? 'أسرار مطبخ مانغلور العريق' : 'The Secrets of Mangalorean Coastal Cooking'}
              </h2>
              <p className="body-lg" style={{ color: 'var(--muted)', marginBottom: '20px', lineHeight: 1.7 }}>
                {locale === 'ar'
                  ? 'يتميز ساحل مانغلور بمزيج فريد من النكهات: فلفل بيادجي الزاهي، وجوز الهند الطازج، والتمر الهندي، والسمن البلدي الخالص. هذه المكونات لا تقبل التسرع أو البدائل الصناعية.'
                  : 'The culinary heritage of Mangalore is renowned for its harmonious balance of deep heat, coastal coconut milk, tangy tamarind, and the irreplaceable richness of slow-simmered country ghee.'}
              </p>
              <p className="body-lg" style={{ color: 'var(--muted)', lineHeight: 1.7 }}>
                {locale === 'ar'
                  ? 'كل طبق في بولي يُعد وفقاً للتقنيات التقليدية المتوارثة عبر الأجيال، مع التركيز على نقاء المكونات ومصادر الصيد البحري الطازجة يومياً.'
                  : 'Every signature recipe at Puli follows ancestral methods handed down through generations of coastal master cooks, elevated by contemporary culinary art direction.'}
              </p>
            </div>
            <div>
              <ImageReveal
                src="/assets/images/heritage-craft.jpg"
                alt="Roasting Indian coastal spices"
                aspectRatio="4/5"
                caption={locale === 'ar' ? 'طحن وتجهيز التوابل يومياً في أوانٍ تقليدية' : 'Hand-selected spices roasted daily in traditional bronze vessels.'}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Chapter 2: The Philosophy of Restraint */}
      <section className="section bg-warm-white">
        <div className="container">
          <div className="grid-split-40-60">
            <div>
              <ImageReveal
                src="/assets/images/dish-crab.jpg"
                alt="Plating Mangalorean Butter Pepper Garlic Crab"
                aspectRatio="4/3"
                caption={locale === 'ar' ? 'أطباق الساحل المميزة بلمسة فندقية عالمية' : 'Signature coastal crab plated with architectural restraint.'}
              />
            </div>
            <div>
              <div className="overline" style={{ color: 'var(--puli-brown)', marginBottom: '16px' }}>
                {locale === 'ar' ? 'الفصل الثاني: فلسفة الطهي' : 'CHAPTER 02: PHILOSOPHY'}
              </div>
              <h2 className="headline-md" style={{ color: 'var(--ink)', marginBottom: '20px' }}>
                {locale === 'ar' ? 'الفخامة في بساطة المذاق ونقاء المكون' : 'Luxury Born of Restraint & Purity'}
              </h2>
              <p className="body-lg" style={{ color: 'var(--muted)', marginBottom: '20px', lineHeight: 1.7 }}>
                {locale === 'ar'
                  ? 'نرفض الزخارف غير الضرورية والصلصات الثقيلة التي تخفي النكهة الأصلية. نحن نترك جودة السلطعون الطازج والروبيان والسمك تتحدث عن نفسها.'
                  : 'We deliberately reject unnecessary decoration and artificial thickeners. When seafood is caught fresh and spices are ground with precision, flavor achieves unmatched clarity.'}
              </p>
              <p className="body-lg" style={{ color: 'var(--muted)', lineHeight: 1.7 }}>
                {locale === 'ar'
                  ? 'من طبق الغي روست الشهير إلى كاري السمك وحلوى جوز الهند، كل عنصر في قائمتنا يحكي قصة التزام لا ينقطع بالجودة.'
                  : 'From our iconic Kundapur Ghee Roast to delicately steamed Neer Dosas and silky Elaneer Payasam, every item represents an uncompromising devotion to excellence.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-charcoal" style={{ color: 'var(--ivory)', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '680px' }}>
          <div className="overline" style={{ color: 'var(--puli-brown-light)', marginBottom: '16px' }}>
            {locale === 'ar' ? 'تذوق القصة' : 'TASTE THE STORY'}
          </div>
          <h2 className="headline-md" style={{ color: 'var(--ivory)', marginBottom: '20px' }}>
            {locale === 'ar' ? 'نرحب بكم على مائدة بولي بالجبيل' : 'Experience Our Culinary Legacy'}
          </h2>
          <p className="body-lg" style={{ color: 'var(--muted-light)', marginBottom: '32px' }}>
            {locale === 'ar'
              ? 'احجز طاولتك أو جناحك الخاص واستمتع بتجربة طعام استثنائية.'
              : 'Join us for an unhurried lunch or an exquisite evening of coastal Indian gastronomy.'}
          </p>
          <Button variant="primary" size="lg" onClick={onOpenReserve}>
            {locale === 'ar' ? 'حجز طاولة الآن' : 'Reserve a Table'}
          </Button>
        </div>
      </section>
    </div>
  );
};
