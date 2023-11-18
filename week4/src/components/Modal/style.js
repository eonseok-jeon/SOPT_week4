import styled from 'styled-components';
import { CardBox } from '../Card/style';

const ModalBox = styled(CardBox)`
  position: fixed;
  bottom: 10rem;
  left: 50%;
  transform: translateX(-50%);
`;

export { ModalBox };
