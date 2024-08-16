import React, { useState } from 'react';
import styles from './style.module.css';
import Header from '../../components/Header/Header';
import ProfileMenu from '../../components/ProfileMenu/ProfileMenu';
import Slider from '../../components/Slider/Slider';
import AgeWarning from '../../components/AgeWarning/AgeWarning';
import { Link } from 'react-router-dom';

// Импортируем SVG иконки
import homeIcon from '../../assets/images/icon/home.svg';
import supportIcon from '../../assets/images/icon/support.svg';
import sportsIcon from '../../assets/images/icon/ball.svg';
import couponsIcon from '../../assets/images/icon/discount.svg';
import menuIcon from '../../assets/images/icon/menu.svg';

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
            <AgeWarning />
            <div className={styles.sliderContainer}>
                <Slider />
            </div>
            <div className={styles.content}>
                <p>Welcome to the Dashboard</p>
            </div>
            <div className={styles.bottomNav}>
                <Link to="/" className={styles.navItem}>
                    <img src={homeIcon} alt="Home" />
                    <span>Home</span>
                </Link>
                <Link to="/support" className={styles.navItem}>
                    <img src={supportIcon} alt="Support" />
                    <span>Support</span>
                </Link>
                <Link to="/sports" className={styles.navItem}>
                    <img src={sportsIcon} alt="Sports" />
                    <span>Sports</span>
                </Link>
                <Link to="/coupons" className={styles.navItem}>
                    <img src={couponsIcon} alt="Coupons" />
                    <span>Coupons</span>
                </Link>
                <Link to="/menu" className={styles.navItem}>
                    <img src={menuIcon} alt="Menu" />
                    <span>Menu</span>
                </Link>
            </div>

            <ProfileMenu isOpen={isProfileMenuOpen} onClose={toggleProfileMenu} user={currentUser} />
        </div>
    );
};

export default DashboardPage;
