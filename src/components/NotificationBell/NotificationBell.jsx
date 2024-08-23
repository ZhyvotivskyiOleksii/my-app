import React, { useState, useEffect } from 'react';
import { onMessageListener } from '../../firebase'; 
import bellIcon from '../../assets/images/icon/bell.svg';
import bellIconActive from '../../assets/images/icon/bell-alert.svg';
import styles from './NotificationBell.module.css';

const NotificationBell = () => {
    const [notifications, setNotifications] = useState([]);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [hasNewNotification, setHasNewNotification] = useState(false);

    useEffect(() => {
        // Слушаем входящие сообщения
        onMessageListener().then(payload => {
            setNotifications(prev => [
                ...prev,
                {
                    title: payload.notification.title,
                    body: payload.notification.body,
                    timestamp: new Date().toLocaleTimeString()
                }
            ]);
            setHasNewNotification(true);
        }).catch(err => console.error('Failed to receive message: ', err));
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        setHasNewNotification(false);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <div className={styles.notificationBell}>
            <img 
                src={hasNewNotification ? bellIconActive : bellIcon} 
                alt="Notifications" 
                onClick={toggleMenu} 
                className={styles.bellIcon}
            />
            {isMenuOpen && (
                <div className={styles.notificationMenu}>
                    <button className={styles.closeButton} onClick={closeMenu}>×</button>
                    <h3>Notifications</h3>
                    {notifications.length === 0 ? (
                        <p>No notifications</p>
                    ) : (
                        notifications.map((notification, index) => (
                            <div key={index} className={styles.notificationItem}>
                                <img src="/path/to/logo.png" alt="Logo" className={styles.notificationIcon} />
                                <div className={styles.notificationContent}>
                                    <h4>{notification.title}</h4>
                                    <p>{notification.body}</p>
                                    <span>{notification.timestamp}</span>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            )}
        </div>
    );
};

export default NotificationBell;
