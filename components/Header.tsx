
import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

const Logo = () => (
  <div className="flex items-center space-x-3">
    <svg
      width="40"
      height="40"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Ignavia Logo"
    >
      <defs>
        <linearGradient id="grad-envelope-back" x1="0.5" y1="0" x2="0.5" y2="1">
          <stop stopColor="#4F46E5" />
          <stop offset="1" stopColor="#7C3AED" />
        </linearGradient>
        <linearGradient id="grad-lightning" x1="0.5" y1="0" x2="0.5" y2="1">
          <stop stopColor="#67E8F9" />
          <stop offset="1" stopColor="#0EA5E9" />
        </linearGradient>
        <filter id="shadow" x="-15%" y="-15%" width="130%" height="140%">
            <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#000" floodOpacity="0.2"/>
        </filter>
      </defs>
      <g filter="url(#shadow)">
        {/* Envelope back */}
        <path d="M57,33.5 L32,52 L7,33.5 V54 C7,55.65 8.35,57 10,57 H54 C55.65,57 57,55.65 57,54 Z" fill="url(#grad-envelope-back)" />
        {/* Envelope front flaps */}
        <path d="M7,33.5 L32,52 L57,33.5 L32,15 Z" fill="#312E81" />
        {/* Lightning */}
        <path d="M32,15 V32 l9,-7.1 -6.1,17.4 L29,29.1 23,36.2 Z" fill="url(#grad-lightning)" />
        {/* Pixels */}
        <g fill="#0EA5E9">
          <path d="M37.8,11.9 L32,15 l6.1,-9.2 5.2,2.3 Z" />
          <rect x="44" y="5" width="6" height="6" rx="1" />
          <rect x="52" y="9" width="4" height="4" rx="1" />
          <rect x="48" y="14" width="3" height="3" rx="1" />
          <rect x="41" y="16" width="4" height="4" rx="1" />
        </g>
      </g>
    </svg>
    <span className="text-2xl font-bold text-brand-text-light">Ignavia</span>
  </div>
);

const NavLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
  <a href={href} className="text-brand-text-dark hover:text-brand-primary transition-colors duration-300 py-2 font-medium">
    {children}
  </a>
);

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { translations, toggleLanguage } = useLanguage();
  const { header } = translations;

  return (
    <header className="absolute top-0 left-0 right-0 z-50 bg-transparent py-4">
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Logo />
        <nav className="hidden md:flex items-center space-x-8">
          <NavLink href="#features">{header.features}</NavLink>
          <NavLink href="#demo">{header.demo}</NavLink>
          <NavLink href="#contact">{header.contact}</NavLink>
          <button
            onClick={toggleLanguage}
            className="bg-gradient-to-r from-brand-primary to-brand-secondary text-white font-semibold text-sm px-4 py-2 rounded-full hover:opacity-90 transition-opacity duration-300"
          >
            {header.language}
          </button>
        </nav>
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-brand-text-light focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
            </svg>
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-brand-bg-light mt-2 rounded-lg shadow-lg mx-6">
          <nav className="flex flex-col items-center space-y-4 p-4">
            <NavLink href="#features">{header.features}</NavLink>
            <NavLink href="#demo">{header.demo}</NavLink>
            <NavLink href="#contact">{header.contact}</NavLink>
            <button
              onClick={toggleLanguage}
              className="bg-gradient-to-r from-brand-primary to-brand-secondary text-white font-semibold text-sm px-4 py-2 rounded-full hover:opacity-90 transition-opacity duration-300 mt-2"
            >
              {header.language}
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;