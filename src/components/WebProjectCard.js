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
  isDownloadable,
  haveModal
}) => {
  const [projectModal, setProjectModal] = useState(false)
  const processClick=()=>{
    if (haveModal){
      setProjectModal(true)
      return
    }
    if (category==="web_development" && link !== undefined){
      window.open(
        link,
        '_blank' // <- This is what makes it open in a new window.
      )
    }
  }
  return (
    <>
      {
        haveModal && (
          <ProjectModal
            projectModal={projectModal}
            setProjectModal={setProjectModal}
            title={title}
            description={description}
            explanation={explanation}
            imgUrl={imgUrl}
            videoUrl={videoUrl}
            link={link}
            isDownloadable={isDownloadable}
          />
        )
      }
      <Col size={12} sm={6} md={4}>
        <button
          target="_blank"
          rel="noreferrer"
          onClick={processClick}
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
  )
}