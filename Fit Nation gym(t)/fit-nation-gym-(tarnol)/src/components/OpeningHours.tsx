import React from 'react';
import { Clock, Phone, AlertCircle } from 'lucide-react';
import { GYM_INFO } from '../data/gymData';
import { ScrollReveal } from './ScrollReveal';

export const OpeningHours: React.FC = () => {
  const days = [
    { day: "Monday", hours: "6:30 AM – 12:00 AM (Midnight)" },
    { day: "Tuesday", hours: "6:30 AM – 12:00 AM (Midnight)" },
    { day: "Wednesday", hours: "6:30 AM – 12:00 AM (Midnight)" },
    { day: "Thursday", hours: "6:30 AM – 12:00 AM (Midnight)" },
    { day: "Friday", hours: "6:30 AM – 12:00 AM (Midnight)" },
    { day: "Saturday", hours: "6:30 AM – 12:00 AM (Midnight)" },
    { day: "Sunday", hours: "6:30 AM – 12:00 AM (Midnight)" },
  ];

  return (
    <section className="py-24 bg-[#111111] border-b border-[#222222]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Header Column */}
          <div className="lg:col-span-5 space-y-6">
            <ScrollReveal>
              <div className="text-xs font-extrabold uppercase tracking-widest text-[#FFE600] inline-block px-3 py-1 bg-[#FFE600]/10 border border-[#FFE600]/30 rounded mb-2 font-stylish">
                Operational Hours
              </div>
              <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl font-normal uppercase tracking-wide text-white leading-none">
                TRAIN ON <br />
                <span className="text-[#FFE600]">YOUR TIME.</span>
              </h2>
              <p className="text-base text-neutral-300 leading-relaxed">
                Fit Nation Gym provides wide operational hours from 6:30 AM dawn until midnight, making it easy to schedule workouts before heading to work or late in the evening.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <div className="p-5 rounded-2xl bg-[#181818] border border-[#2B2B2B] space-y-2 shadow-lg">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#FFE600] font-mono">
                  <AlertCircle className="w-4 h-4 shrink-0 text-[#FFE600]" />
                  Schedule Notice & Verification
                </div>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  Daily opening is 6:30 AM and closing time is 12:00 AM. Daily slots for ladies and gents or public holidays are subject to front-desk schedule verification.
                </p>
              </div>

              <div className="pt-3">
                <a
                  href={`tel:${GYM_INFO.phoneRaw}`}
                  className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-extrabold uppercase tracking-widest text-black bg-[#FFE600] hover:bg-[#edd400] rounded-xl transition-all shadow-md font-stylish"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call to Confirm Current Slot</span>
                </a>
              </div>
            </ScrollReveal>
          </div>

          {/* Schedule Card Column */}
          <div className="lg:col-span-7">
            <ScrollReveal delay={100} direction="none">
              <div className="p-8 rounded-2xl bg-[#161616] border border-[#2B2B2B] shadow-2xl">
                <div className="flex items-center justify-between pb-6 mb-6 border-b border-[#262626]">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-[#202020] rounded-xl border border-[#333333] text-[#FFE600]">
                      <Clock className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="font-display text-3xl font-normal uppercase text-white tracking-wide">
                        Daily Timings
                      </div>
                      <div className="text-xs text-neutral-400 font-mono">
                        Standard Schedule (Owner to verify slots)
                      </div>
                    </div>
                  </div>

                  <div className="text-right">
                    <div className="font-display text-4xl font-normal text-[#FFE600]">
                      6:30 AM – 12:00 AM
                    </div>
                    <div className="text-[11px] text-neutral-400 font-semibold font-mono">
                      Open till Midnight
                    </div>
                  </div>
                </div>

                {/* Day-by-day table */}
                <div className="divide-y divide-[#242424]">
                  {days.map((item) => (
                    <div key={item.day} className="py-3.5 flex items-center justify-between text-sm">
                      <span className="font-bold text-white font-stylish">{item.day}</span>
                      <span className="text-[#FFE600] font-mono text-xs font-bold">{item.hours}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-4 border-t border-[#262626] flex items-center justify-between text-xs text-neutral-400">
                  <span>Ladies & Gents designated hours available</span>
                  <a href={GYM_INFO.whatsappLink} target="_blank" rel="noopener noreferrer" className="text-[#FFE600] font-bold hover:underline font-mono">
                    WhatsApp Front Desk →
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};
