import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQS, GYM_INFO } from '../data/gymData';
import { ScrollReveal } from './ScrollReveal';

export const FAQ: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>("faq-1");

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-24 bg-[#0A0A0A] border-b border-[#222222]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <ScrollReveal>
            <div className="text-xs font-extrabold uppercase tracking-widest text-[#FFE600] inline-block px-3 py-1 bg-[#FFE600]/10 border border-[#FFE600]/30 rounded mb-3 font-stylish">
              Common Inquiries
            </div>
            <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl font-normal uppercase tracking-wide text-white leading-none">
              FREQUENTLY ASKED <span className="text-[#FFE600]">QUESTIONS</span>
            </h2>
            <p className="mt-4 text-base text-neutral-300 max-w-xl mx-auto">
              Everything you need to know about joining, facilities, schedules, and training at Fit Nation Gym in Tarnol.
            </p>
          </ScrollReveal>
        </div>

        {/* Accordion list */}
        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openId === faq.id;
            return (
              <ScrollReveal key={faq.id} delay={idx * 50}>
                <div
                  className={`rounded-2xl border transition-all duration-200 ${
                    isOpen
                      ? 'bg-[#181818] border-[#FFE600] shadow-[0_0_20px_-5px_rgba(255,230,0,0.2)]'
                      : 'bg-[#141414] border-[#262626] hover:border-[#FFE600]/50'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleFAQ(faq.id)}
                    aria-expanded={isOpen}
                    className="w-full py-5 px-6 flex items-center justify-between text-left text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FFE600]"
                  >
                    <span className="font-display text-2xl sm:text-3xl font-normal uppercase tracking-wide pr-4">
                      {faq.question}
                    </span>
                    <div
                      className={`p-1.5 rounded-lg bg-[#202020] border border-[#333333] text-[#FFE600] shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 bg-[#FFE600] text-black border-[#FFE600]' : ''
                      }`}
                    >
                      <ChevronDown className="w-5 h-5" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-1 text-sm text-neutral-300 leading-relaxed border-t border-[#262626] mt-1">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Still have questions banner */}
        <ScrollReveal delay={250}>
          <div className="mt-12 p-8 rounded-2xl bg-[#141414] border border-[#2B2B2B] text-center shadow-lg">
            <div className="text-xl font-bold text-white font-display uppercase tracking-wide">
              Have a question not listed here?
            </div>
            <p className="text-xs text-neutral-400 mt-1 mb-6">
              Our front desk is available daily from 6:30 AM to midnight to answer schedule or fee questions.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href={`tel:${GYM_INFO.phoneRaw}`}
                className="px-6 py-3 text-xs font-extrabold uppercase tracking-widest text-black bg-[#FFE600] hover:bg-[#edd400] rounded-xl shadow-md font-stylish"
              >
                Call +92 315 3588144
              </a>
              <a
                href={GYM_INFO.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 text-xs font-bold uppercase tracking-wider text-white bg-[#1F1F1F] border border-[#333333] hover:border-[#FFE600] hover:text-[#FFE600] rounded-xl"
              >
                WhatsApp Inquiry
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
