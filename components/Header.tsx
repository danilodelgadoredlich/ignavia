
import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

const Logo = () => (
  <div className="flex items-center space-x-1">
    <div className="w-6 h-6 bg-brand-cyan-500 flex items-center justify-center text-white font-bold rounded-sm">I</div>
    <span className="text-2xl font-bold text-brand-charcoal-dark">Ignavia</span>
  </div>
);

const NavLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
  <a href={href} className="text-brand-charcoal-light hover:text-brand-cyan-600 transition-colors duration-300 py-2">
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
          <NavLink href="#whitelist">{header.whitelist}</NavLink>
          <NavLink href="#contact">{header.contact}</NavLink>
          <button
            onClick={toggleLanguage}
            className="bg-brand-cyan-100 text-brand-cyan-800 font-semibold text-sm px-4 py-2 rounded-full hover:bg-brand-cyan-200 transition-colors duration-300"
          >
            {header.language}
          </button>
        </nav>
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-brand-charcoal-dark focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
            </svg>
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-white mt-2 rounded-lg shadow-lg mx-6">
          <nav className="flex flex-col items-center space-y-4 p-4">
            <NavLink href="#features">{header.features}</NavLink>
            <NavLink href="#demo">{header.demo}</NavLink>
            <NavLink href="#whitelist">{header.whitelist}</NavLink>
            <NavLink href="#contact">{header.contact}</NavLink>
            <button
              onClick={toggleLanguage}
              className="bg-brand-cyan-100 text-brand-cyan-800 font-semibold text-sm px-4 py-2 rounded-full hover:bg-brand-cyan-200 transition-colors duration-300 mt-2"
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
