import emailjs from "@emailjs/browser";
import React, { useRef, useState } from "react";
import { Container, Row, Col} from "react-bootstrap";
import contact from '../multimedia/contact.svg'
import AOS from 'aos';
import 'aos/dist/aos.css';




export const Contact = () => {
  const form = useRef();
  const [from_name, setfrom_name] = useState("");
  const [to_email, setto_email] = useState("");
  const [message, setmessage] = useState("");

  
  AOS.init();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ej8rt0a",
        "template_gc3jc3l",
        form.current,
        "lSBFbKd2onGiTOHet"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    setfrom_name("");
    setto_email("");
    setmessage("");
  };

  return (
    <Container>
      <Row className="align-items-center contact-container">
        
        <Col  xd={12} md={6} xl={6}>
          <section className="contact-left-col" data-aos="flip-left" data-aos-duration="2000">
          <div className="form-header">
            <h5>
              Have you a new idea? Or maybe an old project you want to update? Just write me what it is about and I'll be in touch as soon as possible!
            </h5>
          </div>
          <form ref={form} className="form" onSubmit={sendEmail}>
            <div className="name-div">
            <label > Name </label>

              <input
              className="name-label"
                type="text"
                name="from_name"
                id="first_name"
                placeholder="Name"
                
                onChange={(event) => setfrom_name(event.target.value)}
                value={from_name}
              />
            </div>
            <div className="form-item">
              <label > Email </label>
              <input
                className="name-label"
                type="email"
                name="to_email"
                id="first_name"
                placeholder="Email"
                onChange={(event) => setto_email(event.target.value)}
                value={to_email}
              />
            </div>
            <div >
            <label > Message </label>


              <textarea 
                className="message-label"
                type="text"
                name="message"
                id="message"
                placeholder="Describe yourself here..."
                onChange={(event) => setmessage(event.target.value)}
                value={message}>

              </textarea>
              
              
            </div>
            
            
          
            <input type="submit" className="form-button"  value="Send" />
          </form>
          </section>
          
        </Col>
        <Col xd={12} md={6} xl={6}><img className="contact-img" src={contact}
        alt="" />
        </Col>
      </Row>
    </Container>
  );
};
