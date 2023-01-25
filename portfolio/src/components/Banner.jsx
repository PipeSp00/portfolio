import { Container, Row, Col } from "react-bootstrap";

import { useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";
import felipe from "../multimedia/felipe.png";
import AOS from 'aos';
  import 'aos/dist/aos.css';

export const Banner = () => {


  AOS.init();

  
  
  return (
    <div data-aos="zoom-in" >
    <section className="banner" id="home">
      <Row className="align-items-center">
        <Col className="justify-items-center" xd={12} md={6} xl={7}>
          <div className="banner-text">
            <h2 className="banner-animation">{"Hi! I'm Felipe Spena"}</h2>
            <span className="wrap">
              <TypeAnimation
                sequence={[
                  "Web Developer",
                  4000,
                  "Product Designer",
                  4000,
                  "Ux & UI Design",
                  4000,
                ]}
                //  Replacing previous Text
                style={{ fontSize: "3em" }}
                wrapper="h2"
                className="banner-animation"
                repeat={Infinity}
              />
            </span>
          </div>
        </Col>
        <Col style={{disply:'flex', justifyContent:'center'}} xd={12} md={6} xl={5}>
          
            
            <img className="imagen-felipe" src={felipe} alt="" />
            
          
               
        </Col>
      </Row>
      
    </section>

    </div>


  );
};
