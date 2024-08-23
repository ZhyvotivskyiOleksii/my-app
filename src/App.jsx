import React, { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import DashboardPage from './pages/DashboardPage';
import SupportPage from './pages/SupportPage/SupportPage';
import SportsPage from './pages/SportsPage/SportsPage';
import CouponsPage from './pages/CouponsPage/CouponsPage';
import MenuPage from './pages/MenuPage/MenuPage';
import AuthPage from './pages/AuthPage';
import HomePage from './pages/HomePage';
import BottomNavBar from './components/BottomNavBar/BottomNavBar';
import { requestForToken, onMessageListener } from './firebase'; // Импортируем функции из firebase.js

import './assets/fonts/fonts.css';
import './App.css';

function App() {
    const location = useLocation();
    const hideNavBar = ['/auth', '/'].includes(location.pathname); // Массив с путями, где навбар должен быть скрыт

    useEffect(() => {
        requestForToken(); // Запрашиваем токен при загрузке приложения

        const unsubscribe = onMessageListener().then(payload => {
            console.log('Received foreground message: ', payload);
            // Обработка входящих сообщений, например, показывать уведомление или обновлять UI
        }).catch(err => console.log('Failed to receive message: ', err));

        // Возвращаем функцию отписки при размонтировании компонента
        return () => {
            if (typeof unsubscribe === 'function') {
                unsubscribe();
            }
        };
    }, []);

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
