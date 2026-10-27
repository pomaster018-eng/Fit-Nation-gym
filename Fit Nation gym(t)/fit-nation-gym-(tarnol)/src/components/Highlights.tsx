import React from 'react';
import { Users, Target, Dumbbell, MapPin, CheckCircle2 } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export const Highlights: React.FC = () => {
  const highlights = [
    {
      icon: Users,
      title: "Ladies & Gents",
      status: "Verified Business Detail",
      description:
        "A fitness destination catering to both ladies and gentlemen, structured to ensure a respectful, disciplined, and empowering training environment for everyone.",
    },
    {
      icon: Target,
      title: "Fitness-Focused Environment",
      status: "Community Verified",
      description:
        "Built for real progress without unnecessary gimmicks. Whether your focus is general health, stamina, or strength, you find the right atmosphere to stay consistent.",
    },
    {
      icon: Dumbbell,
      title: "Equipment & Training",
      status: "Review Confirmed",
      description:
        "Equipped with comprehensive resistance machines, free weights, and workout stations. Reviewers consistently praise the machine variety and standard of equipment.",
    },
    {
      icon: MapPin,
      title: "Convenient Tarnol Location",
      status: "Verified Address",
      description:
        "Located at MW25+J4R in Tarnol, Islamabad (44000). Easily accessible for daily training sessions for local residents and commuters alike.",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#111111] border-b border-[#222222]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <ScrollReveal>
            <div className="text-xs font-extrabold uppercase tracking-widest text-[#FFE600] mb-3 inline-block px-3 py-1 bg-[#FFE600]/10 border border-[#FFE600]/30 rounded font-stylish">
              Core Highlights
            </div>
            <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl font-normal uppercase tracking-wide text-white leading-none">
              YOUR FITNESS. YOUR GOALS. <span className="text-[#FFE600]">YOUR GYM.</span>
            </h2>
            <p className="mt-4 text-base sm:text-lg text-neutral-300 max-w-xl mx-auto">
              Practical, purpose-driven fitness in the heart of Tarnol, Islamabad. Designed to help you show up, lift strong, and stay committed.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <ScrollReveal key={item.title} delay={index * 90}>
                <div className="group h-full p-8 bg-[#181818] rounded-2xl border border-[#2A2A2A] hover:border-[#FFE600] hover:shadow-[0_0_25px_-5px_rgba(255,230,0,0.25)] transition-all duration-300 flex flex-col justify-between">
                  <div>
                    <div className="w-14 h-14 rounded-xl bg-[#222222] border border-[#333333] group-hover:bg-[#FFE600] group-hover:border-[#FFE600] group-hover:text-black flex items-center justify-center text-[#FFE600] transition-all mb-6">
                      <Icon className="w-7 h-7" />
                    </div>

                    <h3 className="font-display text-3xl font-normal uppercase text-white tracking-wide mb-3 group-hover:text-[#FFE600] transition-colors">
                      {item.title}
                    </h3>

                    <p className="text-sm text-neutral-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[#262626] flex items-center gap-2 text-xs text-[#FFE600] font-semibold font-mono">
                    <CheckCircle2 className="w-4 h-4 text-[#FFE600]" />
                    <span>{item.status}</span>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};
