import React from 'react';
import styles from './TextContentUnderImage.module.css'; // Import the CSS module

function TextContentUnderImage() {
  return (
    <div className={styles.textContentUnderImageContainer}>
        <h2 className={styles.contentSubTitle} >New</h2>
        <br></br>
        <p>We love creating new designs and turning our ideas (and yours) into products.</p>
        <br></br>   
        <p>Always spot your child's bag with personalised bag tags... Also perfect for a handbag.</p>
        <br></br>
        <p>Available in different materials and styles. It comes ready to hang on there bags with a lobster clip.</p>
        <br></br>
        <p>View our new style here</p>
    </div>
  )
}

export default TextContentUnderImage