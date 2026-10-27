import React from 'react';
import { ArrowRight, Check, MapPin } from 'lucide-react';
import { GYM_INFO } from '../data/gymData';
import { useNavigation } from '../context/NavigationContext';
import { ScrollReveal } from './ScrollReveal';
import { handleImageError } from '../utils/imageFallback';

export const AboutPreview: React.FC = () => {
  const { navigate } = useNavigation();

  return (
    <section className="py-24 bg-[#0A0A0A] border-b border-[#222222]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Image with Clean Dark Frame & Yellow Rim */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <ScrollReveal direction="none">
              <div className="relative rounded-2xl overflow-hidden border border-[#2D2D2D] bg-[#161616] shadow-2xl group">
                <img
                  src="/images/facility_strength_weights_1792003058787.jpg"
                  alt="Fit Nation Gym strength training atmosphere in Tarnol"
                  onError={handleImageError}
                  className="w-full h-[480px] object-cover object-center transform group-hover:scale-[1.03] transition-transform duration-700 filter brightness-[0.9] contrast-[1.1]"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent" />

                {/* Floating card */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-[#121212]/95 backdrop-blur-md border border-[#333333] shadow-lg">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#FFE600] font-stylish">
                    <MapPin className="w-4 h-4 text-[#FFE600]" />
                    Tarnol, Islamabad
                  </div>
                  <div className="text-base font-extrabold text-white mt-1 font-stylish tracking-wide">
                    Fit Nation Gym (Tarnol)
                  </div>
                  <div className="text-xs text-neutral-400 mt-0.5">
                    Ladies & Gents Fitness Space · MW25+J4R
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Story & Commitments */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            <ScrollReveal>
              <div className="text-xs font-extrabold uppercase tracking-widest text-[#FFE600] inline-block px-3 py-1 bg-[#FFE600]/10 border border-[#FFE600]/30 rounded mb-2 font-stylish">
                About Fit Nation Gym
              </div>

              <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl font-normal uppercase tracking-wide text-white leading-none">
                MORE THAN A <span className="text-[#FFE600]">WORKOUT.</span>
              </h2>

              <p className="text-lg text-neutral-200 leading-relaxed font-normal">
                Fit Nation Gym is a fitness destination in Tarnol, Islamabad, serving people who want to make fitness part of their routine. Whether you're starting your journey or maintaining an active lifestyle, our goal is to help you show up, stay consistent, and keep moving toward your goals.
              </p>

              <p className="text-sm text-neutral-400 leading-relaxed">
                Consistency is the foundation of every physical transformation. Our gym offers an uncluttered, motivating space with verified equipment where you can focus entirely on strength, conditioning, and discipline.
              </p>
            </ScrollReveal>

            {/* Core commitments grid */}
            <ScrollReveal delay={150}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 bg-[#141414] rounded-xl border border-[#262626] hover:border-[#FFE600]/40 transition-colors">
                  <div className="flex items-center gap-2 text-white font-display text-2xl uppercase tracking-wide">
                    <Check className="w-5 h-5 text-[#FFE600]" />
                    Ladies & Gents Spaces
                  </div>
                  <p className="text-xs text-neutral-400 mt-1 leading-relaxed">
                    Designed for comfort, privacy, and full access for ladies and gentlemen.
                  </p>
                </div>

                <div className="p-4 bg-[#141414] rounded-xl border border-[#262626] hover:border-[#FFE600]/40 transition-colors">
                  <div className="flex items-center gap-2 text-white font-display text-2xl uppercase tracking-wide">
                    <Check className="w-5 h-5 text-[#FFE600]" />
                    Comprehensive Equipment
                  </div>
                  <p className="text-xs text-neutral-400 mt-1 leading-relaxed">
                    From free weights to selectorized machines, all gear is tailored for real results.
                  </p>
                </div>

                <div className="p-4 bg-[#141414] rounded-xl border border-[#262626] hover:border-[#FFE600]/40 transition-colors">
                  <div className="flex items-center gap-2 text-white font-display text-2xl uppercase tracking-wide">
                    <Check className="w-5 h-5 text-[#FFE600]" />
                    6:30 AM to Midnight Hours
                  </div>
                  <p className="text-xs text-neutral-400 mt-1 leading-relaxed">
                    Flexible daily access fits morning risers and evening commuters alike.
                  </p>
                </div>

                <div className="p-4 bg-[#141414] rounded-xl border border-[#262626] hover:border-[#FFE600]/40 transition-colors">
                  <div className="flex items-center gap-2 text-white font-display text-2xl uppercase tracking-wide">
                    <Check className="w-5 h-5 text-[#FFE600]" />
                    Central Tarnol Location
                  </div>
                  <p className="text-xs text-neutral-400 mt-1 leading-relaxed">
                    Easily accessible for community members across Tarnol and Islamabad.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={250}>
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => navigate('about')}
                  className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-extrabold uppercase tracking-widest text-black bg-[#FFE600] hover:bg-[#f0d800] rounded transition-all font-stylish shadow-lg shadow-[#FFE600]/15"
                >
                  <span>Learn More About Us</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <a
                  href={`tel:${GYM_INFO.phoneRaw}`}
                  className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white bg-[#141414] border border-[#2E2E2E] hover:border-[#FFE600] hover:text-[#FFE600] rounded transition-colors"
                >
                  Call +92 315 3588144
                </a>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};
