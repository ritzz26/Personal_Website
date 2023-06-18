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
                  <li>CS35L</li>  
                  <li>CS111</li>  
                  <li>CS152A</li>
                  <li>Math 61</li>  
                  <li>Math 31B</li>
                  <li>Math 32A</li>
                  <li>Math 33A - Linear Algebra</li>
                  <li>Math 33B</li>
                  <li>Phyics 1A</li>
                  <li>Phyics 1B</li>
                  <li>Phyics 1C</li>
                  <li>Phyics 4AL</li>
                </p>
                <h2>
                    Online Courses
                </h2>
                <p>
                        <li> </li>
                    </p>
                </div>
            </div>
        </>
    );
}

