import React from 'react';
import { Star, Quote, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { REVIEWS, GYM_INFO } from '../data/gymData';
import { ScrollReveal } from './ScrollReveal';

export const Reviews: React.FC = () => {
  return (
    <section id="reviews-section" className="py-24 bg-[#0A0A0A] border-b border-[#222222]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <ScrollReveal>
            <div className="text-xs font-extrabold uppercase tracking-widest text-[#FFE600] inline-block px-3 py-1 bg-[#FFE600]/10 border border-[#FFE600]/30 rounded mb-3 font-stylish">
              Member Testimonials
            </div>
            <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl font-normal uppercase tracking-wide text-white leading-none">
              WHAT MEMBERS <span className="text-[#FFE600]">ARE SAYING.</span>
            </h2>
            <p className="mt-4 text-base text-neutral-300 max-w-xl">
              Authentic feedback from fitness community members who train at Fit Nation Gym in Tarnol, Islamabad.
            </p>
          </ScrollReveal>

          {/* Prominent Google Rating Display on Black & Yellow Theme */}
          <ScrollReveal delay={100}>
            <div className="p-6 bg-[#141414] rounded-2xl border border-[#2B2B2B] flex items-center gap-6 shrink-0 shadow-xl">
              <div>
                <div className="font-display text-5xl font-normal text-white leading-none">
                  4.6 <span className="text-2xl text-[#FFE600]">/ 5.0</span>
                </div>
                <div className="flex items-center gap-1 text-[#FFE600] mt-1.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#FFE600] text-[#FFE600]" />
                  ))}
                </div>
                <div className="text-xs text-neutral-400 mt-1 font-semibold font-mono">
                  11 Verified Google Reviews
                </div>
              </div>
              <div className="h-12 w-px bg-[#262626]" />
              <a
                href={GYM_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#FFE600] hover:underline font-stylish"
              >
                <span>Read on Maps</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </ScrollReveal>
        </div>

        {/* 3 Verified Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {REVIEWS.map((review, idx) => (
            <ScrollReveal key={review.id} delay={idx * 100}>
              <div className="p-8 rounded-2xl bg-[#141414] border border-[#262626] hover:border-[#FFE600] hover:shadow-[0_0_25px_-5px_rgba(255,230,0,0.2)] transition-all duration-300 flex flex-col justify-between relative h-full">
                <Quote className="w-8 h-8 text-[#FFE600]/30 absolute top-6 right-6" />

                <div>
                  {/* 5 Stars */}
                  <div className="flex items-center gap-1 text-[#FFE600] mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#FFE600] text-[#FFE600]" />
                    ))}
                  </div>

                  {/* Exact Verified Text */}
                  <p className="text-sm sm:text-base text-neutral-200 leading-relaxed italic mb-6">
                    “{review.text}”
                  </p>
                </div>

                {/* Author and Verification Source */}
                <div className="pt-4 border-t border-[#242424] flex items-center justify-between">
                  <div>
                    <div className="font-display text-2xl font-normal uppercase text-white tracking-wide">
                      {review.author}
                    </div>
                    <div className="flex items-center gap-1 text-xs text-[#FFE600] font-semibold mt-0.5 font-mono">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#FFE600]" />
                      <span>{review.source}</span>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Call to action for reviews */}
        <ScrollReveal delay={250}>
          <div className="mt-12 text-center">
            <a
              href={GYM_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-neutral-300 hover:text-[#FFE600] transition-colors font-mono"
            >
              <span>Explore all reviews on Google Maps listing</span>
              <ArrowUpRight className="w-4 h-4 text-[#FFE600]" />
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
