import React from 'react';
import styles from './LoginAndSignUp.module.css';
const logo = '/images/enchantedDesignLogo.jpg';
const esc = '/images/esc.png'; 

function SignUp({onClose}) {
  return (
    <div className={styles.modalContainer}>
            
            {/* --- CUSTOMER LOGIN CARD --- */}
            <div className={styles.loginCard}>
              {/* Reusing style name */}
              <img
                className={styles.loginSignUpEsc}
                src={esc}
                alt="X for Exit"
                onClick={onClose} // Close the modal when clicked
              />
              <img
                className={styles.logoImage}
                src={logo}
                alt="logo illustration"
              />
              <h2 className={styles.loginSignupTittle}>Signup</h2>
              <br />
    
              {/* SIGNUP FORM */}
              <form>
              <input
                  className={styles.input}
                  type="text"
                  placeholder="Full name"
                  name="name" 
                  required
                />
                <br />
                <br />
                <input
                  className={styles.input}
                  type="email"
                  placeholder="Email Address"
                  name="email" 
                  required
                />
                <br />
                <br />
                <input
                  className={styles.input}
                  type="password"
                  placeholder="Password"
                  name="password" 
                  required
                />
                <br />
                <br />
                <input
                  className={styles.input}
                  type="password"
                  placeholder="Confirm Password"
                  name="confirmPassword" 
                  required
                />
                <br />
                <br />
                <button type="submit" className={styles.loginSignUpButton}>
                  Sign Up
                </button>
              </form>
            </div>
          
        </div>
  )
}

export default SignUp