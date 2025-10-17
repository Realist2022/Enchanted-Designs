import React, { useState, useEffect } from "react";
import styles from "./TopNav.module.css";

const enchantedDesignLogo = '/images/enchantedDesignLogo.jpg';
const profilePic = '/images/profile.png';

function TopNav({ onLoginClick, onSignUpClick }) {
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleMobileNav = () => {
    setMobileNavOpen(!isMobileNavOpen);
  };

  const handleLoginClick = () => {
    setMobileNavOpen(false);
    onLoginClick();
  };

  const handleSignUpClick = () => {
    setMobileNavOpen(false);
    onSignUpClick();
  };
  
  // Logic to hide/show navbar on scroll
  const controlNavbar = () => {
    if (typeof window !== 'undefined') {
      // If scrolling down, hide the navbar
      if (window.scrollY > lastScrollY) { 
        setShowNav(false);
      } else { // If scrolling up, show the navbar
        setShowNav(true);
      }
      // Remember the new scroll position
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);

      // Cleanup function
      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY]);


  useEffect(() => {
    const handleScroll = () => {
      if (isMobileNavOpen) {
        setMobileNavOpen(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMobileNavOpen]);

  return (
    <div className={`${styles.navbar} ${showNav ? styles.navVisible : styles.navHidden}`}>
      <div className={styles.navLeft}>
        <img src={enchantedDesignLogo} className={styles.enchantedDesignLogoTopNav} alt="Logo" />
      </div>

      <div className={`${styles.navLinks} ${isMobileNavOpen ? styles.mobileNavOpen : ""}`}>
        <a href="#home">Home</a>
        <a href="#about">About</a>
                <div className={styles.dropdown}>
          <button className={styles.dropbtn}>Dropdown</button>
          <div className={styles.dropdownContent}>
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
          </div>
        </div>

        <div className={styles.loginAndSignupNav}>
          <img src={profilePic} className={styles.profilePic} alt="Profile" />
          <button className={styles.loginAndSignupNavButtons} onClick={handleLoginClick}>Login</button>
          <button className={styles.loginAndSignupNavButtons} onClick={handleSignUpClick}>Sign up</button>
        </div>


      </div>

      <button className={styles.hamburger} onClick={toggleMobileNav}>
        <div></div>
        <div></div>
        <div></div>
      </button>
    </div>
  );
}

export default TopNav;

