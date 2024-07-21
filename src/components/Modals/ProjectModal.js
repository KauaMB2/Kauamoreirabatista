import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export function ProjectModal({
  projectModal,
  setProjectModal,
  title,
  explanation,
  videoUrl,
  link,
  isDownloadable
}) {
  return (
    <Modal className="projectModal" show={projectModal} onHide={() => { setProjectModal(false)}}>
      <Modal.Header className="modalHeader" closeButton>
        <Modal.Title className="modalTitle">{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body className="modalBackground">
        <div className="wrapper">
          <div className="h_iframe">
            <iframe title={title} height='465px' width='470px' src={videoUrl}></iframe>
          </div>
        </div>
        <p dangerouslySetInnerHTML={{ __html: explanation }} />
        {
          isDownloadable && <p>Para baixar no seu Windows e utilizar a aplicação, basta clicar no botão <span className="badge text-bg-primary">Baixar!</span> abaixo,descompactar o arquivo .zip e executar o arquivo .exe. Acima, há umbreve vídeo explicando como baixar e utilizar a aplicação.</p>
        }
      </Modal.Body>
      <Modal.Footer className="modalFooter">
        <Button variant="secondary" onClick={() => {setProjectModal(false)}}>Sair</Button>
        {
          isDownloadable && <Button variant="primary" href={link} target="_blank">Baixar!</Button>
        }
      </Modal.Footer>
    </Modal>
  );
}
