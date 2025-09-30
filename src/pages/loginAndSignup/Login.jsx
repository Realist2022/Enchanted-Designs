import styles from './LoginAndSignUp.module.css';
const logo = '/images/enchantedDesignLogo.jpg';
const esc = '/images/esc.png'; 

function Login({onClose}) {
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
          <h2 className={styles.loginSignupTittle}>Login</h2>
          <br />

          {/* LOGIN FORM */}
          <form>
            <input
              className={styles.input}
              type="email"
              placeholder="Email Address"
              name="email" // Use 'email' consistently
              autoComplete="email"
              required
            />
            <br />
            <br />
            <input
              className={styles.input}
              type="password"
              placeholder="Password"
              name="password" // Use 'password' consistently
              autoComplete="current-password"
              required
            />
            <br />
            <br />
            <button type="submit" className={styles.loginSignUpButton}>
              Login
            </button>
          </form>
        </div>
      
    </div>
  )
}

export default Login