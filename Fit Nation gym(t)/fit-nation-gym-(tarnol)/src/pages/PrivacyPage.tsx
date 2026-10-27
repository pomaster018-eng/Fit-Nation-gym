import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { GYM_INFO } from '../data/gymData';
import { useNavigation } from '../context/NavigationContext';
import { ScrollReveal } from '../components/ScrollReveal';

export const PrivacyPage: React.FC = () => {
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
            Legal & Data Transparency
          </div>
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-normal uppercase tracking-wide text-white">
            PRIVACY POLICY
          </h1>
          <p className="text-xs text-neutral-400 mt-2 font-mono">
            Last Updated: October 2026 · Fit Nation Gym (Tarnol)
          </p>
        </div>
      </section>

      {/* Policy Content */}
      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-sm text-neutral-300 space-y-8 leading-relaxed">
          <ScrollReveal>
            <div className="p-5 rounded-2xl bg-[#141414] border border-[#2B2B2B] text-xs text-neutral-200">
              <strong className="text-white">Summary:</strong> Fit Nation Gym (Tarnol) – Ladies & Gents respects your privacy. This website is an informational brochure and contact portal. We do not track you across other websites, sell your personal information, or run automated marketing profiling.
            </div>
          </ScrollReveal>

          <ScrollReveal delay={50}>
            <div className="space-y-3">
              <h2 className="font-display text-3xl font-normal uppercase text-white tracking-wide">
                1. Information We Collect
              </h2>
              <p>
                This website only processes information that you voluntarily provide when choosing to communicate with us:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-neutral-400">
                <li>
                  <strong className="text-white">Direct Inquiries:</strong> When you complete the on-site inquiry form, your name, telephone number, preferred training section (Ladies or Gents), and optional message are used solely to format a WhatsApp message directly on your own device.
                </li>
                <li>
                  <strong className="text-white">Phone Inquiries:</strong> When you tap the phone links (<code className="text-[#FFE600] font-mono">tel:+923153588144</code>), your call is directed to our front desk.
                </li>
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="space-y-3">
              <h2 className="font-display text-3xl font-normal uppercase text-white tracking-wide">
                2. What We Do NOT Collect
              </h2>
              <p>
                To maintain total transparency:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-neutral-400">
                <li>We do NOT store your inquiry details in a permanent online database on this server.</li>
                <li>We do NOT operate an automated marketing email or newsletter subscription system.</li>
                <li>We do NOT sell, rent, or trade your contact information with any third-party advertising brokers.</li>
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={150}>
            <div className="space-y-3">
              <h2 className="font-display text-3xl font-normal uppercase text-white tracking-wide">
                3. Third-Party Services
              </h2>
              <p>
                Our website utilizes the following external services to deliver essential features:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-neutral-400">
                <li>
                  <strong className="text-white">Google Maps:</strong> Used to display gym location and directions to MW25+J4R, Tarnol, Islamabad. Google's privacy policy applies when interacting with map tiles.
                </li>
                <li>
                  <strong className="text-white">WhatsApp (Meta):</strong> When you click the WhatsApp buttons, communications are governed by WhatsApp's end-to-end encrypted messaging policies.
                </li>
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="space-y-3">
              <h2 className="font-display text-3xl font-normal uppercase text-white tracking-wide">
                4. Data Controller Contact
              </h2>
              <p>
                If you have questions about your privacy or wish to update any personal contact details shared during on-site gym registration:
              </p>
              <div className="p-5 rounded-2xl bg-[#141414] border border-[#2B2B2B] space-y-2 text-xs">
                <div className="font-bold text-white text-sm">{GYM_INFO.fullName}</div>
                <div>Address: {GYM_INFO.address}</div>
                <div>Phone: {GYM_INFO.phone}</div>
                <div>Email / Owner Contact: <span className="font-mono text-neutral-400">[Owner to insert official business email]</span></div>
              </div>
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
