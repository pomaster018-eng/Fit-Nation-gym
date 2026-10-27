import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface ThemeToggleProps {
  variant?: 'icon' | 'pill' | 'switch';
  className?: string;
  showLabel?: boolean;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({
  variant = 'icon',
  className = '',
  showLabel = false,
}) => {
  const { theme, toggleTheme, isDark } = useTheme();

  if (variant === 'switch') {
    return (
      <button
        type="button"
        role="switch"
        aria-checked={!isDark}
        aria-label={`Switch to ${isDark ? 'Light' : 'Dark'} theme`}
        onClick={toggleTheme}
        className={`group relative inline-flex h-8 w-16 shrink-0 cursor-pointer rounded-full border p-1 transition-colors duration-300 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FFE600] ${
          isDark
            ? 'bg-[#181818] border-[#333333]'
            : 'bg-[#E5E7EB] border-[#D1D5DB]'
        } ${className}`}
      >
        <span className="sr-only">Toggle Theme</span>
        
        {/* Background icons */}
        <span className="absolute inset-0 flex items-center justify-between px-2 text-[10px] pointer-events-none">
          <Moon className={`w-3.5 h-3.5 transition-opacity ${isDark ? 'text-[#FFE600] opacity-100' : 'text-neutral-400 opacity-30'}`} />
          <Sun className={`w-3.5 h-3.5 transition-opacity ${!isDark ? 'text-amber-500 opacity-100' : 'text-neutral-500 opacity-30'}`} />
        </span>

        {/* Sliding thumb */}
        <span
          className={`pointer-events-none inline-flex h-6 w-6 transform items-center justify-center rounded-full bg-white shadow-md ring-0 transition duration-300 ease-in-out ${
            isDark ? 'translate-x-0 bg-[#242424] text-[#FFE600]' : 'translate-x-8 bg-[#FFE600] text-black'
          }`}
        >
          {isDark ? (
            <Moon className="w-3.5 h-3.5" />
          ) : (
            <Sun className="w-3.5 h-3.5 text-black" />
          )}
        </span>
      </button>
    );
  }

  if (variant === 'pill') {
    return (
      <button
        type="button"
        onClick={toggleTheme}
        aria-label={`Switch to ${isDark ? 'Light' : 'Dark'} theme`}
        className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-stylish font-bold uppercase tracking-wider transition-all duration-200 border ${
          isDark
            ? 'bg-[#141414] text-neutral-200 hover:text-white border-[#2A2A2A] hover:border-[#FFE600]/60'
            : 'bg-[#F3F4F6] text-neutral-800 hover:text-black border-[#E5E7EB] hover:border-[#FFE600]'
        } ${className}`}
      >
        {isDark ? (
          <>
            <Sun className="w-3.5 h-3.5 text-[#FFE600]" />
            <span>Light Mode</span>
          </>
        ) : (
          <>
            <Moon className="w-3.5 h-3.5 text-neutral-800" />
            <span>Dark Mode</span>
          </>
        )}
      </button>
    );
  }

  // Default: 'icon'
  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${isDark ? 'Light' : 'Dark'} theme`}
      title={`Switch to ${isDark ? 'Light' : 'Dark'} theme`}
      className={`relative inline-flex items-center justify-center p-2.5 rounded-xl transition-all duration-200 border ${
        isDark
          ? 'bg-[#141414] hover:bg-[#1C1C1C] text-neutral-300 hover:text-[#FFE600] border-[#2B2B2B] hover:border-[#FFE600]/60'
          : 'bg-[#FFFFFF] hover:bg-[#F3F4F6] text-neutral-700 hover:text-black border-[#E5E7EB] hover:border-black shadow-sm'
      } ${className}`}
    >
      <span className="sr-only">
        {isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      </span>
      {isDark ? (
        <Sun className="w-4 h-4 text-[#FFE600] transition-transform group-hover:rotate-45" />
      ) : (
        <Moon className="w-4 h-4 text-neutral-800 transition-transform group-hover:-rotate-12" />
      )}
      {showLabel && (
        <span className="ml-2 text-xs font-stylish font-bold uppercase tracking-wider">
          {isDark ? 'Light' : 'Dark'}
        </span>
      )}
    </button>
  );
};
