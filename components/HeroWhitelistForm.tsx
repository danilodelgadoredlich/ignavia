import React, { useState, FormEvent } from 'react';
import { useLanguage } from '../context/LanguageContext';

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

interface ApiResponse {
  value: string | number;
  result: string;
}

const HeroWhitelistForm: React.FC = () => {
  const { translations } = useLanguage();
  const { whitelist } = translations;

  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<FormStatus>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
        setStatus('error');
        setMessage(`<p>${whitelist.form.error}</p>`);
        return;
    }
    
    setStatus('loading');
    setMessage('');

    try {
      const response = await fetch(import.meta.env.VITE_WHITELIST_API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': import.meta.env.VITE_WHITELIST_API_TOKEN,
        },
        body: JSON.stringify({ email: email }),
      });

      const data: ApiResponse = await response.json();
      
      if (data && String(data.value) === "0") {
        setStatus('success');
        setMessage(data.result);
        setEmail('');
      } else {
        setStatus('error');
        setMessage(data.result || `<p>${whitelist.form.errorApi}</p>`);
      }

    } catch (error) {
      console.error('Submission error:', error);
      setStatus('error');
      setMessage(`<p>${whitelist.form.errorApi}</p>`);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-8 max-w-xl mx-auto lg:mx-0" noValidate>
        <div className="flex flex-col sm:flex-row items-center gap-4">
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={whitelist.form.placeholder}
                className="w-full px-6 py-4 text-lg bg-brand-bg-light text-brand-text-light rounded-full border-2 border-white/10 focus:outline-none focus:ring-4 focus:ring-brand-primary/50 focus:border-brand-primary transition-all duration-300"
                disabled={status === 'loading'}
                aria-label={whitelist.form.placeholder}
                required
            />
            <button
                type="submit"
                className="w-full sm:w-auto bg-gradient-to-r from-brand-primary to-brand-secondary text-white font-bold text-lg px-8 py-4 rounded-full hover:opacity-90 transition-all duration-300 transform hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
                disabled={status === 'loading'}
            >
                {status === 'loading' ? whitelist.form.loading : whitelist.form.button}
            </button>
        </div>
        {message && (
            <div 
                className={`mt-4 text-sm text-left ${status === 'success' ? 'text-green-400' : 'text-red-400'}`}
                dangerouslySetInnerHTML={{ __html: message }}
                />
        )}
    </form>
  );
};

export default HeroWhitelistForm;
