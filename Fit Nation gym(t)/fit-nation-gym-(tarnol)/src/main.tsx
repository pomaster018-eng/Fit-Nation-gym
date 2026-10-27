import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Prevent browser from restoring scroll position to contact section on reload
if (typeof window !== 'undefined') {
  if ('scrollRestoration' in window.history) {
    window.history.scrollRestoration = 'manual';
  }
  if (window.location.hash.toLowerCase().includes('contact')) {
    try {
      window.history.replaceState(null, '', window.location.pathname + window.location.search);
    } catch {
      // Ignore history state errors
    }
  }
  window.scrollTo(0, 0);
}

createRoot(document.getElementById('root')!).render(<App />);
