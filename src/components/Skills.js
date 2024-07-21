import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"
import { iconsArray } from "./JSON/languageIcons";
import { responsiveSkills } from "./JSON/responsiveSkills"
import { skillsArray } from "./JSON/skillsData"
import { responsiveLanguages } from "./JSON/responsiveLanguages"

export const Skills = () => {
  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Habilidades</h2>
                        <p>Além de desenvolver aplicações Desktop e projetos relacionados à visão computacional, sou desenvolvedor Fullstack!<br></br>Isso significa que você pode contar comigo para desenvolver o Frontend e o Backend de sua aplicação e para hospedá-la.</p>
                        <Carousel
                          responsive={responsiveLanguages}
                          infinite={true}
                          autoPlay={true}
                          autoPlaySpeed={1000}
                          className="owl-carousel mb-5"
                        >
                          {iconsArray.map((icon, index) => (
                            <div className="item" key={index}>
                              <img title={icon.name} className="languageIcon" src={icon.image} alt={icon.name} />
                            </div>
                          ))}
                        </Carousel>
                        <Carousel responsive={responsiveSkills} infinite={true} className="owl-carousel owl-theme skill-slider">
                          {skillsArray.map((skill, index) => (
                            <div className="item">
                              <img src={skill["meter"]} alt={skill["text"]} />
                              <h5>{skill["text"]}</h5>
                            </div>
                          ))}
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="img" />
    </section>
  )
}
