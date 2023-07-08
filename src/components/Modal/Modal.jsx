import { ModalCss, Overlay } from './Modal.styled';

export const Modal = ({ id }) => {
  return (
    <Overlay>
      <ModalCss>
        <img src={id} alt={id} />
      </ModalCss>
    </Overlay>
  );
};
