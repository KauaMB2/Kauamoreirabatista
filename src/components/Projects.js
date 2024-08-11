import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { useState } from "react";
import { WebProjectCard } from "./WebProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { projects } from "./JSON/projects";

export const Projects = () => {
  const [tab, setTab] = useState(1);
  const [category, setCategory] = useState('web_development');
  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
                <div className="animate__animated animate__fadeIn">
                  <h2>Projetos</h2>
                  <Tab.Container id="categories-tabs" defaultActiveKey={category} onSelect={(eventKey) => setCategory(eventKey)}>
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-categories">
                      <Nav.Item class="nav-item-categories">
                        <Nav.Link className="pill-categories" eventKey="web_development">Frontend e <br />Backend</Nav.Link>
                      </Nav.Item>
                      <Nav.Item class="nav-item-categories">
                        <Nav.Link className="pill-categories" eventKey="computer_vision">I.A. e Visão<br />Computacional</Nav.Link>
                      </Nav.Item>
                      <Nav.Item class="nav-item-categories">
                        <Nav.Link className="pill-categories" eventKey="mobile">Aplicações<br />Mobile</Nav.Link>
                      </Nav.Item>
                      <Nav.Item class="nav-item-categories">
                        <Nav.Link className="pill-categories" eventKey="eletronic">Eletrônica e <br />IoT</Nav.Link>
                      </Nav.Item>
                      <Nav.Item class="nav-item-categories">
                        <Nav.Link className="pill-categories" eventKey="GUI">Aplicações<br />Desktop</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content>
                      {projects.categories.map((category) => (
                        <Tab.Pane eventKey={category} key={category}>
                          <Tab.Container id="projects-tabs" defaultActiveKey={tab} onSelect={(eventKey) => setTab(eventKey)}>
                            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tabs">
                              {projects.divisions.map((division) => (
                                <Nav.Item key={division}>
                                  <Nav.Link className="pill-tabs" eventKey={division}>Aba {division}</Nav.Link>
                                </Nav.Item>
                              ))}
                            </Nav>
                            <Tab.Content id="slideInUp" className="animate__animated animate__slideInUp">
                              {projects.divisions.map((division) => (
                                <Tab.Pane eventKey={division} key={division}>
                                  <Row>
                                    {projects[category][division].length > 0 ? (
                                      projects[category][division].map((project, index) => (
                                        <WebProjectCard
                                          key={index}
                                          {...project}
                                          category={category}
                                        />
                                      ))
                                    ) : (
                                      <h2>Em breve</h2>
                                    )}
                                  </Row>
                                </Tab.Pane>
                              ))}
                            </Tab.Content>
                          </Tab.Container>
                        </Tab.Pane>
                      ))}
                    </Tab.Content>
                  </Tab.Container>
                </div>
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" alt="img" src={colorSharp2}></img>
    </section>
  )
}
