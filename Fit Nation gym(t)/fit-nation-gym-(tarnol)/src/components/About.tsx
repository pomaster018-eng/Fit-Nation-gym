import React from 'react';
import { ArrowRight, Check, MapPin } from 'lucide-react';
import { GYM_INFO } from '../data/gymData';
import { useNavigation } from '../context/NavigationContext';
import { handleImageError } from '../utils/imageFallback';

export const About: React.FC = () => {
  const { navigate } = useNavigation();
  return (
    <section id="about-section" className="py-24 bg-[#0F0F0F] relative overflow-hidden border-b border-[#1E1E1E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Story & Vision */}
          <div className="lg:col-span-7 space-y-6">
            <div className="text-xs font-bold uppercase tracking-widest text-[#FFE600]">
              About Fit Nation Gym
            </div>

            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white leading-none">
              MORE THAN A <span className="text-[#FFE600]">WORKOUT.</span>
            </h2>

            <p className="text-lg text-neutral-200 leading-relaxed font-normal">
              Fit Nation Gym is a fitness destination in Tarnol, Islamabad, serving people who want to make fitness part of their routine. Whether you're starting your journey or maintaining an active lifestyle, our goal is to help you show up, stay consistent, and keep moving toward your goals.
            </p>

            <p className="text-sm text-[#B8B8B8] leading-relaxed">
              We understand that consistency is the hardest part of any transformation. That is why our facility is structured to provide an uncluttered, high-focus training space where you can execute your workouts efficiently, safely, and without unnecessary distractions.
            </p>

            {/* Core Values / Commitments */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 bg-[#151515] rounded border border-[#242424]">
                <div className="flex items-center gap-2 text-white font-display text-lg font-bold uppercase">
                  <Check className="w-4 h-4 text-[#FFE600]" />
                  Dedicated Ladies & Gents Spaces
                </div>
                <p className="text-xs text-[#B8B8B8] mt-1.5 leading-relaxed">
                  Tailored schedule arrangements so every member can train with comfort and peace of mind.
                </p>
              </div>

              <div className="p-4 bg-[#151515] rounded border border-[#242424]">
                <div className="flex items-center gap-2 text-white font-display text-lg font-bold uppercase">
                  <Check className="w-4 h-4 text-[#FFE600]" />
                  Quality Training Equipment
                </div>
                <p className="text-xs text-[#B8B8B8] mt-1.5 leading-relaxed">
                  Heavy-duty racks, diverse machine selector units, and free weights to cover all muscle groups.
                </p>
              </div>

              <div className="p-4 bg-[#151515] rounded border border-[#242424]">
                <div className="flex items-center gap-2 text-white font-display text-lg font-bold uppercase">
                  <Check className="w-4 h-4 text-[#FFE600]" />
                  Extended Daily Timings
                </div>
                <p className="text-xs text-[#B8B8B8] mt-1.5 leading-relaxed">
                  Open from 6:30 AM in the morning till 12:00 AM midnight to accommodate work and family routines.
                </p>
              </div>

              <div className="p-4 bg-[#151515] rounded border border-[#242424]">
                <div className="flex items-center gap-2 text-white font-display text-lg font-bold uppercase">
                  <Check className="w-4 h-4 text-[#FFE600]" />
                  Direct Community Support
                </div>
                <p className="text-xs text-[#B8B8B8] mt-1.5 leading-relaxed">
                  Friendly and supportive on-site atmosphere commended by local twin-city fitness community.
                </p>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={() => navigate('membership')}
                className="inline-flex items-center gap-2 px-6 py-3 text-xs font-bold uppercase tracking-wider text-black bg-[#FFE600] rounded hover:bg-[#edd400] transition-colors"
              >
                Explore Memberships
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <a
                href={`tel:${GYM_INFO.phoneRaw}`}
                className="inline-flex items-center gap-2 px-6 py-3 text-xs font-bold uppercase tracking-wider text-white bg-transparent border border-neutral-700 hover:border-neutral-500 rounded transition-colors"
              >
                Inquire via Call
              </a>
            </div>
          </div>

          {/* Right Column: Imagery with Clean Framing */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-lg overflow-hidden border border-[#262626] bg-[#151515]">
              <img
                src="/images/facility_cable_machines_1792003059349.jpg"
                alt="Fit Nation Gym training equipment and fitness atmosphere in Tarnol"
                onError={handleImageError}
                className="w-full h-[460px] object-cover filter brightness-[0.85] contrast-[1.05]"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

              {/* Floating Location Card inside image */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded bg-[#0A0A0A]/90 backdrop-blur-md border border-[#333333]">
                <div className="flex items-center gap-2 text-[#FFE600] text-xs font-bold uppercase tracking-wider">
                  <MapPin className="w-3.5 h-3.5" />
                  Tarnol, Islamabad
                </div>
                <div className="text-sm font-semibold text-white mt-1">
                  Fit Nation Gym (Tarnol)
                </div>
                <div className="text-xs text-neutral-400 mt-0.5">
                  Code: MW25+J4R, Islamabad, 44000
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
