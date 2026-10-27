import React from 'react';

interface GymLogoProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  showIcon?: boolean;
}

export const GymLogo: React.FC<GymLogoProps> = ({
  size = 'md',
  className = '',
  showIcon = true,
}) => {
  const iconSizes = {
    sm: 'w-7 h-7 text-xs',
    md: 'w-9 h-9 text-sm',
    lg: 'w-11 h-11 text-base',
  };

  const textSizes = {
    sm: 'text-2xl',
    md: 'text-3xl sm:text-4xl',
    lg: 'text-4xl sm:text-5xl',
  };

  const tagSizes = {
    sm: 'text-[10px] tracking-wider',
    md: 'text-xs sm:text-sm tracking-widest',
    lg: 'text-sm sm:text-base tracking-widest',
  };

  return (
    <div className={`inline-flex items-center gap-3 select-none group ${className}`}>
      {showIcon && (
        <div
          className={`${iconSizes[size]} rounded-lg bg-[#FFE600] text-black font-extrabold flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(255,230,0,0.35)] group-hover:scale-105 transition-transform duration-200`}
        >
          {/* Athletic Hexagon Shield with FN Monogram */}
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-5 h-5 fill-black stroke-black"
          >
            {/* Dynamic Gym Dumbbell / Barbell Motif */}
            <path d="M6 5v14M18 5v14M2 9v6M22 9v6M6 12h12" />
          </svg>
        </div>
      )}

      <div className="flex items-baseline gap-2">
        <span
          className={`font-kg ${textSizes[size]} tracking-wider uppercase text-white group-hover:text-[#FFE600] transition-colors leading-none`}
        >
          FIT NATION
        </span>
        <span
          className={`font-stylish font-black ${tagSizes[size]} text-[#FFE600] uppercase leading-none`}
        >
          GYM
        </span>
      </div>
    </div>
  );
};
