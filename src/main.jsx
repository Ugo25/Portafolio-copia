import { StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import './i18n.js';
import './index.css';
import App from './App.jsx';

const LoadingFallback = () => (
  <div style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    width: '100vw',
    backgroundColor: '#171717',
    color: 'white',
    fontFamily: 'sans-serif'
  }}>
    Cargando...
  </div>
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* 3. Envuelve tu App con Suspense */}
    <Suspense fallback={<LoadingFallback />}>
      <App />
    </Suspense>
  </StrictMode>,
);