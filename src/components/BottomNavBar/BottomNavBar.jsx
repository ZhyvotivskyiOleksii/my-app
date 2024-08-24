import React, { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import styles from './BottomNavBar.module.css';
import homeIcon from '../../assets/images/icon/home.svg';
import supportIcon from '../../assets/images/icon/support.svg';
import sportsIcon from '../../assets/images/icon/ball.svg';
import couponsIcon from '../../assets/images/icon/discount.svg';
import menuIcon from '../../assets/images/icon/menu.svg';
import { auth } from '../../firebase';

const BottomNavBar = () => {
    const location = useLocation();
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setIsAuthenticated(!!user);
        });

        return () => unsubscribe();
    }, []);

    // Если пользователь не залогинен, не отображаем меню
    if (!isAuthenticated) {
        return null;
    }

    return (
        <nav className={styles.bottomNav} aria-label="Bottom navigation">
            <NavLink 
                to="/dashboard" 
                className={({ isActive }) => isActive ? `${styles.navItem} ${styles.active}` : styles.navItem}
                aria-label="Home"
            >
                <img src={homeIcon} alt="Home" className={styles.icon} />
                <span className={styles.text}>Home</span>
            </NavLink>

            <NavLink 
                to="/support" 
                className={({ isActive }) => isActive ? `${styles.navItem} ${styles.active}` : styles.navItem}
                aria-label="Support"
            >
                <img src={supportIcon} alt="Support" className={styles.icon} />
                <span className={styles.text}>Support</span>
            </NavLink>

            <NavLink 
                to="/sports" 
                className={({ isActive }) => isActive ? `${styles.navItem} ${styles.active}` : styles.navItem}
                aria-label="Sports"
            >
                <img src={sportsIcon} alt="Sports" className={styles.icon} />
                <span className={styles.text}>Sports</span>
            </NavLink>

            <NavLink 
                to="/coupons" 
                className={({ isActive }) => isActive ? `${styles.navItem} ${styles.active}` : styles.navItem}
                aria-label="Coupons"
            >
                <img src={couponsIcon} alt="Coupons" className={styles.icon} />
                <span className={styles.text}>Coupons</span>
            </NavLink>

            <NavLink 
                to="/menu" 
                className={({ isActive }) => isActive ? `${styles.navItem} ${styles.active}` : styles.navItem}
                aria-label="Menu"
            >
                <img src={menuIcon} alt="Menu" className={styles.icon} />
                <span className={styles.text}>Menu</span>
            </NavLink>
        </nav>
    );
};

export default BottomNavBar;
