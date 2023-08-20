import React from "react";
import "./css/navbar.css";
import dev from "./images/dev.png";
import { FiMenu } from "react-icons/fi";

export default function Navbar() {
  const [toggle, setToogle] = React.useState(false);

  function onClick() {
    setToogle(!toggle);
  }
  let st = {
    display: "flex",
    gridRow: 2,
    // gridColumn:,
    flexDirection: "column",
    justifySelf: "space-around",
  };
  return (
    <nav>
      <div className="nav-1">
        {" "}
        <img src={dev} alt="" height={100} width={120} />
      </div>
      <div className="nav-2" style={toggle ? st : {}}>
        <div>
          <a href="/">Home</a>
        </div>
        <div>
          <a href="/">About</a>
        </div>
        <div>
          <a href="/Projects">Projects</a>
        </div>
        {/* <div>
          <a href="/">Contact us</a>
        </div> */}
        <div>
          <a href="https://www.linkedin.com/in/amitpatel2001/">Hire me</a>
        </div>
      </div>
      <div className="nav-3">
        <div onClick={onClick}>
          <FiMenu />
        </div>
      </div>
    </nav>
  );
}
