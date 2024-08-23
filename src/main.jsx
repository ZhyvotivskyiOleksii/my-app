import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import * as serviceWorker from '/serviceWorker.js';

const basename = import.meta.env.VITE_PUBLIC_URL || "/my-app";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router basename={basename}>
      <App />
    </Router>
  </StrictMode>,
);

// Регистрация Service Worker
serviceWorker.register();
