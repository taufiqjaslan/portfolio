import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import { Envelope, Phone, Linkedin, GeoAlt, ArrowRight } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Contact = () => {
  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us"/>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>Get In Touch</h2>
                <p>I am currently open to new opportunities and collaborations. Feel free to reach out via any of the platforms below!</p>
                
                <div className="contact-info-wrapper">
                  <div className="contact-info-item">
                    <div className="icon-box"><Envelope /></div>
                    <div>
                      <p>Email</p>
                      <a href="mailto:muhd.taufiq.jaslan@gmail.com">muhd.taufiq.jaslan@gmail.com</a>
                    </div>
                  </div>

                  <div className="contact-info-item">
                    <div className="icon-box"><Phone /></div>
                    <div>
                      <p>Phone</p>
                      <a href="tel:+60174741431">+6017-474 1431</a>
                    </div>
                  </div>

                  <div className="contact-info-item">
                    <div className="icon-box"><Linkedin /></div>
                    <div>
                      <p>LinkedIn</p>
                      <a href="https://www.linkedin.com/in/taufiqjaslan" target="_blank" rel="noreferrer">linkedin.com/in/taufiqjaslan</a>
                    </div>
                  </div>

                  <div className="contact-info-item">
                    <div className="icon-box"><GeoAlt /></div>
                    <div>
                      <p>Location</p>
                      <span>Kuala Lumpur, Malaysia (Remote Available)</span>
                    </div>
                  </div>
                </div>

                <button className="vvd" onClick={() => window.location.href = 'mailto:muhd.taufiq.jaslan@gmail.com'}>
                  <span>Send a Quick Email <ArrowRight size={25} /></span>
                </button>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}