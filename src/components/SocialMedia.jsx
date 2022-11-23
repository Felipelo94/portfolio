import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

function SocialMedia() {
  return (
    <div className="app__social">
      <a
        href="https://www.linkedin.com/in/felipe-londo%C3%B1o-360597204/"
        target="_blank"
        rel="noreferrer"
      >
        <div>
          <FaLinkedin />
        </div>
      </a>
      <div>
        <a
          href="https://github.com/FelipeloDev"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </a>
      </div>
    </div>
  );
}

export default SocialMedia;
