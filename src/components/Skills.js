import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"
import HTMLImage from "../assets/img/languagesIcons/HTML.png"
import ArduinoImage from "../assets/img/languagesIcons/Arduino.png";
import CImage from "../assets/img/languagesIcons/C.png";
import CPlusPlusImage from "../assets/img/languagesIcons/CPlusPlus.png";
import CSharpImage from "../assets/img/languagesIcons/CSharp.png";
import CSSImage from "../assets/img/languagesIcons/CSS.png";
import DjangoImage from "../assets/img/languagesIcons/Django.png";
import ExpressImage from "../assets/img/languagesIcons/Express.png";
import FirebaseImage from "../assets/img/languagesIcons/Firebase.png";
import FlaskImage from "../assets/img/languagesIcons/Flask.png";
import GoogleMapsImage from "../assets/img/languagesIcons/GoogleMaps.png";
import JavascriptImage from "../assets/img/languagesIcons/Javascript.png";
import MongoDBImage from "../assets/img/languagesIcons/MongoDB.png";
import MySQLImage from "../assets/img/languagesIcons/MySQL.png";
import NodejsImage from "../assets/img/languagesIcons/Nodejs.png";
import OpenCVImage from "../assets/img/languagesIcons/OpenCV.png";
import PythonImage from "../assets/img/languagesIcons/Python.png";
import ReactImage from "../assets/img/languagesIcons/React.png";
import SQLiteImage from "../assets/img/languagesIcons/SQLite.png";
import YoloImage from "../assets/img/languagesIcons/Yolo.png";
import MediapipeImage from "../assets/img/languagesIcons/Mediapipe.png";

export const Skills = () => {
  const iconsArray = [
    {
      image: ArduinoImage,
      name: "Arduino"
    },
    {
      image: CImage,
      name: "C"
    },
    {
      image: CPlusPlusImage,
      name: "C++"
    },
    {
      image: CSharpImage,
      name: "C#"
    },
    {
      image: DjangoImage,
      name: "Django"
    },
    {
      image: ExpressImage,
      name: "Express"
    },
    {
      image: FlaskImage,
      name: "Flask"
    },
    {
      image: GoogleMapsImage,
      name: "Google Maps API"
    },
    {
      image: HTMLImage,
      name: "HTML"
    },
    {
      image: CSSImage,
      name: "CSS"
    },
    {
      image: JavascriptImage,
      name: "Javascript"
    },
    {
      image: ReactImage,
      name: "React"
    },
    {
      image: NodejsImage,
      name: "Node.js"
    },
    {
      image: FirebaseImage,
      name: "Firebase"
    },
    {
      image: SQLiteImage,
      name: "SQLite"
    },
    {
      image: MongoDBImage,
      name: "MongoDB"
    },
    {
      image: MySQLImage,
      name: "MySQL"
    },
    {
      image: PythonImage,
      name: "Python"
    },
    {
      image: OpenCVImage,
      name: "OpenCV"
    },
    {
      image: YoloImage,
      name: "Yolo"
    },
    {
      image: MediapipeImage,
      name: "Mediapipe"
    }
];

  const responsiveSkills = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  }
  const responsiveLanguages = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 10
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 10
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 7
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 6
    }
};

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Habilidades</h2>
                        <p>Sou desenvolvedor Fullstack!<br></br>Isso significa que você pode contar comigo para desenvolver o Frontend e o Backend de sua aplicação e para hospedá-la.</p>
                        <Carousel
                          responsive={responsiveLanguages}
                          infinite={true}
                          autoPlay={true}
                          autoPlaySpeed={2000}
                          className="owl-carousel mb-5"
                        >
                          {iconsArray.map((icon, index) => (
                            <div className="item" key={index}>
                              <img title={icon.name} className="languageIcon" src={icon.image} alt={icon.name} />
                            </div>
                          ))}
                        </Carousel>
                        <Carousel responsive={responsiveSkills} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={meter1} alt="Web Development" />
                                <h5>Desenvolvimento fullstack</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Brand Identity" />
                                <h5>Identidade de marca</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Logo Design" />
                                <h5>Design de logo</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="img" />
    </section>
  )
}
