
import React from 'react';
import { SparklesIcon, ClockIcon, ShieldCheckIcon, PaperclipIcon } from './icons/FeatureIcons';
import { useLanguage } from '../context/LanguageContext';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-2">
      <div className="flex items-center justify-center h-16 w-16 rounded-full bg-brand-cyan-100 text-brand-cyan-600 mb-6">
        {icon}
      </div>
      <h3 className="text-2xl font-bold text-brand-charcoal-dark mb-3">{title}</h3>
      <p className="text-brand-charcoal-light leading-relaxed">{description}</p>
    </div>
  );
};

const FeaturesSection: React.FC = () => {
  const { translations } = useLanguage();
  const { features } = translations;

  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-brand-charcoal-dark">{features.title}</h2>
          <p className="text-lg text-brand-charcoal-light mt-4 max-w-3xl mx-auto">
            {features.description}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <FeatureCard
            icon={<SparklesIcon />}
            title={features.cards.ai.title}
            description={features.cards.ai.description}
          />
          <FeatureCard
            icon={<ClockIcon />}
            title={features.cards.time.title}
            description={features.cards.time.description}
          />
          <FeatureCard
            icon={<ShieldCheckIcon />}
            title={features.cards.secure.title}
            description={features.cards.secure.description}
          />
          <FeatureCard
            icon={<PaperclipIcon />}
            title={features.cards.attachments.title}
            description={features.cards.attachments.description}
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
