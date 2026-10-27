import React from 'react';
import { Navigation, ArrowRight, ShieldCheck, MapPin, Users, PhoneCall } from 'lucide-react';
import { GYM_INFO } from '../data/gymData';
import { useNavigation } from '../context/NavigationContext';
import { ScrollReveal } from './ScrollReveal';

import { handleImageError } from '../utils/imageFallback';

export const Hero: React.FC = () => {
  const { navigate } = useNavigation();

  return (
    <section className="relative bg-[#0A0A0A] pt-10 pb-16 lg:pt-16 lg:pb-24 overflow-hidden border-b border-[#222222]">
      {/* Background Subtle Gradient Lighting */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#FFE600]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[350px] h-[350px] bg-white/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Two-column Hero Composition on Desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Headlines & CTAs */}
          <div className="lg:col-span-7 flex flex-col justify-center">

            {/* Main Headline */}
            <ScrollReveal delay={120}>
              <h1 className="font-kg text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-normal uppercase tracking-wide text-white leading-[0.88] mb-6">
                BUILD A <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-[#FFE600]">
                  STRONGER YOU.
                </span>
              </h1>
            </ScrollReveal>

            {/* Supporting Text */}
            <ScrollReveal delay={200}>
              <p className="text-base sm:text-lg lg:text-xl text-neutral-300 font-normal leading-relaxed max-w-xl mb-8">
                Your fitness journey starts here. Train with purpose, build consistency, and work toward your goals at Fit Nation Gym in Tarnol, Islamabad.
              </p>
            </ScrollReveal>

            {/* CTA Buttons */}
            <ScrollReveal delay={280}>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <button
                  onClick={() => navigate('membership')}
                  className="inline-flex items-center justify-center gap-2.5 px-8 py-4 text-xs sm:text-sm font-extrabold uppercase tracking-widest text-black bg-[#FFE600] hover:bg-[#edd400] active:scale-[0.98] transition-all rounded font-stylish shadow-[0_0_20px_-3px_rgba(255,230,0,0.4)] whitespace-nowrap"
                >
                  <span>Join Our Gym</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href={GYM_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 px-8 py-4 text-xs sm:text-sm font-bold uppercase tracking-wider text-white bg-[#141414] border border-[#2E2E2E] hover:border-[#FFE600] hover:text-[#FFE600] active:scale-[0.98] transition-all rounded whitespace-nowrap"
                >
                  <Navigation className="w-4 h-4 text-[#FFE600]" />
                  <span>Get Directions</span>
                </a>

                <a
                  href={`tel:${GYM_INFO.phoneRaw}`}
                  className="inline-flex items-center justify-center gap-2 px-4 py-4 text-xs font-bold uppercase tracking-wider text-neutral-300 hover:text-[#FFE600] transition-colors"
                >
                  <PhoneCall className="w-3.5 h-3.5 text-[#FFE600]" />
                  <span>+92 315 3588144</span>
                </a>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Hero High-Contrast Fitness Photography */}
          <div className="lg:col-span-5">
            <ScrollReveal delay={200} direction="none">
              <div className="relative rounded-2xl overflow-hidden border border-[#2D2D2D] bg-[#141414] shadow-2xl group">
                <img
                  src="/images/hero_gym_dark_1792003058054.jpg"
                  alt="Fit Nation Gym training floor in Tarnol, Islamabad"
                  onError={handleImageError}
                  className="w-full h-[420px] sm:h-[480px] lg:h-[530px] object-cover object-center transform group-hover:scale-[1.03] transition-transform duration-700 filter brightness-[0.9] contrast-[1.1]"
                  referrerPolicy="no-referrer"
                  loading="eager"
                />

                {/* Subtle dark gradient scrim at base of photo */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-80" />
                
                {/* Floating Info Tag inside Hero Image */}
                <div className="absolute bottom-5 left-5 right-5 p-4 rounded-xl bg-[#111111]/95 backdrop-blur-md border border-[#333333] shadow-lg flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[#FFE600]/20 border border-[#FFE600] flex items-center justify-center text-[#FFE600] font-bold">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-bold uppercase tracking-wide text-white font-stylish">
                        Open Daily 6:30 AM – 12:00 AM
                      </div>
                      <div className="text-[11px] text-neutral-400">
                        MW25+J4R, Tarnol, Islamabad
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => navigate('contact')}
                    className="text-xs font-bold uppercase tracking-wider text-[#FFE600] hover:underline shrink-0"
                  >
                    View Info →
                  </button>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Clean Trust Strip Below Hero */}
        <ScrollReveal delay={350}>
          <div className="mt-14 pt-8 border-t border-[#222222]">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-5 rounded-xl bg-[#141414] border border-[#242424] hover:border-[#FFE600]/40 transition-colors flex items-start gap-4">
                <div className="p-2.5 rounded-lg bg-[#1F1F1F] border border-[#333333] text-[#FFE600] shrink-0">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-display text-2xl font-normal uppercase text-white tracking-wide">
                    Ladies & Gents
                  </div>
                  <p className="text-xs text-neutral-400 mt-1 leading-relaxed">
                    Dedicated sessions and welcoming environment for both women and men.
                  </p>
                </div>
              </div>

              <div className="p-5 rounded-xl bg-[#141414] border border-[#242424] hover:border-[#FFE600]/40 transition-colors flex items-start gap-4">
                <div className="p-2.5 rounded-lg bg-[#1F1F1F] border border-[#333333] text-[#FFE600] shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-display text-2xl font-normal uppercase text-white tracking-wide">
                    Located in Tarnol, Islamabad
                  </div>
                  <p className="text-xs text-neutral-400 mt-1 leading-relaxed">
                    Prime location at MW25+J4R with direct access for twin-city residents.
                  </p>
                </div>
              </div>

              <div className="p-5 rounded-xl bg-[#141414] border border-[#242424] hover:border-[#FFE600]/40 transition-colors flex items-start gap-4">
                <div className="p-2.5 rounded-lg bg-[#1F1F1F] border border-[#333333] text-[#FFE600] shrink-0">
                  <PhoneCall className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-display text-2xl font-normal uppercase text-white tracking-wide">
                    Contact for Membership
                  </div>
                  <p className="text-xs text-neutral-400 mt-1 leading-relaxed">
                    Call +92 315 3588144 or WhatsApp for transparent, on-site pricing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
