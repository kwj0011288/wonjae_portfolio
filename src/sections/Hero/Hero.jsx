import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/hero.png";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import linkedinLight from "../../assets/linkedin-light.svg";
import linkedinDark from "../../assets/linkedin-dark.svg";
import githubLight from "../../assets/github-light.svg";
import githubDark from "../../assets/github-dark.svg";
import august from "../../assets/august.png";
import CV from "../../assets/WonjaeKim_Resume.pdf";
import { useTheme } from "../../common/ThemeContext";

function Hero() {
  const { theme, toggleTheme } = useTheme();
  const themeIcon = theme === "light" ? sun : moon;
  const linkedinIcon = theme === "light" ? linkedinLight : linkedinDark;
  const githubIcon = theme === "light" ? githubLight : githubDark;
  const AugustIcon = august;

  return (
    <section id="hero" className={styles.container}>
      <img
          src={themeIcon}
          alt="Theme Icon"
          className={styles.colorMode}
          onClick={toggleTheme}
        />
      <div className={styles.colorModeContainer}>
        
        <img className={styles.hero} src={heroImg} alt="Profile Picture" onClick={toggleTheme}/>
        
      </div>
      
      <div className={styles.info}>
        <h1>
          Wonjae (Jay) <br /> Kim
        </h1>
        <h2>Software Developer</h2>
        <span>
          <a href="https://www.linkedin.com/in/kwj0011288/" target="_blank">
            <img src={linkedinIcon} alt="LinkedIn" />
          </a>
          <a href="https://github.com/kwj0011288" target="_blank">
            <img src={githubIcon} alt="Github" />
          </a>
          <a
            href="https://extra-mile.notion.site/August-386d285ad6ee4ec19a3cdfcd4faa3309"
            target="_blank"
          >
            <img src={AugustIcon} alt="August" />
          </a>
        </span>
        <p className={styles.description}>
          Junior Computer Science Student at UMCP
        </p>
        <a href={CV} download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
