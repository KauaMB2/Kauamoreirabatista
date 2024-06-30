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
                  <p>Olá, meu nome é Kauã, tenho 19 anos e sou completamente apaixonado por tecnologia, inovação e desafios. Sou proativo e curioso por natureza, e garanto que sempre procuro alcançar o protagonismo no que faço, com o intuito de cada dia ser melhor do que um dia já fui. Resumiria minha vida em uma frase: "Uma tentativa constante de ser a melhor versão de mim mesmo".<br/></p>
                  <p>Minha jornada com a tecnologia começou em 2019, quando eu tinha 14 anos e estava no fim do ensino fundamental. Decidi me inscrever para participar do programa Inatel Casa Viva, que ensina adolescentes do ensino fundamental alguns conceitos básicos de informática, microinformática, eletrônica e programação no período vespertino. Durante o ano de 2019, meus orientadores, notando minha facilidade em aprender conceitos abstratos, me escolheram, entre quase 80 alunos, para executar algumas tarefas mais complexas. Por conta disso, desenvolvi, em equipe, um carrinho de controle remoto que foi apresentado por mim na Feira Tecnológica do Inatel. Também representei o programa Inatel Casa Viva em entrevistas para a Rádio e TV Cultura e fui<a target="_blank" rel="noreferrer" href="https://www.youtube.com/watch?v=pmpUqbbDrLU"> orador de formatura da minha turma</a>.<br/></p>
                  <p>No intuito de continuar meu aprendizado na área de tecnologia, em 2020 iniciei o ensino médio na renomadíssima instituição jesuíta de ensino ETE FMC (Escola Técnica de Eletrônica Francisco Moreira da Costa), a 1ª escola técnica de eletrônica da América Latina e a sétima do mundo. Lá, pude estudar em período integral, fazendo o ensino médio concomitantemente com um curso técnico em eletrônica com ênfase em automação industrial. Durante os três anos, participei de diversas atividades extracurriculares e ganhei vários prêmios. Em 2020, continuei desenvolvendo o <a target="_blank" rel="noreferrer" href="https://www.youtube.com/watch?v=oc6nMRU68TE">carrinho de controle remoto</a> que havia iniciado em 2019 e o apresentei na Feira de Projetos da ETE, onde <a target="_blank" rel="noreferrer" href="https://www.youtube.com/watch?v=X_3d_LCRD_Q">fiquei em 1º lugar</a>. Em 2021, desenvolvi o <a target="_blank" rel="noreferrer" href="https://www.youtube.com/watch?v=TFDpEObSw-Q">VSMeter</a>, uma roupa que captava os sinais vitais de um paciente e os enviava para o hospital, permitindo o monitoramento em tempo real das condições de saúde do usuário. <a target="_blank" rel="noreferrer" href="https://www.youtube.com/watch?v=MLMGdzdtp64">Esse projeto também ficou em 1º lugar em 2021</a>. Em 2022, desenvolvi o <a target="_blank" rel="noreferrer" href="https://www.youtube.com/watch?v=znH3ytHdZ10">CEPEG(Controle de Equipamentos de Proteção nas Empresas em Geral)</a>, um projeto que permitia, por meio de uma câmera conectada a um computador, verificar, utilizando inteligência artificial e visão computacional, se os funcionários de uma empresa estavam utilizando os equipamentos de proteção de forma adequada. Novamente, fiquei em 1º lugar nas apresentações e recebi uma bonificação da prefeitura municipal para a continuação do projeto.<br/></p>
                  <p>Em 2023, ingressei na faculdade cursando Engenharia de Software no Inatel e desenvolvi o <a target="_blank" rel="noreferrer" href="https://infrareport-react-2023.vercel.app">Infrareport</a>, um software web que permitia aos cidadãos de qualquer cidade do Brasil reportarem problemas de infraestrutura. Esses problemas eram enviados diretamente para a prefeitura, que tratava as informações recebidas para melhor atender os moradores. Novamente, fiquei em 1º lugar nas apresentações. Além disso, neste ano servi o Exército e, ao final do ano de instrução, por conta da minha disciplina, recebi uma <a target="_blank" rel="noreferrer" href="https://drive.google.com/file/d/18f447w-dHpvNFUOKxYDxNLxqbNJ1wxIA/view?usp=sharing">Carta de recomendação</a> e um <a target="_blank" rel="noreferrer" href="https://drive.google.com/file/d/18ZYovGQoaBKZ6SqiN6R6DUv5nFOBaah_/view?usp=sharing">diploma de honra ao mérito</a> assinado por meu superior, comprovando que, sempre que me é entregue uma missão, vou até o final e a faço muito bem.<br/></p>
                  <p>Durante esse tempo, desenvolvi projetos em várias áreas, utilizando tecnologias como HTML, CSS, JavaScript, Node.js, Python, Arduino, C++, C#, Express, Flask, Django, Django Rest Framework, Bootstrap, React, SQLite, MySQL, MongoDB, Firebase, IoT, microcontroladores, e visão computacional (com OpenCV, Mediapipe, YoloV8). Além disso, atuei prestando suporte técnico para equipamentos de segurança eletrônica, como centrais de alarme, PABXs, porteiros eletrônicos, vídeo porteiros, sensores, câmeras, DVRs, sistemas de controle de acesso e outras tecnologias relacionadas à área de segurança eletrônica.<br/></p>
                  <p>Espero que possamos trabalhar juntos e que eu possa contribuir com a sua empresa!<br/></p>
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
