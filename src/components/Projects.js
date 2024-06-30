import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import infrareportImage from "../assets/img/infrareportImage.png";
import infrareportapiImage from "../assets/img/infrareportapiImage.png";
import studybuddyapiImage from "../assets/img/studybuddyapiImage.png";
import studybuddyImage from "../assets/img/studybuddyImage.png";
import teamallocationImage from "../assets/img/teamallocationImage.png";
import savetheplanetImage from "../assets/img/savetheplanetImage.png";
import pongImage from "../assets/img/pongImage.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Studybuddy",
      description: "Frontend & Design",
      section: 1,
      imgUrl: studybuddyImage,
      link: "https://kauamoreira.pythonanywhere.com/home/"
    },
    {
      title: "Studybuddy API",
      description: "Backend & REST API",
      section: 1,
      imgUrl: studybuddyapiImage,
      link: "https://kauamoreira.pythonanywhere.com/api/"
    },
    {
      title: "Infrareport",
      description: "Frontend & Design",
      section: 1,
      imgUrl: infrareportImage,
      link: "https://infrareport-react-2023.vercel.app"
    },
    {
      title: "Infrareport API",
      description: "Backend & REST API",
      section: 2,
      imgUrl: infrareportapiImage,
      link: "https://infrareportrestapi.pythonanywhere.com"
    },
    {
      title: "Team allocation",
      description: "Frontend & Empresas",
      section: 2,
      imgUrl: teamallocationImage,
      link: "https://team-allocation-frontend.vercel.app"
    },
    {
      title: "Save the planet",
      description: "Jogo & Entretenimento",
      section: 2,
      imgUrl: savetheplanetImage,
      link: "https://savetheplanetkaua.netlify.app"
    },
    {
      title: "PONG",
      description: "Jogo & Entretenimento",
      section: 3,
      imgUrl: pongImage,
      link: "https://pongkaua.netlify.app"
    }
  ]

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projetos</h2>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
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
                          projects.map((project, index) => {
                            if(project.section===1){
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                  />
                              )
                            }else{
                              return false
                            }
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <Row>
                        {
                          projects.map((project, index) => {
                            if(project.section===2){
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                  />
                              )
                            }else{
                              return false
                            }
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    <Row>
                        {
                          projects.map((project, index) => {
                            if(project.section===3){
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                  />
                              )
                            }else{
                              return false
                            }
                          })
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
