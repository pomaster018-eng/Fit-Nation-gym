import React, { useState } from 'react';
import { Info, Maximize2 } from 'lucide-react';
import { FACILITIES, Facility, GYM_INFO } from '../data/gymData';
import { useNavigation } from '../context/NavigationContext';
import { ScrollReveal } from '../components/ScrollReveal';
import { handleImageError } from '../utils/imageFallback';

export const FacilitiesPage: React.FC = () => {
  const { navigate } = useNavigation();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeFacility, setActiveFacility] = useState<Facility | null>(null);

  const categories = ['All', 'Strength', 'Cardio', 'Machines', 'Free Weights', 'Functional'];

  const filteredFacilities =
    selectedCategory === 'All'
      ? FACILITIES
      : FACILITIES.filter(
          (f) => f.category.toLowerCase() === selectedCategory.toLowerCase()
        );

  return (
    <div className="bg-[#0A0A0A]">
      {/* Page Hero */}
      <section className="py-16 lg:py-24 bg-[#111111] border-b border-[#222222]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <ScrollReveal>
              <div className="text-xs font-extrabold uppercase tracking-widest text-[#FFE600] inline-block px-3 py-1 bg-[#FFE600]/10 border border-[#FFE600]/30 rounded mb-4 font-stylish">
                Facilities & Equipment
              </div>
              <h1 className="font-display text-6xl sm:text-7xl lg:text-8xl font-normal uppercase tracking-wide text-white leading-[0.88] mb-6">
                BUILT FOR <br />
                <span className="text-[#FFE600]">REAL TRAINING.</span>
              </h1>
              <p className="text-lg sm:text-xl text-neutral-300 leading-relaxed">
                Explore suggested training areas and equipment configurations. Reviewers consistently praise our variety and standard of machines in the twin-city area.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Facilities Content */}
      <section className="py-20 lg:py-28 border-b border-[#222222]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Owner placeholder disclaimer box */}
          <ScrollReveal>
            <div className="mb-10 p-5 rounded-2xl bg-[#141414] border border-[#2B2B2B] flex items-start gap-3.5 shadow-lg">
              <Info className="w-5 h-5 text-[#FFE600] shrink-0 mt-0.5" />
              <div className="text-xs text-neutral-300 leading-relaxed">
                <strong className="text-white">Owner Verification Notice:</strong> The facility categories and visual representations below are structured as editable suggestions for Fit Nation Gym. Members and visitors are encouraged to visit the facility in Tarnol or contact the front desk to verify current equipment inventory.
              </div>
            </div>
          </ScrollReveal>

          {/* Category Filter Controls */}
          <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-[#222222]">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 text-xs font-extrabold uppercase tracking-wider rounded-xl transition-all font-stylish ${
                  selectedCategory === cat
                    ? 'bg-[#FFE600] text-black shadow-lg shadow-[#FFE600]/25'
                    : 'bg-[#161616] text-neutral-300 hover:text-white hover:bg-[#202020] border border-[#2A2A2A]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Facilities Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredFacilities.map((facility, idx) => (
              <ScrollReveal key={facility.id} delay={idx * 60}>
                <div
                  onClick={() => setActiveFacility(facility)}
                  className="group cursor-pointer bg-[#141414] rounded-2xl overflow-hidden border border-[#282828] hover:border-[#FFE600] hover:shadow-[0_0_25px_-5px_rgba(255,230,0,0.25)] transition-all duration-300 flex flex-col h-full"
                >
                  <div className="relative h-64 overflow-hidden bg-neutral-900">
                    <img
                      src={facility.image}
                      alt={facility.title}
                      onError={handleImageError}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 filter brightness-[0.85] contrast-[1.05]"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3 text-[11px] font-extrabold uppercase tracking-widest text-black bg-[#FFE600] px-3 py-1 rounded-lg font-mono shadow-md">
                      {facility.category}
                    </div>
                    <div className="absolute top-3 right-3 p-2 rounded-lg bg-black/80 text-[#FFE600] opacity-0 group-hover:opacity-100 transition-opacity shadow-sm">
                      <Maximize2 className="w-4 h-4" />
                    </div>
                  </div>

                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-display text-3xl font-normal uppercase text-white tracking-wide group-hover:text-[#FFE600] transition-colors">
                        {facility.title}
                      </h3>
                      <div className="text-xs text-[#FFE600] font-bold mt-1 mb-2 font-mono">
                        {facility.subtitle}
                      </div>
                      <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                        {facility.description}
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-[#242424] flex items-center justify-between text-xs text-white font-bold group-hover:text-[#FFE600] transition-colors">
                      <span>View Specifications</span>
                      <span>→</span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Facility Detail Modal */}
      {activeFacility && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setActiveFacility(null)}
        >
          <div
            className="bg-[#141414] border border-[#2D2D2D] rounded-3xl max-w-xl w-full overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-72 bg-neutral-900">
              <img
                src={activeFacility.image}
                alt={activeFacility.title}
                onError={handleImageError}
                className="w-full h-full object-cover filter brightness-[0.9]"
                referrerPolicy="no-referrer"
              />
              <button
                onClick={() => setActiveFacility(null)}
                className="absolute top-4 right-4 px-3 py-1.5 bg-black/90 hover:bg-black text-[#FFE600] rounded-xl text-xs font-bold border border-[#333333] shadow-md"
              >
                ✕ Close
              </button>
            </div>
            <div className="p-6 sm:p-8">
              <div className="text-xs font-bold uppercase tracking-wider text-[#FFE600] mb-1 font-mono">
                {activeFacility.category} Category
              </div>
              <h3 className="font-display text-4xl font-normal uppercase text-white mb-2 tracking-wide">
                {activeFacility.title}
              </h3>
              <p className="text-sm text-neutral-300 leading-relaxed mb-6">
                {activeFacility.description}
              </p>
              <div className="p-4 bg-[#1C1C1C] rounded-xl border border-[#2A2A2A] text-xs text-neutral-300 mb-6 flex items-start gap-2">
                <Info className="w-4 h-4 text-[#FFE600] shrink-0 mt-0.5" />
                <span>
                  Suggested facility category for Fit Nation Gym (Tarnol). You are welcome to visit our gym to inspect all machines in person.
                </span>
              </div>
              <div className="flex gap-3">
                <a
                  href={`tel:${GYM_INFO.phoneRaw}`}
                  className="flex-1 py-3.5 text-center text-xs font-extrabold uppercase tracking-widest text-black bg-[#FFE600] hover:bg-[#edd400] rounded-xl shadow-md font-stylish"
                >
                  Call Front Desk
                </a>
                <button
                  onClick={() => setActiveFacility(null)}
                  className="px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-neutral-300 hover:text-white bg-[#202020] border border-[#333333] rounded-xl"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
