import React from 'react';
import { X, CheckCircle2, AlertCircle, ShieldCheck } from 'lucide-react';
import { GYM_INFO } from '../data/gymData';

interface OwnerNoticeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const OwnerNoticeModal: React.FC<OwnerNoticeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="bg-[#141414] border border-[#2D2D2D] rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between pb-4 border-b border-[#262626]">
          <div>
            <div className="text-xs font-extrabold uppercase tracking-widest text-[#FFE600] inline-block px-2.5 py-0.5 bg-[#FFE600]/10 border border-[#FFE600]/30 rounded mb-1 font-stylish">
              Business Onboarding & Verification
            </div>
            <h3 className="font-display text-3xl sm:text-4xl font-normal uppercase text-white tracking-wide">
              Fit Nation Gym – Owner Checklist
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-neutral-400 hover:text-white rounded-xl hover:bg-[#202020]"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="py-6 space-y-6 text-sm">
          {/* Verified Items */}
          <div className="p-5 bg-[#1C1C1C] rounded-xl border border-[#2D2D2D] space-y-3">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#FFE600] font-mono">
              <ShieldCheck className="w-4 h-4 text-[#FFE600]" />
              Verified & Locked Details
            </div>
            <ul className="space-y-2 text-xs text-neutral-300">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#FFE600]" />
                <span className="text-white font-bold">Business Name:</span> {GYM_INFO.fullName}
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#FFE600]" />
                <span className="text-white font-bold">Address:</span> {GYM_INFO.address}
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#FFE600]" />
                <span className="text-white font-bold">Direct Phone:</span> {GYM_INFO.phone} (tel link enabled)
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#FFE600]" />
                <span className="text-white font-bold">Google Rating:</span> 4.6/5 from 11 reviews (Google Maps linked)
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#FFE600]" />
                <span className="text-white font-bold">Audience:</span> Ladies and Gentlemen
              </li>
            </ul>
          </div>

          {/* Pending Owner Customization */}
          <div className="p-5 bg-[#1C1C1C] rounded-xl border border-[#2D2D2D] space-y-3">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#FFE600] font-mono">
              <AlertCircle className="w-4 h-4 text-[#FFE600]" />
              Items Configured as Editable Placeholders
            </div>
            <ul className="space-y-2.5 text-xs text-neutral-300">
              <li>
                <strong className="text-white">1. Membership Pricing:</strong> Kept as "Contact for Price" to preserve truth in advertising until confirmed. Can be edited in <code className="bg-[#242424] px-1.5 py-0.5 rounded border border-[#333333] text-[#FFE600] font-mono">src/data/gymData.ts</code>.
              </li>
              <li>
                <strong className="text-white">2. Daily Schedule Confirmation:</strong> Current 6:30 AM – 12:00 AM daily hours are displayed with a note indicating schedule confirmation. Specific women's & men's timing slots can be customized in the data file.
              </li>
              <li>
                <strong className="text-white">3. Real Facility Photos:</strong> High-end placeholder athletic imagery is active. Replace image files in <code className="bg-[#242424] px-1.5 py-0.5 rounded border border-[#333333] text-[#FFE600] font-mono">src/assets/images/</code> with real photos of Fit Nation Gym whenever available.
              </li>
            </ul>
          </div>
          {/* Export & Vercel Publishing Section */}
          <div className="p-5 bg-[#1C1C1C] rounded-xl border border-[#FFE600]/40 space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#FFE600] font-mono">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 22.525H0l12-21.05 12 21.05z" />
                </svg>
                Deploy to Vercel (Ready to Publish)
              </div>
              <span className="text-[10px] uppercase font-bold px-2 py-0.5 bg-[#FFE600] text-black rounded font-mono">
                ZIP Included
              </span>
            </div>
            <p className="text-xs text-neutral-300 leading-relaxed">
              This complete project has been bundled with pre-configured <code className="bg-[#242424] px-1 py-0.5 rounded text-[#FFE600] font-mono">vercel.json</code>, Vite configuration, and optimized assets ready for instant deployment.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a
                href="/fit-nation-gym.zip"
                download="fit-nation-gym.zip"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-extrabold uppercase tracking-widest text-black bg-[#FFE600] hover:bg-[#edd400] rounded-xl font-stylish shadow-md"
              >
                <span>Download Source ZIP (15 MB)</span>
              </a>
              <a
                href="https://vercel.com/new"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-[#262626] hover:bg-[#333333] border border-[#3A3A3A] hover:border-[#FFE600] rounded-xl transition-colors"
              >
                <span>Open Vercel Dashboard →</span>
              </a>
            </div>
          </div>
        </div>

        <div className="pt-4 border-t border-[#262626] flex items-center justify-between">
          <a
            href="/fit-nation-gym.zip"
            download="fit-nation-gym.zip"
            className="text-xs text-[#FFE600] hover:underline font-bold inline-flex items-center gap-1.5 font-mono"
          >
            <span>↓ Download Project (.zip)</span>
          </a>
          <button
            onClick={onClose}
            className="px-6 py-2.5 text-xs font-extrabold uppercase tracking-widest text-black bg-[#FFE600] hover:bg-[#edd400] rounded-xl font-stylish shadow-md"
          >
            I Understand & Close
          </button>
        </div>
      </div>
    </div>
  );
};
