import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import styles from './style.module.css';
import logo from '../../assets/images/logos/logo.png';
import userIcon from '../../assets/images/logos/user-icon.svg';
import { auth, firestore } from '../../firebase';
import { doc, getDoc } from "firebase/firestore";

const Header = ({ onProfileClick, onUserLoaded }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const location = useLocation();

    const getTitle = () => {
        switch (location.pathname) {
            case '/support':
                return 'Support';
            case '/sports':
                return 'Sports';
            case '/coupons':
                return 'Coupons';
            case '/menu':
                return 'Menu';
            default:
                return null;
        }
    };

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(async (currentUser) => {
            if (currentUser) {
                const userDocRef = doc(firestore, "users", currentUser.uid);
                const userDoc = await getDoc(userDocRef);
                const userData = userDoc.exists() ? userDoc.data() : null;

                if (userData && userData.username) {
                    currentUser.displayName = userData.username;
                }

                setUser(currentUser);
                if (onUserLoaded) {
                    onUserLoaded(currentUser);
                }
            } else {
                setUser(null);
                if (onUserLoaded) {
                    onUserLoaded(null);
                }
            }
            setLoading(false);
        });

        return () => unsubscribe();
    }, [onUserLoaded]);

    const navigate = useNavigate();

    const handleRegisterClick = () => {
        navigate('/auth');
    };

    if (loading) {
        return null;
    }

    return (
        <header className={styles.header}>
            <img src={logo} alt="Logo" className={styles.logo} />
            {getTitle() && <h1>{getTitle()}</h1>}
            {user ? (
                <div className={styles.userInfo} onClick={onProfileClick}>
                    <img src={userIcon} alt="User Icon" className={styles.userIcon} />
                    <span className={styles.userName}>{user.displayName || user.email}</span>
                </div>
            ) : (
                <button className={styles.registerButton} onClick={handleRegisterClick}>Log In</button>
            )}
        </header>
    );
};

export default Header;
