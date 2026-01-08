import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"
import { iconsArray } from "./JSON/languageIcons";
import { responsiveLanguages } from "./JSON/responsiveLanguages"
import { useTranslation } from 'react-i18next';

export const Skills = () => {
  const { t } = useTranslation();
  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>{t('skills.title')}</h2>
                        <p>{t('skills.description')}</p>
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
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="img" />
    </section>
  )
}
