import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './BottomNavBar.module.css';
import homeIcon from '../../assets/images/icon/home.svg';
import supportIcon from '../../assets/images/icon/support.svg';
import sportsIcon from '../../assets/images/icon/ball.svg';
import couponsIcon from '../../assets/images/icon/discount.svg';
import menuIcon from '../../assets/images/icon/menu.svg';

const BottomNavBar = () => {
    return (
        <div className={styles.bottomNav}>
            <NavLink to="/dashboard" className={({ isActive }) => isActive ? `${styles.navItem} ${styles.active}` : styles.navItem}>
                <img src={homeIcon} alt="Home" />
                <span>Home</span>
            </NavLink>

            <NavLink to="/support" className={({ isActive }) => isActive ? `${styles.navItem} ${styles.active}` : styles.navItem}>
                <img src={supportIcon} alt="Support" />
                <span>Support</span>
            </NavLink>
            <NavLink to="/sports" className={({ isActive }) => isActive ? `${styles.navItem} ${styles.active}` : styles.navItem}>
                <img src={sportsIcon} alt="Sports" />
                <span>Sports</span>
            </NavLink>
            <NavLink to="/coupons" className={({ isActive }) => isActive ? `${styles.navItem} ${styles.active}` : styles.navItem}>
                <img src={couponsIcon} alt="Coupons" />
                <span>Coupons</span>
            </NavLink>
            <NavLink to="/menu" className={({ isActive }) => isActive ? `${styles.navItem} ${styles.active}` : styles.navItem}>
                <img src={menuIcon} alt="Menu" />
                <span>Menu</span>
            </NavLink>
        </div>
    );
};

export default BottomNavBar;
