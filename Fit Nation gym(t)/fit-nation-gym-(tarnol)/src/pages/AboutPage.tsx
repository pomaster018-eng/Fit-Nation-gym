import React from 'react';
import { CheckCircle2, MapPin, Target, Shield, Users } from 'lucide-react';
import { GYM_INFO } from '../data/gymData';
import { useNavigation } from '../context/NavigationContext';
import { ScrollReveal } from '../components/ScrollReveal';
import { handleImageError } from '../utils/imageFallback';

export const AboutPage: React.FC = () => {
  const { navigate } = useNavigation();

  return (
    <div className="bg-[#0A0A0A]">
      {/* Page Hero */}
      <section className="py-16 lg:py-24 bg-[#111111] border-b border-[#222222]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <ScrollReveal>
              <div className="text-xs font-extrabold uppercase tracking-widest text-[#FFE600] inline-block px-3 py-1 bg-[#FFE600]/10 border border-[#FFE600]/30 rounded mb-4 font-stylish">
                About Fit Nation Gym
              </div>
              <h1 className="font-display text-6xl sm:text-7xl lg:text-8xl font-normal uppercase tracking-wide text-white leading-[0.88] mb-6">
                PURPOSE. DISCIPLINE. <br />
                <span className="text-[#FFE600]">COMMUNITY.</span>
              </h1>
              <p className="text-lg sm:text-xl text-neutral-300 leading-relaxed">
                Fit Nation Gym is a fitness destination in Tarnol, Islamabad, serving people who want to make fitness part of their routine. Whether you're starting your journey or maintaining an active lifestyle, our goal is to help you show up, stay consistent, and keep moving toward your goals.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Main Philosophy & Photo Layout */}
      <section className="py-20 lg:py-28 border-b border-[#222222]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left: Imagery */}
            <div className="lg:col-span-6">
              <ScrollReveal direction="none">
                <div className="relative rounded-3xl overflow-hidden border border-[#2B2B2B] bg-[#141414] shadow-2xl">
                  <img
                    src="/images/facility_strength_weights_1792003058787.jpg"
                    alt="Fit Nation Gym modern training equipment in Tarnol"
                    onError={handleImageError}
                    className="w-full h-[520px] object-cover filter brightness-[0.9] contrast-[1.1]"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-[#111111]/95 backdrop-blur-md border border-[#333333] shadow-lg">
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#FFE600] font-stylish">
                      <MapPin className="w-4 h-4 text-[#FFE600]" />
                      <span>MW25+J4R, Tarnol, Islamabad, 44000</span>
                    </div>
                    <div className="text-xs text-neutral-300 mt-1 font-medium">
                      Serving ladies & gentlemen with verified gym equipment and supportive guidance.
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Right: Mission & Philosophy */}
            <div className="lg:col-span-6 space-y-6">
              <ScrollReveal>
                <div className="text-xs font-extrabold uppercase tracking-widest text-[#FFE600] mb-2 font-mono">
                  Fitness Philosophy
                </div>
                <h2 className="font-display text-4xl sm:text-5xl font-normal uppercase text-white leading-tight">
                  A Practical Space for Real Progress
                </h2>
                <p className="text-base text-neutral-300 leading-relaxed">
                  We believe fitness does not require hollow promises, hyper-complicated routines, or intimidation. Instead, it comes down to a reliable environment where you have access to clean machines, quality weights, and the encouragement to remain consistent week after week.
                </p>
                <p className="text-base text-neutral-300 leading-relaxed">
                  Our facility is built around the fundamental movements of human strength and cardiovascular endurance: squatting, pressing, pulling, and conditioning in an unhurried, focused atmosphere.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={150}>
                <div className="space-y-3.5 pt-2">
                  <div className="flex items-start gap-3">
                    <div className="p-1.5 rounded-lg bg-[#FFE600]/20 text-[#FFE600] shrink-0 mt-0.5">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <div>
                      <strong className="text-base text-white font-display tracking-wide uppercase block">Inclusive Ladies & Gents Accommodations</strong>
                      <span className="text-xs text-neutral-400">
                        We provide designated session timings so everyone can train with privacy, dignity, and confidence.
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-1.5 rounded-lg bg-[#FFE600]/20 text-[#FFE600] shrink-0 mt-0.5">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <div>
                      <strong className="text-base text-white font-display tracking-wide uppercase block">Top-Tier Twin City Equipment</strong>
                      <span className="text-xs text-neutral-400">
                        Member feedback highlights that our range and condition of machines rivals top-tier twin-city gyms.
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-1.5 rounded-lg bg-[#FFE600]/20 text-[#FFE600] shrink-0 mt-0.5">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <div>
                      <strong className="text-base text-white font-display tracking-wide uppercase block">Extended Timings (6:30 AM – Midnight)</strong>
                      <span className="text-xs text-neutral-400">
                        Operational from early morning to late evening to support your lifestyle and work schedules.
                      </span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* What Visitors Can Expect */}
      <section className="py-20 lg:py-28 bg-[#111111] border-b border-[#222222]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <ScrollReveal>
              <div className="text-xs font-extrabold uppercase tracking-widest text-[#FFE600] inline-block px-3 py-1 bg-[#FFE600]/10 border border-[#FFE600]/30 rounded mb-3 font-stylish">
                Member Experience
              </div>
              <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl font-normal uppercase tracking-wide text-white">
                WHAT YOU CAN EXPECT
              </h2>
              <p className="mt-3 text-base text-neutral-300">
                Clear standards for every visit, without unnecessary pretense or hidden fees.
              </p>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ScrollReveal delay={50}>
              <div className="p-8 rounded-2xl bg-[#161616] border border-[#282828] h-full shadow-lg hover:border-[#FFE600] transition-colors">
                <div className="w-12 h-12 rounded-xl bg-[#202020] border border-[#333333] flex items-center justify-center text-[#FFE600] mb-6">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="font-display text-3xl font-normal uppercase text-white mb-2 tracking-wide">
                  Respectful Culture
                </h3>
                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                  A disciplined, polite, and welcoming environment where beginners receive constructive guidance and seasoned lifters can work undisturbed.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={120}>
              <div className="p-8 rounded-2xl bg-[#161616] border border-[#282828] h-full shadow-lg hover:border-[#FFE600] transition-colors">
                <div className="w-12 h-12 rounded-xl bg-[#202020] border border-[#333333] flex items-center justify-center text-[#FFE600] mb-6">
                  <Shield className="w-6 h-6" />
                </div>
                <h3 className="font-display text-3xl font-normal uppercase text-white mb-2 tracking-wide">
                  Maintained Gear
                </h3>
                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                  Cables, pulleys, weight plates, and cardio belts inspected regularly for safe execution and smooth resistance curves.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={190}>
              <div className="p-8 rounded-2xl bg-[#161616] border border-[#282828] h-full shadow-lg hover:border-[#FFE600] transition-colors">
                <div className="w-12 h-12 rounded-xl bg-[#202020] border border-[#333333] flex items-center justify-center text-[#FFE600] mb-6">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="font-display text-3xl font-normal uppercase text-white mb-2 tracking-wide">
                  Direct Front Desk
                </h3>
                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                  Always a real person to answer questions on timing slots, membership renewal, or general fitness onboarding.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* About CTA */}
      <section className="py-20 bg-[#0A0A0A]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <ScrollReveal>
            <h2 className="font-display text-5xl sm:text-6xl font-normal uppercase text-white mb-4 tracking-wide">
              READY TO VISIT US IN TARNOL?
            </h2>
            <p className="text-base text-neutral-300 max-w-xl mx-auto mb-8">
              Come meet the team, view our training equipment, and choose a membership plan that works for your schedule.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button
                onClick={() => navigate('contact')}
                className="px-8 py-4 text-xs sm:text-sm font-extrabold uppercase tracking-widest text-black bg-[#FFE600] hover:bg-[#edd400] rounded-xl shadow-lg shadow-[#FFE600]/20 font-stylish"
              >
                Contact Reception
              </button>
              <a
                href={GYM_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 text-xs sm:text-sm font-bold uppercase tracking-wider text-white bg-[#1A1A1A] border border-[#333333] hover:border-[#FFE600] hover:text-[#FFE600] rounded-xl transition-colors"
              >
                Get Directions
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};
