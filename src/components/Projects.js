import { Container, Row, Col, Tab, Nav } from "react-bootstrap"
import { useState } from "react"
import { WebProjectCard } from "./WebProjectCard"
import colorSharp2 from "../assets/img/color-sharp2.png"
import 'animate.css'
import TrackVisibility from 'react-on-screen'
import { projects } from "./JSON/projects"

export const Projects = () => {
  const [tab, setTab] = useState('first')
  const [category, setCategory] = useState('web_development')

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projetos</h2>
                <Tab.Container id="categories-tabs" defaultActiveKey={category} onSelect={(eventKey) => setCategory(eventKey)}>
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-categories">
                      <Nav.Item>
                        <Nav.Link eventKey="web_development">Desenvolvimento<br/>web</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="computer_vision">I.A. e Visão<br/>Computacional</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="GUI">Interfaces<br/>gráficas</Nav.Link>
                      </Nav.Item>
                    </Nav>
                  </Tab.Container>
                <Tab.Container id="projects-tabs" defaultActiveKey={tab} onSelect={(eventKey) => setTab(eventKey)}>
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tabs">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Aba 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Aba 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Aba 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects[category]["first"].length>0 ? projects[category]["first"].map((project, index) => {
                            return (
                              <WebProjectCard
                                key={index}
                                {...project}
                                category={category}
                                />
                            )
                        }):
                        <h2>Em breve</h2>
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <Row>
                        {
                          projects[category]["second"].length>0 ? projects[category]["second"].map((project, index) => {
                            return (
                              <WebProjectCard
                                key={index}
                                {...project}
                                category={category}
                                />
                            )
                        }):
                        <h2>Em breve</h2>
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    <Row>
                        {
                          projects[category]["third"].length>0 ? projects[category]["third"].map((project, index) => {
                            return (
                              <WebProjectCard
                                key={index}
                                {...project}
                                category={category}
                                />
                            )
                        }):
                        <h2>Em breve</h2>
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" alt="img" src={colorSharp2}></img>
    </section>
  )
}
