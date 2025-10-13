import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Define global types for Vite's environment variables to ensure they are
// recognized throughout the application.
declare global {
  interface ImportMeta {
    readonly env: {
      readonly VITE_WHITELIST_API_URL: string;
      readonly VITE_WHITELIST_API_TOKEN: string;
      readonly VITE_CONTACTO_URL: string;
    }
  }
}

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
