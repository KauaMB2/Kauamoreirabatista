import { Col } from "react-bootstrap";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { ProjectModal } from "./Modals/ProjectModal";

export const WebProjectCard = ({
  projectKey,
  category,
  project, 
  imgUrl,
  link,
  videoUrl,
  isDownloadable,
  haveModal
}) => {
  const { t } = useTranslation();
  const [projectModal, setProjectModal] = useState(false);
  const resolvedKey = projectKey ?? (project && (project.key ?? project.title ?? project.name)) ?? "";
  const safeKey = String(resolvedKey).replace(/\./g, "_");
  const basePath = resolvedKey ? `projects.${category}.${safeKey}` : null;
  const title = basePath ? t(`${basePath}.title`) : (project?.title ?? "No title");
  const description = basePath ? t(`${basePath}.description`) : (project?.description ?? "");
  const explanation = basePath ? t(`${basePath}.explanation`, { defaultValue: "" }) : (project?.explanation ?? "");
  const processClick = () => {
    if (haveModal) {
      setProjectModal(true);
      return;
    }

    if (category === "web_development" && link) {
      window.open(link, "_blank");
    }
  };

  return (
    <>
      {haveModal && (
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
      )}

      <Col size={12} sm={6} md={4}>
        <button onClick={processClick}>
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
};
