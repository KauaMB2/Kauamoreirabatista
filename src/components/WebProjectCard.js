import { Col } from "react-bootstrap";
import { useState } from "react";
import { ProjectModal } from "./Modals/ProjectModal";

export const WebProjectCard = ({
  title,
  description,
  explanation,
  imgUrl,
  link,
  videoUrl,
  category,
}) => {
  const [projectModal, setProjectModal] = useState(false);
  if (category === "web_development") {
    return (
      <>
        <Col size={12} sm={6} md={4}>
          <a target="_blank" rel="noreferrer" href={link}>
            <div className="proj-imgbx">
              <img src={imgUrl} alt={title} />
              <div className="proj-txtx">
                <h4>{title}</h4>
                <span>{description}</span>
              </div>
            </div>
          </a>
        </Col>
      </>
    );
  } else if (category === "computer_vision") {
    return (
      <>
        <ProjectModal
          projectModal={projectModal}
          setProjectModal={setProjectModal}
          title={title}
          description={description}
          explanation={explanation}
          imgUrl={imgUrl}
          videoUrl={videoUrl}
          link={link}
        />
        <Col size={12} sm={6} md={4}>
          <button
            target="_blank"
            rel="noreferrer"
            onClick={() => {
              setProjectModal(true);
            }}
          >
            <div className="proj-imgbx">
              <img src={imgUrl} alt={title} />
              <div className="proj-txtx">
                <h4>{title}</h4>
                <span>{description}</span>
              </div>
            </div>
          </button>
        </Col>
      </>
    );
  } else if (category === "GUI") {
    return (
      <>
        <ProjectModal
          projectModal={projectModal}
          setProjectModal={setProjectModal}
          title={title}
          description={description}
          explanation={explanation}
          imgUrl={imgUrl}
          videoUrl={videoUrl}
          link={link}
        />
        <Col size={12} sm={6} md={4}>
          <button
            target="_blank"
            rel="noreferrer"
            onClick={() => {
              setProjectModal(true);
            }}
          >
            <div className="proj-imgbx">
              <img src={imgUrl} alt={title} />
              <div className="proj-txtx">
                <h4>{title}</h4>
                <span>{description}</span>
              </div>
            </div>
          </button>
        </Col>
      </>
    );
  }
};
