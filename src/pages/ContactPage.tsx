import React, { useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { restaurantInfo } from '../data/restaurantInfo';
import { Button } from '../components/ui/Button';
import { MapPin, Phone, Mail, Clock, Send, Check } from 'lucide-react';

interface ContactPageProps {
  onOpenReserve: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = () => {
  const { locale } = useLanguage();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="contact-page" style={{ paddingTop: 'var(--header-height)' }}>
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
            {locale === 'ar' ? 'الكونسيرج والموقع' : 'CONCIERGE & LOCATION'}
          </div>
          <h1 className="headline-lg" style={{ color: 'var(--ivory)', marginBottom: '20px' }}>
            {locale === 'ar' ? 'يسعدنا التواصل معكم' : 'We Welcome Your Inquiry'}
          </h1>
          <p className="body-editorial" style={{ color: 'rgba(247, 244, 237, 0.85)' }}>
            {locale === 'ar'
              ? 'سواء كنت ترغب في حجز طاولة، أو الاستفسار عن جناح خاص، أو تنظيم فعالية كبرى بالجبيل، فريقنا مستعد لخدمتكم.'
              : 'Whether reserving a secluded table, coordinating executive private dining, or hosting a corporate event in Al Jubail.'}
          </p>
        </div>
      </section>

      {/* Main Content Split: Contact Details & Form */}
      <section className="section bg-ivory">
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1.2fr',
              gap: '60px',
              alignItems: 'start'
            }}
            className="contact-grid"
          >
            {/* Left: Direct Contact Information */}
            <div>
              <div className="overline" style={{ color: 'var(--puli-brown)', marginBottom: '16px' }}>
                {locale === 'ar' ? 'بيانات التواصل' : 'DIRECT CHANNELS'}
              </div>
              <h2 className="headline-md" style={{ color: 'var(--ink)', marginBottom: '28px' }}>
                {locale === 'ar' ? 'موقعنا وأوقات العمل' : 'Al Jubail Sanctuary'}
              </h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginBottom: '36px' }}>
                <div style={{ display: 'flex', gap: '16px' }}>
                  <MapPin size={20} color="var(--puli-brown)" style={{ flexShrink: 0, marginTop: '3px' }} />
                  <div>
                    <div style={{ fontWeight: 600, color: 'var(--ink)', fontSize: '14px', marginBottom: '4px' }}>
                      {locale === 'ar' ? 'العنوان في الجبيل' : 'Address'}
                    </div>
                    <p className="body-sm" style={{ color: 'var(--muted)', lineHeight: 1.6 }}>
                      {restaurantInfo.address.full[locale]}
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '16px' }}>
                  <Phone size={20} color="var(--puli-brown)" style={{ flexShrink: 0, marginTop: '3px' }} />
                  <div>
                    <div style={{ fontWeight: 600, color: 'var(--ink)', fontSize: '14px', marginBottom: '4px' }}>
                      {locale === 'ar' ? 'الهاتف والحجوزات' : 'Direct Telephone & WhatsApp'}
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                      <a
                        href={`tel:${restaurantInfo.contact.phone}`}
                        className="body-sm luxury-underline"
                        style={{ color: 'var(--puli-brown)', fontWeight: 600 }}
                      >
                        {restaurantInfo.contact.phoneFormatted} (Landline)
                      </a>
                      <a
                        href={`https://wa.me/${restaurantInfo.contact.mobile.replace('+', '')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="body-sm luxury-underline"
                        style={{ color: 'var(--puli-brown)', fontWeight: 600 }}
                      >
                        {restaurantInfo.contact.mobileFormatted} (WhatsApp / Mobile)
                      </a>
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '16px' }}>
                  <Mail size={20} color="var(--puli-brown)" style={{ flexShrink: 0, marginTop: '3px' }} />
                  <div>
                    <div style={{ fontWeight: 600, color: 'var(--ink)', fontSize: '14px', marginBottom: '4px' }}>
                      {locale === 'ar' ? 'البريد الإلكتروني' : 'Direct Inquiries'}
                    </div>
                    <a
                      href={`mailto:${restaurantInfo.contact.email}`}
                      className="body-sm luxury-underline"
                      style={{ color: 'var(--puli-brown)', fontWeight: 600 }}
                    >
                      {restaurantInfo.contact.email}
                    </a>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '16px' }}>
                  <Clock size={20} color="var(--puli-brown)" style={{ flexShrink: 0, marginTop: '3px' }} />
                  <div>
                    <div style={{ fontWeight: 600, color: 'var(--ink)', fontSize: '14px', marginBottom: '4px' }}>
                      {locale === 'ar' ? 'أوقات العمل اليومية' : 'Operating Hours'}
                    </div>
                    <div className="body-sm" style={{ color: 'var(--muted)', fontWeight: 500 }}>
                      {restaurantInfo.hours.general.days[locale]}: {restaurantInfo.hours.general.time[locale]}
                    </div>
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                <a
                  href={`https://www.google.com/maps/dir/?api=1&destination=${restaurantInfo.coordinates.lat},${restaurantInfo.coordinates.lng}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-puli-primary"
                >
                  {locale === 'ar' ? 'الاتجاهات عبر خرائط جوجل' : 'Google Maps Directions'}
                </a>
              </div>
            </div>

            {/* Right: Message / Concierge Form */}
            <div
              style={{
                backgroundColor: 'var(--warm-white)',
                border: '1px solid var(--border)',
                padding: '40px'
              }}
            >
              {!submitted ? (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  <h3 className="title-serif" style={{ color: 'var(--ink)', marginBottom: '4px' }}>
                    {locale === 'ar' ? 'إرسال رسالة إلى الكونسيرج' : 'Send a Direct Message'}
                  </h3>
                  <p className="body-sm" style={{ color: 'var(--muted)', marginBottom: '8px' }}>
                    {locale === 'ar'
                      ? 'يرجى تزويدنا بتفاصيل طلبكم وسنعاود الاتصال بكم في أقرب وقت.'
                      : 'Please leave your contact info and notes, and our team will get back to you promptly.'}
                  </p>

                  <div>
                    <label className="label-sm" style={{ display: 'block', marginBottom: '6px', color: 'var(--ink)' }}>
                      {locale === 'ar' ? 'الاسم الكريم' : 'Full Name'} *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder={locale === 'ar' ? 'الاسم' : 'Your name'}
                      style={{
                        width: '100%',
                        padding: '12px',
                        border: '1px solid var(--border)',
                        backgroundColor: '#fff',
                        fontSize: '14px'
                      }}
                    />
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                    <div>
                      <label className="label-sm" style={{ display: 'block', marginBottom: '6px', color: 'var(--ink)' }}>
                        {locale === 'ar' ? 'رقم الهاتف' : 'Phone / Mobile'} *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+966 5X XXX XXXX"
                        style={{
                          width: '100%',
                          padding: '12px',
                          border: '1px solid var(--border)',
                          backgroundColor: '#fff',
                          fontSize: '14px'
                        }}
                      />
                    </div>
                    <div>
                      <label className="label-sm" style={{ display: 'block', marginBottom: '6px', color: 'var(--ink)' }}>
                        {locale === 'ar' ? 'البريد الإلكتروني' : 'Email'} *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="you@email.com"
                        style={{
                          width: '100%',
                          padding: '12px',
                          border: '1px solid var(--border)',
                          backgroundColor: '#fff',
                          fontSize: '14px'
                        }}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="label-sm" style={{ display: 'block', marginBottom: '6px', color: 'var(--ink)' }}>
                      {locale === 'ar' ? 'الرسالة أو الاستفسار' : 'Message or Special Inquiry'} *
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder={locale === 'ar' ? 'اكتب رسالتك هنا...' : 'How may we assist your upcoming visit or event?'}
                      style={{
                        width: '100%',
                        padding: '12px',
                        border: '1px solid var(--border)',
                        backgroundColor: '#fff',
                        fontSize: '14px'
                      }}
                    />
                  </div>

                  <Button type="submit" variant="primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                    <span>{locale === 'ar' ? 'إرسال الرسالة' : 'Send Message'}</span>
                    <Send size={14} className="icon-directional" />
                  </Button>
                </form>
              ) : (
                <div style={{ textAlign: 'center', paddingBlock: '40px' }}>
                  <div
                    style={{
                      width: '56px',
                      height: '56px',
                      borderRadius: '50%',
                      backgroundColor: 'var(--puli-brown-alpha10)',
                      color: 'var(--puli-brown)',
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '20px'
                    }}
                  >
                    <Check size={28} />
                  </div>
                  <h3 className="title-serif" style={{ color: 'var(--ink)', marginBottom: '12px' }}>
                    {locale === 'ar' ? 'تم إرسال رسالتكم بنجاح' : 'Message Successfully Received'}
                  </h3>
                  <p className="body-sm" style={{ color: 'var(--muted)', maxWidth: '360px', margin: '0 auto 24px' }}>
                    {locale === 'ar'
                      ? 'شكراً لتواصلكم معنا. سيقوم فريق الكونسيرج بالرد عليكم في أقرب وقت ممكن.'
                      : 'Thank you for reaching out. Our concierge desk will respond to your message shortly.'}
                  </p>
                  <Button variant="secondary" size="sm" onClick={() => setSubmitted(false)}>
                    {locale === 'ar' ? 'إرسال رسالة أخرى' : 'Send Another Message'}
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 860px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
};
