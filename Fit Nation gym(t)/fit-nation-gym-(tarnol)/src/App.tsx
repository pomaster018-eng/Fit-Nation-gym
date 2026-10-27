import React, { useState } from 'react';
import { NavigationProvider, useNavigation } from './context/NavigationContext';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { MobileBottomBar } from './components/MobileBottomBar';
import { OwnerNoticeModal } from './components/OwnerNoticeModal';

// Pages
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { FacilitiesPage } from './pages/FacilitiesPage';
import { MembershipPage } from './pages/MembershipPage';
import { GalleryPage } from './pages/GalleryPage';
import { ReviewsPage } from './pages/ReviewsPage';
import { ContactPage } from './pages/ContactPage';
import { PrivacyPage } from './pages/PrivacyPage';
import { TermsPage } from './pages/TermsPage';
import { NotFoundPage } from './pages/NotFoundPage';

const AppContent: React.FC = () => {
  const { currentPage } = useNavigation();
  const { isLight } = useTheme();
  const [ownerGuideOpen, setOwnerGuideOpen] = useState(false);

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'about':
        return <AboutPage />;
      case 'facilities':
        return <FacilitiesPage />;
      case 'membership':
        return <MembershipPage />;
      case 'gallery':
        return <GalleryPage />;
      case 'reviews':
        return <ReviewsPage />;
      case 'contact':
        return <ContactPage />;
      case 'privacy':
        return <PrivacyPage />;
      case 'terms':
        return <TermsPage />;
      case '404':
      default:
        return <NotFoundPage />;
    }
  };

  return (
    <div
      className={`min-h-screen flex flex-col selection:bg-[#FFE600] selection:text-black pb-14 md:pb-0 font-sans transition-colors duration-300 ${
        isLight ? 'bg-white text-[#181818]' : 'bg-[#0A0A0A] text-white'
      }`}
    >
      {/* Sticky Navigation Bar with Theme Switcher */}
      <Navbar />

      {/* Main Dynamic Page Content */}
      <main className="flex-1">
        {renderCurrentPage()}
      </main>

      {/* Footer */}
      <Footer onOpenOwnerGuide={() => setOwnerGuideOpen(true)} />

      {/* Mobile Sticky Bottom Bar */}
      <MobileBottomBar />

      {/* Owner Customization & Verification Modal */}
      <OwnerNoticeModal
        isOpen={ownerGuideOpen}
        onClose={() => setOwnerGuideOpen(false)}
      />
    </div>
  );
};

export default function App() {
  return (
    <ThemeProvider>
      <NavigationProvider>
        <AppContent />
      </NavigationProvider>
    </ThemeProvider>
  );
}
