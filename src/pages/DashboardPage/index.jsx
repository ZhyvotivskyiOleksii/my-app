import React, { useState } from 'react';
import styles from './style.module.css';
import Header from '../../components/Header/Header';
import ProfileMenu from '../../components/ProfileMenu/ProfileMenu';
import { Link } from 'react-router-dom';

const DashboardPage = () => {
    const [isProfileMenuOpen, setProfileMenuOpen] = useState(false);
    const [currentUser, setCurrentUser] = useState(null);

    const toggleProfileMenu = () => {
        setProfileMenuOpen(!isProfileMenuOpen);
    };

    const handleUserLoaded = (user) => {
        setCurrentUser(user);
    };

    return (
        <div className={styles.dashboardContainer}>
            <Header onProfileClick={toggleProfileMenu} onUserLoaded={handleUserLoaded} />
            <div className={styles.content}>
                <p>Welcome to the Dashboard</p>
            </div>
            <div className={styles.bottomNav}>
                <Link to="/" className={styles.navItem}>
                    <img src="/icons/home.png" alt="Home" />
                    <span>Home</span>
                </Link>
                <Link to="/live" className={styles.navItem}>
                    <img src="/icons/live.png" alt="Live" />
                    <span>Live</span>
                </Link>
                <Link to="/sports" className={styles.navItem}>
                    <img src="/icons/sports.png" alt="Sports" />
                    <span>Sports</span>
                </Link>
                <Link to="/coupons" className={styles.navItem}>
                    <img src="/icons/coupons.png" alt="Coupons" />
                    <span>Coupons</span>
                </Link>
                <Link to="/menu" className={styles.navItem}>
                    <img src="/icons/menu.png" alt="Menu" />
                    <span>Menu</span>
                </Link>
            </div>

            <ProfileMenu isOpen={isProfileMenuOpen} onClose={toggleProfileMenu} user={currentUser} />
        </div>
    );
};

export default DashboardPage;
