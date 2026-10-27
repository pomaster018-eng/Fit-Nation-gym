import React from 'react';
import { Star, Quote, ArrowUpRight, CheckCircle2, ShieldCheck } from 'lucide-react';
import { REVIEWS, GYM_INFO } from '../data/gymData';
import { ScrollReveal } from '../components/ScrollReveal';

export const ReviewsPage: React.FC = () => {
  return (
    <div className="bg-[#0A0A0A]">
      {/* Page Hero */}
      <section className="py-16 lg:py-24 bg-[#111111] border-b border-[#222222]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <ScrollReveal>
              <div className="text-xs font-extrabold uppercase tracking-widest text-[#FFE600] inline-block px-3 py-1 bg-[#FFE600]/10 border border-[#FFE600]/30 rounded mb-4 font-stylish">
                Verified Feedback
              </div>
              <h1 className="font-display text-6xl sm:text-7xl lg:text-8xl font-normal uppercase tracking-wide text-white leading-[0.88] mb-6">
                MEMBER <br />
                <span className="text-[#FFE600]">REVIEWS & RATINGS.</span>
              </h1>
              <p className="text-lg sm:text-xl text-neutral-300 leading-relaxed">
                Read direct reviews from fitness enthusiasts who train at Fit Nation Gym in Tarnol, Islamabad. Sourced directly from our Google Maps listing.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Main Rating Breakdown & Verified Reviews */}
      <section className="py-20 lg:py-28 border-b border-[#222222]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top Rating Summary Card */}
          <ScrollReveal>
            <div className="p-8 sm:p-12 rounded-3xl bg-[#141414] border border-[#2B2B2B] mb-16 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 text-center sm:text-left">
                <div className="font-display text-7xl font-normal text-white leading-none">
                  4.6
                </div>
                <div>
                  <div className="flex items-center gap-1.5 text-[#FFE600] justify-center sm:justify-start">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-[#FFE600] text-[#FFE600]" />
                    ))}
                  </div>
                  <div className="text-base font-extrabold text-white mt-1.5 font-stylish tracking-wider uppercase">
                    Google Average Rating
                  </div>
                  <div className="text-xs text-neutral-400 font-mono">
                    Calculated from 11 verified public reviews
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-4">
                <a
                  href={GYM_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-7 py-3.5 text-xs font-extrabold uppercase tracking-widest text-black bg-[#FFE600] hover:bg-[#edd400] rounded-xl transition-all shadow-lg shadow-[#FFE600]/25 flex items-center gap-2 whitespace-nowrap font-stylish"
                >
                  <span>Verify on Google Maps</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>

                <a
                  href={`tel:${GYM_INFO.phoneRaw}`}
                  className="px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white bg-[#1F1F1F] border border-[#333333] hover:border-[#FFE600] hover:text-[#FFE600] rounded-xl transition-all whitespace-nowrap font-mono"
                >
                  Call +92 315 3588144
                </a>
              </div>
            </div>
          </ScrollReveal>

          {/* Sourced Reviews Header */}
          <div className="mb-10">
            <h2 className="font-display text-4xl font-normal uppercase text-white tracking-wide">
              Supplied Member Quotations
            </h2>
            <p className="text-xs text-neutral-400 mt-1">
              Transcribed verbatim from Google Maps. We do not invent reviews or member accounts.
            </p>
          </div>

          {/* 3 Review Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {REVIEWS.map((review, idx) => (
              <ScrollReveal key={review.id} delay={idx * 100}>
                <div className="p-8 rounded-2xl bg-[#141414] border border-[#262626] hover:border-[#FFE600] hover:shadow-[0_0_25px_-5px_rgba(255,230,0,0.25)] transition-all duration-300 flex flex-col justify-between relative h-full">
                  <Quote className="w-8 h-8 text-[#FFE600]/30 absolute top-6 right-6" />

                  <div>
                    {/* Stars */}
                    <div className="flex items-center gap-1 text-[#FFE600] mb-4">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-[#FFE600] text-[#FFE600]" />
                      ))}
                    </div>

                    <p className="text-sm sm:text-base text-neutral-200 leading-relaxed italic mb-8">
                      “{review.text}”
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#242424] flex items-center justify-between">
                    <div>
                      <div className="font-display text-2xl font-normal uppercase text-white tracking-wide">
                        {review.author}
                      </div>
                      <div className="flex items-center gap-1.5 text-xs text-[#FFE600] mt-0.5 font-semibold font-mono">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#FFE600]" />
                        <span>{review.source}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Verification Notice */}
      <section className="py-16 bg-[#111111]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <ScrollReveal>
            <ShieldCheck className="w-12 h-12 text-[#FFE600] mx-auto mb-3" />
            <h3 className="font-display text-3xl font-normal uppercase text-white tracking-wide">
              Review Integrity Policy
            </h3>
            <p className="text-xs text-neutral-400 leading-relaxed max-w-lg mx-auto mt-2">
              Fit Nation Gym only publishes reviews from genuine community members. You can review all ratings and leave your own feedback directly on Google Maps.
            </p>
            <div className="mt-6">
              <a
                href={GYM_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#FFE600] hover:underline font-mono"
              >
                <span>Write a Review on Google Maps</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};
