import { Container, Row, Col } from "react-bootstrap";
import background from "../multimedia/background.png";
import { useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";
import felipe from "../multimedia/felipe.png";

export const Banner = () => {
  return (
    <div>
    <section className="banner" id="home">
      <Row className="align-items-center">
        <Col xd={12} md={6} xl={7}>
          <div className="banner-text">
            <h2>{"Hi! I'm Felipe Spena"}</h2>
            <span className="wrap">
              <TypeAnimation
                sequence={[
                  "Product Designer",
                  2000,
                  "Web Developer",
                  2000,
                  "Ux & UI Design",
                  2000,
                ]}
                //  Replacing previous Text
                style={{ fontSize: "2em" }}
                wrapper="h2"
                repeat={Infinity}
              />
            </span>
          </div>
        </Col>
        <Col xd={12} md={6} xl={5}>
                <img className="imagen-felipe" src={felipe} alt="" />

        </Col>
      </Row>
      
    </section>

    </div>


  );
};
