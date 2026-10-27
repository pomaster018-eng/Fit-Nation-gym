import React from 'react';
import { ArrowRight, Info } from 'lucide-react';
import { FACILITIES } from '../data/gymData';
import { useNavigation } from '../context/NavigationContext';
import { ScrollReveal } from './ScrollReveal';
import { handleImageError } from '../utils/imageFallback';

export const FacilitiesPreview: React.FC = () => {
  const { navigate } = useNavigation();
  const previewItems = FACILITIES.slice(0, 4);

  return (
    <section className="py-24 bg-[#111111] border-b border-[#222222]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <ScrollReveal>
            <div className="text-xs font-extrabold uppercase tracking-widest text-[#FFE600] inline-block px-3 py-1 bg-[#FFE600]/10 border border-[#FFE600]/30 rounded mb-3 font-stylish">
              Gym Equipment & Areas
            </div>
            <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl font-normal uppercase tracking-wide text-white leading-none">
              TRAINING SPACES & <span className="text-[#FFE600]">EQUIPMENT</span>
            </h2>
            <p className="mt-4 text-base text-neutral-300 max-w-xl">
              Preview our spacious layout configured with strength cages, cardio machines, and free weights.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="p-4 bg-[#181818] border border-[#2B2B2B] rounded-xl max-w-sm text-xs text-neutral-400 shadow-sm flex items-start gap-2.5">
              <Info className="w-4 h-4 text-[#FFE600] shrink-0 mt-0.5" />
              <span>
                <strong className="text-white">Owner Note:</strong> Suggested categories. Equipment details and real photos can be confirmed with management on-site.
              </span>
            </div>
          </ScrollReveal>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {previewItems.map((facility, idx) => (
            <ScrollReveal key={facility.id} delay={idx * 80}>
              <div
                onClick={() => navigate('facilities')}
                className="group cursor-pointer bg-[#181818] rounded-2xl overflow-hidden border border-[#262626] hover:border-[#FFE600] hover:shadow-[0_0_25px_-5px_rgba(255,230,0,0.25)] transition-all duration-300 flex flex-col h-full"
              >
                <div className="relative h-56 overflow-hidden bg-neutral-900">
                  <img
                    src={facility.image}
                    alt={facility.title}
                    onError={handleImageError}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 filter brightness-[0.85] contrast-[1.05]"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 text-[11px] font-extrabold uppercase tracking-widest text-black bg-[#FFE600] px-2.5 py-1 rounded font-mono shadow-md">
                    {facility.category}
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-display text-3xl font-normal uppercase text-white tracking-wide group-hover:text-[#FFE600] transition-colors">
                      {facility.title}
                    </h3>
                    <div className="text-xs text-[#FFE600] font-semibold mt-0.5 mb-2 font-mono">
                      {facility.subtitle}
                    </div>
                    <p className="text-xs text-neutral-400 leading-relaxed">
                      {facility.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-[#262626] flex items-center justify-between text-xs text-white font-bold group-hover:text-[#FFE600] transition-colors">
                    <span>Explore details</span>
                    <span>→</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* View All Facilities Button */}
        <ScrollReveal delay={250}>
          <div className="mt-12 text-center">
            <button
              onClick={() => navigate('facilities')}
              className="inline-flex items-center gap-2 px-8 py-3.5 text-xs font-extrabold uppercase tracking-widest text-white bg-[#181818] border border-[#333333] hover:border-[#FFE600] hover:text-[#FFE600] rounded-xl transition-all shadow-md font-stylish"
            >
              <span>View All Training Areas & Equipment</span>
              <ArrowRight className="w-4 h-4 text-[#FFE600]" />
            </button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
