import { useState, useEffect } from "react"
import { Container, Row, Col } from "react-bootstrap"
import headerImg from "../assets/img/header-img.svg"
import 'animate.css'
import TrackVisibility from 'react-on-screen'

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [text, setText] = useState('')
  const [delta, setDelta] = useState(300 - Math.random() * 100)
  const toRotate = [ "Sou Web Developer.", "Sou Web Designer.", "Sou UI/UX Designer.", "Tenho habilidades em Visão Computacional.", "Tenho experiência em Desenvolvimento Backend.", "Tenho conhecimentos em Bancos de Dados."]
  const period = 2500

  useEffect(() => {
    let ticker = setInterval(() => {
      tick()
    }, delta)
    return () => { clearInterval(ticker) }
  })

  const tick = () => {
    let i = loopNum % toRotate.length
    let fullText = toRotate[i]
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1)

    setText(updatedText)

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2)
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true)
      setDelta(period)
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false)
      setLoopNum(loopNum + 1)
      setDelta(100)
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">Bem vindo ao meu Portfólio</span>
                <h1 id="rotatedTxt">Olá! Meu nome é Kauã. <span className="txt-rotate" dataPeriod="1000"><span className="wrap">{text}</span></span></h1>
                  
              </div>}
            </TrackVisibility>
          </Col>
          <Col className="headerImg" xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row className="aligh-items-center">
            <TrackVisibility>
                  <iframe title="Apresentação Pessoal" id="videoDiv" width="100%" height="315"src="https://www.youtube.com/embed/Yri1QBEo8Fs" allowfullscreen></iframe>
                  <p>Olá, meu nome é Kauã, tenho 19 anos, curso Engenharia de Software no Inatel e sou completamente apaixonado por tecnologia, inovação e desafios. Sou proativo e curioso por natureza, e garanto que sempre procuro alcançar o protagonismo no que faço, com o intuito de cada dia ser melhor do que um dia já fui. Resumiria minha vida em uma frase: "Uma tentativa constante de ser a melhor versão de mim mesmo".<br/></p>
                  <p>Se você está procurando alguém comprometido, criativo e focado em entregar resultados de qualidade, eu estou à disposição para colaborar em seus projetos. Vamos construir algo incrível juntos! Entre em contato comigo através dos meus canais de comunicação. Até mais!</p>
            </TrackVisibility>
        </Row>
      </Container>
    </section>
  )
}
