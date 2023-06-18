import React from "react";
import {Button, Navbar} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./home.css";

export default function Portfolio() {
    const navigate = useNavigate();
    return(
        <>
            <div class = "container">
                <div class = "port">
                    <h1>Who am I?</h1>
                    <p>
                    Born in India, raised in Africa with Indian values and with a hybrid of an Indian and African culture. 
                    UCLA Computer Science Major with a passion in Software Development, Cloud Development and Artificial Intelligence. 
                    Accomplished in customer service, counseling, leadership, time management and teamwork. 
                    Adept in understanding tasks with attention to detail and carrying out several tasks at once. 
                    Areas of Strength include: C++, C, JavaScript, Database management with Django and SQL, Docker, HTML, CSS, Python, Node.js, React.
                    </p>
                    <p>
                    Hobbies:
                    </p>
                    <ul>
                        <li>Tennis
                        </li>
                        <li>Chess</li>
                        <li>Working Out</li>
                        <li>Traveling</li>
                    </ul>
                </div>
                <div>
                <img src="C:\Users\sajal\Documents\JOBS\rit_web\src\Images\1.jpg"></img>
                </div>
            </div>
        </>
    );
}

