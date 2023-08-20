import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/Projects" element={<Projects />} />
      </Routes>
      {/* <About /> */}
    </>
  );
}

export default App;
