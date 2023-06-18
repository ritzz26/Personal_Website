import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import About from "../pages/About";
import Courses from "../pages/Courses";
import Portfolio from "../pages/Portfolio";
import Projects from "../pages/Projects";

function Router() {
    return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />}/>
        <Route path="/portfolio" element = {<Portfolio/>}/>
        <Route path="/Projects" element = {<Projects/>}/>
      </Routes>
    );
  }
  
  export default Router;