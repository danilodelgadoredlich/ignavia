import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

type ItemKey = 'item1' | 'item2' | 'item3';

const MockupSection: React.FC = () => {
  const { translations } = useLanguage();
  const { mockup } = translations;
  const [activeItem, setActiveItem] = useState<ItemKey>('item1');

  const activeContent = mockup.items[activeItem].main;

  return (
    <section id="demo" className="py-20 bg-brand-bg-dark">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-brand-text-light">{mockup.title}</h2>
          <p className="text-lg text-brand-text-dark mt-4 max-w-3xl mx-auto">
            {mockup.description}
          </p>
        </div>
        <div className="bg-brand-bg-light rounded-2xl shadow-2xl p-4 lg:p-8 border border-white/10">
          <div className="bg-brand-bg-dark rounded-t-lg p-3 flex items-center space-x-2">
            <span className="w-3 h-3 bg-red-500 rounded-full"></span>
            <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
            <span className="w-3 h-3 bg-green-500 rounded-full"></span>
          </div>
          <div className="flex flex-col md:flex-row bg-brand-bg-dark rounded-b-lg min-h-[400px]">
            {/* Sidebar */}
            <div className="w-full md:w-1/3 lg:w-1/4 border-r border-white/10 p-4 space-y-2">
              {Object.entries(mockup.items).map(([key, item]) => (
                <div
                  key={key}
                  onClick={() => setActiveItem(key as ItemKey)}
                  className={`p-3 rounded-lg cursor-pointer transition-all duration-200 ${
                    activeItem === key
                      ? 'bg-brand-primary/10 border-l-4 border-brand-primary'
                      : 'hover:bg-white/5'
                  }`}
                  role="button"
                  aria-pressed={activeItem === key}
                  tabIndex={0}
                >
                  <p className="font-bold text-sm text-brand-text-light">{item.sidebar.title}</p>
                  <p className="text-xs text-brand-text-dark truncate">{item.sidebar.preview}</p>
                </div>
              ))}
            </div>
            {/* Main Content */}
            <div className="w-full md:w-2/3 lg:w-3/4 p-6">
                <h3 className="text-2xl font-bold text-brand-text-light mb-4">{activeContent.title}</h3>
                <div className="bg-gradient-to-br from-brand-primary/10 to-brand-secondary/10 border-l-4 border-brand-primary p-4 rounded-r-lg">
                    <h4 className="font-bold text-brand-text-light flex items-center mb-2">
                         <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-brand-primary" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                        </svg>
                        {activeContent.summaryTitle}
                    </h4>
                    <ul className="list-disc list-inside text-brand-text-dark space-y-2">
                       {Object.values(activeContent.summaryPoints).map((point, index) => (
                          <li key={index} dangerouslySetInnerHTML={{ __html: point }} />
                       ))}
                    </ul>
                </div>
                 <div className="mt-6 text-sm text-brand-text-dark">
                    <p className="font-semibold">{activeContent.originalThread}</p>
                    <div className="mt-2 space-y-3 opacity-50">
                        <div className="h-3 w-full bg-gray-600 rounded-full"></div>
                        <div className="h-3 w-5/6 bg-gray-600 rounded-full"></div>
                        <div className="h-3 w-3/4 bg-gray-600 rounded-full"></div>
                    </div>
                 </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MockupSection;