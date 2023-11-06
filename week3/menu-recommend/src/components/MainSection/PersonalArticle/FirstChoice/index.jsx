import useSelect from '@hooks/useSelect';
import * as S from '../style';

const FirstChoice = ({ selectOptionHandler, startPickHandler, nthChoiceHandler }) => {
  const { clickedOption, clickedOptionHandler } = useSelect();

  return (
    <>
      <S.SubTitleStyle>오늘은 어떤 종류가 먹고 싶어?</S.SubTitleStyle>
      <S.CountParagraph>1 / 3</S.CountParagraph>
      <S.MainSectionStyle>
        <S.ArticleStyle
          isclicked={clickedOption === 1 ? 'true' : 'false'}
          onClick={() => clickedOptionHandler(1)}
        >
          <a href="#">한식</a>
        </S.ArticleStyle>
        <S.ArticleStyle
          isclicked={clickedOption === 2 ? 'true' : 'false'}
          onClick={() => clickedOptionHandler(2)}
        >
          <a href="#">일식</a>
        </S.ArticleStyle>
        <S.ArticleStyle
          isclicked={clickedOption === 3 ? 'true' : 'false'}
          onClick={() => clickedOptionHandler(3)}
        >
          <a href="#">중식</a>
        </S.ArticleStyle>
      </S.MainSectionStyle>
      <S.ButtonBox>
        <S.NextButton
          onClick={() => {
            selectOptionHandler('');
            startPickHandler(false);
          }}
        >
          이전으로
        </S.NextButton>
        <S.NextButton
          disabled={clickedOption === 0}
          onClick={() => {
            nthChoiceHandler(2);
          }}
        >
          다음으로
        </S.NextButton>
      </S.ButtonBox>
    </>
  );
};

export default FirstChoice;
