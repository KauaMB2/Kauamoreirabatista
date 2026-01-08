import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import "animate.css";
import TrackVisibility from "react-on-screen";
import { useTranslation } from 'react-i18next';

export const Banner = () => {
  const { t } = useTranslation();
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2500;

  // Array de frases rotativas (traduzido)
  const toRotate = t('banner.rotating', { returnObjects: true }) || [];

  useEffect(() => {
    if (!toRotate.length) return;

    const ticker = setInterval(() => {
      tick();
    }, delta);

    return () => clearInterval(ticker);
  }, [text, delta, loopNum, isDeleting, toRotate]);

  const tick = () => {
    if (!toRotate.length) return;

    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum((prev) => prev + 1);
      setDelta(100);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              <div className="animate__animated animate__fadeIn">
                <span className="tagline">{t('common.welcome')}</span>
                <h1 id="rotatedTxt">
                  {t('banner.title')}
                  <span className="txt-rotate">
                    <span className="wrap"> {text}</span>
                  </span>
                </h1>
              </div>
            </TrackVisibility>
          </Col>
          <Col className="headerImg" xs={12} md={6} xl={5}>
            <TrackVisibility>
              <div className="animate__animated animate__zoomIn">
                <img src={headerImg} alt="Header Img" />
              </div>
            </TrackVisibility>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row className="align-items-center">
          <TrackVisibility>
            <div className="wrapper">
              <div className="h_iframe">
                <iframe
                  title="Vídeo de apresentação"
                  height="465px"
                  width="470px"
                  src={t('banner.videoUrl')}
                  allow="fullscreen"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            <p>{t('banner.bio')}</p>
            <p>{t('banner.callToAction')}</p>
          </TrackVisibility>

          <div id="curriculumDiv">
            <button
              className="gradient-button"
              id="curriculumButton"
              onClick={() =>
                window.open(
                  `${t('banner.resume')}`,
                  '_blank'
                )
              }
            >
              {t('common.curriculum')}
            </button>
          </div>
        </Row>
      </Container>
    </section>
  );
};