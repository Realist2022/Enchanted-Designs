import React from 'react';
import styles from './EnchantedDesignLogo.module.css';

const enchantedDesignLogo = '/images/enchantedDesignLogo.jpg'; 

function EnchantedDesignLogo() {
  return (
    <div className={styles.logoContainer}>
        <img src={enchantedDesignLogo} className={styles.EnchantedDesignLogo} />
    </div>
  )
}

export default EnchantedDesignLogo