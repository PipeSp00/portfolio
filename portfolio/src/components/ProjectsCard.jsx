
import { Col } from "react-bootstrap"
import AOS from 'aos';
import 'aos/dist/aos.css';

export const ProjectsCard = (props) => {

    AOS.init();
    return (
<Col xl={4} xd={6} xs={4}>
        <div  data-aos="zoom-in-down" className="proj-imgbx">
            <img src={props.img} alt="" />
            
            <div className="proj-txtx">
                <h4> 
                    {props.title}
                </h4>
                <span>
                    {props.description}
                </span>
                
            </div>
        </div>
    </Col>
    )
    
}