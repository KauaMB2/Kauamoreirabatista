import { Arrow90degLeft } from "react-bootstrap-icons";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export function ProjectModal({
  projectModal,
  setProjectModal,
  title,
  explanation,
  videoUrl,
  link,
  imgUrl,
  isDownloadable
}) {
  return (
    <Modal className="projectModal" show={projectModal} onHide={() => { setProjectModal(false)}}>
      <Modal.Header className="modalHeader" closeButton>
        <Modal.Title className="modalTitle text-white">{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body className="modalBackground">
        <div className="wrapper">
          <div className="h_iframe">
            {videoUrl ? <iframe allow="fullscreen;" title={title} height='465px' width='470px' src={videoUrl} allowFullScreen></iframe> : <img src={imgUrl} alt={title} />}
          </div>
        </div>
        <p className="text-white" dangerouslySetInnerHTML={{ __html: explanation }} />
      </Modal.Body>
      <Modal.Footer className="modalFooter">
        <Button variant="secondary" onClick={() => {setProjectModal(false)}}><Arrow90degLeft/></Button>
        {
          isDownloadable && <Button variant="primary" href={link} target="_blank">Download!</Button>
        }
      </Modal.Footer>
    </Modal>
  );
}
