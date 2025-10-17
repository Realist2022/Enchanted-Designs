// Hero.js
import { useState, useEffect, useRef } from 'react'; // Import React Hooks
import styles from './Hero.module.css';

const babyone = '/images/baby-one-better.png';

function Hero() {
  // 1. State to track if the element is visible
  const [isVisible, setIsVisible] = useState(false);
  
  // 2. Ref to attach to the element we want to observe
  const heroRef = useRef(null);

  // 3. Set up the Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // The callback function is triggered when visibility changes
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); // Optional: stop observing once visible
        }
      },
      {
        threshold: 0.2, // Trigger when 20% of the hero is visible
      }
    );

    // Start observing the hero container
    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    // Clean up the observer when the component unmounts
    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []); // The empty array ensures this effect runs only once on mount

  return (
    // Attach the ref to the container div
    <div className={styles.heroContainer} ref={heroRef}>
      <img src={babyone} className={styles.heroImage} />
      <div className={styles.heroContent}>
        {/* Conditionally apply animation classes based on isVisible state */}
        <h1 className={`${styles.heroTitle} ${isVisible ? styles.slideInLeft : styles.hidden}`}>
          Enchanted Design
        </h1>
        
        <h2 className={`${styles.heroSubTitle} ${isVisible ? styles.slideInRight : styles.hidden}`}>
          Created for you...
        </h2>
        
        <p className={`${styles.heroP} ${isVisible ? styles.slideInLeft : styles.hidden}`}>
          <i>
            We Create and custom make cake toppers, announcement plaques, signs (corporate and functions), home decor name accessories, personalised items + more. We use bamboo, acrylics, Tricoya, as well as working with Mylar for stencils.
          </i>
        </p>

        <button className={styles.heroButton}>VIEW OUR COLLECTIONS</button>
      </div>
    </div>
  );
}

export default Hero;