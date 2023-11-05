import styled from 'styled-components';

const MainStyle = styled.main`
  max-width: 120rem;
  height: 59rem;
  padding: 5rem 20rem;
  margin: 5rem auto;
  text-align: center;
  border: 1px solid #555;
`;

const SubTitleStyle = styled.h2`
  width: 100%;
  padding: 1rem 0;
  margin: 0 auto 4rem;
  border: 1px solid #555;
  border-radius: 1rem;
`;

const MainSectionStyle = styled.section`
  display: flex;
  gap: 4rem;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 0 auto;
`;

const ArticleStyle = styled.article`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 30rem;
  border: 1px solid #555;
  border-radius: 1rem;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    background-color: #222;
  }
`;

const StartButton = styled.button`
  width: 10rem;
  padding: 1rem 0;
  margin: 2rem auto;
  border: 1px solid #555;
  border-radius: 1rem;
  transition: all 0.3s ease;

  &:hover {
    background-color: #222;
  }
`;

export { MainStyle, SubTitleStyle, MainSectionStyle, ArticleStyle, StartButton };
