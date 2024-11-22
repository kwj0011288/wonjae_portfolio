import git from "../assets/GIT2.png";
import hancom from "../assets/hancom2.png";
import august from "../assets/august.png";
import carrent from "../assets/sun.svg";
import jobit from "../assets/sun.svg";
import tripguide from "../assets/sun.svg";



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
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { experiences, projects };
