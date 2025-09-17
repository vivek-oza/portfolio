import { StrictMode, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Ensure dark mode is applied on initial load
function ThemeInitializer() {
  useEffect(() => {
    if (!document.documentElement.classList.contains('dark')) {
      document.documentElement.classList.add('dark');
    }
  }, []);
  
  return null;
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeInitializer />
    <App />
  </StrictMode>,
)
