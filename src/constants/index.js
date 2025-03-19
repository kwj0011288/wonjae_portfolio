import git from "../assets/GIT2.png";
import hancom from "../assets/hancom2.png";
import august from "../assets/august.png";
import august_project from "../assets/august_screen.png";
import kissing_booth from "../assets/man_neutral.png";
import animal from "../assets/animal.jpg";



const experiences = [
  {
    title: "Software Engineer Intern",
    company_name: "GIT",
    icon: git,
    iconBg: "#383E56",
    date: "June 2019 - August 2019",
    points: [
      "Contributed to advanced automotive diagnostic projects focused on next-gen vehicle safety and eco-friendly technologies.",
      "Developed electric vehicle diagnostics in line with trends in autonomous and connected cars.",
      "Collaborated with a dynamic team to enhance vehicle performance, quality, and inspection technologies.",
    ],
  },
  {
    title: "Front Observer & DMZ Police",
    company_name: "Republic of Korea Army",
    icon: git,
    iconBg: "#383E56",
    date: "Jan 2021 - July 2022",
    points: [
      "Served in front-line duty in a critical border area for 5 months under 1st Artillery Division.",
      "Promoted to Sergeant, led team operations emphasizing communication and strategic decision-making.",
      "Earned an honorable discharge with the rank of Sergeant, recognized for dedication and discipline.",
    ],
  },
  {
    title: "Software Engineer Intern",
    company_name: "Hancom",
    icon: hancom,
    iconBg: "#E6DEDD",
    date: "June 2024 - August 2024",
    points: [
      "Spearheaded the strategic migration of iOS and Android applications to Flutter, significantly improving cross-platform compatibility and development efficiency.",
"Engineered a high-fidelity prototype with designers, boosting integration and functionality of the app.",
"Worked cohesively with a dynamic and enthusiastic team, enhancing development processes and project outcomes"
    ],
  },
  {
    title: "Co-founder & Software Engineer",
    company_name: "August",
    icon: august,
    iconBg: "#E6DEDD",
    date: "June 2023 - Present",
    points: [
      "Co-founded and developed ’August’, a college scheduler app for Android and iOS using Flutter, with a focus on user-friendly interface and cross-platform compatibility.",
      "Created an innovative scheduling algorithm analyzing available slots, open seats, and user preferences.",
      "Integrated RESTful APIs and utilized web scraping for real-time data from school websites.",
      "Collaborate weekly with co-founder and lead developer to enhance app functionality and user experience.",
      "Achieved over 250 users within the first month post-launch, with continued growth driven by consistent user engagement and high satisfaction.",
    ],
  },
];

const projects = [
  {
    name: "August",
    description:
    "A college scheduling app that helps students organize their timetables efficiently with real-time data.",
    tags: [
      {
        name: "Flutter",
        color: "blue-text-gradient",
      },
      {
        name: "Python",
        color: "green-text-gradient",
      },
      {
        name: "Django",
        color: "pink-text-gradient",
      },
      {
        name: "React",
        color: "pink-text-gradient",
      },
      {
        name: "Tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: august_project,
    source_code_link: "https://github.com/kwj0011288/AugustFE",
    demo_link: "https://augustapp.one/get",
  },
  {
    name: "AI Couple Compatibility Scoring System",
    description:
      "An AI system that analyzes couple compatibility based on facial feature similarities.",
    tags: [
      {
        name: "Flutter",
        color: "blue-text-gradient",
      },
      {
        name: "Python",
        color: "green-text-gradient",
      },
      {
        name: "Django",
        color: "pink-text-gradient",
      },
      {
        name: "React",
        color: "pink-text-gradient",
      },
      {
        name: "Tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: kissing_booth,
    source_code_link: "https://github.com/kwj0011288/AI-Couple-Compatibility-Scoring-System",
    demo_link: "https://kissing-booth-ai.com/",
  },
  {
    name: "Human-to-Animal Facial Resemblance Classifier AI",
    description:
      "An AI model that classifies human faces into animal-like categories based on facial resemblance.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Tensorflow",
        color: "green-text-gradient",
      },
      {
        name: "Keras",
        color: "pink-text-gradient",
      },
    ],
    image: animal,
    source_code_link: "https://github.com/kwj0011288/Face2AnimalClassifier",
  },
];

export { experiences, projects };
