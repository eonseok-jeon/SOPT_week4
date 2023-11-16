import styled from 'styled-components';

const InputBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const InputCSS = styled.input`
  width: 70%;
  padding: 0.5rem 1rem;
  font-size: 1.6rem;
  border: 1px solid #ddd;
  border-radius: 0.4rem;

  &::placeholder {
    color: #999;
  }
`;

export { InputBox, InputCSS };
