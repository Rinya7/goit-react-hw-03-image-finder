import { ModalCss, Overlay } from './Modal.styled';

export const Modal = ({ imageUrl }) => {
  return (
    <Overlay>
      <ModalCss>
        <img src={imageUrl} alt="Big pictures" />
      </ModalCss>
    </Overlay>
  );
};
