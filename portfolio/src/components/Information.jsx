import { Col, Row, Container, Button } from "react-bootstrap";
import background from "../multimedia/felipe2.png";
import estudiosanimacion from "../multimedia/estudiosanimacion.svg";

import { TimeLine} from "./TimeLine";


import { useEffect } from "react";
import { useState } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

export const Information = () => {
    AOS.init();
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
        console.log("scrollfedd")
      } else {
        setScrolled(false);
      }
    }
    

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
      
    }, []);
    return (
        <div
            data-aos="fade-left"
            data-aos-duration="2000"
            id="about"
            className="information-section"
        >
            <Container className="container-info">
                <Row className="align-items-center xg" >
                    <Col xd={12} md={6} xl={5}>
                        <span>
                            <img
                                src={background}
                                className="banner-imagen"
                                alt=""
                            />
                        </span>
                    </Col>
                    <Col xd={12} md={6} xl={7}>
                        <span className="column-information">
                            <h2>About me</h2>
                            <p>
                                Hello there! Welcome to my web portfolio, my name is Felipe
                                Spena, I am passionate about design and creating new things, innovating and improving.
                                I consider myself ambitious and eager to learn from everything, being
                                able to improve a little bit every day, in every job is my main goal.
                                I have been involved with design projects for 4 years, from product development to interface programming for intelligent buildings. Always looking to generate the best combination between aesthetics and functionality.
                                 
                            </p>
                        </span>
                    </Col>
                </Row>
                <Row className="align-items-center">
                <h2>My studies</h2>
                    { scrolled ?
           <TimeLine  /> :
           null
        }
         
                </Row>
            </Container>
        </div>
    );
};
