import { useEffect } from "react";
import { useState } from "react";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../multimedia/logo.png"
import linkedin from "../multimedia/linkedin.png"
import instagram from "../multimedia/instagram.png"
import behance from "../multimedia/behance.png"

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
        console.log("scrolledd")
      } else {
        setScrolled(false);
      }
    }
    

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);


        
    }, []);
    const onUpdateActiveLink = (value) => {
        setActiveLink(value)
    }


    return (
        <Navbar className= {`${scrolled ? "navbar-container" : " navbar-container-visible"}`}>

            <Container >
                <Navbar.Brand href="#home" >
                    
                    <img className="logo" src={logo} alt="logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                         <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                        <Nav.Link href="#skills" className={activeLink === "skills" ? "active-navbar-link" : "navbar-link"} onClick ={() => onUpdateActiveLink('skills')}>
                            Skills 
                       </Nav.Link><Nav.Link href="#project" className={activeLink === "projects" ? "active-navbar-link" : "navbar-link"} onClick ={() => onUpdateActiveLink('projects')}>
                            Projects
                        </Nav.Link>
                    </Nav>
                    <span className="navbar-text">
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/in/felipe-spena/" target="_blank">
                                <img src={linkedin} alt="Ln" />
                            </a>
                            <a href="https://www.behance.net/felipefspena" target="_blank">
                                <img src={behance} alt="bh" />
                            </a>
                            <a href="#" target="_blank">
                                <img src={instagram} alt="wh" />
                            </a>
                        </div>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}


