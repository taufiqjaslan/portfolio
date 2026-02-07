import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";

import preventativeImg from "../assets/img/preventative.png";
import vmsImg from "../assets/img/vms.png";
import pmsImg from "../assets/img/pms.png";
import websiteImg from "../assets/img/website.png";
import patrolImg from "../assets/img/patrol.png";
import tmsImg from "../assets/img/tms.jpeg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Training Management System",
      description: "Laravel, REST APIs, MySQL, AWS Deployment",
      imgUrl: tmsImg,
    },
    {
      title: "Property Management System",
      description: "Laravel, Livewire, RESTful APIs, Postman, MySQL",
      imgUrl: pmsImg,
    },
    {
      title: "Visitor Management System",
      description: "Laravel, Livewire, RESTful APIs, Postman, MySQL, OCR Integration",
      imgUrl: vmsImg,
    },
    {
      title: "Visitor Management System",
      description: "Laravel, Livewire, RESTful APIs, Postman, MySQL",
      imgUrl: patrolImg,
    },
    {
      title: "Preventative Maintenance System",
      description: "Laravel, Livewire, Postman, MySQL",
      imgUrl: preventativeImg,
    },
    {
      title: "Responsive Website Development",
      description: "HTML, CSS, JavaScript, Bootstrap",
      imgUrl: websiteImg,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Portfolio & Experience</h2>
                <p>Software Developer with over 2 years of experience delivering high-performance Laravel applications, RESTful APIs, and scalable cloud solutions.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center flex-column flex-sm-row" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Major Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Work Experience</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Education</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <div className="experience-roadmap">
                        {/* Current Role */}
                        <div className="roadmap-item">
                          <div className="roadmap-dot active"></div>
                          <div className="roadmap-content">
                            <span className="roadmap-date">Sept 2024 - Present</span>
                            <h3>Software Developer (Full Time)</h3>
                            <h4>DSMR Group Pte Ltd - Remote </h4>
                            <ul>
                              <li>Engineered backend refinements achieving a 50% improvement in system response time.</li>
                              <li>Architected RESTful API integrations with third-party finance systems, maintaining 99.9% accuracy.</li>
                              <li>Automated data flows that reduced manual reconciliation labor by 40%.</li>
                            </ul>
                          </div>
                        </div>

                        {/* Previous Role */}
                        <div className="roadmap-item">
                          <div className="roadmap-dot"></div>
                          <div className="roadmap-content">
                            <span className="roadmap-date">Feb 2024 - Aug 2024</span>
                            <h3>Junior Software Developer (Full Time)</h3>
                            <h4>Huacomm Telecommunications Engineering (M) Sdn. Bhd.</h4>
                            <ul>
                              <li>Directed the development of an accounting module, delivering 90% of the system a month early.</li>
                              <li>Implemented high-performance RESTful APIs, increasing data retrieval speed by 30%.</li>
                              <li>Translated business requirements into technical specs with a 90% client satisfaction rate.</li>
                            </ul>
                          </div>
                        </div>

                        {/* Freelance */}
                        <div className="roadmap-item">
                          <div className="roadmap-dot"></div>
                          <div className="roadmap-content">
                            <span className="roadmap-date">Mar 2024 - Sept 2024</span>
                            <h3>Pixel Dynamic Technology (Freelance)</h3>
                            <h4>Self-Employed - Remote</h4>
                            <ul>
                              <li>Developed a responsive Laravel/Livewire system, improving data organization by 80%.</li>
                              <li>Enhanced UX and reduced manual tasks by 60% via role-based access control.</li>
                            </ul>
                          </div>
                        </div>

                        {/* Internship */}
                        <div className="roadmap-item">
                          <div className="roadmap-dot"></div>
                          <div className="roadmap-content">
                            <span className="roadmap-date">Aug 2023 - Jan 2024</span>
                            <h3>Software Developer (Internship)</h3>
                            <h4>Huacomm Telecommunications Engineering (M) Sdn. Bhd.</h4>
                            <ul>
                              <li>Maintained Laravel/Livewire apps, improving interface and functionality by 80%.</li>
                              <li>Collaborated with cross-functional teams for accounting software solutions.</li>
                              <li>Debugged production issues, providing 100% permanent solutions.</li>
                            </ul>
                          </div>
                        </div>

                        {/* Internship */}
                        <div className="roadmap-item">
                          <div className="roadmap-dot"></div>
                          <div className="roadmap-content">
                            <span className="roadmap-date">Sep 2020 - Feb 2021</span>
                            <h3>PHP Developer (Internship)</h3>
                            <h4>Tombark Technology Sdn. Bhd.</h4>
                            <ul>
                              <li>Developed a responsive internal HR system using PHP, improving data organization by 80%.</li>
                              <li>Collaborated with cross-functional teams to deliver high-quality software solutions and resolve critical system bugs.</li>
                              <li>Produced User Acceptance Testing (UAT) documentation and step-by-step user manuals, ensuring high software quality and user readiness.</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <div className="education-info text-center">
                        <h3>Bachelor of Computer Science (Software Engineering) Hons</h3>
                        <p>Universiti Malaysia Pahang Al-Sultan Abdullah | CGPA: 3.83/4.00</p>
                        <h3>Diploma of Computer Science</h3>
                        <p>Universiti Malaysia Pahang Al-Sultan Abdullah | CGPA: 3.63/4.00</p>
                      </div>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="Background"></img>
    </section>
  )
}