import React, { useState, useEffect } from 'react';
import { useLanguage } from '../../i18n/LanguageContext';
import { X, Check, Calendar, Clock, Users, ArrowRight, ArrowLeft } from 'lucide-react';
import { Button } from '../ui/Button';
import { spacesData } from '../../data/spacesData';
import { restaurantLogos } from '../../data/restaurantInfo';

interface InquireOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  initialType?: 'dining' | 'event';
}

export const InquireOverlay: React.FC<InquireOverlayProps> = ({
  isOpen,
  onClose,
  initialType = 'dining'
}) => {
  const { locale, t } = useLanguage();
  const [bookingType, setBookingType] = useState<'dining' | 'event'>(initialType);
  const [step, setStep] = useState<number>(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Form State
  const [guests, setGuests] = useState<number>(2);
  const [date, setDate] = useState<string>('');
  const [time, setTime] = useState<string>('19:30');
  const [selectedSpace, setSelectedSpace] = useState<string>('main');
  const [name, setName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [company, setCompany] = useState<string>('');
  const [notes, setNotes] = useState<string>('');

  useEffect(() => {
    setBookingType(initialType);
    setStep(1);
    setIsSubmitted(false);
  }, [isOpen, initialType]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 800);
  };

  const isRtl = locale === 'ar';

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="inquire-title"
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(10, 8, 7, 0.75)',
        backdropFilter: 'blur(8px)',
        zIndex: 'var(--z-modal)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        overflowY: 'auto'
      }}
    >
      <div
        style={{
          backgroundColor: 'var(--warm-white)',
          color: 'var(--ink)',
          width: '100%',
          maxWidth: '680px',
          padding: '40px',
          borderRadius: 'var(--radius-none)',
          border: '1px solid var(--border)',
          boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
          position: 'relative'
        }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close Reservation Modal"
          style={{
            position: 'absolute',
            top: '24px',
            insetInlineEnd: '24px',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            color: 'var(--muted)',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            fontSize: '12px',
            fontWeight: 600,
            letterSpacing: '1px'
          }}
        >
          <X size={20} />
        </button>

        {!isSubmitted ? (
          <div>
            {/* Header & Tabs */}
            <div style={{ marginBottom: '28px' }}>
              <img
                src={locale === 'ar' ? restaurantLogos.dark.ar : restaurantLogos.dark.en}
                alt={locale === 'ar' ? 'بولي' : 'Puli'}
                style={{
                  height: '42px',
                  width: 'auto',
                  maxWidth: '150px',
                  objectFit: 'contain',
                  marginBottom: '16px',
                  display: 'block'
                }}
              />
              <div
                className="overline"
                style={{ color: 'var(--puli-brown)', marginBottom: '8px' }}
              >
                {bookingType === 'dining' ? t.inquireModal.titleDining : t.inquireModal.titleEvent}
              </div>
              <h3
                id="inquire-title"
                className="headline-sm"
                style={{ marginBottom: '12px', color: 'var(--ink)' }}
              >
                {bookingType === 'dining'
                  ? (locale === 'ar' ? 'حجز تجربة طعام استثنائية' : 'Curate Your Dining Experience')
                  : (locale === 'ar' ? 'تنظيم الفعاليات ومجالس الإدارة' : 'Host Your Event or Executive Meeting')}
              </h3>

              {/* Type Switcher */}
              <div
                style={{
                  display: 'flex',
                  gap: '12px',
                  borderBottom: '1px solid var(--border)',
                  paddingBottom: '12px',
                  marginTop: '16px'
                }}
              >
                <button
                  type="button"
                  onClick={() => setBookingType('dining')}
                  style={{
                    background: 'none',
                    border: 'none',
                    padding: '6px 12px',
                    fontFamily: 'var(--font-utility)',
                    fontSize: '12px',
                    fontWeight: 600,
                    letterSpacing: '1.5px',
                    textTransform: 'uppercase',
                    cursor: 'pointer',
                    color: bookingType === 'dining' ? 'var(--puli-brown)' : 'var(--muted)',
                    borderBottom: bookingType === 'dining' ? '2px solid var(--puli-brown)' : '2px solid transparent'
                  }}
                >
                  {locale === 'ar' ? 'طاولة طعام' : 'Table Reservation'}
                </button>
                <button
                  type="button"
                  onClick={() => setBookingType('event')}
                  style={{
                    background: 'none',
                    border: 'none',
                    padding: '6px 12px',
                    fontFamily: 'var(--font-utility)',
                    fontSize: '12px',
                    fontWeight: 600,
                    letterSpacing: '1.5px',
                    textTransform: 'uppercase',
                    cursor: 'pointer',
                    color: bookingType === 'event' ? 'var(--puli-brown)' : 'var(--muted)',
                    borderBottom: bookingType === 'event' ? '2px solid var(--puli-brown)' : '2px solid transparent'
                  }}
                >
                  {locale === 'ar' ? 'جناح خاص / قاعة فعاليات' : 'Private Dining / Event'}
                </button>
              </div>

              {/* Step indicator */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginTop: '16px'
                }}
              >
                <span className="caption" style={{ color: 'var(--puli-brown)', fontWeight: 600 }}>
                  {locale === 'ar' ? `الخطوة ${step} من 2` : `STEP ${step} OF 2`}
                </span>
                <span className="caption">
                  {step === 1 ? t.inquireModal.step1 : t.inquireModal.step2}
                </span>
              </div>
              <div
                style={{
                  width: '100%',
                  height: '2px',
                  backgroundColor: 'var(--border)',
                  marginTop: '8px',
                  position: 'relative'
                }}
              >
                <div
                  style={{
                    width: step === 1 ? '50%' : '100%',
                    height: '100%',
                    backgroundColor: 'var(--puli-brown)',
                    transition: 'width 0.3s ease'
                  }}
                />
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit}>
              {step === 1 ? (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  {/* Guests */}
                  <div>
                    <label className="label-sm" style={{ display: 'block', marginBottom: '8px', color: 'var(--ink)' }}>
                      <Users size={14} style={{ display: 'inline', marginInlineEnd: '6px' }} />
                      {t.inquireModal.guestCount}
                    </label>
                    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                      {[2, 4, 6, 8, 12, 20].map((num) => (
                        <button
                          key={num}
                          type="button"
                          onClick={() => setGuests(num)}
                          style={{
                            padding: '8px 16px',
                            border: `1px solid ${guests === num ? 'var(--puli-brown)' : 'var(--border)'}`,
                            backgroundColor: guests === num ? 'var(--puli-brown)' : 'transparent',
                            color: guests === num ? '#fff' : 'var(--ink)',
                            fontSize: '13px',
                            fontWeight: 600,
                            cursor: 'pointer'
                          }}
                        >
                          {num} {locale === 'ar' ? 'ضيوف' : 'Guests'}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Date & Time Grid */}
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                    <div>
                      <label className="label-sm" style={{ display: 'block', marginBottom: '8px', color: 'var(--ink)' }}>
                        <Calendar size={14} style={{ display: 'inline', marginInlineEnd: '6px' }} />
                        {t.inquireModal.date}
                      </label>
                      <input
                        type="date"
                        required
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        style={{
                          width: '100%',
                          padding: '12px',
                          border: '1px solid var(--border)',
                          backgroundColor: '#fff',
                          fontSize: '14px',
                          color: 'var(--ink)'
                        }}
                      />
                    </div>

                    <div>
                      <label className="label-sm" style={{ display: 'block', marginBottom: '8px', color: 'var(--ink)' }}>
                        <Clock size={14} style={{ display: 'inline', marginInlineEnd: '6px' }} />
                        {t.inquireModal.time}
                      </label>
                      <select
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                        style={{
                          width: '100%',
                          padding: '12px',
                          border: '1px solid var(--border)',
                          backgroundColor: '#fff',
                          fontSize: '14px',
                          color: 'var(--ink)'
                        }}
                      >
                        <option value="12:30">12:30 PM (Lunch)</option>
                        <option value="13:30">01:30 PM (Lunch)</option>
                        <option value="19:00">07:00 PM (Dinner)</option>
                        <option value="20:00">08:00 PM (Dinner)</option>
                        <option value="21:30">09:30 PM (Dinner)</option>
                      </select>
                    </div>
                  </div>

                  {/* Space Choice (if event) */}
                  {bookingType === 'event' && (
                    <div>
                      <label className="label-sm" style={{ display: 'block', marginBottom: '8px', color: 'var(--ink)' }}>
                        {t.inquireModal.space}
                      </label>
                      <select
                        value={selectedSpace}
                        onChange={(e) => setSelectedSpace(e.target.value)}
                        style={{
                          width: '100%',
                          padding: '12px',
                          border: '1px solid var(--border)',
                          backgroundColor: '#fff',
                          fontSize: '14px',
                          color: 'var(--ink)'
                        }}
                      >
                        {spacesData.map((s) => (
                          <option key={s.id} value={s.id}>
                            {s.name[locale]} ({s.capacity.seated} {locale === 'ar' ? 'مقعد' : 'Guests'})
                          </option>
                        ))}
                      </select>
                    </div>
                  )}

                  {/* Actions */}
                  <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '16px' }}>
                    <Button
                      type="button"
                      variant="primary"
                      onClick={() => setStep(2)}
                      style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
                    >
                      <span>{locale === 'ar' ? 'التالي: بيانات الاتصال' : 'Next: Contact Info'}</span>
                      {isRtl ? <ArrowLeft size={16} /> : <ArrowRight size={16} />}
                    </Button>
                  </div>
                </div>
              ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {/* Name */}
                  <div>
                    <label className="label-sm" style={{ display: 'block', marginBottom: '6px', color: 'var(--ink)' }}>
                      {t.inquireModal.fullName} *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder={locale === 'ar' ? 'الاسم الثلاثي' : 'e.g. Abdullah Al-Mansoor'}
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      style={{
                        width: '100%',
                        padding: '12px',
                        border: '1px solid var(--border)',
                        backgroundColor: '#fff',
                        fontSize: '14px'
                      }}
                    />
                  </div>

                  {/* Phone & Email */}
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                    <div>
                      <label className="label-sm" style={{ display: 'block', marginBottom: '6px', color: 'var(--ink)' }}>
                        {t.inquireModal.phone} *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+966 5X XXX XXXX"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
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
                        {t.inquireModal.email} *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="name@company.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
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

                  {/* Company */}
                  {bookingType === 'event' && (
                    <div>
                      <label className="label-sm" style={{ display: 'block', marginBottom: '6px', color: 'var(--ink)' }}>
                        {t.inquireModal.company}
                      </label>
                      <input
                        type="text"
                        placeholder={locale === 'ar' ? 'اسم المنشأة أو الشركة' : 'Company or Organization'}
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        style={{
                          width: '100%',
                          padding: '12px',
                          border: '1px solid var(--border)',
                          backgroundColor: '#fff',
                          fontSize: '14px'
                        }}
                      />
                    </div>
                  )}

                  {/* Notes */}
                  <div>
                    <label className="label-sm" style={{ display: 'block', marginBottom: '6px', color: 'var(--ink)' }}>
                      {t.inquireModal.notes}
                    </label>
                    <textarea
                      rows={3}
                      placeholder={locale === 'ar' ? 'أي تفاصيل إضافية أو حمية غذائية خاصة...' : 'Dietary allergies, VIP seating preferences...'}
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      style={{
                        width: '100%',
                        padding: '12px',
                        border: '1px solid var(--border)',
                        backgroundColor: '#fff',
                        fontSize: '14px'
                      }}
                    />
                  </div>

                  {/* Actions */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '16px' }}>
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      style={{
                        background: 'none',
                        border: 'none',
                        color: 'var(--muted)',
                        cursor: 'pointer',
                        fontSize: '13px',
                        fontWeight: 600,
                        letterSpacing: '1px'
                      }}
                    >
                      {locale === 'ar' ? '← العودة' : '← Back'}
                    </button>

                    <Button type="submit" variant="primary" disabled={isSubmitting}>
                      {isSubmitting
                        ? (locale === 'ar' ? 'جاري المعالجة...' : 'Processing...')
                        : bookingType === 'dining'
                        ? t.inquireModal.submit
                        : t.inquireModal.submitEvent}
                    </Button>
                  </div>
                </div>
              )}
            </form>
          </div>
        ) : (
          /* Confirmation Success Card */
          <div style={{ textAlign: 'center', paddingBlock: '30px' }}>
            <div
              style={{
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                backgroundColor: 'var(--puli-brown-alpha10)',
                color: 'var(--puli-brown)',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '24px'
              }}
            >
              <Check size={32} />
            </div>
            <h3 className="headline-sm" style={{ marginBottom: '12px', color: 'var(--ink)' }}>
              {t.inquireModal.successHeading}
            </h3>
            <p className="body-md" style={{ color: 'var(--muted)', maxWidth: '440px', margin: '0 auto 32px' }}>
              {t.inquireModal.successBody}
            </p>
            <div
              style={{
                backgroundColor: 'var(--sand)',
                padding: '20px',
                marginBottom: '32px',
                textAlign: 'start',
                fontSize: '13px',
                lineHeight: 1.6
              }}
            >
              <div><strong>{locale === 'ar' ? 'الاسم:' : 'Guest:'}</strong> {name || 'Valued Guest'}</div>
              <div><strong>{locale === 'ar' ? 'التاريخ والوقت:' : 'Schedule:'}</strong> {date || 'Selected Date'} at {time}</div>
              <div><strong>{locale === 'ar' ? 'عدد الضيوف:' : 'Party Size:'}</strong> {guests} {locale === 'ar' ? 'أشخاص' : 'Guests'}</div>
            </div>
            <Button variant="primary" onClick={onClose}>
              {t.inquireModal.close}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};
