import React, { useState, useEffect } from 'react';
import { GALLERY_ITEMS, GalleryItem } from '../data/gymData';
import { Maximize2, X, ChevronLeft, ChevronRight, Info } from 'lucide-react';
import { ScrollReveal } from '../components/ScrollReveal';
import { handleImageError } from '../utils/imageFallback';

export const GalleryPage: React.FC = () => {
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);
  const [filterCategory, setFilterCategory] = useState<string>('All');

  const categories = ['All', 'Training Floor', 'Strength', 'Cardio', 'Functional', 'Machines'];

  const filteredItems =
    filterCategory === 'All'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter(
          (item) => item.category.toLowerCase() === filterCategory.toLowerCase()
        );

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!activeItem) return;

      if (e.key === 'Escape') {
        setActiveItem(null);
      } else if (e.key === 'ArrowRight') {
        const currentIndex = filteredItems.findIndex((i) => i.id === activeItem.id);
        const nextIndex = (currentIndex + 1) % filteredItems.length;
        setActiveItem(filteredItems[nextIndex]);
      } else if (e.key === 'ArrowLeft') {
        const currentIndex = filteredItems.findIndex((i) => i.id === activeItem.id);
        const prevIndex = (currentIndex - 1 + filteredItems.length) % filteredItems.length;
        setActiveItem(filteredItems[prevIndex]);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeItem, filteredItems]);

  return (
    <div className="bg-[#0A0A0A]">
      {/* Page Hero */}
      <section className="py-16 lg:py-24 bg-[#111111] border-b border-[#222222]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <ScrollReveal>
              <div className="text-xs font-extrabold uppercase tracking-widest text-[#FFE600] inline-block px-3 py-1 bg-[#FFE600]/10 border border-[#FFE600]/30 rounded mb-4 font-stylish">
                Visual Showcase
              </div>
              <h1 className="font-display text-6xl sm:text-7xl lg:text-8xl font-normal uppercase tracking-wide text-white leading-[0.88] mb-6">
                FACILITY <br />
                <span className="text-[#FFE600]">PHOTO GALLERY.</span>
              </h1>
              <p className="text-lg sm:text-xl text-neutral-300 leading-relaxed">
                Visual references of modern training floors, strength stations, cardio setups, and functional turf spaces.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Main Gallery Grid */}
      <section className="py-20 lg:py-28 border-b border-[#222222]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Transparency Disclaimer Notice */}
          <ScrollReveal>
            <div className="mb-10 p-5 rounded-2xl bg-[#141414] border border-[#2B2B2B] flex items-start gap-3.5 shadow-lg">
              <Info className="w-5 h-5 text-[#FFE600] shrink-0 mt-0.5" />
              <div className="text-xs text-neutral-300 leading-relaxed">
                <strong className="text-white">Visual Notice:</strong> Sample architectural fitness photography shown for aesthetic and illustrative purposes until authentic Fit Nation Gym on-site photographs are published. Members are invited to tour the Tarnol facility in person.
              </div>
            </div>
          </ScrollReveal>

          {/* Filter Bar */}
          <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-[#222222]">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilterCategory(cat)}
                className={`px-4 py-2 text-xs font-extrabold uppercase tracking-wider rounded-xl transition-all font-stylish ${
                  filterCategory === cat
                    ? 'bg-[#FFE600] text-black shadow-lg shadow-[#FFE600]/25'
                    : 'bg-[#161616] text-neutral-300 hover:text-white hover:bg-[#202020] border border-[#2A2A2A]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Gallery Items Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, idx) => (
              <ScrollReveal key={item.id} delay={idx * 60}>
                <div
                  onClick={() => setActiveItem(item)}
                  className="group cursor-pointer bg-[#141414] rounded-2xl overflow-hidden border border-[#282828] hover:border-[#FFE600] hover:shadow-[0_0_25px_-5px_rgba(255,230,0,0.25)] transition-all duration-300 flex flex-col"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-neutral-900">
                    <img
                      src={item.image}
                      alt={item.title}
                      onError={handleImageError}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 filter brightness-[0.85] contrast-[1.05]"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3 text-[11px] font-extrabold uppercase tracking-widest text-black bg-[#FFE600] px-3 py-1 rounded-lg font-mono shadow-md">
                      {item.category}
                    </div>
                    <div className="absolute top-3 right-3 p-2 rounded-lg bg-black/80 text-[#FFE600] opacity-0 group-hover:opacity-100 transition-opacity shadow-sm">
                      <Maximize2 className="w-4 h-4" />
                    </div>
                  </div>

                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-display text-3xl font-normal uppercase text-white tracking-wide mb-1.5 group-hover:text-[#FFE600] transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-xs text-neutral-400 leading-relaxed">
                        {item.caption}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-[#262626] flex items-center justify-between text-xs text-white font-bold group-hover:text-[#FFE600] transition-colors">
                      <span>Click to enlarge photo</span>
                      <span>↗</span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal with Keyboard Support */}
      {activeItem && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setActiveItem(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-[#141414] border border-[#2D2D2D] rounded-3xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Bar with Close button */}
            <div className="p-4 px-6 bg-[#181818] border-b border-[#262626] flex items-center justify-between">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#FFE600]">
                  {activeItem.category}
                </span>
                <h4 className="font-display text-3xl font-normal uppercase text-white">
                  {activeItem.title}
                </h4>
              </div>
              <button
                onClick={() => setActiveItem(null)}
                className="p-2 text-neutral-400 hover:text-white rounded-xl hover:bg-[#222222] transition-colors"
                aria-label="Close Lightbox (Esc)"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Image Container */}
            <div className="relative max-h-[65vh] bg-black flex items-center justify-center overflow-hidden">
              <img
                src={activeItem.image}
                alt={activeItem.title}
                onError={handleImageError}
                className="w-full h-full max-h-[65vh] object-contain"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Caption & Navigation controls */}
            <div className="p-6 bg-[#181818] border-t border-[#262626] flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-xs text-neutral-300 leading-relaxed max-w-xl">
                {activeItem.caption} <span className="text-[11px] text-[#FFE600] font-mono">(Press Esc to exit, Arrow keys to navigate)</span>
              </p>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => {
                    const currentIndex = filteredItems.findIndex((i) => i.id === activeItem.id);
                    const prevIndex = (currentIndex - 1 + filteredItems.length) % filteredItems.length;
                    setActiveItem(filteredItems[prevIndex]);
                  }}
                  className="p-2.5 rounded-xl bg-[#222222] border border-[#333333] text-white hover:text-[#FFE600] hover:border-[#FFE600] transition-colors"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={() => {
                    const currentIndex = filteredItems.findIndex((i) => i.id === activeItem.id);
                    const nextIndex = (currentIndex + 1) % filteredItems.length;
                    setActiveItem(filteredItems[nextIndex]);
                  }}
                  className="p-2.5 rounded-xl bg-[#222222] border border-[#333333] text-white hover:text-[#FFE600] hover:border-[#FFE600] transition-colors"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
