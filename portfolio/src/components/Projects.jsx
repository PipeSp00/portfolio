import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectsCard } from "./ProjectsCard";
import ordeskimage from "../multimedia/ordesk.png";
import relojimage from "../multimedia/Reloj.jpg";
import iphoneimage from "../multimedia/Iphone.jpg";
import microfonoimage from "../multimedia/Microfono.jpg";
import muebleimage from "../multimedia/mueble.jpg";
import agimage from "../multimedia/AG.png";


export const Projects = () => {


return (
    <section className="project" id="project">
        <Container>

            
        
            <Row><div className="skills-title">
              <h1>PROJECTS</h1>
            </div>
                <Col>
                <Tab.Container id="project-tabs" defaultActiveKey="first">
                <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                   
                    
                    <Nav.Item>
                     <Nav.Link eventKey="first">WEB DESIGN</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">PRODUCT DESIGN</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">RENDERING</Nav.Link>
                    </Nav.Item>
                  </Nav>
                   <Tab.Content>
                        <Tab.Pane eventKey="first">
                            <Row >
                                
                                    <ProjectsCard 
                                    description="Personal Portfolio"
                                    title= "Felipe Spena"
                                    img = {microfonoimage}
                                    />

                                <ProjectsCard 
                                    description="Building administrator company web"
                                    title= "AG Adminsitracion - Work in Progress"
                                    img = {agimage}
                                    />
                                    

                            </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                            <Row>
                                
                                    <ProjectsCard 
                                    description="Concept Design"
                                    title= "Reviva"
                                    img = {microfonoimage}
                                    />
                                    <ProjectsCard 
                                    description="CNC cuted Furniture"
                                    title= "Iremia"
                                    img = {muebleimage}
                                    />
                                    <ProjectsCard 
                                    description="Desk Furniture"
                                    title= "Ordesk"
                                    img = {ordeskimage}
                                    />

                            </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="third">
                            <Row>
                                
                                    <ProjectsCard 
                                    description="Everytime Watch Render"
                                    title= "Tissot"
                                    img = {relojimage}
                                    />
                                    <ProjectsCard 
                                    description="Iphone 7 plus Render"
                                    title= "Iphone"
                                    img = {iphoneimage}
                                    />
                                   

                            </Row>
                        </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </Col>
            </Row>
        </Container>
    </section>
)

} 
