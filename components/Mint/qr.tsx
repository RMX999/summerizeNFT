import { Modal, useModal, Button, Text } from "@nextui-org/react";
import Loader from './Loader'

export default  function QR() {
  const { setVisible, bindings } = useModal(false);


  return (
    <div>
      <button onClick={() => setVisible(true)}>
        Get QR
      </button>
      <Modal
        scroll
        width="700px"
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
        {...bindings}
      >
        <Modal.Header>
          <Text id="modal-title" size={18}>
            Generating QR Code
          </Text>
        </Modal.Header>
        <Modal.Body>
          <Text id="modal-description">
            <Loader/>
          </Text>
        </Modal.Body>
        <Modal.Footer>
          <Button auto flat color="error" onClick={() => setVisible(false)}>
            Close
          </Button>
          <Button auto onClick={() => setVisible(false)}>
            Share
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}