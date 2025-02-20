import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function ModalComponent({ children, show, handleClose, handleShow, title }) {
  return (
    <>
      <div className="d-flex justify-content-between">
        <h1>Atividades</h1>
        <Button variant="primary" onClick={handleShow}>
          Adicionar
        </Button>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body> {children} </Modal.Body>
      </Modal>
    </>
  );
}

export default ModalComponent;
