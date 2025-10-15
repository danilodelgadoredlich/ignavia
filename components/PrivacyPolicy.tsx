
import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Section: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
    <div className="mb-8">
      <h2 className="text-2xl font-bold text-brand-text-light mb-4">{title}</h2>
      <div className="space-y-4 text-brand-text-dark leading-relaxed">
        {children}
      </div>
    </div>
);

const SubSection: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
    <div className="mt-6">
        <h3 className="font-bold text-brand-text-light mb-2">{title}</h3>
        <div className="space-y-2 text-brand-text-dark leading-relaxed">
            {children}
        </div>
    </div>
);

const PrivacyPolicy: React.FC = () => {
  const { translations } = useLanguage();
  const { privacyPolicyPage: t } = translations;

  return (
    <section className="py-24 md:py-32 bg-brand-bg-dark">
      <div className="container mx-auto px-6 max-w-4xl">
        <a href="#" className="text-brand-primary hover:underline mb-8 inline-block">&larr; {t.backToHome}</a>
        <h1 className="text-4xl md:text-5xl font-bold text-brand-text-light mb-4">{t.title}</h1>
        <p className="text-sm text-brand-text-dark mb-12">{t.lastUpdated}: {t.lastUpdatedDate}</p>

        <Section title={t.controller.title}>
          <p><a href={t.controller.link} className="text-brand-accent hover:underline">{t.controller.link}</a></p>
          <p>{t.controller.line2}: <a href={`mailto:${t.controller.email}`} className="text-brand-accent hover:underline">{t.controller.email}</a></p>
        </Section>
        
        <Section title={t.section1.title}>
            <SubSection title={t.section1.subtitle}>
                <p>{t.section1.content}</p>
            </SubSection>
        </Section>
        
        <Section title={t.section2.title}>
            <p>{t.section2.intro}</p>
            <ul className="list-disc list-inside pl-4">
                <li>{t.section2.point1}</li>
                <li>{t.section2.point2}</li>
                <li>{t.section2.point3}</li>
            </ul>
        </Section>

        <Section title={t.section3.title}>
             <SubSection title={t.section3.subtitle1}>
                <p>{t.section3.content1}</p>
            </SubSection>
            <SubSection title={t.section3.subtitle2}>
                <p>{t.section3.content2}</p>
            </SubSection>
            <SubSection title={t.section3.subtitle3}>
                <p>{t.section3.content3}</p>
            </SubSection>
        </Section>
        
        <Section title={t.section4.title}>
            <p>{t.section4.content}</p>
        </Section>
        
        <Section title={t.section5.title}>
            <p>{t.section5.intro}</p>
            <ul className="list-disc list-inside pl-4">
                <li>{t.section5.point1}</li>
                <li>{t.section5.point2}</li>
                <li>{t.section5.point3}</li>
                <li>{t.section5.point4}</li>
            </ul>
            <p className="mt-4">{t.section5.outro}</p>
        </Section>
        
        <Section title={t.section6.title}>
            <p>{t.section6.content}</p>
        </Section>

        <Section title={t.section7.title}>
            <p>{t.section7.content}</p>
        </Section>

      </div>
    </section>
  );
};

export default PrivacyPolicy;
