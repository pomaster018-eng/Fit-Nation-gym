import React from 'react';
import { ContactAndMap } from '../components/ContactAndMap';
import { FAQ } from '../components/FAQ';
import { OpeningHours } from '../components/OpeningHours';
import { ScrollReveal } from '../components/ScrollReveal';

export const ContactPage: React.FC = () => {
  return (
    <div className="bg-[#0A0A0A]">
      {/* Page Hero */}
      <section className="py-16 lg:py-24 bg-[#111111] border-b border-[#222222]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <ScrollReveal>
              <div className="text-xs font-extrabold uppercase tracking-widest text-[#FFE600] inline-block px-3 py-1 bg-[#FFE600]/10 border border-[#FFE600]/30 rounded mb-4 font-stylish">
                Get In Touch
              </div>
              <h1 className="font-display text-6xl sm:text-7xl lg:text-8xl font-normal uppercase tracking-wide text-white leading-[0.88] mb-6">
                CONNECT WITH <br />
                <span className="text-[#FFE600]">FIT NATION GYM.</span>
              </h1>
              <p className="text-lg sm:text-xl text-neutral-300 leading-relaxed">
                We are located at MW25+J4R, Tarnol, Islamabad, 44000, Pakistan. Reach out directly via telephone or WhatsApp to ask about ladies' and gents' schedules, fees, and membership.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Main Contact & Interactive Map */}
      <ContactAndMap />

      {/* Opening Hours Section */}
      <OpeningHours />

      {/* FAQ Accordion Section */}
      <FAQ />
    </div>
  );
};
