
import React from 'react';
import { TwitterIcon, InstagramIcon, FacebookIcon } from './icons/SocialIcons';
import { useLanguage } from '../context/LanguageContext';

const Footer: React.FC = () => {
  const { translations } = useLanguage();
  const { footer } = translations;

  return (
    <footer id="contact" className="bg-brand-bg-dark text-white border-t-4 border-brand-primary">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold">Ignavia</h3>
            <p className="text-brand-text-dark">{footer.tagline}</p>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-brand-text-dark hover:text-brand-primary transition-colors duration-300">
              <InstagramIcon />
            </a>
            <a href="#" className="text-brand-text-dark hover:text-brand-primary transition-colors duration-300">
              <TwitterIcon />
            </a>
            <a href="#" className="text-brand-text-dark hover:text-brand-primary transition-colors duration-300">
              <FacebookIcon />
            </a>
          </div>
        </div>
        <div className="mt-8 border-t border-white/10 pt-6 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Ignavia. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
