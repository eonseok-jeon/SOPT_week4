import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ButtonLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ width }) => (width ? width : '')};
  font-size: 2rem;
  padding: 0.7rem 0;
  border: 1px solid #ddd;
  border-radius: 0.5rem;
  background-color: #000;
  transition: all 0.3s ease;

  &:hover {
    /* color: #000; */
    background-color: #444;
  }

  &:not(:last-child) {
    margin-bottom: 1rem;
  }
`;

export { ButtonLink };
