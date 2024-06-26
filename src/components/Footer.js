import { Container, Row, Col } from "react-bootstrap"
import logo from "../assets/img/logo.png"
import navIcon1 from "../assets/img/nav-icon1.svg"
import navIcon2 from "../assets/img/nav-icon2.svg"
import navIcon3 from "../assets/img/nav-icon3.svg"
import navIcon4 from '../assets/img/nav-icon4.svg'

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col className="mt-3" size={12} sm={6}>
            <a href="/"><img className="logoDiv" src={logo} alt="Logo" /></a>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end mt-5">
            <div className="social-icon">
                <a target="_blank" href="https://www.linkedin.com/in/kauamb2/"><img src={navIcon1} alt="" /></a>
                <a target="_blank"href="https://wa.me/5535984714567"><img src={navIcon2} alt="" /></a>
                <a target="_blank" href="https://www.instagram.com/kaua_moreira_batista/"><img src={navIcon3} alt="" /></a>
                <a target="_blank" href="https://github.com/KauaMB2"><img src={navIcon4} alt="" /></a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
