import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './App.css'
import App from './App.jsx'

// ===== PERFORMANCE MONITORING (optional but industry standard) =====
const reportWebVitals = async () => {
  const { onCLS, onINP, onFCP, onLCP, onTTFB } = await import('web-vitals');
  
  const sendToAnalytics = (metric) => {
    if (import.meta.env.DEV) {
      console.log(metric); // Dev: log to console
    }
    // Production: send to your analytics
    // Example: Google Analytics 4
    // if (window.gtag) {
    //   window.gtag('event', metric.name, {
    //     value: Math.round(metric.value),
    //     metric_id: metric.id,
    //   });
    // }
  };

  onCLS(sendToAnalytics);
  onINP(sendToAnalytics);
  onFCP(sendToAnalytics);
  onLCP(sendToAnalytics);
  onTTFB(sendToAnalytics);
};
const root = document.getElementById('root')

// ===== SAFETY CHECK =====
if (!root) {
  throw new Error('Root element not found. Check your index.html for <div id="root">')
}

createRoot(root).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

// Only logs performance in development
reportWebVitals()