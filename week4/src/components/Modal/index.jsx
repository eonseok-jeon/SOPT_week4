import ReactDOM from 'react-dom';
import * as S from './style';

const ModalOverlay = ({ children }) => {
  return <S.ModalBox>{children}</S.ModalBox>;
};

const Modal = () => {
  return <>{ReactDOM.createPortal(<ModalOverlay />, document.getElementById('overlay'))}</>;
};

export default Modal;
