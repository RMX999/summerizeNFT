import { Modal, useModal, Button, Text } from "@nextui-org/react";
import Loader from "./Loader";
import {
  TelegramShareButton,
  TelegramIcon,
  TwitterShareButton,
  TwitterIcon,
  ViberShareButton,
  ViberIcon,
  WhatsappShareButton,
  WhatsappIcon,
  RedditShareButton,
  RedditIcon,
} from "next-share";

export default function QR() {
  const { setVisible, bindings } = useModal(false);

  return (
    <div>
      <button onClick={() => setVisible(true)}>Get QR</button>
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
            <Loader />
          </Text>
        </Modal.Body>
        <Modal.Footer>
          <Button auto flat color="error" onClick={() => setVisible(false)}>
            Close
          </Button>
          <TelegramShareButton url={"https://summerize-nft.vercel.app/QRPage"}>
            <TelegramIcon size={32} round />
          </TelegramShareButton>
          <TwitterShareButton url={"https://summerize-nft.vercel.app/QRPage"}>
            <TwitterIcon size={32} round />
          </TwitterShareButton>
          <ViberShareButton url={"https://summerize-nft.vercel.app/QRPage"}>
            <ViberIcon size={32} round />
          </ViberShareButton>
          <WhatsappShareButton url={"https://summerize-nft.vercel.app/QRPage"}>
            <WhatsappIcon size={32} round />
          </WhatsappShareButton>

          <RedditShareButton url={"https://summerize-nft.vercel.app/QRPage"}>
            <RedditIcon size={32} round />
          </RedditShareButton>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
//https://summerize-nft.vercel.app/profile
