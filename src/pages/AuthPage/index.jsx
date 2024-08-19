import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, sendPasswordResetEmail } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { auth, firestore } from '../../firebase';
import styles from './style.module.css';
import logo from '/src/assets/images/logos/logo.png';
import faceIdIcon from '/src/assets/images/faceid-icon.svg';

const AuthPage = () => {
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
    const [showLockModal, setShowLockModal] = useState(false); // Новое состояние для модального окна
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
        if (password.length < 8 || !/[A-Z]/.test(password)) {
            setPasswordError('Password must be at least 8 characters long and contain at least one uppercase letter.');
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
            setEmailError('Please enter a valid email.');
            return;
        }

        if (password !== confirmPassword) {
            setPasswordError('Passwords do not match!');
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

                showLoadingSpinner(false);
                showCheckmarkAnimation();
                setTimeout(() => {
                    navigate('/dashboard'); // Перенаправление на Dashboard после регистрации
                }, 500);
            } catch (error) {
                showLoadingSpinner(false);
                setGeneralError('Registration failed. Please try again.');
            }
        }
    };

    const handleSignIn = (e) => {
        e.preventDefault();
        const email = document.getElementById('signInUsername').value;
        const password = document.getElementById('signInPassword').value;

        if (!validateEmail(email)) {
            setEmailError('Please enter a valid email.');
            return;
        }

        if (!password) {
            setPasswordError('Please enter your password.');
            return;
        }

        if (accountLocked) {
            setGeneralError('Your account is locked. Please try again later.');
            return;
        }

        showLoadingSpinner(true);

        signInWithEmailAndPassword(auth, email, password)
            .then(() => {
                showLoadingSpinner(false);
                showCheckmarkAnimation();
                setTimeout(() => {
                    navigate('/dashboard'); // Перенаправление на Dashboard после входа
                }, 500);
            })
            .catch(() => {
                showLoadingSpinner(false);
                setLoginAttempts((prev) => {
                    const newAttempts = prev + 1;
                    if (newAttempts >= 10) {
                        setAccountLocked(true);
                        setShowLockModal(true);  // Показать модальное окно
                        setTimeout(() => {
                            setAccountLocked(false);
                            setLoginAttempts(0);
                            setShowLockModal(false);  // Закрыть модальное окно после разблокировки
                        }, 60000);
                    } else {
                        setPasswordError('Incorrect password. Please try again.');
                    }
                    return newAttempts;
                });
            });
    };

    const handleForgotPassword = () => {
        const email = emailForReset;
        if (email) {
            sendPasswordResetEmail(auth, email)
                .then(() => {
                    setResetEmailSent(true);
                    setGeneralError('Password reset email sent. Please check your inbox.');
                    setForgotPasswordModal(false);
                })
                .catch(() => {
                    setGeneralError('Failed to send password reset email. Please check the email address.');
                });
        } else {
            setGeneralError('Please enter your email to reset your password.');
        }
    };

    useEffect(() => {
        const savedEmail = localStorage.getItem('rememberMe');
        const savedPassword = localStorage.getItem('password');
        if (savedEmail && savedPassword) {
            document.getElementById('signInUsername').value = savedEmail;
            document.getElementById('signInPassword').value = savedPassword;
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

    return (
        <div className={styles.container}>
            <img src={logo} alt="Logo" className={styles.logo} />

            <form>
                <div className={styles.biometricButton}>
                    <img src={faceIdIcon} alt="Face ID" className={styles.biometricIcon} />
                    <div className={styles.biometricText}>
                        <div>BIOMETRIC LOGIN</div>
                        <small>Press and authenticate via Face ID | Touch ID.</small>
                    </div>
                </div>

                <div className={styles.tabs}>
                    <button type="button" onClick={toggleForm} className={isSignIn ? styles.active : ''}>Sign In</button>
                    <button type="button" onClick={toggleForm} className={!isSignIn ? styles.active : ''}>Sign Up</button>
                </div>

                {isSignIn ? (
                    <div className={styles.form}>
                        <input 
                            type="email" 
                            id="signInUsername" 
                            placeholder="Email" 
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
                                placeholder="Password"
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
                        <div className={styles.checkboxContainer}>
                            <input type="checkbox" id="rememberMe" />
                            <label htmlFor="rememberMe">Remember me</label>
                        </div>
                        <button type="submit" className={styles.submitButton} onClick={handleSignIn}>Sign In</button>
                        <a href="#" className={styles.forgotPassword} onClick={() => setForgotPasswordModal(true)}>Forgot password?</a>
                        <a href="/my-app/home" className={styles.backToHome}>Back to Home</a>

                    </div>
                ) : (
                    <div className={styles.form}>
                        <input type="text" id="signUpUsername" placeholder="Username or ID" autoComplete="username" />
                        <input type="email" id="signUpEmail" placeholder="Email" autoComplete="email" />
                        {emailError && <p className={styles.error}>{emailError}</p>}
                        <div className={styles.passwordContainer}>
                            <input
                                type={passwordVisible ? 'text' : 'password'}
                                id="signUpPassword"
                                placeholder="Password"
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
                                placeholder="Confirm Password"
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
                        <button type="submit" className={styles.submitButton} onClick={handleSignUp}>Sign Up</button>
                    </div>
                )}
            </form>

            {forgotPasswordModal && (
                <div className={styles.errorPopup}>
                    <div className={styles.errorMessage}>
                        <p>Enter your email to reset your password.</p>
                        <input
                            type="email"
                            value={emailForReset}
                            onChange={(e) => setEmailForReset(e.target.value)}
                        />
                        <button className={styles.resetPasswordButton} onClick={handleForgotPassword}>Reset Password</button>
                        <button className={styles.cancelButton} onClick={() => setForgotPasswordModal(false)}>Cancel</button>
                    </div>
                </div>
            )}

            {showLockModal && (
                <div className={styles.errorPopup}>
                    <div className={styles.errorMessage}>
                        <p>Your account is locked for 1 minute due to too many failed login attempts. Please try again later.</p>
                        <button className={styles.okButton} onClick={() => setShowLockModal(false)}>OK</button>
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
