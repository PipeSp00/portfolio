
import React from "react";
import linkedin from "../multimedia/linkedin.png"
import whatsapp from "../multimedia/whatsapp.png"
import behance from "../multimedia/behance.png"
import { Container } from "react-bootstrap";

export const Footer = () => {
    return (

        <footer className="footer">
                <div className="footer-logos">
                <a href="https://www.linkedin.com/in/felipe-spena/" target="_blank">
                                <img src={linkedin} alt="Ln" />
                            </a>
                            <a href="https://www.behance.net/felipefspena" target="_blank">
                                <img src={behance} alt="bh" />
                            </a>
                            <a href="https://wa.me/541135120507" target="_blank">
                                <img src={whatsapp} alt="wh" />
                            </a>
                </div>
                <p> © 2023 Copyright - Felipe Spena </p>
        </footer>
            
       
    )
}