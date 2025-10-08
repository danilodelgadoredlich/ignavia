
import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import MockupSection from './components/MockupSection';
import WhitelistForm from './components/WhitelistForm';
import Footer from './components/Footer';
import { LanguageProvider } from './context/LanguageContext';

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <div className="bg-brand-cyan-50 min-h-screen font-sans text-brand-charcoal">
        <div className="relative overflow-hidden">
          <Header />
          <main>
            <HeroSection />
            <FeaturesSection />
            <MockupSection />
            <WhitelistForm />
          </main>
          <Footer />
        </div>
      </div>
    </LanguageProvider>
  );
};

export default App;
