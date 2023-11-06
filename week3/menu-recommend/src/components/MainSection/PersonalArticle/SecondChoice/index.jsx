import useSelect from '@hooks/useSelect';
import * as S from '../style';

const SecondChoice = ({ nthChoiceHandler }) => {
  const { clickedOption, clickedOptionHandler } = useSelect();

  return (
    <>
      <S.SubTitleStyle>그럼 이 중에는 뭐가 끌려?</S.SubTitleStyle>
      <S.CountParagraph>2 / 3</S.CountParagraph>
      <S.MainSectionStyle>
        <S.ArticleStyle
          isclicked={clickedOption === 1 ? 'true' : 'false'}
          onClick={() => clickedOptionHandler(1)}
        >
          <a href="#">밥</a>
        </S.ArticleStyle>
        <S.ArticleStyle
          isclicked={clickedOption === 2 ? 'true' : 'false'}
          onClick={() => clickedOptionHandler(2)}
        >
          <a href="#">면</a>
        </S.ArticleStyle>
        <S.ArticleStyle
          isclicked={clickedOption === 3 ? 'true' : 'false'}
          onClick={() => clickedOptionHandler(3)}
        >
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
          disabled={clickedOption === 0}
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
