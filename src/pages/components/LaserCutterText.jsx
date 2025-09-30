import React from 'react';
import styles from './LaserCutterText.module.css';

function LaserCutterText() {
  return (
    <div className={styles.LaserCutterText} >
      <h3 className={styles.LaserCutterTextH3} >Laser room</h3>
      <br></br>
      <p className={styles.LaserCutterTextP} >See our machine in action!</p>
      <button className={styles.LaserCutterTextButton} >CHECKOUT LASER ROOM HIGHLIGHTS</button>
    </div>
  )
}

export default LaserCutterText