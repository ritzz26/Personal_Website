import React from "react";
import {Button, Navbar, Container, Nav, NavDropdown} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./home.css";

export default function Home() {
    const navigate = useNavigate();
    const navbar = {backgroundColor: '#F16E10'};
    return(
        <>
        <Navbar style ={{backgroundColor:"lightgray"}} expand="lg" sticky="top">
      <Container>
        <Navbar.Brand href="/">Rit Agarwal</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/portfolio">Portfolio</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
            <div class = "container">
                <div class = "welcome">
                    <h1>
                        Welcome to Rit's page!
                    </h1>
                    <Button variant="primary" onClick={() =>{navigate("/portfolio")}}>Click Me!</Button>
                </div>
                
            </div>
        </>
    );
}

