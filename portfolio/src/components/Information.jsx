import { Col, Row, Container, Button } from "react-bootstrap";
import background from "../multimedia/background.png";
import { useInView } from "react-intersection-observer";



export const Information = () => {


    const { ref, inView, entry } = useInView();

    return (
        <div ref={ref} className="information-section"
        >
            <Container clas>
                <Row className="align-items-center">
                    <Col xd={12} md={6} xl={5}>
                        <span>
                            <img
                                src={background}
                                className="
banner-imagen"
                                alt=""
                            />
                        </span>
                    </Col>
                    <Col  xd={12} md={6} xl={7}>
                        <span className="column-information">
                            <p>
                                Hello there! Welcome to my web portfolio, my name is Felipe
                                Spena, I am an electromechanical technician, industrial design
                                student and front end developer. I have knowledge and experience
                                in design, programming and automation. Learning every day a
                                little more, the best project is the next one!
                            </p>

                            <Button size="lg" variant="outline-dark">
                            
                            <a href="#" download="Felipe_Spena_Resume">
                                Download my Resume
                            </a>
                        </Button>
                        </span>
                       
                        
                    </Col>
                </Row>
            </Container>
        </div>
    );
};
