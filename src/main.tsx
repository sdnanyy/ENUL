import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { preloadCriticalResources, optimizeScrollPerformance } from './utils/performance';

// Preload critical resources
preloadCriticalResources();

// Optimize scroll performance
optimizeScrollPerformance();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
