/* eslint-disable react/prop-types */
import { useTheme } from "../../common/ThemeContext";
import { projects } from "../../constants";
import styles from "./ProjectsStyle.module.css";
import { useEffect, useRef } from "react";

// Define background colors for different projects
const backgroundColors = [
  "#FFE5E5", // 연한 빨간색
  "#E5FFE5", // 연한 초록색
  "#E5E5FF", // 연한 파란색
  "#FFE5FF", // 연한 보라색
  "#FFFFE5", // 연한 노란색
  "#E5FFFF", // 연한 하늘색
];

// ProjectCard Component
const ProjectCard = ({ project, theme, backgroundColor, index }) => {
  const isDarkMode = theme === "dark";
  const textColor = isDarkMode ? "#ffffff" : "#000000";
  const cardBackground = isDarkMode ? "#2c2c2c" : backgroundColor;
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
            
            // 지연 시간을 직접 설정
            if (cardRef.current) {
              const delay = 0.3 * (index + 1);
              cardRef.current.style.transitionDelay = `${delay}s`;
            }
          }
        });
      },
      { threshold: 0.3 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) observer.unobserve(cardRef.current);
    };
  }, [index]);

  return (
    <div
      ref={cardRef}
      className={`${styles.projectCard} ${styles.fadeInUp}`}
      style={{
        background: cardBackground,
        color: textColor,
      }}
    >
      {/* 프로젝트 미리보기 이미지 */}
      <div 
        className={styles.projectImage}
        style={{ 
          borderBottom: isDarkMode ? "1px solid #444" : "1px solid #e0e0e0", // 구분선 추가
        }}
      >
        <img
          src={project.image}
          alt={project.name}
        />
        
        {/* 떠 있는 아이콘 컨테이너 */}
        <div className={styles.iconsContainer}>
          {/* Live Demo 아이콘 - 링크가 있는 경우에만 표시 */}
          {project.demo_link && (
            <div className={styles.iconWithLabel}>
              <a 
                href={project.demo_link} 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.projectIcon}
                title="라이브 데모 보기"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </a>
              <span className={styles.iconLabel}>Live Demo</span>
            </div>
          )}
          
          {/* GitHub 아이콘 */}
          {project.source_code_link && (
            <div className={styles.iconWithLabel}>
              <a 
                href={project.source_code_link} 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.projectIcon}
                title="GitHub 저장소 방문"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>
              <span className={styles.iconLabel}>GitHub</span>
            </div>
          )}
        </div>
      </div>

      {/* 프로젝트 정보 영역 */}
      <div 
        className={styles.projectContent}
        style={{ 
          backgroundColor: cardBackground, // 배경색 명시적 지정
        }}
      >
        <div style={{ width: "100%" }}>
          {/* 프로젝트 이름 영역 - 고정 높이 */}
          <h3 className={styles.projectCardTitle} style={{ 
            color: textColor, 
            marginBottom: "8px", 
            textAlign: "left",
            height: "60px",
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            textOverflow: "ellipsis",
            paddingBottom: "8px"
          }}>
            {project.name}
          </h3>

          {/* 프로젝트 설명 영역 - 고정 높이 */}
          <p className={styles.projectCardDescription} style={{ 
            color: textColor, 
            marginBottom: "8px",
            textAlign: "left",
            height: "50px",
            display: "-webkit-box",
            WebkitLineClamp: 4,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            textOverflow: "ellipsis",
            paddingBottom: "8px"
          }}>
            {project.description}
          </p>

          {/* 기술 스택 영역 - 남은 공간 */}
          <div style={{ height: "66px" }}>
            <h4 className={styles.projectCardTechTitle} style={{ 
              color: textColor, 
              marginBottom: "12px",
              textAlign: "left" 
            }}>
              Tech Skills
            </h4>
            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
              {project.tags.map((tag, index) => (
                <span
                  key={index}
                  className={styles.projectCardTag}
                  style={{
                    background: isDarkMode ? "#444" : "#fff",
                    color: textColor,
                    padding: "2px 8px",
                    borderRadius: "20px",
                    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                  }}
                >
                  {tag.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Projects Component
const Projects = () => {
  const { theme } = useTheme();
  const projectsHeaderRef = useRef(null);

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

    if (projectsHeaderRef.current) {
      observer.observe(projectsHeaderRef.current);
    }

    return () => {
      if (projectsHeaderRef.current) {
        observer.unobserve(projectsHeaderRef.current);
      }
    };
  }, []);

  return (
    <div className={styles.projectsContainer}>
      <div className={`${styles.projectsHeader} ${styles.fadeInDown}`} ref={projectsHeaderRef}>
        <h1 className="font-rubik text-[32px] font-bold">Projects</h1>
      </div>

      <div className={styles.projectsGrid}>
        {projects.map((project, index) => (
          <div key={`project-${index}`} className={`${styles.cardWrapper} ${styles[`card${index + 1}`]}`}>
            <ProjectCard
              project={project}
              theme={theme}
              backgroundColor={backgroundColors[index % backgroundColors.length]}
              index={index}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
