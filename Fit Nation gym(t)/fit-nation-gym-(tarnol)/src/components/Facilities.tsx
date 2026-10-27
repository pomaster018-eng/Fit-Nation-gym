import React, { useState } from 'react';
import { Dumbbell, HeartPulse, Cpu, Layers, Maximize2, Info, Sparkles } from 'lucide-react';
import { FACILITIES, Facility } from '../data/gymData';
import { handleImageError } from '../utils/imageFallback';

export const Facilities: React.FC = () => {
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
    <section id="facilities-section" className="py-24 bg-[#0A0A0A] border-b border-[#1E1E1E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs font-bold uppercase tracking-widest text-[#FFE600] mb-3">
              Explore Facilities
            </div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white leading-none">
              TRAINING SPACES & <span className="text-[#FFE600]">EQUIPMENT</span>
            </h2>
            <p className="mt-4 text-base text-[#B8B8B8] max-w-2xl">
              Equipped with an expansive range of strength stations, free weights, and conditioning gear to support all fitness goals.
            </p>
          </div>

          {/* Owner placeholder disclaimer note */}
          <div className="p-3 bg-[#151515] border border-neutral-800 rounded max-w-md text-xs text-neutral-400">
            <span className="text-[#FFE600] font-semibold">Note:</span> Suggested categories & visual representations. Facility specifics & real photos can be customized directly by gym management.
          </div>
        </div>

        {/* Category Filter Tabs (Interactive Filter Controls - allowed buttons) */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-2 border-b border-neutral-800">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded transition-all whitespace-nowrap ${
                selectedCategory === cat
                  ? 'bg-[#FFE600] text-black shadow-sm'
                  : 'bg-[#151515] text-neutral-300 hover:text-white hover:bg-[#202020] border border-neutral-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Visual Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredFacilities.map((facility) => (
            <div
              key={facility.id}
              onClick={() => setActiveFacility(facility)}
              className="group cursor-pointer relative bg-[#151515] rounded overflow-hidden border border-[#222222] hover:border-[#FFE600]/50 transition-all duration-300 flex flex-col"
            >
              {/* Image Frame with Scrim */}
              <div className="relative h-64 overflow-hidden bg-neutral-900">
                <img
                  src={facility.image}
                  alt={facility.title}
                  onError={handleImageError}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 filter brightness-[0.75] contrast-[1.05]"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#151515] via-transparent to-black/30" />

                {/* Category Indicator */}
                <div className="absolute top-3 left-3 text-[11px] font-bold uppercase tracking-wider text-black bg-[#FFE600] px-2 py-0.5 rounded font-mono">
                  {facility.category}
                </div>

                {/* Expand icon */}
                <div className="absolute top-3 right-3 p-1.5 rounded bg-black/60 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-display text-2xl font-bold uppercase text-white tracking-wide group-hover:text-[#FFE600] transition-colors">
                    {facility.title}
                  </h3>
                  <div className="text-xs text-[#FFE600] font-medium mt-0.5 mb-2.5">
                    {facility.subtitle}
                  </div>
                  <p className="text-sm text-[#B8B8B8] leading-relaxed">
                    {facility.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-[#222222] flex items-center justify-between text-xs text-neutral-400">
                  <span>Owner-editable section</span>
                  <span className="text-[#FFE600] font-semibold group-hover:underline">
                    View Details →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Facility Detail Modal */}
      {activeFacility && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setActiveFacility(null)}
        >
          <div
            className="bg-[#151515] border border-neutral-700 rounded-lg max-w-xl w-full overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-72 bg-neutral-900">
              <img
                src={activeFacility.image}
                alt={activeFacility.title}
                onError={handleImageError}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#151515] via-transparent to-transparent" />
              <button
                onClick={() => setActiveFacility(null)}
                className="absolute top-4 right-4 p-2 bg-black/70 hover:bg-black text-white rounded-full text-xs font-bold"
              >
                ✕ Close
              </button>
            </div>
            <div className="p-6">
              <div className="text-xs font-bold uppercase tracking-wider text-[#FFE600] mb-1">
                {activeFacility.category} Category
              </div>
              <h3 className="font-display text-3xl font-black uppercase text-white mb-2">
                {activeFacility.title}
              </h3>
              <p className="text-sm text-neutral-300 leading-relaxed mb-4">
                {activeFacility.description}
              </p>
              <div className="p-3 bg-black/40 rounded border border-neutral-800 text-xs text-neutral-400 mb-6">
                <Info className="w-4 h-4 text-[#FFE600] inline mr-1.5" />
                This is a suggested facility category for Fit Nation Gym (Tarnol). Prospective members are invited to visit in person to view all equipment.
              </div>
              <div className="flex gap-3">
                <a
                  href="tel:+923153588144"
                  className="flex-1 py-3 text-center text-xs font-bold uppercase tracking-wider text-black bg-[#FFE600] hover:bg-[#b0e600] rounded"
                >
                  Call Reception
                </a>
                <button
                  onClick={() => setActiveFacility(null)}
                  className="px-5 py-3 text-xs font-bold uppercase tracking-wider text-neutral-300 hover:text-white bg-neutral-800 rounded"
                >
                  Done
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
