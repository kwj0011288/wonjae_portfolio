import styles from "./IntroductionStyles.module.css";
import { useEffect, useRef } from "react";

function Introduction() {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const descriptionRef = useRef(null);
  const cardsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (headerRef.current) {
      observer.observe(headerRef.current);
    }

    if (descriptionRef.current) {
      observer.observe(descriptionRef.current);
    }

    if (cardsRef.current) {
      observer.observe(cardsRef.current);
    }

    return () => {
      if (headerRef.current) observer.unobserve(headerRef.current);
      if (descriptionRef.current) observer.unobserve(descriptionRef.current);
      if (cardsRef.current) observer.unobserve(cardsRef.current);
    };
  }, []);

  return (
    <section id="introduction" className={styles.container} ref={sectionRef}>
      <div className={styles.content}>
        <div className={`${styles.headerContainer} ${styles.fadeInDown}`} ref={headerRef}>
          <h1 className="text-center text-[32px] font-bold">About Me</h1>
        </div>

        <div className={`${styles.description} mt-10`} ref={descriptionRef}>
          <p>
            I&apos;m a skilled software developer with experience in TypeScript
            and JavaScript, and expertise in frameworks like React, Nodejs, and
            Three.js. I&apos;m a quick learner and collaborate closely with
            clients to create efficient, scalable, and user-friendly solutions
            that solve real-world problems. Let&apos;s work together to bring
            your ideas to life!
          </p>
        </div>

        <div className={styles.cardsContainer} ref={cardsRef}>
          <div className={styles.card}>
            <div className={styles.cardIcon}>
              <div className={styles.icosahedron}></div>
            </div>
            <div className={styles.cardTitle}>Web Developer</div>
          </div>

          <div className={styles.card}>
            <div className={styles.cardIcon}>
              <div className={styles.cube}></div>
            </div>
            <div className={styles.cardTitle}>Flutter Developer</div>
          </div>

          <div className={styles.card}>
            <div className={styles.cardIcon}>
              <div className={styles.sphere}>
                <div className={styles.serverLines}></div>
              </div>
            </div>
            <div className={styles.cardTitle}>Backend Developer</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Introduction;
