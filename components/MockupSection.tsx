
import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const MockupSection: React.FC = () => {
  const { translations } = useLanguage();
  const { mockup } = translations;

  return (
    <section id="demo" className="py-20 bg-brand-cyan-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-brand-charcoal-dark">{mockup.title}</h2>
          <p className="text-lg text-brand-charcoal-light mt-4 max-w-3xl mx-auto">
            {mockup.description}
          </p>
        </div>
        <div className="bg-white rounded-2xl shadow-2xl p-4 lg:p-8 border border-gray-200">
          <div className="bg-slate-100 rounded-t-lg p-3 flex items-center space-x-2">
            <span className="w-3 h-3 bg-red-400 rounded-full"></span>
            <span className="w-3 h-3 bg-yellow-400 rounded-full"></span>
            <span className="w-3 h-3 bg-green-400 rounded-full"></span>
          </div>
          <div className="flex flex-col md:flex-row bg-white rounded-b-lg min-h-[400px]">
            {/* Sidebar */}
            <div className="w-full md:w-1/3 lg:w-1/4 border-r border-slate-200 p-4 space-y-2">
                <div className="bg-brand-cyan-100 p-3 rounded-lg border-l-4 border-brand-cyan-500">
                    <p className="font-bold text-sm text-brand-charcoal-dark">{mockup.sidebar.item1.title}</p>
                    <p className="text-xs text-brand-charcoal-light truncate">{mockup.sidebar.item1.preview}</p>
                </div>
                <div className="p-3 rounded-lg hover:bg-slate-50 cursor-pointer">
                    <p className="font-bold text-sm text-brand-charcoal-dark">{mockup.sidebar.item2.title}</p>
                    <p className="text-xs text-brand-charcoal-light truncate">{mockup.sidebar.item2.preview}</p>
                </div>
                <div className="p-3 rounded-lg hover:bg-slate-50 cursor-pointer">
                    <p className="font-bold text-sm text-brand-charcoal-dark">{mockup.sidebar.item3.title}</p>
                    <p className="text-xs text-brand-charcoal-light truncate">{mockup.sidebar.item3.preview}</p>
                </div>
            </div>
            {/* Main Content */}
            <div className="w-full md:w-2/3 lg:w-3/4 p-6">
                <h3 className="text-2xl font-bold text-brand-charcoal-dark mb-4">{mockup.main.title}</h3>
                <div className="bg-brand-cyan-50 border-l-4 border-brand-cyan-400 p-4 rounded-r-lg">
                    <h4 className="font-bold text-brand-cyan-800 flex items-center mb-2">
                         <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                        </svg>
                        {mockup.main.summaryTitle}
                    </h4>
                    <ul className="list-disc list-inside text-brand-charcoal space-y-2">
                        <li dangerouslySetInnerHTML={{ __html: mockup.main.summaryPoints.goal }} />
                        <li dangerouslySetInnerHTML={{ __html: mockup.main.summaryPoints.people }} />
                        <li dangerouslySetInnerHTML={{ __html: mockup.main.summaryPoints.action }} />
                        <li dangerouslySetInnerHTML={{ __html: mockup.main.summaryPoints.decision }} />
                    </ul>
                </div>
                 <div className="mt-6 text-sm text-slate-500">
                    <p className="font-semibold">{mockup.main.originalThread}</p>
                    <div className="mt-2 space-y-3 opacity-50">
                        <div className="h-3 w-full bg-slate-200 rounded-full"></div>
                        <div className="h-3 w-5/6 bg-slate-200 rounded-full"></div>
                        <div className="h-3 w-3/4 bg-slate-200 rounded-full"></div>
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
