import { StrictMode, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Ensure dark mode is applied on initial load
function ThemeInitializer() {
  useEffect(() => {
    // Force dark mode by adding the class and setting the attribute
    document.documentElement.classList.add('dark');
    document.documentElement.setAttribute('data-theme', 'dark');
    
    // Also set the color scheme meta tag for better browser support
    const meta = document.createElement('meta');
    meta.name = 'color-scheme';
    meta.content = 'dark';
    document.head.appendChild(meta);
    
    return () => {
      document.head.removeChild(meta);
    };
  }, []);
  
  return null;
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeInitializer />
    <App />
  </StrictMode>,
)
