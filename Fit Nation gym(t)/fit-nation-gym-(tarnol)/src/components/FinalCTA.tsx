import React from 'react';
import { Phone, ArrowRight, Navigation, CheckCircle2 } from 'lucide-react';
import { GYM_INFO } from '../data/gymData';
import { useNavigation } from '../context/NavigationContext';
import { ScrollReveal } from './ScrollReveal';

export const FinalCTA: React.FC = () => {
  const { navigate } = useNavigation();

  return (
    <section className="py-24 bg-[#111111] border-b border-[#222222] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-[#161616] border border-[#2B2B2B] p-8 sm:p-14 lg:p-16 shadow-2xl overflow-hidden">
          {/* Subtle Decorative Yellow Glow */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#FFE600]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl">
            <ScrollReveal>
              <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-[#FFE600] mb-4 px-3 py-1 bg-[#FFE600]/10 border border-[#FFE600]/30 rounded font-stylish">
                Start Today
              </div>

              <h2 className="font-display text-5xl sm:text-7xl lg:text-8xl font-normal uppercase tracking-wide text-white leading-[0.88] mb-6">
                READY TO BUILD YOUR <br />
                <span className="text-[#FFE600]">
                  STRONGEST SELF?
                </span>
              </h2>

              <p className="text-base sm:text-lg text-neutral-300 leading-relaxed mb-8">
                Join our supportive fitness community in Tarnol, Islamabad. Whether you are stepping into a gym for the first time or leveling up your training, we have the space, equipment, and hours to support your routine.
              </p>

              <div className="flex flex-wrap items-center gap-y-3 gap-x-6 text-xs text-white font-bold mb-10 font-mono">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#FFE600]" />
                  <span>Ladies & Gents Dedicated Sections</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#FFE600]" />
                  <span>Open Daily 6:30 AM to Midnight</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#FFE600]" />
                  <span>Verified 4.6★ Google Rating</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <button
                  onClick={() => navigate('membership')}
                  className="inline-flex items-center justify-center gap-2.5 px-8 py-4 text-xs sm:text-sm font-extrabold uppercase tracking-widest text-black bg-[#FFE600] hover:bg-[#edd400] active:scale-[0.98] transition-all rounded-xl shadow-lg shadow-[#FFE600]/25 font-stylish"
                >
                  <span>Explore Membership Options</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href={`tel:${GYM_INFO.phoneRaw}`}
                  className="inline-flex items-center justify-center gap-2.5 px-8 py-4 text-xs sm:text-sm font-bold uppercase tracking-wider text-white bg-[#202020] border border-[#333333] hover:border-[#FFE600] hover:text-[#FFE600] active:scale-[0.98] transition-all rounded-xl shadow-sm"
                >
                  <Phone className="w-4 h-4 text-[#FFE600]" />
                  <span>Call +92 315 3588144</span>
                </a>

                <a
                  href={GYM_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-4 text-xs font-bold uppercase tracking-wider text-neutral-400 hover:text-white transition-colors"
                >
                  <Navigation className="w-3.5 h-3.5 text-[#FFE600]" />
                  <span>Get Directions</span>
                </a>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};
