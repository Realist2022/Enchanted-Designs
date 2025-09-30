import React from 'react';
const harlemBagTag = '/images/harlemBagTag.jpg';
import styles from './ImageContent.module.css';

function ImageContent() {
  return (
    <div className={styles.imageContentContainer}>                   
        <img src={harlemBagTag} className={styles.imagePic}/>
    </div>
  )
}

export default ImageContent