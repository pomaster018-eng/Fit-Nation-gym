import React from 'react';
import { Shield, MapPin, Target, PhoneCall } from 'lucide-react';
import { GYM_INFO } from '../data/gymData';
import { useNavigation } from '../context/NavigationContext';
import { ScrollReveal } from './ScrollReveal';

export const WhyChooseUs: React.FC = () => {
  const { navigate } = useNavigation();

  const points = [
    {
      icon: Shield,
      title: "Serving Ladies & Gentlemen",
      description:
        "Dedicated fitness space accommodating both women and men with structured hours to provide peace of mind, privacy, and full access to fitness gear.",
    },
    {
      icon: MapPin,
      title: "Convenient Tarnol, Islamabad Location",
      description:
        "Easily located at MW25+J4R in Tarnol, saving you transit time and making daily workouts a seamless part of your daily routine in Islamabad.",
    },
    {
      icon: Target,
      title: "A Focused Place for Personal Goals",
      description:
        "Whether your goal is lifting heavier, cardiovascular endurance, weight management, or general well-being, the gym provides the environment to stay accountable.",
    },
    {
      icon: PhoneCall,
      title: "Direct & Transparent Communication",
      description:
        "Direct front-desk access via phone and WhatsApp. No convoluted sign-up barriers, hidden contracts, or unanswered inquiries.",
    },
  ];

  return (
    <section className="py-24 bg-[#0A0A0A] border-b border-[#222222]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <ScrollReveal>
            <div className="text-xs font-extrabold uppercase tracking-widest text-[#FFE600] inline-block px-3 py-1 bg-[#FFE600]/10 border border-[#FFE600]/30 rounded mb-3 font-stylish">
              The Fit Nation Advantage
            </div>
            <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl font-normal uppercase tracking-wide text-white leading-none">
              WHY TRAIN AT <span className="text-[#FFE600]">FIT NATION GYM?</span>
            </h2>
            <p className="mt-4 text-base sm:text-lg text-neutral-300">
              We keep things straightforward: reliable equipment, comfortable training slots, and a prime Tarnol location designed for everyday consistency.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {points.map((pt, i) => {
            const Icon = pt.icon;
            return (
              <ScrollReveal key={pt.title} delay={i * 90}>
                <div className="h-full p-6 sm:p-8 bg-[#141414] rounded-2xl border border-[#262626] hover:border-[#FFE600] hover:shadow-[0_0_25px_-5px_rgba(255,230,0,0.2)] transition-all duration-300 flex items-start gap-5 sm:gap-6 text-left">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-[#1E1E1E] border border-[#333333] text-[#FFE600] flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                    <Icon className="w-6 h-6 sm:w-7 sm:h-7" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-display text-2xl sm:text-3xl font-normal uppercase text-white tracking-wide mb-2.5 leading-snug">
                      {pt.title}
                    </h3>
                    <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-normal">
                      {pt.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Quick Contact Banner */}
        <ScrollReveal delay={250}>
          <div className="mt-12 sm:mt-16 p-6 sm:p-8 rounded-2xl bg-[#141414] border border-[#2B2B2B] flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-xl text-left">
            <div className="space-y-1.5 flex-1 min-w-0">
              <div className="font-display text-2xl sm:text-3xl font-normal uppercase text-white tracking-wide leading-snug">
                Ready to take a look in person?
              </div>
              <div className="text-xs sm:text-sm text-neutral-400 leading-relaxed font-normal">
                Drop by anytime between 6:30 AM and 12:00 AM midnight at Tarnol, Islamabad.
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <button
                onClick={() => navigate('membership')}
                className="px-6 py-3.5 text-xs font-extrabold uppercase tracking-widest text-black bg-[#FFE600] hover:bg-[#edd400] rounded transition-all font-stylish whitespace-nowrap shadow-md shadow-[#FFE600]/20"
              >
                Inquire Rates
              </button>
              <a
                href={`tel:${GYM_INFO.phoneRaw}`}
                className="px-5 py-3.5 text-xs font-bold uppercase tracking-wider text-white bg-[#1F1F1F] border border-[#333333] hover:border-[#FFE600] hover:text-[#FFE600] rounded transition-colors whitespace-nowrap"
              >
                Call +92 315 3588144
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
