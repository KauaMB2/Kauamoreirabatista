import { Container, Row, Col } from "react-bootstrap"
import logo from "../assets/img/logo.png"
import navIcon1 from "../assets/img/nav-icon1.svg"
import navIcon2 from "../assets/img/nav-icon2.svg"
import navIcon3 from "../assets/img/nav-icon3.svg"
import navIcon4 from '../assets/img/nav-icon4.svg'
import navIcon5 from '../assets/img/nav-icon5.svg'

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
        <Col size={12} sm={6} className="d-flex justify-content-start mt-5">
          <div className="social-icon-footer">
            <a className="social-link" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/kauamb2/">
              <img src={navIcon1} alt="LinkedIn" />
            </a>
            <a className="social-link" target="_blank" rel="noreferrer" href="https://wa.me/5535984714567">
              <img src={navIcon2} alt="WhatsApp" />
            </a>
            <a className="social-link" target="_blank" rel="noreferrer" href="https://www.instagram.com/kaua_moreira_batista/">
              <img src={navIcon3} alt="Instagram" />
            </a>
            <a className="social-link" target="_blank" rel="noreferrer" href="https://github.com/KauaMB2/">
              <img src={navIcon4} alt="GitHub" />
            </a>
            <button className="social-link">
              <img src={navIcon5} alt="Email" />
            </button>
          </div>
          <div className="social-icon-footer">
            <a className="social-link-text" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/kauamb2/">
              <p>Kauã Moreira Batista</p>
            </a>
            <a className="social-link-text" target="_blank" rel="noreferrer" href="https://wa.me/5535984714567">
              <p>35984714567</p>
            </a>
            <a className="social-link-text" target="_blank" rel="noreferrer" href="https://www.instagram.com/kaua_moreira_batista/">
              <p>@kaua_moreira_batista</p>
            </a>
            <a className="social-link-text" target="_blank" rel="noreferrer" href="https://github.com/KauaMB2/">
              <p>KauaMB2</p>
            </a>
            <div className="social-link-text" target="_blank" rel="noreferrer">
              <p>i.kauamoreirabatista@gmail.com</p>
            </div>
          </div>
          </Col>
          <Col className="mt-5 logoFooter" size={12} sm={6}>
            <a className="d-flex justify-content-end" href="/"><img className="logoDiv" src={logo} alt="Logo" /></a>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
