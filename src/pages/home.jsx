import React from "react";
import {Button, Navbar} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./home.css";

export default function Home() {
    const navigate = useNavigate();
    return(
        <>
            <div class = "container">
                <div class = "welcome">
                    <h1>
                        Welcome to Rit's page!
                    </h1>
                </div>
                <Button variant="primary">Primary</Button>
            </div>
        </>
    );
}

