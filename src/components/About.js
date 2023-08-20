import React from "react";
import a from "./images/amit.png";
import "./css/about.css";
import resume from "./images/amit.png";
import { FaLinkedin, FaGithub, FaHackerrank } from "react-icons/fa";
import { SiLeetcode, SiCodechef } from "react-icons/si";

const App = () => {
  return (
    <div className="main">
      <div className="detel">
        <h1 className="name">
          <span className="name-1"> I,m Amit</span>{" "}
          <span className="name-2">Patel</span>{" "}
        </h1>
        <div>Full Stack Developer</div>
        <p>
          This is my official portfolio website to showes to all <br />
          Details and work experience in web development
        </p>
        <a href="/" download={resume} className="btn">
          DOWNLOAD CV
        </a>

        <div className="social-media">
          <ul className="social-icon">
            <li>
              <a href="https://www.linkedin.com/in/amitpatel2001/">
                <FaLinkedin size="2em" className="icon" />{" "}
              </a>
            </li>
            <li>
              <a href="https://github.com/akathoniya52">
                <FaGithub size="2em" className="icon" />{" "}
              </a>
            </li>
            <li>
              <a href="https://www.hackerrank.com/akathoniya52">
                <FaHackerrank size="2em" className="icon" />
              </a>
            </li>
            <li>
              <a href="https://leetcode.com/akathoniya52/">
                <SiLeetcode size="2em" className="icon" />
              </a>
            </li>
            <li>
              <a href="https://www.codechef.com/users/akathoniya52/">
                <SiCodechef size="2em" className="icon" />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="main-2">
        <img src={a} alt="" srcSet="" className="main-img" />
      </div>
    </div>
  );
};

export default App;
