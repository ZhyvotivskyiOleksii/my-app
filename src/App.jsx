import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import DashboardPage from './pages/DashboardPage';
import SupportPage from './pages/SupportPage/SupportPage';
import SportsPage from './pages/SportsPage/SportsPage';
import CouponsPage from './pages/CouponsPage/CouponsPage';
import MenuPage from './pages/MenuPage/MenuPage';
import AuthPage from './pages/AuthPage';
import HomePage from './pages/HomePage';
import BottomNavBar from './components/BottomNavBar/BottomNavBar';

import './assets/fonts/fonts.css';
import './App.css';

function App() {
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
                {/* Redirect any undefined paths to the HomePage */}
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
            <BottomNavBar />
        </div>
    );
}

export default App;
