import React, { useState, useEffect } from "react";
import styles from "./TopNav.module.css";

const enchantedDesignLogo = '/images/enchantedDesignLogo.jpg';
const profilePic = '/images/profile.png';

function TopNav({ onLoginClick, onSignUpClick }) {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  const handleLoginClick = () => {
    onLoginClick();
    setIsMobileNavOpen(false);
  };

  const handleSignUpClick = () => {
    onSignUpClick();
    setIsMobileNavOpen(false);
  };

  // --- Effect to close menu on scroll ---
  useEffect(() => {
    const handleScroll = () => {
      // If the mobile nav is open, close it
      if (isMobileNavOpen) {
        setIsMobileNavOpen(false);
      }
    };

    // Add the event listener when the component mounts
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isMobileNavOpen]); // Rerun the effect if isMobileNavOpen changes

  return (
    <nav className={styles.navbar}>
      <img src={enchantedDesignLogo} className={styles.enchantedDesignLogoTopNav} alt="Enchanted Design Logo" />

      {/* --- Hamburger Menu Icon --- */}
      <button className={styles.hamburger} onClick={toggleMobileNav} aria-label="Toggle navigation">
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
      </button>

      {/* --- Navigation Links --- */}
      <div className={`${styles.navLinks} ${isMobileNavOpen ? styles.mobileNavOpen : ''}`}>
        <a href="#home">Home</a>
        <a href="#news">News</a>
                {/* DROPDOWN */}
        <div className={styles.dropdown}>
          <button className={styles.dropbtn}>
            Dropdown
          </button>
          <div className={styles.dropdownContent}>
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
          </div>
        </div>

        {/* LOGIN AND SIGNUP */}
        <div className={styles.loginAndSignupNav}>
          <img src={profilePic} className={styles.profilePic} alt="Profile" />
          <button className={styles.loginAndSignupNavButtons} onClick={handleLoginClick}>Login</button>
          <button className={styles.loginAndSignupNavButtons} onClick={handleSignUpClick}>Sign up</button>
        </div>
      </div>
    </nav>
  );
}

export default TopNav;

