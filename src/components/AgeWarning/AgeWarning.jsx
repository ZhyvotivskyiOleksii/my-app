import React from 'react';
import styles from './AgeWarning.module.css';
import ageIcon from '../../assets/images/18plus.svg';

const AgeWarning = () => {
    return (
        <div className={styles.ageWarningBanner}>
            <p>This service is for adults only <img src={ageIcon} alt="18+" className={styles.icon}/></p>
        </div>
    );
};

export default AgeWarning;
