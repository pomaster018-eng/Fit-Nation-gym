import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigation } from '../context/NavigationContext';
import { ScrollReveal } from '../components/ScrollReveal';

export const TermsPage: React.FC = () => {
  const { navigate } = useNavigation();

  return (
    <div className="bg-[#0A0A0A]">
      {/* Page Hero */}
      <section className="py-16 lg:py-24 bg-[#111111] border-b border-[#222222]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => navigate('home')}
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-neutral-400 hover:text-[#FFE600] mb-6 transition-colors font-mono"
          >
            <ArrowLeft className="w-4 h-4 text-[#FFE600]" />
            <span>Back to Home</span>
          </button>

          <div className="text-xs font-extrabold uppercase tracking-widest text-[#FFE600] inline-block px-3 py-1 bg-[#FFE600]/10 border border-[#FFE600]/30 rounded mb-4 font-stylish">
            Website Guidelines
          </div>
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-normal uppercase tracking-wide text-white">
            TERMS & CONDITIONS
          </h1>
          <p className="text-xs text-neutral-400 mt-2 font-mono">
            Applicable to Fit Nation Gym Website · Islamabad, Pakistan
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-sm text-neutral-300 space-y-8 leading-relaxed">
          <ScrollReveal>
            <div className="p-5 rounded-2xl bg-[#141414] border border-[#2B2B2B] text-xs text-neutral-200">
              <strong className="text-white">Welcome:</strong> By accessing and using this website for Fit Nation Gym (Tarnol) – Ladies & Gents, you agree to the basic informational terms outlined below.
            </div>
          </ScrollReveal>

          <ScrollReveal delay={50}>
            <div className="space-y-3">
              <h2 className="font-display text-3xl font-normal uppercase text-white tracking-wide">
                1. Informational Purpose & Pricing Verification
              </h2>
              <p className="text-neutral-400">
                The information provided on this website regarding facilities, equipment categories, and membership plans is intended for promotional and informational guidance.
              </p>
              <p className="text-neutral-400">
                Because seasonal rates, student packages, and timetable slots can change, membership prices and agreements must always be confirmed directly with gym management on-site or via front-desk phone/WhatsApp before enrollment.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="space-y-3">
              <h2 className="font-display text-3xl font-normal uppercase text-white tracking-wide">
                2. On-Site Physical Training & Safety
              </h2>
              <p className="text-neutral-400">
                Physical exercise, weight lifting, and cardiovascular activity involve inherent physical demands. Members and prospective members should ensure they are in suitable physical condition before undertaking strenuous workouts.
              </p>
              <div className="p-4 bg-[#141414] rounded-xl border border-[#2B2B2B] text-xs text-neutral-400">
                <strong className="text-[#FFE600] font-mono">[Owner Placeholder Note]:</strong> Official club liability waivers, medical disclaimers, guest rules, and physical admission contracts are provided and signed in person at the front desk in Tarnol.
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={150}>
            <div className="space-y-3">
              <h2 className="font-display text-3xl font-normal uppercase text-white tracking-wide">
                3. Club Etiquette & Conduct
              </h2>
              <p className="text-neutral-400">
                Fit Nation Gym is a fitness space dedicated to both ladies and gentlemen. All visitors and members are expected to maintain respect, re-rack weights after use, follow staff instructions, and observe designated gender slot timings.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="space-y-3">
              <h2 className="font-display text-3xl font-normal uppercase text-white tracking-wide">
                4. Inquiries & Communication
              </h2>
              <p className="text-neutral-400">
                Messages submitted through our website inquiry form are formatted for WhatsApp. Submission does not constitute an automatically binding legal enrollment or reservation until confirmed by gym staff.
              </p>
            </div>
          </ScrollReveal>

          <div className="pt-6 border-t border-[#262626]">
            <button
              onClick={() => navigate('home')}
              className="px-6 py-3.5 text-xs font-extrabold uppercase tracking-widest text-black bg-[#FFE600] hover:bg-[#edd400] rounded-xl font-stylish shadow-md"
            >
              Return to Home Page
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
