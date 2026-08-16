import React, { useState, useMemo } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { menuCategories, menuItems } from '../data/menuData';
import { Button } from '../components/ui/Button';
import { Search } from 'lucide-react';

interface MenuPageProps {
  onOpenReserve: () => void;
}

export const MenuPage: React.FC<MenuPageProps> = ({ onOpenReserve }) => {
  const { locale } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [dietaryFilter, setDietaryFilter] = useState<string>('all');

  const filteredItems = useMemo(() => {
    return menuItems.filter((item) => {
      const matchCategory = activeCategory === 'all' || item.category === activeCategory;
      const matchSearch =
        searchQuery === '' ||
        item.name[locale].toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description[locale].toLowerCase().includes(searchQuery.toLowerCase());
      const matchDietary =
        dietaryFilter === 'all' ||
        (item.dietary && item.dietary.includes(dietaryFilter as any));

      return matchCategory && matchSearch && matchDietary;
    });
  }, [activeCategory, searchQuery, dietaryFilter, locale]);

  return (
    <div className="menu-page" style={{ paddingTop: 'var(--header-height)' }}>
      {/* Editorial Header */}
      <section
        style={{
          backgroundColor: 'var(--charcoal)',
          color: 'var(--ivory)',
          paddingBlock: '80px 60px',
          textAlign: 'center',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
        }}
      >
        <div className="container" style={{ maxWidth: '800px' }}>
          <div className="overline" style={{ color: 'var(--puli-brown-light)', marginBottom: '16px' }}>
            {locale === 'ar' ? 'فنون الطهي الساحلية والمعاصرة' : 'COASTAL & CONTEMPORARY GASTRONOMY'}
          </div>
          <h1 className="headline-lg" style={{ color: 'var(--ivory)', marginBottom: '20px' }}>
            {locale === 'ar' ? 'قائمة المأكولات' : 'The Culinary Menu'}
          </h1>
          <p className="body-lg" style={{ color: 'var(--muted-light)', lineHeight: 1.65 }}>
            {locale === 'ar'
              ? 'رحلة ذوقية تجمع بين التراث العريق لمأكولات مانغلور البحرية والتقنيات المعاصرة، مطهوة بأجود المكونات الطازجة والتوابل الساحلية.'
              : 'A curated sensory journey uniting Mangalore’s deep seafood heritage and contemporary Indian culinary craft, prepared with stone-ground coastal spices.'}
          </p>
        </div>
      </section>

      {/* Sticky Filter & Category Navigation Bar */}
      <div
        style={{
          position: 'sticky',
          top: '76px',
          backgroundColor: 'var(--warm-white)',
          zIndex: 80,
          borderBottom: '1px solid var(--border)',
          boxShadow: '0 4px 20px rgba(0,0,0,0.03)'
        }}
      >
        <div className="container" style={{ paddingBlock: '16px' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '20px',
              flexWrap: 'wrap'
            }}
          >
            {/* Category Scroll Tabs */}
            <div
              style={{
                display: 'flex',
                gap: '12px',
                overflowX: 'auto',
                paddingBottom: '4px',
                maxWidth: '100%'
              }}
              className="menu-tabs-scroll"
            >
              <button
                onClick={() => setActiveCategory('all')}
                style={{
                  padding: '8px 16px',
                  border: `1px solid ${activeCategory === 'all' ? 'var(--puli-brown)' : 'var(--border)'}`,
                  backgroundColor: activeCategory === 'all' ? 'var(--puli-brown)' : 'transparent',
                  color: activeCategory === 'all' ? '#fff' : 'var(--ink)',
                  fontSize: '12px',
                  fontWeight: 600,
                  letterSpacing: '1px',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                  transition: 'all 0.2s'
                }}
              >
                {locale === 'ar' ? 'جميع الأطباق' : 'All Dishes'}
              </button>
              {menuCategories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  style={{
                    padding: '8px 16px',
                    border: `1px solid ${activeCategory === cat.id ? 'var(--puli-brown)' : 'var(--border)'}`,
                    backgroundColor: activeCategory === cat.id ? 'var(--puli-brown)' : 'transparent',
                    color: activeCategory === cat.id ? '#fff' : 'var(--ink)',
                    fontSize: '12px',
                    fontWeight: 600,
                    letterSpacing: '1px',
                    textTransform: 'uppercase',
                    cursor: 'pointer',
                    whiteSpace: 'nowrap',
                    transition: 'all 0.2s'
                  }}
                >
                  {cat.name[locale]}
                </button>
              ))}
            </div>

            {/* Search and Dietary Filter Controls */}
            <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
              <div style={{ position: 'relative' }}>
                <Search
                  size={16}
                  style={{
                    position: 'absolute',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    insetInlineStart: '10px',
                    color: 'var(--muted)'
                  }}
                />
                <input
                  type="text"
                  placeholder={locale === 'ar' ? 'بحث في القائمة...' : 'Search dish...'}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  style={{
                    padding: '8px 12px',
                    paddingInlineStart: '34px',
                    border: '1px solid var(--border)',
                    backgroundColor: '#fff',
                    fontSize: '13px',
                    borderRadius: 'var(--radius-none)',
                    width: '160px'
                  }}
                />
              </div>

              <select
                value={dietaryFilter}
                onChange={(e) => setDietaryFilter(e.target.value)}
                aria-label="Filter by dietary preference"
                style={{
                  padding: '8px 12px',
                  border: '1px solid var(--border)',
                  backgroundColor: '#fff',
                  fontSize: '12px',
                  fontWeight: 600,
                  color: 'var(--ink)',
                  borderRadius: 'var(--radius-none)'
                }}
              >
                <option value="all">{locale === 'ar' ? 'جميع التصنيفات' : 'All Diets'}</option>
                <option value="seafood">{locale === 'ar' ? 'مأكولات بحرية' : 'Seafood'}</option>
                <option value="vegetarian">{locale === 'ar' ? 'نباتي' : 'Vegetarian'}</option>
                <option value="lamb">{locale === 'ar' ? 'لحم ضأن' : 'Lamb'}</option>
                <option value="poultry">{locale === 'ar' ? 'دواجن' : 'Poultry'}</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Dishes Listing */}
      <section className="section bg-ivory">
        <div className="container">
          {filteredItems.length === 0 ? (
            <div style={{ textAlign: 'center', paddingBlock: '80px' }}>
              <p className="body-lg" style={{ color: 'var(--muted)' }}>
                {locale === 'ar' ? 'لم يتم العثور على أطباق مطابقة للبحث.' : 'No dishes matched your criteria.'}
              </p>
              <Button
                variant="secondary"
                size="sm"
                onClick={() => {
                  setActiveCategory('all');
                  setSearchQuery('');
                  setDietaryFilter('all');
                }}
                style={{ marginTop: '16px' }}
              >
                {locale === 'ar' ? 'إعادة ضبط الفلاتر' : 'Reset Filters'}
              </Button>
            </div>
          ) : (
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
                gap: '30px'
              }}
            >
              {filteredItems.map((item) => (
                <article
                  key={item.id}
                  style={{
                    backgroundColor: 'var(--warm-white)',
                    border: '1px solid var(--border)',
                    padding: '24px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    transition: 'border-color 0.2s ease, transform 0.2s ease'
                  }}
                  className="menu-card"
                >
                  <div>
                    {item.image && (
                      <div
                        style={{
                          aspectRatio: '16/10',
                          backgroundImage: `url(${item.image})`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center',
                          marginBottom: '16px',
                          border: '1px solid var(--border)'
                        }}
                      />
                    )}

                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '12px', marginBottom: '8px' }}>
                      <h3 className="font-serif" style={{ fontSize: '20px', fontWeight: 600, color: 'var(--ink)' }}>
                        {item.name[locale]}
                      </h3>
                      <span className="font-utility" style={{ fontSize: '15px', fontWeight: 700, color: 'var(--puli-brown)', whiteSpace: 'nowrap' }}>
                        {item.price} {item.currency[locale]}
                      </span>
                    </div>

                    <p className="body-sm" style={{ color: 'var(--muted)', lineHeight: 1.55, marginBottom: '16px' }}>
                      {item.description[locale]}
                    </p>
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid var(--border)', paddingTop: '12px' }}>
                    <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                      {item.isSignature && (
                        <span
                          className="caption"
                          style={{
                            backgroundColor: 'var(--puli-brown-alpha10)',
                            color: 'var(--puli-brown)',
                            padding: '3px 8px',
                            fontWeight: 600
                          }}
                        >
                          {locale === 'ar' ? 'طبق خاص' : 'Signature'}
                        </span>
                      )}
                      {item.dietary?.map((d, dIdx) => (
                        <span
                          key={dIdx}
                          className="caption"
                          style={{
                            backgroundColor: 'rgba(0,0,0,0.04)',
                            padding: '3px 8px',
                            textTransform: 'capitalize'
                          }}
                        >
                          {d}
                        </span>
                      ))}
                    </div>

                    <button
                      onClick={onOpenReserve}
                      style={{
                        background: 'none',
                        border: 'none',
                        color: 'var(--puli-brown)',
                        fontSize: '12px',
                        fontWeight: 600,
                        letterSpacing: '1px',
                        cursor: 'pointer'
                      }}
                      className="luxury-underline"
                    >
                      {locale === 'ar' ? 'حجز' : 'Reserve'}
                    </button>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Bottom Reservation Callout */}
      <section className="section bg-charcoal" style={{ color: 'var(--ivory)', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '640px' }}>
          <h2 className="headline-md" style={{ color: 'var(--ivory)', marginBottom: '16px' }}>
            {locale === 'ar' ? 'جاهز لتجربة أطباقنا في الجبيل؟' : 'Ready to Experience Puli in Al Jubail?'}
          </h2>
          <p className="body-lg" style={{ color: 'var(--muted-light)', marginBottom: '28px' }}>
            {locale === 'ar'
              ? 'احجز طاولتك الآن واستمتع بأفضل المأكولات البحرية والضيافة الهندية المعاصرة.'
              : 'Reserve your table today and immerse yourself in coastal gastronomy and distinguished hospitality.'}
          </p>
          <Button variant="primary" size="lg" onClick={onOpenReserve}>
            {locale === 'ar' ? 'حجز طاولة الآن' : 'Reserve a Table Now'}
          </Button>
        </div>
      </section>
    </div>
  );
};
