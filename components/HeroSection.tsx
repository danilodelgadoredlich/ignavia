
import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import HeroWhitelistForm from './HeroWhitelistForm';

const HeroBackground = () => (
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden" aria-hidden="true">
        <div className="absolute top-0 left-0 w-full h-full bg-brand-bg-dark">
            <svg width="100%" height="100%" preserveAspectRatio="xMidYMid slice">
                <defs>
                    <radialGradient id="hero-grad" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stopColor="rgba(99, 102, 241, 0.2)" />
                        <stop offset="100%" stopColor="rgba(99, 102, 241, 0)" />
                    </radialGradient>
                    <linearGradient id="glow-line" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="rgba(236, 72, 153, 0)" />
                        <stop offset="50%" stopColor="rgba(236, 72, 153, 0.5)" />
                        <stop offset="100%" stopColor="rgba(236, 72, 153, 0)" />
                    </linearGradient>
                </defs>
                <rect width="100%" height="100%" fill="url(#hero-grad)" />
                <line x1="0" y1="50%" x2="100%" y2="50%" stroke="url(#glow-line)" strokeWidth="2" opacity="0.3" />
                <circle cx="10%" cy="20%" r="2" fill="#EC4899" className="animate-pulse" />
                <circle cx="80%" cy="10%" r="3" fill="#6366F1" className="animate-pulse delay-1000" />
                <circle cx="90%" cy="80%" r="2" fill="#22D3EE" className="animate-pulse delay-500" />
                <circle cx="20%" cy="90%" r="1" fill="#F3F4F6" className="animate-pulse delay-1500" />
            </svg>
        </div>
    </div>
);

const HeroImage = () => (
    <div className="w-full">
        <img
            src="https://ignavia.cl/email-sent.gif"
            alt="Ignavia app in action, summarizing an email thread."
            width={1200}
            height={800}
            className="w-full h-auto rounded-xl shadow-2xl border-2 border-white/10 transform transition-transform duration-500 ease-in-out hover:scale-105"
            loading="lazy"
        />
    </div>
);


const HeroSection: React.FC = () => {
  const { translations } = useLanguage();
  const { hero } = translations;
  
  return (
    <section className="relative pt-32 pb-16 md:pt-48 md:pb-24 min-h-[90vh] flex items-center">
      <HeroBackground />
      <div className="container mx-auto px-6 z-10">
        <div className="flex flex-col lg:flex-row items-center lg:gap-12">
          <div className="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0">
            <p className="text-lg font-semibold text-brand-primary uppercase tracking-widest mb-4">{hero.subtitle}</p>
            <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-text-light to-brand-text-dark leading-tight mb-6">
              {hero.title}
            </h1>
            <p className="text-lg text-brand-text-dark max-w-xl mx-auto lg:mx-0">
              {hero.description}
            </p>
            <HeroWhitelistForm />
          </div>
          <div className="lg:w-1/2 flex justify-center">
            <HeroImage />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;