import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AuthPage from './pages/AuthPage'; 
import DashboardPage from './pages/DashboardPage';  
import './assets/fonts/fonts.css'; 
import './App.css';
function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/auth" element={<AuthPage />} /> {/* Маршрут для страницы авторизации */}
                    <Route path="/dashboard" element={<DashboardPage />} /> {/* Маршрут для DashboardPage */}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
