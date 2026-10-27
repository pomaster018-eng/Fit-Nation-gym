import React, { useState } from 'react';
import { Phone, MessageSquare, Navigation, MapPin, Clock, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { GYM_INFO } from '../data/gymData';
import { ScrollReveal } from './ScrollReveal';

export const ContactAndMap: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    interest: 'Gents Section',
    plan: 'Monthly Plan',
    message: '',
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [submittedWhatsappUrl, setSubmittedWhatsappUrl] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    if (errorMessage) setErrorMessage('');
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim()) {
      setErrorMessage('Please enter your full name.');
      return;
    }

    if (!formData.phone.trim() || formData.phone.length < 7) {
      setErrorMessage('Please enter a valid phone number.');
      return;
    }

    // Construct direct WhatsApp message
    const inquiryText = encodeURIComponent(
      `*New Website Inquiry - Fit Nation Gym (Tarnol)*\n` +
      `• *Name:* ${formData.name.trim()}\n` +
      `• *Phone:* ${formData.phone.trim()}\n` +
      `• *Section:* ${formData.interest}\n` +
      `• *Plan Interest:* ${formData.plan}\n` +
      (formData.message.trim() ? `• *Message:* ${formData.message.trim()}\n` : '') +
      `\nPlease let me know the current rates and timing schedule.`
    );

    const whatsappUrl = `https://wa.me/${GYM_INFO.whatsappNumber}?text=${inquiryText}`;
    setSubmittedWhatsappUrl(whatsappUrl);
    setFormSubmitted(true);
  };

  return (
    <section id="contact-section" className="py-24 bg-[#0A0A0A] border-b border-[#222222]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <ScrollReveal>
            <div className="text-xs font-extrabold uppercase tracking-widest text-[#FFE600] inline-block px-3 py-1 bg-[#FFE600]/10 border border-[#FFE600]/30 rounded mb-3 font-stylish">
              Location & Inquiries
            </div>
            <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl font-normal uppercase tracking-wide text-white leading-none">
              FIND YOUR FIT <span className="text-[#FFE600]">IN TARNOL.</span>
            </h2>
            <p className="mt-4 text-base sm:text-lg text-neutral-300">
              Visit us in person, call our front desk, or drop a quick WhatsApp message to get started today.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Business Details & Direct CTAs */}
          <div className="lg:col-span-5 space-y-6">
            <ScrollReveal>
              <div className="p-8 rounded-2xl bg-[#141414] border border-[#2B2B2B] space-y-6 shadow-xl">
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-[#FFE600] font-mono">
                    Official Fitness Center
                  </div>
                  <h3 className="font-display text-3xl font-normal uppercase text-white tracking-wide mt-1">
                    {GYM_INFO.fullName}
                  </h3>
                </div>

                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-xl bg-[#202020] border border-[#333333] text-[#FFE600] shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs uppercase font-bold tracking-wider text-neutral-400">
                      Physical Address
                    </div>
                    <div className="text-sm font-bold text-white mt-1">
                      {GYM_INFO.address}
                    </div>
                    <div className="text-xs text-neutral-400 mt-0.5 font-mono">
                      Tarnol, Islamabad (Plus Code: MW25+J4R)
                    </div>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-xl bg-[#202020] border border-[#333333] text-[#FFE600] shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs uppercase font-bold tracking-wider text-neutral-400">
                      Phone Inquiries
                    </div>
                    <a
                      href={`tel:${GYM_INFO.phoneRaw}`}
                      className="text-lg font-bold text-[#FFE600] hover:underline block mt-0.5 font-mono"
                    >
                      {GYM_INFO.phone}
                    </a>
                    <div className="text-xs text-neutral-400 mt-0.5">
                      Direct line to reception desk
                    </div>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-xl bg-[#202020] border border-[#333333] text-[#FFE600] shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs uppercase font-bold tracking-wider text-neutral-400">
                      Operating Schedule
                    </div>
                    <div className="text-base font-extrabold text-white mt-1 font-stylish tracking-wide">
                      {GYM_INFO.openingTime} – {GYM_INFO.closingTime}
                    </div>
                    <div className="text-xs text-neutral-400 mt-0.5">
                      Daily, subject to schedule confirmation
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="pt-4 border-t border-[#262626] space-y-3">
                  <a
                    href={`tel:${GYM_INFO.phoneRaw}`}
                    className="w-full inline-flex items-center justify-center gap-2.5 py-3.5 px-4 text-xs font-extrabold uppercase tracking-widest text-black bg-[#FFE600] hover:bg-[#edd400] active:scale-[0.98] transition-all rounded-xl font-stylish shadow-md shadow-[#FFE600]/20"
                  >
                    <Phone className="w-4 h-4" />
                    Call +92 315 3588144
                  </a>

                  <a
                    href={GYM_INFO.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2.5 py-3.5 px-4 text-xs font-bold uppercase tracking-wider text-white bg-[#1E1E1E] border border-[#333333] hover:border-[#FFE600] hover:text-[#FFE600] active:scale-[0.98] transition-all rounded-xl"
                  >
                    <MessageSquare className="w-4 h-4 text-[#FFE600]" />
                    Chat on WhatsApp
                  </a>

                  <a
                    href={GYM_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2.5 py-2.5 px-4 text-xs font-semibold text-neutral-400 hover:text-white transition-colors"
                  >
                    <Navigation className="w-4 h-4 text-[#FFE600]" />
                    Open Google Maps Directions
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Inquiry Form & Interactive Map */}
          <div className="lg:col-span-7 space-y-8">
            <ScrollReveal delay={150}>
              {/* Clean Dark Inquiry Form */}
              <div className="p-8 rounded-2xl bg-[#141414] border border-[#2B2B2B] shadow-xl">
                <div className="mb-6">
                  <h3 className="font-display text-3xl font-normal uppercase text-white tracking-wide">
                    Send a Direct Inquiry
                  </h3>
                  <p className="text-xs text-neutral-400 mt-1">
                    Fill in your details to immediately connect with Fit Nation Gym on WhatsApp with your questions pre-filled.
                  </p>
                </div>

                {formSubmitted ? (
                  <div className="p-6 rounded-2xl bg-[#1A1A1A] border border-[#FFE600] text-center space-y-3">
                    <CheckCircle2 className="w-10 h-10 text-[#FFE600] mx-auto" />
                    <div className="font-display text-3xl font-normal uppercase text-white">
                      Inquiry Prepared for WhatsApp
                    </div>
                    <p className="text-xs text-neutral-300 max-w-sm mx-auto">
                      Your inquiry details have been formatted. Tap the button below to send it directly to Fit Nation Gym front desk on WhatsApp.
                    </p>
                    <div className="pt-2 flex flex-col sm:flex-row justify-center gap-3">
                      <a
                        href={submittedWhatsappUrl || GYM_INFO.whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-black bg-[#FFE600] rounded-xl hover:bg-[#edd400] font-stylish inline-flex items-center justify-center gap-2"
                      >
                        <MessageSquare className="w-4 h-4" />
                        <span>Send on WhatsApp</span>
                      </a>
                      <button
                        type="button"
                        onClick={() => {
                          setFormSubmitted(false);
                          setSubmittedWhatsappUrl('');
                        }}
                        className="px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-neutral-300 hover:text-white bg-[#222222] border border-[#333333] rounded-xl"
                      >
                        Send Another
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-4">
                    {errorMessage && (
                      <div className="p-3 bg-red-950/80 border border-red-700 rounded-xl flex items-center gap-2 text-xs text-red-200">
                        <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
                        <span>{errorMessage}</span>
                      </div>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-white mb-1.5 font-mono">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="e.g. Usman Khan"
                          required
                          className="w-full px-4 py-2.5 bg-[#1C1C1C] border border-[#333333] rounded-xl text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#FFE600] transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-white mb-1.5 font-mono">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="e.g. 0315 1234567"
                          required
                          className="w-full px-4 py-2.5 bg-[#1C1C1C] border border-[#333333] rounded-xl text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#FFE600] transition-colors font-mono"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-white mb-1.5 font-mono">
                          Section
                        </label>
                        <select
                          name="interest"
                          value={formData.interest}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2.5 bg-[#1C1C1C] border border-[#333333] rounded-xl text-sm text-white focus:outline-none focus:border-[#FFE600] transition-colors"
                        >
                          <option value="Gents Section">Gents Section</option>
                          <option value="Ladies Section">Ladies Section</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-white mb-1.5 font-mono">
                          Membership Interest
                        </label>
                        <select
                          name="plan"
                          value={formData.plan}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2.5 bg-[#1C1C1C] border border-[#333333] rounded-xl text-sm text-white focus:outline-none focus:border-[#FFE600] transition-colors"
                        >
                          <option value="Monthly Plan">Monthly Plan</option>
                          <option value="Quarterly Plan">Quarterly Plan</option>
                          <option value="Annual Plan">Annual Plan</option>
                          <option value="General Inquiry">General Walk-in Visit</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-white mb-1.5 font-mono">
                        Message / Questions (Optional)
                      </label>
                      <textarea
                        name="message"
                        rows={3}
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Inquire about ladies' timing slots, registration fees, or equipment..."
                        className="w-full px-4 py-2.5 bg-[#1C1C1C] border border-[#333333] rounded-xl text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#FFE600] transition-colors resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3.5 px-6 text-xs font-extrabold uppercase tracking-widest text-black bg-[#FFE600] hover:bg-[#edd400] active:scale-[0.99] transition-all rounded-xl shadow-lg shadow-[#FFE600]/25 flex items-center justify-center gap-2 font-stylish"
                    >
                      <Send className="w-4 h-4" />
                      <span>Connect on WhatsApp</span>
                    </button>
                  </form>
                )}
              </div>
            </ScrollReveal>

            {/* Google Map Container */}
            <ScrollReveal delay={250} direction="none">
              <div className="rounded-2xl overflow-hidden border border-[#2B2B2B] bg-[#141414] shadow-xl">
                <div className="p-4 bg-[#181818] border-b border-[#262626] flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white">
                    <MapPin className="w-4 h-4 text-[#FFE600]" />
                    <span>Location Map (Tarnol, Islamabad)</span>
                  </div>
                  <a
                    href={GYM_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-[#FFE600] font-bold hover:underline font-mono"
                  >
                    Open Google Maps App →
                  </a>
                </div>

                <div className="relative h-72 w-full bg-neutral-900">
                  <iframe
                    title="Fit Nation Gym Tarnol Location"
                    src="https://maps.google.com/maps?q=Fit+Nation+Gym+Tarnol+Islamabad&t=&z=15&ie=UTF8&iwloc=&output=embed"
                    tabIndex={-1}
                    className="w-full h-full border-0 filter invert-[90%] hue-rotate-180 brightness-95"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};
