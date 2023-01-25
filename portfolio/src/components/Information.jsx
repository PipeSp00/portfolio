import { Col, Row, Container, Button } from "react-bootstrap";
import felipe2 from "../multimedia/felipe2.png";

import AOS from 'aos';
import 'aos/dist/aos.css';



export const Information = () => {
    
 
    AOS.init();

    return (
        <div id="about"  className="information-section"
        >
            <Container >
                <Row className="align-items-center">
                    <Col xd={12} md={6} xl={4}>
                        <span data-aos="fade-right"   data-aos-duration="5000" className="img-information">
                        <img src= {felipe2} alt="" />
                        </span>
                        

                    </Col>
                    <Col  xd={12} md={6} xl={8}>
                        <span data-aos="fade-left"  data-aos-duration="5000" className="column-information">
                            <p>
                                Hello there! Welcome to my web portfolio, my name is Felipe
                                Spena, I am an electromechanical technician, industrial design
                                student and front end developer. I have knowledge and experience
                                in design, programming and automation. Learning every day a
                                little more, the best project is the next one!
                            </p>
                        </span>
                       
                        
                    </Col>
                </Row>
            </Container>
        </div>
    );
};
 