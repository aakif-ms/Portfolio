import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

export default function Navbar() {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <h1 className="text-lg text-white mx-2 w-10">Aakif</h1>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/aakif-mushtaq-siddiqui-267821294/">
          <FaLinkedin />
        </a>
        <a href="https://github.com/aakif-ms?tab=repositories">
          <FaGithub />
        </a>
        <a href="https://leetcode.com/u/aakif_msiddiqui/">
          <SiLeetcode />
        </a>
      </div>
    </nav>
  );
}
