import React, { createContext, useContext, useState, useEffect } from 'react';
import { contentEn } from '../data/content.en';
import { contentAr } from '../data/content.ar';

export type Locale = 'en' | 'ar';

interface LanguageContextType {
  locale: Locale;
  setLocale: (loc: Locale) => void;
  toggleLocale: () => void;
  isRTL: boolean;
  t: typeof contentEn;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Parse initial locale from URL if present
  const getInitialLocale = (): Locale => {
    const path = window.location.pathname;
    if (path.startsWith('/ar')) return 'ar';
    return 'en';
  };

  const [locale, setLocaleState] = useState<Locale>(getInitialLocale);

  const isRTL = locale === 'ar';
  const t = locale === 'ar' ? (contentAr as unknown as typeof contentEn) : contentEn;

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    
    // Update Document attributes
    document.documentElement.lang = newLocale;
    document.documentElement.dir = newLocale === 'ar' ? 'rtl' : 'ltr';

    // Update URL prefix smoothly without full page reload
    const currentPath = window.location.pathname;
    let newPath = currentPath;
    if (newLocale === 'ar' && !currentPath.startsWith('/ar')) {
      newPath = currentPath.startsWith('/en') ? currentPath.replace('/en', '/ar') : `/ar${currentPath}`;
    } else if (newLocale === 'en' && currentPath.startsWith('/ar')) {
      newPath = currentPath.replace('/ar', '/en');
    }
    
    if (newPath !== currentPath) {
      window.history.pushState({}, '', newPath + window.location.search);
    }
  };

  const toggleLocale = () => {
    setLocale(locale === 'en' ? 'ar' : 'en');
  };

  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
  }, [locale, isRTL]);

  return (
    <LanguageContext.Provider value={{ locale, setLocale, toggleLocale, isRTL, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
