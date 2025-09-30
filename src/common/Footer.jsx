import React from 'react';
import Styles from './Footer.module.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

function Footer() {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div>
      <footer className={Styles.footer} >
        <div className={Styles.footerContent}>
            <p>© 2025 Enchanted Design. All rights reserved.</p>
            <p>Privacy Policy | Terms of Service</p>
        </div>
        
        <button onClick={scrollToTop} className={Styles.scrollButton} ><FontAwesomeIcon icon={faArrowUp} /></button>
      </footer>
    </div>
  )
}

export default Footer