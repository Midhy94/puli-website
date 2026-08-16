import React, { useState, useEffect } from 'react';
import { useLanguage } from './i18n/LanguageContext';
import { Header } from './components/layout/Header';
import { NavOverlay } from './components/layout/NavOverlay';
import { InquireOverlay } from './components/layout/InquireOverlay';
import { StickyActionBar } from './components/layout/StickyActionBar';
import { Footer } from './components/layout/Footer';

import { restaurantInfo } from './data/restaurantInfo';

// Pages
import { HomePage } from './pages/HomePage';
import { StoryPage } from './pages/StoryPage';
import { DiningPage } from './pages/DiningPage';
import { PrivateDiningPage } from './pages/PrivateDiningPage';
import { EventsPage } from './pages/EventsPage';
import { GalleryPage } from './pages/GalleryPage';
import { ContactPage } from './pages/ContactPage';

export const App: React.FC = () => {
  const { locale, setLocale } = useLanguage();
  const [currentPath, setCurrentPath] = useState<string>(window.location.pathname);
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false);
  const [isInquireOpen, setIsInquireOpen] = useState<boolean>(false);
  const [inquireType, setInquireType] = useState<'dining' | 'event'>('dining');

  // Handle client-side routing & browser back/forward
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Synchronize locale when path changes
  useEffect(() => {
    if (currentPath.startsWith('/ar') && locale !== 'ar') {
      setLocale('ar');
    } else if (currentPath.startsWith('/en') && locale !== 'en') {
      setLocale('en');
    }
  }, [currentPath, locale, setLocale]);

  const handleNavigate = (path: string) => {
    if (path !== currentPath) {
      window.history.pushState({}, '', path);
      setCurrentPath(path);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleOpenReserve = () => {
    setInquireType('dining');
    setIsInquireOpen(true);
  };

  const handleOpenEventInquire = () => {
    setInquireType('event');
    setIsInquireOpen(true);
  };

  // Determine active view from currentPath
  const getActivePage = () => {
    const normalized = currentPath.replace(/^\/(en|ar)/, '') || '/';

    switch (normalized) {
      case '/menu':
        window.location.replace(restaurantInfo.menuUrl);
        return null;
      case '/our-story':
      case '/story':
        return <StoryPage onOpenReserve={handleOpenReserve} />;
      case '/dining':
        return <DiningPage onOpenReserve={handleOpenReserve} onNavigate={handleNavigate} />;
      case '/private-dining':
        return <PrivateDiningPage onOpenReserve={handleOpenReserve} />;
      case '/events':
        return <EventsPage onOpenEventInquire={handleOpenEventInquire} />;
      case '/gallery':
        return <GalleryPage onOpenReserve={handleOpenReserve} />;
      case '/contact':
        return <ContactPage onOpenReserve={handleOpenReserve} />;
      case '/':
      default:
        return (
          <HomePage
            onNavigate={handleNavigate}
            onOpenReserve={handleOpenReserve}
            onOpenEventInquire={handleOpenEventInquire}
          />
        );
    }
  };

  return (
    <div className="puli-app-root">
      {/* Navigation Header */}
      <Header
        onOpenNav={() => setIsNavOpen(true)}
        onOpenReserve={handleOpenReserve}
        currentPath={currentPath}
        onNavigate={handleNavigate}
      />

      {/* Fullscreen Navigation Modal (Supreme Luxury pattern) */}
      <NavOverlay
        isOpen={isNavOpen}
        onClose={() => setIsNavOpen(false)}
        onNavigate={handleNavigate}
        onOpenReserve={handleOpenReserve}
      />

      {/* Interactive Reservation / Event Proposal Modal */}
      <InquireOverlay
        isOpen={isInquireOpen}
        onClose={() => setIsInquireOpen(false)}
        initialType={inquireType}
      />

      {/* Main Page Canvas */}
      <main id="main-content">
        {getActivePage()}
      </main>

      {/* Mobile Sticky Quick Action Bar */}
      <StickyActionBar onOpenReserve={handleOpenReserve} />

      {/* Luxury Editorial Footer */}
      <Footer onNavigate={handleNavigate} onOpenReserve={handleOpenReserve} />
    </div>
  );
};
