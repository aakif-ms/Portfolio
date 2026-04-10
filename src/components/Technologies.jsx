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
        className="flex flex-wrap items-center justify-center gap-4">
        <TechComponent name="Python" src={python} classes="w-[70px]" />
        <TechComponent name="C++" src={cpp} classes="w-16" />
        <TechComponent name="Javascript" src={js} classes="w-16" />
        <TechComponent name="React" icon={RiReactjsLine} classes="text-7xl text-cyan-400" />
        <TechComponent name="NextJS" src={nextjs} classes="w-16" />
        <TechComponent name="NodeJS" icon={FaNodeJs} classes="text-7xl text-green-600" />
        <TechComponent name="ExpressJS" icon={SiExpress} classes="text-7xl " />
        <TechComponent name="PyTorch" icon={SiPytorch} classes="text-7xl text-orange-600" />
        <TechComponent name="LangChain" icon={SiLangchain} classes="text-7xl text-emerald-800"/>
        <TechComponent name="LangGraph" icon={SiLanggraph} classes="text-7xl text-emerald-800"/>
        <TechComponent name="MongoDB" src={mongoDb} classes="w-[70px]" />
        <TechComponent name="PostgreSQL" icon={BiLogoPostgresql} classes="text-7xl text-[#396c94] bg-white rounded-full" />
      </motion.div>
    </div>
  );
}
