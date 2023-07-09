import PropTypes from 'prop-types';
import { Component } from 'react';
import { ModalCss, Overlay } from './Modal.styled';

class Modal extends Component {
  state = {
    modal: true,
  };

  handelKeyDown() {
    window.addEventListener('keydown', e => {
      if (e.code === 'Escape') {
        this.props.closeModal();
      }
    });
  }
  componentDidMount() {
    this.handelKeyDown();
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handelKeyDown);
  }
  handleClickOnBackdrop = evt => {
    if (evt.target === evt.currentTarget) {
      this.props.closeModal();
    }
  };
  render() {
    return (
      <Overlay onClick={this.handleClickOnBackdrop}>
        <ModalCss>{this.props.children}</ModalCss>
      </Overlay>
    );
  }
}

export { Modal };

Modal.propTypes = {
  handelKeyDown: PropTypes.func,
  handleClickOnBackdrop: PropTypes.func,
};