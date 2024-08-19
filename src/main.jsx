import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import * as serviceWorker from './serviceWorker'; // Импорт serviceWorker

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router basename="/my-app">
      <App />
    </Router>
  </StrictMode>,
);

// Регистрация Service Worker
serviceWorker.register();
