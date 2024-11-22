/* eslint-disable react/prop-types */
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { experiences } from "../../constants/index.js";
import { useTheme } from "../../common/ThemeContext"; // Import the useTheme hook

// Define color mapping for light and dark themes
const colorMap = {
  light: {
    background: "#f9f9f9", // Light theme background
    color: "#000", // Light theme text color
    iconBg: "#ccc", // Light theme circle background
  },
  dark: {
    background: "#000", // Dark theme background
    color: "#fff", // Dark theme text color
    iconBg: "#444", // Dark theme circle background
  },
};

// ExperienceCard Component
const ExperienceCard = ({ experience, theme }) => {
  const currentTheme = colorMap[theme]; // Get the current theme colors

  return (
    <VerticalTimelineElement
    contentStyle={{
        background: theme === "light" ? "#f0f0f0" : "#2c2c2c", // Adjusted colors for light and dark modes
        color: currentTheme.color,
        borderRadius: "12px", // Add border radius
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)", // Optional: Add subtle shadow for better visual effect
      }}
      contentArrowStyle={{
        borderRight: `7px solid transparent`, 
      }}
      date={<span className="experience-date">{experience.date}</span>}
      iconStyle={{
        background: currentTheme.iconBg, // Icon background color
        display: "flex", // Align items in the center
        justifyContent: "center",
        alignItems: "center",


        overflow: "hidden", // Clip image to fit within the circle
      }}

   
      
      icon={
        <img
          src={experience.icon}
          alt={experience.company_name}
          style={{
            width: "100%", // Fill the entire container
            height: "100%", // Fill the entire container
            objectFit: "fill", // Stretch to fit the circle
          }}
        />
      }
    >
      <div>
        <h3
          className="text-[24px] font-bold"
          style={{ color: currentTheme.color }}
        >
          {experience.title}
        </h3>
        <p
          className="text-[16px] font-semibold"
          style={{ color: currentTheme.color, margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className="experience-points">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            style={{ color: currentTheme.color }} // Use inline color for theme-specific text
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
  const { theme } = useTheme(); // Access the current theme

  return (
    <div className="experience-container">
      <div className="experience-header">
        <h2 className="text-center text-[32px] font-bold">Work Experience</h2>
        <p className="text-center text-secondary">
          What I have accomplished so far
        </p>
      </div>

      <div className="mt-10">
        <VerticalTimeline
          lineColor={theme === "light" ? "#f0f0f0" : "#2c2c2c"} 
        >
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
              theme={theme} // Pass the theme to ExperienceCard
            />
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default Experience;
