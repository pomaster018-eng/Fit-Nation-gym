import React from 'react';
import { Phone, MessageSquare, MapPin, ArrowUpRight } from 'lucide-react';
import { GYM_INFO } from '../data/gymData';
import { useNavigation, PageRoute } from '../context/NavigationContext';
import { GymLogo } from './GymLogo';
import { ThemeToggle } from './ThemeToggle';

interface FooterProps {
  onOpenOwnerGuide?: () => void;
}

export const Footer: React.FC<FooterProps> = () => {
  const { navigate } = useNavigation();
  const currentYear = new Date().getFullYear();

  const handleNav = (route: PageRoute) => {
    navigate(route);
  };

  return (
    <footer className="bg-[#070707] border-t border-[#1F1F1F] text-neutral-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand & Tagline */}
          <div className="space-y-4 md:col-span-1">
            <button
              onClick={() => handleNav('home')}
              className="text-left shrink-0 hover:opacity-90 transition-opacity focus:outline-none"
              aria-label="Fit Nation Gym Home"
            >
              <GymLogo size="md" />
            </button>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Ladies & Gents Fitness Center in Tarnol, Islamabad. Committed to helping our community build strength and stay consistent.
            </p>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#141414] border border-[#2B2B2B] rounded-lg text-[11px] font-bold text-[#FFE600] font-mono">
              ★ 4.6 / 5.0 Google Rating · 11 Reviews
            </div>
          </div>

          {/* Quick Nav */}
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-white mb-4 font-stylish">
              Explore Pages
            </div>
            <ul className="space-y-2.5">
              <li>
                <button onClick={() => handleNav('home')} className="hover:text-[#FFE600] transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('about')} className="hover:text-[#FFE600] transition-colors">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('facilities')} className="hover:text-[#FFE600] transition-colors">
                  Facilities & Equipment
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('membership')} className="hover:text-[#FFE600] transition-colors">
                  Membership Options
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('gallery')} className="hover:text-[#FFE600] transition-colors">
                  Facility Gallery
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('reviews')} className="hover:text-[#FFE600] transition-colors">
                  Google Reviews
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('contact')} className="hover:text-[#FFE600] transition-colors">
                  Contact & Hours
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-white mb-4 font-stylish">
              Contact & Inquiries
            </div>
            <ul className="space-y-3">
              <li className="flex items-center gap-2.5">
                <div className="p-1 rounded bg-[#141414] border border-[#262626] text-[#FFE600]">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <a href={`tel:${GYM_INFO.phoneRaw}`} className="hover:text-[#FFE600] font-bold text-white transition-colors font-mono">
                  {GYM_INFO.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <div className="p-1 rounded bg-[#141414] border border-[#262626] text-[#FFE600]">
                  <MessageSquare className="w-3.5 h-3.5" />
                </div>
                <a href={GYM_INFO.whatsappLink} target="_blank" rel="noopener noreferrer" className="hover:text-[#FFE600] font-semibold transition-colors">
                  WhatsApp Front Desk
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <div className="p-1 rounded bg-[#141414] border border-[#262626] text-[#FFE600] shrink-0 mt-0.5">
                  <MapPin className="w-3.5 h-3.5" />
                </div>
                <span className="leading-relaxed text-neutral-300">MW25+J4R, Tarnol, Islamabad, 44000, Pakistan</span>
              </li>
            </ul>
          </div>

          {/* Timings & Map */}
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-white mb-4 font-stylish">
              Hours & Directions
            </div>
            <p className="text-xs text-neutral-300 mb-3 leading-relaxed">
              Open Daily: 6:30 AM – 12:00 AM (Midnight)
              <br />
              <span className="text-[11px] text-neutral-400 font-mono">(Subject to confirmation)</span>
            </p>
            <a
              href={GYM_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-[#141414] border border-[#2B2B2B] text-white font-bold hover:border-[#FFE600] hover:text-[#FFE600] transition-colors"
            >
              <span>View on Google Maps</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#FFE600]" />
            </a>
          </div>
        </div>

        {/* Bottom bar with copyright and legal links */}
        <div className="pt-8 border-t border-[#1C1C1C] flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-neutral-400 font-mono">
          <div>
            © {currentYear} Fit Nation Gym (Tarnol) – Ladies & Gents. All rights reserved.
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={() => handleNav('privacy')}
              className="hover:text-[#FFE600] transition-colors"
            >
              Privacy Policy
            </button>
            <span>·</span>
            <button
              onClick={() => handleNav('terms')}
              className="hover:text-[#FFE600] transition-colors"
            >
              Terms & Conditions
            </button>
            <span>·</span>
            <ThemeToggle variant="pill" />
          </div>
        </div>
      </div>
    </footer>
  );
};
