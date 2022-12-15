import React from "react";
import {Button, Navbar} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./home.css";

export default function About() {
    const navigate = useNavigate();
    return(
        <>
            <div class = "container">
                <div class = "port">
                    <h1>Who am I?</h1>
                    <p>
                    Born in India, raised in Africa with Indian values and with a hybrid of an Indian and African culture. 
                    </p>
                    <p>
                    Hobbies:
                    </p>
                    <ul>
                        <li>Tennis
                        </li>
                        <li>Working Out</li>
                        <li>Traveling</li>
                    </ul>
                </div>
            </div>
        </>
    );
}

