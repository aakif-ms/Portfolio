import { motion } from "framer-motion";

import { CONTACT } from "../constants";
import { FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="border-b border-neutral-900 pb-20">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-10 text-center text-4xl"
      >
        Get in Touch
      </motion.h2>
      <div className="text-center tracking-tighter">
        <div className="flex justify-center text-2xl">
          <FaLinkedin />
        </div>
        <a href="#" className="border-b">
          {CONTACT.email}
        </a>
      </div>
    </div>
  );
}
