import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header/Header';
import styles from './style.module.css';
import background from '../../assets/images/background.jpg';
import ageIcon from '../../assets/images/18plus.svg';

const HomePage = () => {
    const navigate = useNavigate();

    const handleRegisterClick = () => {
        navigate('/auth');
    };

    return (
        <div className={styles.pageContainer} style={{ backgroundImage: `url(${background})` }}>
            <Header onProfileClick={handleRegisterClick} /> {/* Добавляем хедер с кнопкой Log In */}
            <div className={styles.textContainer}>
                <h1>
                    <span className={styles.highlightWhite}>5</span>
                    <span className={styles.highlightYellow}> FREE FORECASTS </span>
                    <span className={styles.highlightWhite}>FOR NEW REGISTRATION</span>
                </h1>
            </div>
            <div className={styles.footer}>
                <button className={styles.registerButton} onClick={handleRegisterClick}>Register</button>
                <div className={styles.ageRestriction}>
                    <img src={ageIcon} alt="18+" />
                    <p>Registration is prohibited for persons under 18 years of age</p>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
