import React from "react";
import {Button, Navbar} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./home.css";

export default function Courses() {
    const navigate = useNavigate();
    return(
        <>
            <div class = "container">
            <div class = "port">
                <h1>
                    University Courses
                </h1>
                <p>
                  <li>CS31 - Introduction to Computer Science</li>  
                  <li>CS32 - Introduction to Data Structures and Algorithms</li>  
                  <li>CS33 - Introduction to Computer Architecture</li>  
                  <li>CS35L - Software Construction Lab</li>  
                  <li>CS111 - Introduction to operating systems design and evaluation</li>  
                  <li>CSm152A - Introductory Digital Design Lab</li>
                  <li>CS174A - Introduction to Computer Graphics </li>
                  <li>Math 61 - Introduction to Discrete Structures</li>  
                  <li>Math 31B - Integration and Infinite Series</li>
                  <li>Math 32A - Calculus of Several Variables</li>
                  <li>Math 33A - Linear Algebra</li>
                  <li>Math 33B - Differential Equations</li>
                  <li>Phyics 1A - Physics for Scientists and Engineers: Mechanics</li>
                  <li>Phyics 1B - Physics for Scientists and Engineers: Oscillations, Waves, Electric and Magnetic Fields</li>
                  <li>Phyics 1C - Physics for Scientists and Engineers: Electrodynamics, Optics, and Special Relativity</li>
                  <li>Phyics 4AL - Physics Laboratory for Scientists and Engineers: Mechanics</li>
                </p>
                <h1>
                    Online Courses
                </h1>
                <p>
                    <h3>
                        IBM Skills Network
                    </h3>
                        <li>Developing Cloud Apps with Node.js and React</li>
                        <li>Python for Data Science, AI & Development </li>
                        <li>Developing Applications with SQL, Databases and Django</li>
                        <li>Introductions to Containers w/ Docker, Kubernetes & OpenShift</li>
                        <li>Introduction to Web Development with HTML, CSS, JavaScript</li>
                        <li>Introduction to Cloud Computing</li>
                        <li>Getting started with Git and Github</li>
                    </p>
                </div>
            </div>
        </>
    );
}

