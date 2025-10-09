
import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import MockupSection from './components/MockupSection';
// FIX: Import the WhitelistForm component so it can be rendered in the application.
import WhitelistForm from './components/WhitelistForm';
import Footer from './components/Footer';
import { LanguageProvider } from './context/LanguageContext';

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <div className="bg-brand-bg-dark min-h-screen font-sans text-brand-text-light">
        <div className="relative overflow-hidden">
          <Header />
          <main>
            <HeroSection />
            <FeaturesSection />
            <MockupSection />
            {/* FIX: Render the WhitelistForm component which was previously unused. */}
            <WhitelistForm />
          </main>
          <Footer />
        </div>
      </div>
    </LanguageProvider>
  );
};

export default App;