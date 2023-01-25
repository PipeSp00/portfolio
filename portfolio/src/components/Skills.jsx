import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Container, Row, Col } from "react-bootstrap";

import frontimage from "../multimedia/front-end-image.png";
import industrialimage from "../multimedia/industrial.png";
import uxuiimage from "../multimedia/uxui.png";

import htmlimage from "../multimedia/html.png";
import cssimage from "../multimedia/css.png";
import javascriptimage from "../multimedia/javacript.png";
import reactimage from "../multimedia/react.png";
import githubimage from "../multimedia/github.png";
import figmaimage from "../multimedia/figma.png";


import rhinoimage from "../multimedia/rhino.png";
import solidimage from "../multimedia/solidworks.png";
import keyshootimage from "../multimedia/keyshoot.png";
import autocadimage from "../multimedia/autocad.png";
import blenderimage from "../multimedia/blender.png";
import sketchupimage from "../multimedia/sketchup.png";

import illustratorimage from "../multimedia/illustrator.png";
import photoshopimage from "../multimedia/photoshop.png";
import analyticsimage from "../multimedia/analytics.png";
import xdimage from "../multimedia/xd.png";



import "react-circular-progressbar/dist/styles.css";

import { useInView} from "react-intersection-observer";
import { useState, useEffect } from "react";


import AOS from 'aos';
import 'aos/dist/aos.css';

export const Skills = () => {

  AOS.init();



  const { ref, inView, entry } = useInView();

    

  return (
    <section ref={ref}  className="skills" id="skills">
      <Container>
        <Row >
          
            
        <div className="skills-title">
              <h1>SKILLS</h1>
            </div>
            <Col xd={12} md={12} xl={4}>
              <div data-aos="fade-up" data-aos-duration="2000" className="item" >
                <img src={frontimage} alt="" />
                <h2>FRONTEND</h2>
                <div className="item-content">
                  <img src={htmlimage} alt="" />
                  <img src={javascriptimage} alt="" />
                  <img src={cssimage} alt="" />
                  <img src={reactimage} alt="" />
                  <img src={githubimage} alt="" />
                  <img src={figmaimage} alt="" />
                </div>
                <div className="item-txtx">
                <h1> 
                    {"Web development"}
                </h1>
                <span>
                    {"Knowledge in the most used languages and frameworks in the industry, dynamic, creative and interactive designs."}
                </span>
                
            </div>
              </div>
              </Col>

              <Col xd={12} md={12} xl={4}>
              <div data-aos="fade-up" data-aos-duration="2000" className="item" >
                <img src={industrialimage} alt="" />
                <h2>INDUSTRIAL DESIGN</h2>
                <div className="item-content">
                  <img src={solidimage} alt="" />
                  <img src={rhinoimage} alt="" />
                  <img src={keyshootimage} alt="" />
                  <img src={autocadimage} alt="" />
                  <img src={blenderimage} alt="" />
                  <img src={sketchupimage} alt="" />
                </div>
                <div className="item-txtx">
                <h1 > 
                    {"Product development"}
                </h1>
                <span>
                    {"Development of products from start to finish, adapting each object to each reality, creating unique designs."}
                </span>
                
            </div>
              </div>
              </Col>
              <Col xd={12} md={12} xl={4}>
              <div data-aos="fade-up" data-aos-duration="2000" className="item" >
                <img src={uxuiimage} alt="" />
                <h2>UX & UI</h2>
                <div className="item-content">
                  <img src={illustratorimage} alt="" />
                  <img src={photoshopimage} alt="" />
                  <img src={xdimage} alt="" />
                  <img src={analyticsimage} alt="" />
                  <img src={figmaimage} alt="" />
                  
                  
                  
                </div>
                <div className="item-txtx">
                <h1> 
                    {"User-based designs"}
                </h1>
                <span>
                    {"User-focused design, always looking for the best possible experience and interface."}
                </span>
                
            </div>
              </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
