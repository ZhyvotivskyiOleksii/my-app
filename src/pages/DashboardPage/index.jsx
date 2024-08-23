import React, { useState } from 'react';
import styles from './style.module.css';
import Header from '../../components/Header/Header';
import ProfileMenu from '../../components/ProfileMenu/ProfileMenu';
import Slider from '../../components/Slider/Slider';
import AgeWarning from '../../components/AgeWarning/AgeWarning';

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
                <p>Welcome to the Dashboard Sport</p>
            </div>

            <ProfileMenu isOpen={isProfileMenuOpen} onClose={toggleProfileMenu} user={currentUser} />
        </div>
    );
};

export default DashboardPage;
