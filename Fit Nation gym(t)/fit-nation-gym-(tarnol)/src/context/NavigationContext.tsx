import React, { createContext, useContext, useState, useEffect } from 'react';

export type PageRoute =
  | 'home'
  | 'about'
  | 'facilities'
  | 'membership'
  | 'gallery'
  | 'reviews'
  | 'contact'
  | 'privacy'
  | 'terms'
  | '404';

interface NavigationContextType {
  currentPage: PageRoute;
  navigate: (page: PageRoute) => void;
}

const NavigationContext = createContext<NavigationContextType>({
  currentPage: 'home',
  navigate: () => {},
});

export const NavigationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const getPageFromHash = (): PageRoute => {
    const hash = window.location.hash.replace(/^#\/?/, '').toLowerCase();
    switch (hash) {
      case '':
      case 'home':
        return 'home';
      case 'about':
        return 'about';
      case 'facilities':
        return 'facilities';
      case 'membership':
        return 'membership';
      case 'gallery':
        return 'gallery';
      case 'reviews':
        return 'reviews';
      case 'contact':
        return 'contact';
      case 'privacy':
        return 'privacy';
      case 'terms':
        return 'terms';
      default:
        if (hash.startsWith('about')) return 'about';
        if (hash.startsWith('facilities')) return 'facilities';
        if (hash.startsWith('membership')) return 'membership';
        if (hash.startsWith('gallery')) return 'gallery';
        if (hash.startsWith('reviews')) return 'reviews';
        if (hash.startsWith('contact')) return 'contact';
        if (hash.startsWith('privacy')) return 'privacy';
        if (hash.startsWith('terms')) return 'terms';
        return 'home';
    }
  };

  // Always initialize on 'home' when the user opens or reloads the website
  const [currentPage, setCurrentPage] = useState<PageRoute>(() => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash.replace(/^#\/?/, '').toLowerCase();
      // If opened or reloaded with contact or empty hash, always reset to home
      if (!hash || hash === 'home' || hash.includes('contact')) {
        if (window.location.hash) {
          try {
            window.history.replaceState(null, '', window.location.pathname + window.location.search);
          } catch {
            // Ignore history state errors
          }
        }
        return 'home';
      }
      return getPageFromHash();
    }
    return 'home';
  });

  useEffect(() => {
    // Disable automatic browser scroll restoration so reloading never jumps down
    if (typeof window !== 'undefined' && 'scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    // Always ensure viewport starts at the top
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });

    const handleHashChange = () => {
      const page = getPageFromHash();
      setCurrentPage(page);
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigate = (page: PageRoute) => {
    setCurrentPage(page);
    window.location.hash = page === 'home' ? '' : `#/${page}`;
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  return (
    <NavigationContext.Provider value={{ currentPage, navigate }}>
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavigation = () => useContext(NavigationContext);
