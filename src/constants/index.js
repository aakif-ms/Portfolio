import todo from "../assets/projects/todo.png";
import yelpcamp from "../assets/projects/yelpcamp.png";
import weather from "../assets/projects/weather.png";
import echoes from "../assets/projects/echoes.png"

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications.I have imporving my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications.I have worked with a variety of technologies, including React, Next.js, Node.js and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EDUCATION = [
  {
    year: "2008 - 2022",
    role: "Secondary Education",
    institute: "St. Dominic Savio College",
    description: `St. Dominic Savio College in Lucknow is a respected ICSE-affiliated institution known for its academic excellence and holistic education. With a strong focus on character development, it fosters a vibrant learning environment. Scoring 93.5% in your 12th grade reflects the school’s dedication to nurturing students' potential and preparing them for future success.`,
  },
  {
    year: "2023 - 2027",
    role: "Graduation",
    institute: "KIET Group of Institutions",
    description: `KIET Group of Institutions in Ghaziabad is a premier engineering college recognized for its commitment to academic excellence and innovation. The Computer Science and Information Technology program offers a robust curriculum that combines theoretical knowledge with practical skills, preparing students for the dynamic tech industry. With experienced faculty and state-of-the-art facilities, KIET fosters a supportive learning environment that encourages creativity and collaboration, equipping students for successful careers in technology.`,
  },
];

export const PROJECTS = [
  {
    title: "Echoes",
    image: echoes,
    link:"https://github.com/aakif-ms/Echoes",
    description:
      "A memory app where users can upload images, add descriptions, and preserve their cherished moments securely. Users can revisit their memories anytime, keeping them organized and easily accessible. Perfect for storing special experiences, milestones, and nostalgic moments in a digital format.",
    technologies: [
      "React",
      "Tailwind",
      "Framer Motion",
      "Express",
      "JWT",
      "MongoDB",
    ],
  },
  {
    title: "YelpCamp",
    image: yelpcamp,
    link:"https://github.com/aakif-ms/YelpCamp",
    description:
      "YelpCamp simulates a platform where users can create, review, and manage campgrounds. Built with Node.js, Express, and MongoDB, YelpCamp incorporates features such as user authentication, form handling, and interactive maps.",
    technologies: [
      "HTML",
      "CSS",
      "Javascript",
      "Express",
      "Node.js",
      "MongoDB",
    ],
  },
  {
    title: "ToDo App",
    image: todo,
    link:"https://github.com/aakif-ms/Task-Master",
    description:
      "A fully functional todo app where people can create account and make their own todos",
    technologies: [
      "HTML",
      "CSS",
      "Javascript",
      "Express",
      "Node.js",
      "MongoDB",
    ],
  },
  {
    title: "Weather App",
    image: weather,
    link:"https://github.com/aakif-ms/Weatherio",
    description:
      "A weather app made using openweather api which shows detailed weather information about location.",
    technologies: ["HTML", "CSS", "React"],
  },
];

export const CONTACT = {
  email: "aakif.msiddiqui@gmail.com",
};
