
import { Col } from "react-bootstrap"
export const ProjectsCard = (props) => {

    return (
<Col xl={4} xd={6} xs={12}>
        <div className="proj-imgbx">
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