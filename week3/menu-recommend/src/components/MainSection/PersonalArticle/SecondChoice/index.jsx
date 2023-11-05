import * as S from '../style';

const SecondChoice = ({ nthChoiceHandler }) => {
  return (
    <>
      <S.SubTitleStyle>그럼 이 중에는 뭐가 끌려?</S.SubTitleStyle>
      <S.CountParagraph>2 / 3</S.CountParagraph>
      <S.MainSectionStyle>
        <S.ArticleStyle>
          <a href="#">밥</a>
        </S.ArticleStyle>
        <S.ArticleStyle>
          <a href="#">면</a>
        </S.ArticleStyle>
        <S.ArticleStyle>
          <a href="#">고기</a>
        </S.ArticleStyle>
      </S.MainSectionStyle>
      <S.ButtonBox>
        <S.NextButton
          onClick={() => {
            nthChoiceHandler(1);
          }}
        >
          이전으로
        </S.NextButton>
        <S.NextButton
          onClick={() => {
            nthChoiceHandler(3);
          }}
        >
          다음으로
        </S.NextButton>
      </S.ButtonBox>
    </>
  );
};

export default SecondChoice;
