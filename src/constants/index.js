import medimeet from "../assets/projects/medimeet.png"
import whisper from "../assets/projects/Whisper.png"
import repolens from "../assets/projects/repolens.png"
import sentinel from "../assets/projects/sentinel.png"

export const HERO_CONTENT = `I am a passionate full-stack and AI developer specializing in building scalable, production-ready applications. I work extensively with React, Next.js, Node.js, Prisma, and modern databases like MongoDB and PostgreSQL. 
Beyond full-stack development, I focus on AI, machine learning, and agentic systems—leveraging PyTorch, LangChain, LangGraph, and multi-agent workflows to create intelligent, automated solutions. My goal is to build impactful products that combine strong engineering, clean design, and practical AI to deliver exceptional user experiences.`;


export const ABOUT_TEXT = `I am a dedicated and versatile full-stack developer currently in my third year of CSIT. I enjoy building efficient, user-centric applications using technologies like React, Next.js, Node.js, Prisma, and modern databases such as MongoDB and NeonDB. My interest in AI and automation has led me to build real-world ML and agentic systems using PyTorch, LangChain, LangGraph, and Google ADK—ranging from email-automation agents to RAG-based research tools and intelligent multi-agent planners. 
I thrive in collaborative environments, enjoy solving complex engineering challenges, and constantly explore new technologies to expand my skill set. Outside of development, I like learning emerging AI tools, improving my projects, and contributing to meaningful tech communities.`;



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
  title: "RepoLens",
  image: repolens,
  link: "https://github.com/aakif-ms/RepoLens",
  description:
    "A conversational AI tool that lets developers explore and understand codebases using natural language. Paste a GitHub URL, and RepoLens scans the repository to answer questions about architecture, authentication, database schema, and more with context-aware responses.",
  technologies: [
    "Next.js",
    "FastAPI",
    "Python",
    "LangGraph",
    "LangChain",
    "ChromaDB",
  ]
},
{
  title: "Sentinel",
  image: sentinel,
  link: "https://github.com/aakif-ms/Sentinel",
  description:
    "An AI-powered browser side panel that transforms everyday browsing into an intelligent workflow. Sentinel understands page context, answers questions, performs deep web research with source synthesis, and syncs structured insights directly to Notion—combining research, comprehension, and knowledge capture in one seamless flow.",
  technologies: [
    "JavaScript",
    "FastAPI",
    "Python",
    "LangGraph",
    "LangChain",
    "ChromaDB",
    "Tavily",
    "RAG",
    "Notion-API",
  ]
},
  {
    title: "MediMeet",
    image: medimeet,
    link: "https://github.com/aakif-ms/MediMeet",
    description:
      "A doctor-patient consultation platform with appointment booking, real-time video calls, and secure payments. Includes dedicated dashboards for Admin, Doctors, and Patients to streamline end-to-end healthcare workflows.",
    technologies: ["NextJS", "Prisma", "NeonDB", "Vonage", "Clerk", "ShadCN"]
  },
  {
    title: "Whisper",
    image: whisper,
    link: "https://github.com/aakif-ms/Whisper",
    description:
      "A secure real-time messaging platform with friend requests, authentication, and instant chat powered by Socket.IO. Designed with Firebase Auth and a clean Tailwind UI.",
    technologies: ["React", "NodeJS", "MongoDB", "Socket.IO", "Tailwind CSS"]
  },

];


export const CONTACT = {
  email: "aakif.msiddiqui@gmail.com",
};
