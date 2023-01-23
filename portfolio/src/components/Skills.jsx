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


import "react-circular-progressbar/dist/styles.css";

import { useInView } from "react-intersection-observer";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const { ref, inView, entry } = useInView();

  return (
    <section ref={ref} className="skills" id="skills">
      <Container>
        <Row>
          <Col xd={12} md={12} xl={12}>
            <div className="skills-title">
              <h1>SKILLS</h1>
            </div>

            <Carousel
              responsive={responsive}
              infine={true}
              className="skill-slide"
            >
              <div className={`${inView ? "item" : "item-hidden"}`}>
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
              </div>

              <div className={`${inView ? "item" : "item-hidden"}`}>
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
              </div>

              <div className={`${inView ? "item" : "item-hidden"}`}>
                <img src={uxuiimage} alt="" />
                <h2>UX & UI</h2>
                <div className="item-content-ux">
                  <img src={illustratorimage} alt="" />
                  <img src={photoshopimage} alt="" />
                  <img src={analyticsimage} alt="" />
                  
                </div>
              </div>

        
              

              
            </Carousel>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
