import React from 'react';
import { Membership } from '../components/Membership';
import { Phone, MessageSquare, Clock } from 'lucide-react';
import { GYM_INFO } from '../data/gymData';
import { ScrollReveal } from '../components/ScrollReveal';

export const MembershipPage: React.FC = () => {
  return (
    <div className="bg-[#0A0A0A]">
      {/* Page Hero */}
      <section className="py-16 lg:py-24 bg-[#111111] border-b border-[#222222]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <ScrollReveal>
              <div className="text-xs font-extrabold uppercase tracking-widest text-[#FFE600] inline-block px-3 py-1 bg-[#FFE600]/10 border border-[#FFE600]/30 rounded mb-4 font-stylish">
                Membership Plans & Inquiries
              </div>
              <h1 className="font-display text-6xl sm:text-7xl lg:text-8xl font-normal uppercase tracking-wide text-white leading-[0.88] mb-6">
                FLEXIBLE PLANS. <br />
                <span className="text-[#FFE600]">CONSISTENT RESULTS.</span>
              </h1>
              <p className="text-lg sm:text-xl text-neutral-300 leading-relaxed">
                Choose a plan that fits your lifestyle. Fit Nation Gym offers accessible monthly, quarterly, and annual memberships for ladies and gentlemen in Tarnol, Islamabad.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Main Membership Cards Section */}
      <Membership isStandalonePage={true} />

      {/* Direct Inquiries & Options Strip */}
      <section className="py-20 bg-[#0A0A0A] border-b border-[#222222]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <ScrollReveal delay={50}>
              <div className="p-8 rounded-2xl bg-[#141414] border border-[#282828] h-full shadow-lg hover:border-[#FFE600] transition-colors">
                <div className="w-12 h-12 rounded-xl bg-[#202020] border border-[#333333] flex items-center justify-center text-[#FFE600] mb-6">
                  <Phone className="w-6 h-6" />
                </div>
                <h3 className="font-display text-3xl font-normal uppercase text-white mb-2 tracking-wide">
                  Call Reception
                </h3>
                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed mb-6">
                  Speak directly with a gym staff member to learn about women's and men's schedule slots, admission, and fees.
                </p>
                <a
                  href={`tel:${GYM_INFO.phoneRaw}`}
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#FFE600] hover:underline font-mono"
                >
                  Call +92 315 3588144 →
                </a>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={120}>
              <div className="p-8 rounded-2xl bg-[#141414] border border-[#282828] h-full shadow-lg hover:border-[#FFE600] transition-colors">
                <div className="w-12 h-12 rounded-xl bg-[#202020] border border-[#333333] flex items-center justify-center text-[#FFE600] mb-6">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <h3 className="font-display text-3xl font-normal uppercase text-white mb-2 tracking-wide">
                  WhatsApp Inquiry
                </h3>
                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed mb-6">
                  Send a fast message directly to our WhatsApp number to get quotes, slot confirmations, or ask questions.
                </p>
                <a
                  href={GYM_INFO.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#FFE600] hover:underline font-mono"
                >
                  Chat on WhatsApp →
                </a>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={190}>
              <div className="p-8 rounded-2xl bg-[#141414] border border-[#282828] h-full shadow-lg hover:border-[#FFE600] transition-colors">
                <div className="w-12 h-12 rounded-xl bg-[#202020] border border-[#333333] flex items-center justify-center text-[#FFE600] mb-6">
                  <Clock className="w-6 h-6" />
                </div>
                <h3 className="font-display text-3xl font-normal uppercase text-white mb-2 tracking-wide">
                  Walk-In Visits
                </h3>
                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed mb-6">
                  Visit us in person at MW25+J4R, Tarnol, Islamabad anytime from 6:30 AM to midnight to inspect the gym.
                </p>
                <a
                  href={GYM_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#FFE600] hover:underline font-mono"
                >
                  Get Directions on Maps →
                </a>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
};
