import React, { useState } from 'react';
import { Phone, MessageSquare, Check, HelpCircle } from 'lucide-react';
import { MEMBERSHIP_PLANS, GYM_INFO, MembershipPlan } from '../data/gymData';
import { ScrollReveal } from './ScrollReveal';

export const Membership: React.FC<{ isStandalonePage?: boolean }> = ({ isStandalonePage = false }) => {
  const [inquiryGender, setInquiryGender] = useState<'Ladies' | 'Gents'>('Gents');

  const getWhatsAppInquiryUrl = (plan: MembershipPlan) => {
    const text = encodeURIComponent(
      `Hello Fit Nation Gym (Tarnol), I would like to inquire about the ${plan.name} (${inquiryGender} section) regarding current prices and timing schedule.`
    );
    return `https://wa.me/${GYM_INFO.whatsappNumber}?text=${text}`;
  };

  return (
    <section id="membership-section" className={`py-24 border-b border-[#222222] ${isStandalonePage ? 'bg-[#0A0A0A]' : 'bg-[#111111]'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <ScrollReveal>
            <div className="text-xs font-extrabold uppercase tracking-widest text-[#FFE600] inline-block px-3 py-1 bg-[#FFE600]/10 border border-[#FFE600]/30 rounded mb-3 font-stylish">
              Membership Packages
            </div>
            <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl font-normal uppercase tracking-wide text-white leading-none">
              YOUR NEXT CHAPTER <span className="text-[#FFE600]">STARTS HERE.</span>
            </h2>
            <p className="mt-4 text-base sm:text-lg text-neutral-300">
              Interested in joining Fit Nation Gym? Contact us to learn about membership options, available facilities, and current timings.
            </p>

            {/* Gender Segmented Switch to tailor WhatsApp message */}
            <div className="mt-8 inline-flex items-center p-1.5 bg-[#181818] rounded-xl border border-[#2D2D2D] shadow-lg">
              <span className="text-xs font-bold uppercase tracking-wider text-neutral-400 px-3 font-mono">Inquire for:</span>
              <button
                type="button"
                onClick={() => setInquiryGender('Gents')}
                className={`px-4 py-2 text-xs font-extrabold uppercase tracking-wider rounded-lg transition-colors font-stylish ${
                  inquiryGender === 'Gents'
                    ? 'bg-[#FFE600] text-black shadow-md'
                    : 'text-neutral-300 hover:text-white'
                }`}
              >
                Gents Section
              </button>
              <button
                type="button"
                onClick={() => setInquiryGender('Ladies')}
                className={`px-4 py-2 text-xs font-extrabold uppercase tracking-wider rounded-lg transition-colors font-stylish ${
                  inquiryGender === 'Ladies'
                    ? 'bg-[#FFE600] text-black shadow-md'
                    : 'text-neutral-300 hover:text-white'
                }`}
              >
                Ladies Section
              </button>
            </div>
          </ScrollReveal>
        </div>

        {/* 3 Membership Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {MEMBERSHIP_PLANS.map((plan, idx) => {
            const isRec = plan.recommended;
            return (
              <ScrollReveal key={plan.id} delay={idx * 100}>
                <div
                  className={`relative rounded-2xl bg-[#161616] p-8 flex flex-col justify-between transition-all duration-300 h-full ${
                    isRec
                      ? 'border-2 border-[#FFE600] shadow-[0_0_30px_-5px_rgba(255,230,0,0.3)] -translate-y-1'
                      : 'border border-[#282828] hover:border-[#FFE600]/60 hover:shadow-xl'
                  }`}
                >
                  {/* Popular Ribbon */}
                  {isRec && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#FFE600] text-black text-[11px] font-black uppercase tracking-widest px-4 py-1 rounded-full shadow-lg font-stylish">
                      Most Popular Plan
                    </div>
                  )}

                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-bold uppercase tracking-wider text-neutral-400 font-mono">
                        {plan.billingCycle}
                      </span>
                      <span className="text-xs font-bold text-[#FFE600] bg-[#222222] px-2.5 py-0.5 rounded border border-[#333333]">
                        {inquiryGender}
                      </span>
                    </div>

                    <h3 className="font-display text-4xl font-normal uppercase text-white tracking-wide mb-3">
                      {plan.name}
                    </h3>

                    <p className="text-sm text-neutral-400 leading-relaxed mb-6">
                      {plan.description}
                    </p>

                    {/* Price Banner */}
                    <div className="py-4 px-5 rounded-xl bg-[#0D0D0D] border border-[#282828] mb-6 text-center">
                      <div className="font-display text-3xl font-normal uppercase text-[#FFE600] tracking-wider">
                        {plan.priceLabel}
                      </div>
                      <div className="text-[11px] text-neutral-400 mt-0.5">
                        Fixed directly by gym management on-site
                      </div>
                    </div>

                    {/* Features List */}
                    <div className="space-y-3 mb-8">
                      <div className="text-xs font-bold uppercase tracking-wider text-white font-mono">
                        Included Features:
                      </div>
                      {plan.features.map((feature, featureIdx) => (
                        <div key={featureIdx} className="flex items-start gap-2.5 text-xs text-neutral-300">
                          <Check className="w-4 h-4 text-[#FFE600] shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="space-y-3 pt-6 border-t border-[#262626]">
                    <a
                      href={getWhatsAppInquiryUrl(plan)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 text-xs font-extrabold uppercase tracking-widest text-black bg-[#FFE600] hover:bg-[#edd400] active:scale-[0.98] transition-all rounded-xl font-stylish shadow-md shadow-[#FFE600]/20"
                    >
                      <MessageSquare className="w-4 h-4" />
                      Inquire via WhatsApp
                    </a>

                    <a
                      href={`tel:${GYM_INFO.phoneRaw}`}
                      className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-bold uppercase tracking-wider text-white bg-[#1F1F1F] hover:bg-[#282828] border border-[#333333] hover:border-[#FFE600] rounded-xl transition-colors"
                    >
                      <Phone className="w-3.5 h-3.5 text-[#FFE600]" />
                      Call For Rates
                    </a>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Pricing Integrity Banner */}
        <ScrollReveal delay={250}>
          <div className="mt-12 p-6 rounded-2xl bg-[#161616] border border-[#282828] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400 shadow-md">
            <div className="flex items-center gap-3">
              <HelpCircle className="w-5 h-5 text-[#FFE600] shrink-0" />
              <span>
                To ensure 100% accuracy with current seasonal fees, student packages, or timing slots, prices are confirmed directly at reception or over the phone.
              </span>
            </div>
            <a
              href={`tel:${GYM_INFO.phoneRaw}`}
              className="text-[#FFE600] hover:underline font-bold whitespace-nowrap font-mono"
            >
              Call +92 315 3588144 →
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
