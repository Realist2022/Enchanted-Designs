import React from 'react';
const laserCutter = '/images/laserCutter.jpg';
import styles from './LaserCutterImage.module.css';

function LaserCutterImage() {
  return (
    <div className={styles.laserCutterImageContainer}>
        <img src={laserCutter} className={styles.laserCutterImage} alt="Laser Cutter" />
    </div>
  )
}

export default LaserCutterImage