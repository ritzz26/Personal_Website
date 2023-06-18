import React from "react";
import {Button, Navbar} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./home.css";

export default function Projects() {
    const navigate = useNavigate();
    return(
        <>
            <div class = "container">
                <div class = "port">
                    <h1>My Projects</h1>
                    <div class = "CarMeet">
                        <p>
                            CarMeet: A Stack based matchmaking app for car enthusiasts. 
                            Personally worked on the templating of the pages, chat function and the 
                            buttons. 
                        </p>
                        <p>
                            HitchHiker: An OpenAI based itinerary making app using filters and prompt engineering. 
                            Personally Worked on the backend with Firebase, GoogleOauth and Login Page. 
                        </p>
                        <p>
                            BlockMan : A Verilog PacMan game using an fpga board and displaying through a VGA port. 
                            Personally worked on most of the algorithm design including ghost movement, button capturing, 
                            collision detection and the VGA display. 
                        </p>
                        <p>
                            SoccerBros : A Computer graphics soccer pentalty game with animations and physics simulations. 
                            Personally worked on the sizing, ball guide, scoring, collision detection, billboard for score and statistics display.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

