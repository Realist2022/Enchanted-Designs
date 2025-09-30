const babyone = '/images/baby-one.jpg';
import styles from './Hero.module.css';

function Hero() {
  return (
    <div className={styles.heroContainer}>
        <img src={babyone} className={styles.heroImage} />
        <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>Enchanted Design</h1>
            <br></br>
            <h2 className={styles.heroSubTitle}>Created for you...</h2>
            <br></br>
            <p className={styles.heroP}><i>We Create and custom make cake toppers, announcement plaques, signs (corporate and functions), home decor name accessories, personalised items + more. We use bamboo, acrylics, Tricoya, as well as working with Mylar for stencils.</i></p>
            <br></br>
            <button className={styles.heroButton}>VIEW OUR COLLECTIONS</button>         
        </div>
    </div>
  )
}

export default Hero