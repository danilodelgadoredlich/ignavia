
import React from 'react';
import { useLanguage } from '../context/LanguageContext';

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

const HeroAIIllustration = () => (
    <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-lg">
        <defs>
            <linearGradient id="ai-core-grad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#6366F1" />
                <stop offset="100%" stopColor="#EC4899" />
            </linearGradient>
            <filter id="ai-glow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="5" result="coloredBlur" />
                <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                </feMerge>
            </filter>
        </defs>
        {/* Animated network lines with a subtle pulse */}
        <g id="network-lines" stroke="#F3F4F6" strokeWidth="1">
            <animate attributeName="stroke-opacity" values="0.1;0.4;0.1" dur="5s" repeatCount="indefinite" />
            <path d="M 50 150 Q 200 50 350 150" fill="none" />
            <path d="M 50 150 Q 200 250 350 150" fill="none" />
            <path d="M 100 100 L 200 150" />
            <path d="M 100 200 L 200 150" />
            <path d="M 300 100 L 200 150" />
            <path d="M 300 200 L 200 150" />
        </g>
        <circle cx="200" cy="150" r="30" fill="url(#ai-core-grad)" filter="url(#ai-glow)">
            <animate attributeName="r" values="30;35;30" dur="3s" repeatCount="indefinite" />
        </circle>
        {/* Pulsating nodes with staggered animations */}
        <g id="nodes">
            <circle cx="50" cy="150" r="10" fill="#6366F1">
                 <animate attributeName="r" values="10;11;10" dur="4s" repeatCount="indefinite" begin="0s" />
            </circle>
            <circle cx="350" cy="150" r="10" fill="#EC4899">
                 <animate attributeName="r" values="10;11;10" dur="4s" repeatCount="indefinite" begin="1s" />
            </circle>
            <circle cx="100" cy="100" r="5" fill="#22D3EE">
                <animate attributeName="r" values="5;6;5" dur="3s" repeatCount="indefinite" begin="0.5s" />
            </circle>
            <circle cx="100" cy="200" r="5" fill="#22D3EE">
                <animate attributeName="r" values="5;6;5" dur="3s" repeatCount="indefinite" begin="1.5s" />
            </circle>
            <circle cx="300" cy="100" r="5" fill="#22D3EE">
                <animate attributeName="r" values="5;6;5" dur="3s" repeatCount="indefinite" begin="1s" />
            </circle>
            <circle cx="300" cy="200" r="5" fill="#22D3EE">
                <animate attributeName="r" values="5;6;5" dur="3s" repeatCount="indefinite" begin="2s" />
            </circle>
        </g>
        {/* Data packets that fade in and out as they travel */}
        <g id="data-packets" fill="#F3F4F6">
             <circle cx="50" cy="150" r="3">
                <animateMotion path="M 50 150 Q 200 50 350 150" dur="4s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.2;0.8;1" dur="4s" repeatCount="indefinite" />
            </circle>
             <circle cx="50" cy="150" r="2">
                <animateMotion path="M 50 150 Q 200 250 350 150" dur="3.5s" repeatCount="indefinite" begin="1s"/>
                <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.2;0.8;1" dur="3.5s" repeatCount="indefinite" begin="1s"/>
            </circle>
             <circle cx="100" cy="200" r="2.5">
                <animateMotion path="M 100 200 L 200 150" dur="3s" repeatCount="indefinite" begin="2s" />
                <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.2;0.8;1" dur="3s" repeatCount="indefinite" begin="2s" />
            </circle>
        </g>
    </svg>
);


const HeroSection: React.FC = () => {
  const { translations } = useLanguage();
  const { hero } = translations;
  
  return (
    <section className="relative pt-32 pb-16 md:pt-48 md:pb-24 min-h-[90vh] flex items-center">
      <HeroBackground />
      <div className="container mx-auto px-6 z-10">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0">
            <p className="text-lg font-semibold text-brand-primary uppercase tracking-widest mb-4">{hero.subtitle}</p>
            <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-text-light to-brand-text-dark leading-tight mb-6">
              {hero.title}
            </h1>
            <p className="text-lg text-brand-text-dark max-w-xl mx-auto lg:mx-0">
              {hero.description}
            </p>
          </div>
          <div className="lg:w-1/2 flex justify-center">
            <HeroAIIllustration />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;