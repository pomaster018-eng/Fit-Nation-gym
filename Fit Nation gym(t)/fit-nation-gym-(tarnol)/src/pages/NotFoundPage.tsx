import React from 'react';
import { Home } from 'lucide-react';
import { useNavigation } from '../context/NavigationContext';

export const NotFoundPage: React.FC = () => {
  const { navigate } = useNavigation();

  return (
    <div className="min-h-[70vh] bg-[#0A0A0A] flex items-center justify-center py-20 px-4">
      <div className="max-w-md w-full text-center">
        <div className="w-20 h-20 rounded-2xl bg-[#161616] border border-[#FFE600] text-[#FFE600] font-display text-4xl font-normal flex items-center justify-center mx-auto mb-6 shadow-[0_0_25px_-5px_rgba(255,230,0,0.3)]">
          404
        </div>
        <h1 className="font-display text-5xl sm:text-6xl font-normal uppercase text-white mb-3 tracking-wide">
          PAGE NOT FOUND
        </h1>
        <p className="text-sm text-neutral-400 leading-relaxed mb-8">
          The fitness page or resource you are looking for does not exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-3">
          <button
            onClick={() => navigate('home')}
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-xs font-extrabold uppercase tracking-widest text-black bg-[#FFE600] hover:bg-[#edd400] rounded-xl shadow-lg shadow-[#FFE600]/25 transition-all font-stylish"
          >
            <Home className="w-4 h-4" />
            <span>Return to Home</span>
          </button>
          <button
            onClick={() => navigate('contact')}
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-neutral-300 hover:text-white bg-[#1A1A1A] border border-[#333333] hover:border-[#FFE600] rounded-xl transition-colors font-mono"
          >
            <span>Contact Support</span>
          </button>
        </div>
      </div>
    </div>
  );
};
