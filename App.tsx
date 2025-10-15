
import React, { useState, FormEvent, useEffect } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import MockupSection from './components/MockupSection';
import WhitelistForm from './components/WhitelistForm';
import Footer from './components/Footer';
import PrivacyPolicy from './components/PrivacyPolicy';
import { LanguageProvider, useLanguage } from './context/LanguageContext';

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

const ContactSection: React.FC = () => {
  const { translations } = useLanguage();
  const { contact } = translations;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [status, setStatus] = useState<FormStatus>('idle');
  const [responseMessage, setResponseMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const { name, email, message } = formData;
    if (!name || !email || !/^\S+@\S+\.\S+$/.test(email) || !message) {
      setStatus('error');
      setResponseMessage(contact.form.errorValidation);
      return;
    }

    setStatus('loading');
    setResponseMessage('');

    try {
      const response = await fetch(import.meta.env.VITE_CONTACTO_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': import.meta.env.VITE_WHITELIST_API_TOKEN,
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json().catch(() => ({})); // Handle cases where response might not have a body

      if (response.ok) {
        setStatus('success');
        setResponseMessage(data.result || contact.form.success);
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        setStatus('error');
        setResponseMessage(data.result || contact.form.error);
      }
    } catch (error) {
      console.error('Submission error:', error);
      setStatus('error');
      setResponseMessage(contact.form.error);
    }
  };
  
  const inputStyles = "w-full px-6 py-3 bg-brand-bg-light text-brand-text-light rounded-lg border-2 border-white/10 focus:outline-none focus:ring-4 focus:ring-brand-primary/50 focus:border-brand-primary transition-all duration-300";

  return (
    <section id="contact" className="py-20 bg-brand-bg-dark">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-brand-text-light">{contact.title}</h2>
          <p className="text-lg text-brand-text-dark mt-4 max-w-3xl mx-auto">
            {contact.description}
          </p>
        </div>
        <div className="max-w-2xl mx-auto bg-brand-bg-light p-8 rounded-2xl shadow-2xl border border-white/10">
          <form onSubmit={handleSubmit} noValidate>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-brand-text-dark mb-2">{contact.form.name}</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={inputStyles}
                  required
                  disabled={status === 'loading'}
                  aria-label={contact.form.name}
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-brand-text-dark mb-2">{contact.form.email}</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={inputStyles}
                  required
                  disabled={status === 'loading'}
                  aria-label={contact.form.email}
                />
              </div>
            </div>
            <div className="mb-6">
              <label htmlFor="phone" className="block text-sm font-medium text-brand-text-dark mb-2">{contact.form.phone}</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={inputStyles}
                disabled={status === 'loading'}
                aria-label={contact.form.phone}
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium text-brand-text-dark mb-2">{contact.form.message}</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className={inputStyles}
                required
                disabled={status === 'loading'}
                aria-label={contact.form.message}
              />
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="w-full sm:w-auto bg-gradient-to-r from-brand-primary to-brand-secondary text-white font-bold text-lg px-8 py-4 rounded-full hover:opacity-90 transition-all duration-300 transform hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={status === 'loading'}
              >
                {status === 'loading' ? contact.form.loading : contact.form.button}
              </button>
            </div>
            {responseMessage && (
              <div className={`mt-4 text-center text-sm ${status === 'success' ? 'text-green-400' : 'text-red-400'}`}>
                {responseMessage}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

const MainContent: React.FC = () => (
  <>
    <HeroSection />
    <FeaturesSection />
    <MockupSection />
    <WhitelistForm />
    <ContactSection />
  </>
);

const App: React.FC = () => {
  const [page, setPage] = useState(window.location.hash === '#privacy' ? 'privacy' : 'main');

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '#privacy') {
        setPage('privacy');
        window.scrollTo(0, 0);
      } else {
        setPage('main');
        // Allow default anchor link behavior on the main page
        if (window.location.hash) {
            const id = window.location.hash.substring(1);
            const element = document.getElementById(id);
            if (element) {
              element.scrollIntoView({ behavior: 'smooth' });
            }
        }
      }
    };
    
    window.addEventListener('hashchange', handleHashChange);
    // Initial check
    handleHashChange();

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  return (
    <LanguageProvider>
      <div className="bg-brand-bg-dark min-h-screen font-sans text-brand-text-light">
        <div className="relative overflow-hidden">
          <Header />
          <main>
            {page === 'privacy' ? <PrivacyPolicy /> : <MainContent />}
          </main>
          <Footer />
        </div>
      </div>
    </LanguageProvider>
  );
};

export default App;
