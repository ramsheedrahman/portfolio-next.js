import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex flex-col items-center">
        <p className="text-md text-center mb-4">
          Crafted by Ramseed K K, {new Date().getFullYear()}
        </p>
        
        <div className="socials flex flex-row gap-2">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-white text-xl" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-white text-xl" />
          </a>
        </div>

        <a href="mailto:ramsheedkk06@gmail.com" className="text-slate-400 hover:text-sky-400 mt-4">
          Say hello!
        </a>
      </div>
    </footer>
  );
};

export default Footer;
