import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, ArrowUpRight } from 'lucide-react';
import { GYM_INFO } from '../data/gymData';
import { useNavigation, PageRoute } from '../context/NavigationContext';
import { useTheme } from '../context/ThemeContext';
import { GymLogo } from './GymLogo';
import { ThemeToggle } from './ThemeToggle';

export const Navbar: React.FC = () => {
  const { currentPage, navigate } = useNavigation();
  const { isDark } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { label: string; route: PageRoute }[] = [
    { label: 'Home', route: 'home' },
    { label: 'About', route: 'about' },
    { label: 'Facilities', route: 'facilities' },
    { label: 'Membership', route: 'membership' },
    { label: 'Gallery', route: 'gallery' },
    { label: 'Reviews', route: 'reviews' },
    { label: 'Contact', route: 'contact' },
  ];

  const handleNavClick = (route: PageRoute) => {
    navigate(route);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`sticky top-0 left-0 right-0 z-50 transition-all duration-200 ${
          isScrolled
            ? 'bg-[#0A0A0A]/95 backdrop-blur-md shadow-lg shadow-black/50 border-b border-[#262626]'
            : 'bg-[#0A0A0A] border-b border-[#1F1F1F]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-6 h-20">
            {/* Zone 1: Unified Brand Logo */}
            <button
              onClick={() => handleNavClick('home')}
              className="text-left shrink-0 hover:opacity-90 transition-opacity focus:outline-none"
              aria-label="Fit Nation Gym Home"
            >
              <GymLogo size="md" />
            </button>

            {/* Zone 2: Navigation Links with Stylish Typography & Yellow Underline */}
            <nav className="hidden lg:flex items-center gap-7 text-sm font-semibold tracking-wide text-neutral-300">
              {navLinks.map((link) => {
                const isActive = currentPage === link.route;
                return (
                  <button
                    key={link.label}
                    onClick={() => handleNavClick(link.route)}
                    className={`whitespace-nowrap shrink-0 py-2 relative transition-colors ${
                      isActive
                        ? 'text-white font-bold'
                        : 'hover:text-[#FFE600]'
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#FFE600] rounded-full shadow-[0_0_8px_#FFE600]" />
                    )}
                  </button>
                );
              })}
            </nav>

            {/* Zone 3: Primary Yellow Action Button & Theme Switcher & Mobile Toggle */}
            <div className="flex items-center gap-2 sm:gap-3 shrink-0">
              {/* Switch Theme Button (Dark to Light / Light to Dark) */}
              <ThemeToggle variant="icon" />

              <button
                onClick={() => handleNavClick('membership')}
                className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 text-xs font-extrabold uppercase tracking-widest text-black bg-[#FFE600] hover:bg-[#f0d800] active:scale-[0.98] transition-all whitespace-nowrap rounded font-stylish shadow-[0_0_15px_-3px_rgba(255,230,0,0.4)]"
              >
                Join Our Gym
              </button>

              <a
                href={`tel:${GYM_INFO.phoneRaw}`}
                className="hidden md:inline-flex items-center justify-center p-2.5 text-white hover:text-[#FFE600] bg-[#141414] hover:bg-[#1E1E1E] border border-[#2B2B2B] hover:border-[#FFE600]/60 rounded transition-all"
                title="Call Fit Nation Gym"
              >
                <Phone className="w-4 h-4" />
              </a>

              {/* Mobile Menu Trigger */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle navigation menu"
                className="lg:hidden p-2 text-white hover:text-[#FFE600] bg-[#141414] rounded border border-[#2B2B2B] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FFE600]"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/80 backdrop-blur-sm lg:hidden"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="fixed top-20 right-0 bottom-0 w-full max-w-xs bg-[#111111] border-l border-[#262626] p-6 flex flex-col justify-between shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="space-y-6">
              {/* Header & Theme Switcher in Mobile Drawer */}
              <div className="flex items-center justify-between pb-3 border-b border-[#262626]">
                <div className="text-xs uppercase tracking-widest text-[#FFE600] font-mono font-bold flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#FFE600]" />
                  Menu
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[11px] uppercase font-bold tracking-wider text-neutral-400 font-stylish">
                    {isDark ? 'Dark' : 'Light'}
                  </span>
                  <ThemeToggle variant="switch" />
                </div>
              </div>
              <nav className="flex flex-col space-y-2">
                {navLinks.map((link) => {
                  const isActive = currentPage === link.route;
                  return (
                    <button
                      key={link.label}
                      onClick={() => handleNavClick(link.route)}
                      className={`text-left text-sm font-stylish font-extrabold tracking-widest uppercase py-3 px-3 rounded transition-colors flex items-center justify-between ${
                        isActive
                          ? 'bg-[#1C1C1C] text-[#FFE600] border-l-4 border-[#FFE600]'
                          : 'text-neutral-300 hover:text-white hover:bg-[#181818]'
                      }`}
                    >
                      <span>{link.label}</span>
                      {isActive && <span className="text-xs font-mono text-[#FFE600]">●</span>}
                    </button>
                  );
                })}
              </nav>
            </div>

            <div className="space-y-3 pt-6 border-t border-[#262626]">
              <button
                onClick={() => handleNavClick('membership')}
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 text-xs font-extrabold uppercase tracking-widest text-black bg-[#FFE600] hover:bg-[#f0d800] rounded transition-all font-stylish shadow-lg shadow-[#FFE600]/20"
              >
                Join Our Gym
              </button>
              <a
                href={`tel:${GYM_INFO.phoneRaw}`}
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-bold uppercase tracking-wider text-white bg-[#1A1A1A] border border-[#333333] hover:border-[#FFE600] rounded transition-colors"
              >
                <Phone className="w-4 h-4 text-[#FFE600]" />
                Call +92 315 3588144
              </a>
              <a
                href={GYM_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-semibold text-neutral-400 hover:text-white transition-colors"
              >
                <span>Find on Google Maps</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#FFE600]" />
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
