import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom'; // Добавляем Link для корректной маршрутизации
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, sendPasswordResetEmail } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { auth, firestore } from '../../firebase';
import styles from './style.module.css';
import logo from '/src/assets/images/logos/logo.png';
import faceIdIcon from '/src/assets/images/faceid-icon.svg';
import { useTranslation } from 'react-i18next'; // Для локализации

const AuthPage = () => {
    const { t } = useTranslation(); // Инициализация локализации
    const [isSignIn, setIsSignIn] = useState(true);
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [generalError, setGeneralError] = useState('');
    const [emailForReset, setEmailForReset] = useState('');
    const [resetEmailSent, setResetEmailSent] = useState(false);
    const [forgotPasswordModal, setForgotPasswordModal] = useState(false);
    const [loginAttempts, setLoginAttempts] = useState(0);
    const [accountLocked, setAccountLocked] = useState(false);
    const [showLockModal, setShowLockModal] = useState(false);
    const navigate = useNavigate();

    const toggleForm = () => {
        setIsSignIn(!isSignIn);
        setEmailError('');
        setPasswordError('');
        setGeneralError('');
    };

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const toggleConfirmPasswordVisibility = () => {
        setConfirmPasswordVisible(!confirmPasswordVisible);
    };

    const validateEmail = (email) => {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    };

    const validatePassword = (password) => {
        if (password.length < 8 || !/[A-Z]/.test(password) || !/[0-9]/.test(password)) {
            setPasswordError(t('passwordRequirements'));
            return false;
        } else {
            setPasswordError('');
            return true;
        }
    };

    const handleSignUp = async (e) => {
        e.preventDefault();
        const username = document.getElementById('signUpUsername').value;
        const email = document.getElementById('signUpEmail').value;
        const password = document.getElementById('signUpPassword').value;
        const confirmPassword = document.getElementById('confirmPassword').value;

        if (!validateEmail(email)) {
            setEmailError(t('invalidEmail'));
            return;
        }

        if (password !== confirmPassword) {
            setPasswordError(t('passwordsDoNotMatch'));
            return;
        }

        if (validatePassword(password)) {
            showLoadingSpinner(true);
            try {
                const userCredential = await createUserWithEmailAndPassword(auth, email, password);
                const user = userCredential.user;

                await setDoc(doc(firestore, "users", user.uid), {
                    username: username,
                    email: email,
                    premium: true,
                    premiumExpiresAt: Date.now() + 86400000,
                });

                // Сохраняем состояние аутентификации в localStorage
                localStorage.setItem('isAuthenticated', 'true');

                showLoadingSpinner(false);
                showCheckmarkAnimation();
                setTimeout(() => {
                    navigate('/dashboard');
                }, 500);
            } catch (error) {
                showLoadingSpinner(false);
                setGeneralError(t('registrationFailed'));
            }
        }
    };

    const handleSignIn = async (e) => {
        e.preventDefault();
        const email = document.getElementById('signInUsername').value;
        const password = document.getElementById('signInPassword').value;

        if (!validateEmail(email)) {
            setEmailError(t('invalidEmail'));
            return;
        }

        if (!password) {
            setPasswordError(t('enterPassword'));
            return;
        }

        if (accountLocked) {
            setGeneralError(t('accountLocked'));
            return;
        }

        showLoadingSpinner(true);

        try {
            await signInWithEmailAndPassword(auth, email, password);

            // Сохраняем состояние аутентификации в localStorage
            localStorage.setItem('isAuthenticated', 'true');

            showLoadingSpinner(false);
            showCheckmarkAnimation();
            setTimeout(() => {
                navigate('/dashboard');
            }, 500);
        } catch (error) {
            showLoadingSpinner(false);
            switch (error.code) {
                case 'auth/user-not-found':
                    setGeneralError(t('noAccountFound'));
                    break;
                case 'auth/wrong-password':
                    setGeneralError(t('incorrectPassword'));
                    break;
                default:
                    setGeneralError(t('loginFailed'));
            }
        }
    };

    const handleForgotPassword = () => {
        const email = emailForReset;
        if (email) {
            sendPasswordResetEmail(auth, email)
                .then(() => {
                    setResetEmailSent(true);
                    setGeneralError(t('passwordResetSent'));
                    setForgotPasswordModal(false);
                })
                .catch(() => {
                    setGeneralError(t('passwordResetFailed'));
                });
        } else {
            setGeneralError(t('enterEmailForReset'));
        }
    };

    useEffect(() => {
        const savedEmail = sessionStorage.getItem('rememberMe');
        const savedPassword = sessionStorage.getItem('password');
        if (savedEmail && savedPassword) {
            document.getElementById('signInUsername').value = atob(savedEmail);
            document.getElementById('signInPassword').value = atob(savedPassword);
            document.getElementById('rememberMe').checked = true;
        }
    }, []);

    const showCheckmarkAnimation = () => {
        const checkmark = document.querySelector(`.${styles['success-checkmark']}`);
        checkmark.classList.add(styles['show-checkmark']);
        setTimeout(() => {
            checkmark.classList.remove(styles['show-checkmark']);
        }, 1000);
    };

    const showLoadingSpinner = (show) => {
        const spinner = document.getElementById('loadingSpinner');
        if (show) {
            spinner.style.display = 'block';
        } else {
            spinner.style.display = 'none';
        }
    };

    const handleRememberMe = (email, password) => {
        if (document.getElementById('rememberMe').checked) {
            sessionStorage.setItem('rememberMe', btoa(email));
            sessionStorage.setItem('password', btoa(password));
        } else {
            sessionStorage.removeItem('rememberMe');
            sessionStorage.removeItem('password');
        }
    };

    return (
        <div className={styles.container}>
            <img src={logo} alt={t('logoAltText')} className={styles.logo} />

            <form>
                <div className={styles.biometricButton}>
                    <img src={faceIdIcon} alt={t('biometricLogin')} className={styles.biometricIcon} />
                    <div className={styles.biometricText}>
                        <div>{t('biometricLogin')}</div>
                        <small>{t('biometricLoginText')}</small>
                    </div>
                </div>

                <div className={styles.tabs}>
                    <button type="button" onClick={toggleForm} className={isSignIn ? styles.active : ''}>
                        {t('signIn')}
                    </button>
                    <button type="button" onClick={toggleForm} className={!isSignIn ? styles.active : ''}>
                        {t('signUp')}
                    </button>
                </div>

                {isSignIn ? (
                    <div className={styles.form}>
                        <input 
                            type="email" 
                            id="signInUsername" 
                            placeholder={t('email')} 
                            autoComplete="username" 
                            value={emailForReset} 
                            onChange={(e) => {
                                setEmailForReset(e.target.value);
                                setEmailError('');
                                setGeneralError('');
                            }} 
                        />
                        {emailError && <p className={styles.error}>{emailError}</p>}
                        <div className={styles.passwordContainer}>
                            <input
                                type={passwordVisible ? 'text' : 'password'}
                                id="signInPassword"
                                placeholder={t('password')}
                                autoComplete="current-password"
                                onChange={() => setPasswordError('')}
                            />
                            <span
                                className={styles.passwordToggle}
                                onClick={togglePasswordVisibility}
                            >
                                {passwordVisible ? '👁️' : '👁️‍🗨️'}
                            </span>
                        </div>
                        {passwordError && <p className={styles.error}>{passwordError}</p>}
                        {generalError && <p className={styles.error}>{generalError}</p>}
                        <div className={styles.checkboxContainer}>
                            <input type="checkbox" id="rememberMe" />
                            <label htmlFor="rememberMe">{t('rememberMe')}</label>
                        </div>
                        <button type="submit" className={styles.submitButton} onClick={(e) => { handleRememberMe(email, password); handleSignIn(e); }}>
                            {t('signIn')}
                        </button>
                        <a href="#" className={styles.forgotPassword} onClick={() => setForgotPasswordModal(true)}>
                            {t('forgotPassword')}
                        </a>
                        {/* Исправлено на Link для корректной работы маршрутизации */}
                        <Link to="/" className={styles.backToHome}>{t('backToHome')}</Link>
                    </div>
                ) : (
                    <div className={styles.form}>
                        <input type="text" id="signUpUsername" placeholder={t('username')} autoComplete="username" />
                        <input type="email" id="signUpEmail" placeholder={t('email')} autoComplete="email" />
                        {emailError && <p className={styles.error}>{emailError}</p>}
                        <div className={styles.passwordContainer}>
                            <input
                                type={passwordVisible ? 'text' : 'password'}
                                id="signUpPassword"
                                placeholder={t('password')}
                                onChange={(e) => validatePassword(e.target.value)}
                                autoComplete="new-password"
                            />
                            <span
                                className={styles.passwordToggle}
                                onClick={togglePasswordVisibility}
                            >
                                {passwordVisible ? '👁️' : '👁️‍🗨️'}
                            </span>
                        </div>
                        <div className={styles.passwordContainer}>
                            <input
                                type={confirmPasswordVisible ? 'text' : 'password'}
                                id="confirmPassword"
                                placeholder={t('confirmPassword')}
                                autoComplete="new-password"
                            />
                            <span
                                className={styles.passwordToggle}
                                onClick={toggleConfirmPasswordVisibility}
                            >
                                {confirmPasswordVisible ? '👁️' : '👁️‍🗨️'}
                            </span>
                        </div>
                        {passwordError && <p className={styles.error}>{passwordError}</p>}
                        <button type="submit" className={styles.submitButton} onClick={(e) => { handleRememberMe(email, password); handleSignUp(e); }}>
                            {t('signUp')}
                        </button>
                    </div>
                )}
            </form>

            {forgotPasswordModal && (
                <div className={styles.errorPopup}>
                    <div className={styles.errorMessage}>
                        <p>{t('enterEmailForReset')}</p>
                        <input
                            type="email"
                            value={emailForReset}
                            onChange={(e) => setEmailForReset(e.target.value)}
                        />
                        <button className={styles.resetPasswordButton} onClick={handleForgotPassword}>
                            {t('resetPassword')}
                        </button>
                        <button className={styles.cancelButton} onClick={() => setForgotPasswordModal(false)}>
                            {t('cancel')}
                        </button>
                    </div>
                </div>
            )}

            {showLockModal && (
                <div className={styles.errorPopup}>
                    <div className={styles.errorMessage}>
                        <p>{t('accountLockedMessage')}</p>
                        <button className={styles.okButton} onClick={() => setShowLockModal(false)}>
                            {t('ok')}
                        </button>
                    </div>
                </div>
            )}

            <div id="loadingSpinner" className={styles.loadingSpinner}></div>

            <div className={styles['success-checkmark']}>
                <div className={styles['checkmark-icon']}></div>
            </div>
        </div>
    );
};

export default AuthPage;
