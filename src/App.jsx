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
import { auth, requestForToken, onMessageListener } from './firebase'; // Импортируем функции из firebase.js

import './assets/fonts/fonts.css';
import './App.css';

function App() {
    const location = useLocation();
    const navigate = useNavigate();
    const hideNavBar = ['/auth', '/'].includes(location.pathname); // Массив с путями, где навбар должен быть скрыт

    useEffect(() => {
        requestForToken(); // Запрашиваем токен при загрузке приложения

        // Проверяем аутентифицирован ли пользователь
        const unsubscribeAuth = auth.onAuthStateChanged(user => {
            console.log('User:', user); // Лог для отладки
            if (user && location.pathname === '/') {
                // Если пользователь аутентифицирован и находится на главной странице, перенаправляем на Dashboard
                navigate('/dashboard');
            } else if (!user && location.pathname !== '/auth') {
                // Если пользователь не аутентифицирован и находится не на странице аутентификации, перенаправляем на главную
                navigate('/');
            }
        });

        // Подписка на входящие сообщения
        const unsubscribeMessaging = onMessageListener()
            .then(payload => {
                console.log('Received foreground message: ', payload);
                // Обработка входящих сообщений, например, показывать уведомление или обновлять UI
            })
            .catch(err => console.log('Failed to receive message: ', err));

        // Возвращаем функцию отписки при размонтировании компонента
        return () => {
            unsubscribeAuth(); // Отписка от наблюдателя аутентификации
            if (unsubscribeMessaging && typeof unsubscribeMessaging.then === 'function') {
                unsubscribeMessaging.then(unsub => unsub());
            }
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
                <Route path="*" element={<HomePage />} /> {/* Этот маршрут для обработки неизвестных путей */}
            </Routes>
            {!hideNavBar && <BottomNavBar />}
        </div>
    );
}

export default App;
