import { motion } from "framer-motion";

import TechComponent from "./TechComponent";

import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import mongoDb from "../assets/mongodb.svg";
import python from "../assets/python.svg";
import nextjs from "../assets/nextjs.svg";
import js from "../assets/javascript.svg";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiPytorch } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiLangchain } from "react-icons/si";
import { SiLanggraph } from "react-icons/si";

import cpp from "../assets/cpp.svg";

export default function Technologies() {
  const technologies = [
    { name: "Python", src: python, classes: "w-[70px]" },
    { name: "C++", src: cpp, classes: "w-16" },
    { name: "Javascript", src: js, classes: "w-16" },
    { name: "React", icon: RiReactjsLine, classes: "text-7xl text-cyan-400" },
    { name: "NextJS", src: nextjs, classes: "w-16" },
    { name: "NodeJS", icon: FaNodeJs, classes: "text-7xl text-green-600" },
    { name: "ExpressJS", icon: SiExpress, classes: "text-7xl " },
    { name: "PyTorch", icon: SiPytorch, classes: "text-7xl text-orange-600" },
    { name: "LangChain", icon: SiLangchain, classes: "text-7xl text-emerald-800" },
    { name: "LangGraph", icon: SiLanggraph, classes: "text-7xl text-emerald-800" },
    { name: "MongoDB", src: mongoDb, classes: "w-[70px]" },
    { name: "PostgreSQL", icon: BiLogoPostgresql, classes: "text-7xl text-[#396c94] bg-white rounded-full" },
  ];

  const firstRowCount = Math.ceil(technologies.length * 0.7);
  const firstRowTech = technologies.slice(0, firstRowCount);
  const secondRowTech = technologies.slice(firstRowCount);

  return (
    <div className="border-b border-neutral-800 pb-24 ">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Technologies
      </motion.h2>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ x: -100, opacity: 0 }}
        transition={{ duration: 1.5 }}
        className="flex flex-col items-center gap-4">
        <div className="flex flex-wrap items-center justify-center gap-4">
          {firstRowTech.map((tech) => (
            <TechComponent
              key={tech.name}
              name={tech.name}
              icon={tech.icon}
              src={tech.src}
              classes={tech.classes}
            />
          ))}
        </div>
        <div className="flex flex-wrap items-center justify-center gap-4">
          {secondRowTech.map((tech) => (
            <TechComponent
              key={tech.name}
              name={tech.name}
              icon={tech.icon}
              src={tech.src}
              classes={tech.classes}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
}
