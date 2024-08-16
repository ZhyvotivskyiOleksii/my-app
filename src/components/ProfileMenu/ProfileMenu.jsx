import React, { useState, useEffect } from 'react';
import styles from './ProfileMenu.module.css';
import logo from '../../assets/images/logos/logo.png';
import userIcon from '../../assets/images/logos/user-icon.svg';
import { auth, firestore } from '../../firebase';
import { doc, getDoc } from "firebase/firestore";
import { useNavigate } from 'react-router-dom';

const ProfileMenu = ({ isOpen, onClose, user }) => {
    const [premiumStatus, setPremiumStatus] = useState(false);
    const [daysLeft, setDaysLeft] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            const fetchUserData = async () => {
                try {
                    const userDocRef = doc(firestore, "users", user.uid);
                    const userDoc = await getDoc(userDocRef);
                    if (userDoc.exists()) {
                        const userData = userDoc.data();
                        const now = Date.now();
                        if (userData.premium && userData.premiumExpiresAt > now) {
                            setPremiumStatus(true);
                            setDaysLeft(Math.ceil((userData.premiumExpiresAt - now) / (1000 * 60 * 60 * 24))); // считаем дни
                        } else {
                            setPremiumStatus(false);
                            setDaysLeft(0);
                        }
                    }
                } catch (error) {
                    console.error("Error fetching user data:", error);
                }
            };

            fetchUserData();
        }
    }, [user]);

    const handleLogout = () => {
        auth.signOut()
            .then(() => {
                onClose();
                navigate('/'); // Перенаправляем на главную страницу после выхода
            })
            .catch(error => {
                console.error("Error signing out:", error);
            });
    };

    const handleGetPremium = () => {
        // Логика оформления премиума
        alert("Redirect to Get Premium Page");
    };

    return (
        <div className={`${styles.profileMenu} ${isOpen ? styles.open : ''}`}>
            <div className={styles.profileHeader}>
                <img src={logo} alt="Logo" className={styles.logo} />
                <h2>My Profile</h2>
                <button className={styles.closeButton} onClick={onClose}>×</button>
            </div>
            <div className={styles.profileContent}>
                <div className={styles.profileSection}>
                    <img src={userIcon} alt="User Icon" className={styles.userIcon} />
                    <div className={styles.profileName}>{user ? user.displayName : 'User Name'}</div>
                    <div className={styles.profileEmail}>{user ? user.email : 'example@example.com'}</div>
                </div>
                <hr className={styles.divider} />
                <div className={styles.premiumStatus}>
                    <span>Profile</span>
                    <span className={`${styles.status} ${premiumStatus ? styles.active : ''}`}>
                        {premiumStatus ? 'PREMIUM' : 'STANDARD'}
                    </span>
                </div>
                {!premiumStatus && (
                    <button className={styles.getPremiumButton} onClick={handleGetPremium}>
                        Get Premium
                    </button>
                )}
                <hr className={styles.divider} />
                {premiumStatus && (
                    <div className={styles.premiumInfo}>
                        Your Premium subscription is active.
                        <br />
                        Days left: <span className={styles.daysLeft}>{daysLeft} day(s)</span>
                    </div>
                )}
            </div>
            <button className={styles.logoutButton} onClick={handleLogout}>
                Log Out
            </button>
        </div>
    );
};

export default ProfileMenu;
