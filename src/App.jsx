import React, { useEffect } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import DashboardPage from './pages/DashboardPage';
import SupportPage from './pages/SupportPage/SupportPage';
import SportsPage from './pages/SportsPage/SportsPage';
import CouponsPage from './pages/CouponsPage/CouponsPage';
import MenuPage from './pages/MenuPage/MenuPage';
import AuthPage from './pages/AuthPage';
import HomePage from './pages/HomePage';
import BottomNavBar from './components/BottomNavBar/BottomNavBar';
import { auth, requestForToken, onMessageListener } from './firebase';

import './assets/fonts/fonts.css';
import './App.css';

function App() {
    const location = useLocation();
    const navigate = useNavigate();
    const hideNavBar = ['/auth', '/'].includes(location.pathname);

    useEffect(() => {
        requestForToken(); // Запрашиваем токен при загрузке приложения

        const unsubscribeAuth = auth.onAuthStateChanged(user => {
            if (user) {
                if (location.pathname === '/' || location.pathname === '/auth') {
                    navigate('/dashboard');
                }
            } else {
                if (location.pathname !== '/auth') {
                    navigate('/');
                }
            }
        });

        return () => {
            unsubscribeAuth();
        };
    }, [location.pathname, navigate]);

    return (
        <div className="appContainer">
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/support" element={<SupportPage />} />
                <Route path="/sports" element={<SportsPage />} />
                <Route path="/coupons" element={<CouponsPage />} />
                <Route path="/menu" element={<MenuPage />} />
                <Route path="/auth" element={<AuthPage />} />
                <Route path="/dashboard" element={<DashboardPage />} />
                <Route path="*" element={<HomePage />} />
            </Routes>
            {!hideNavBar && <BottomNavBar />}
        </div>
    );
}

export default App;
