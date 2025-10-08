
import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const HeroIllustration = () => (
  <svg width="100%" height="100%" viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 w-full h-full object-cover opacity-10">
    <defs>
      <radialGradient id="grad1" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
        <stop offset="0%" style={{stopColor: 'rgba(6, 182, 212, 0.3)', stopOpacity: 1}} />
        <stop offset="100%" style={{stopColor: 'rgba(6, 182, 212, 0)', stopOpacity: 1}} />
      </radialGradient>
    </defs>
    <circle cx="200" cy="150" r="150" fill="url(#grad1)" />
    <circle cx="700" cy="400" r="200" fill="url(#grad1)" />
    <circle cx="50" cy="500" r="80" fill="url(#grad1)" />
  </svg>
);

const HeroSection: React.FC = () => {
  const { translations } = useLanguage();
  const { hero } = translations;
  
  return (
    <section className="relative pt-32 pb-16 md:pt-48 md:pb-24 min-h-[80vh] flex items-center">
      <HeroIllustration />
      <div className="container mx-auto px-6 z-10">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0">
            <h1 className="text-4xl md:text-6xl font-bold text-brand-charcoal-dark leading-tight mb-4">
              {hero.title}
            </h1>
            <p className="text-lg font-semibold text-brand-cyan-700 uppercase tracking-widest mb-6">{hero.subtitle}</p>
            <p className="text-lg text-brand-charcoal-light max-w-xl mx-auto lg:mx-0 mb-8">
              {hero.description}
            </p>
            <a href="#whitelist" className="inline-block bg-brand-cyan-600 text-white font-bold text-lg px-8 py-4 rounded-full hover:bg-brand-cyan-700 transition-transform duration-300 transform hover:scale-105 shadow-lg">
              {hero.cta}
            </a>
          </div>
          <div className="lg:w-1/2 flex justify-center">
            {/* Placeholder for a more complex illustration */}
            <div className="relative w-full max-w-lg">
                <div className="bg-white p-4 rounded-lg shadow-2xl">
                    <div className="bg-slate-100 p-2 rounded-md">
                        <p className="font-mono text-xs text-slate-500 mb-2">// Sample AI Summary</p>
                        <p className="font-semibold text-brand-charcoal-dark">Q3 Project Update</p>
                        <ul className="list-disc list-inside text-slate-600 text-sm mt-2 space-y-1">
                            <li>Design phase is <span className="font-semibold text-green-600">90% complete</span>.</li>
                            <li>Frontend development starts next week.</li>
                            <li>Marketing needs final copy by Friday EOD.</li>
                        </ul>
                    </div>
                     <div className="mt-4 opacity-40">
                        <div className="h-2 w-full bg-slate-200 rounded-full mb-2"></div>
                        <div className="h-2 w-3/4 bg-slate-200 rounded-full mb-2"></div>
                        <div className="h-2 w-1/2 bg-slate-200 rounded-full"></div>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
