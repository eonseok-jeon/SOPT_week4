import styled from 'styled-components';

const HeaderStyle = styled.header`
  position: relative;
  width: 100%;
  padding: 5rem 0;
  border: 1px solid #555;
  font-size: 3.6rem;
  text-align: center;
`;

const ReStartButton = styled.button`
  position: absolute;
  top: 50%;
  right: 10rem;
  padding: 1rem 2rem;
  border-radius: 1rem;
  border: 1px solid #555;
  font-size: 2.4rem;
  transform: translateY(-50%);
  transition: all 0.3s ease;

  &:hover {
    background-color: #222;
  }
`;

export { HeaderStyle, ReStartButton };
