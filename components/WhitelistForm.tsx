
import React, { useState, FormEvent } from 'react';
import { useLanguage } from '../context/LanguageContext';

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

const WhitelistForm: React.FC = () => {
  const { translations } = useLanguage();
  const { whitelist } = translations;

  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<FormStatus>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!email) {
        setStatus('error');
        setMessage(whitelist.form.error);
        return;
    }
    
    setStatus('loading');
    setMessage('');

    // Simulate an API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Simulate success/error
    if (email.includes('error')) {
        setStatus('error');
        setMessage(whitelist.form.errorApi);
    } else {
        setStatus('success');
        setMessage(whitelist.form.success);
        setEmail('');
    }
  };

  return (
    <section id="whitelist" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="bg-brand-charcoal-dark rounded-2xl p-8 md:p-16 text-center shadow-2xl">
          <h2 className="text-4xl font-bold text-white">{whitelist.title}</h2>
          <p className="text-lg text-brand-cyan-200 mt-4 max-w-2xl mx-auto"
             dangerouslySetInnerHTML={{ __html: whitelist.description }}
          />
          <form onSubmit={handleSubmit} className="mt-8 max-w-lg mx-auto">
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={whitelist.form.placeholder}
                className="w-full px-6 py-4 text-lg text-brand-charcoal-dark rounded-full border-2 border-transparent focus:outline-none focus:ring-4 focus:ring-brand-cyan-400 transition-all duration-300"
                disabled={status === 'loading'}
              />
              <button
                type="submit"
                className="w-full sm:w-auto bg-brand-cyan-600 text-white font-bold text-lg px-8 py-4 rounded-full hover:bg-brand-cyan-700 transition-all duration-300 transform hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
                disabled={status === 'loading'}
              >
                {status === 'loading' ? whitelist.form.loading : whitelist.form.button}
              </button>
            </div>
             {message && (
                <p className={`mt-4 text-sm ${status === 'success' ? 'text-green-400' : 'text-red-400'}`}>
                    {message}
                </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default WhitelistForm;
