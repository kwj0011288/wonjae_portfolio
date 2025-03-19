/* eslint-disable react/prop-types */
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { experiences } from "../../constants/index.js";
import { useTheme } from "../../common/ThemeContext";

// Define background colors for different experiences
const backgroundColors = [
  "#FFE5E5", // 연한 빨간색
  "#E5FFE5", // 연한 초록색
  "#E5E5FF", // 연한 파란색
  "#FFE5FF", // 연한 보라색
  "#FFFFE5", // 연한 노란색
  "#E5FFFF", // 연한 하늘색
];

// ExperienceCard Component
const ExperienceCard = ({ experience, theme, backgroundColor }) => {
  const isDarkMode = theme === "dark";
  const textColor = isDarkMode ? "#ffffff" : "#000000";
  const cardBackground = isDarkMode ? "#2c2c2c" : backgroundColor;

  return (
    <VerticalTimelineElement
      contentStyle={{
        background: cardBackground,
        color: textColor,
        borderRadius: "12px",
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
      }}
      contentArrowStyle={{
        borderRight: `7px solid ${cardBackground}`,
      }}
      date={<span className="experience-date">{experience.date}</span>}
      iconStyle={{
        background: cardBackground,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
      }}
      icon={
        <img
          src={experience.icon}
          alt={experience.company_name}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "fill",
          }}
        />
      }
    >
      <div>
        <h3
          className="text-[24px] font-bold"
          style={{ color: textColor }}
        >
          {experience.title}
        </h3>
        <p
          className="text-[16px] font-semibold"
          style={{ color: textColor, margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className="experience-points">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            style={{ color: textColor }}
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

// Experience Component
const Experience = () => {
  const { theme } = useTheme();

  return (
    <div className="experience-container">
      <div className="experience-header">
        <h1 className="text-center text-[32px] font-bold">Work Experience</h1>
      </div>

      <div className="mt-10">
        <VerticalTimeline
          lineColor={theme === "light" ? "#f0f0f0" : "#2c2c2c"}
        >
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
              theme={theme}
              backgroundColor={backgroundColors[index % backgroundColors.length]}
            />
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default Experience;
