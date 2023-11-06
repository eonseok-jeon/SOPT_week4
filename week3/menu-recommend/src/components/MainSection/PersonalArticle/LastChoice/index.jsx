import useSelect from '@hooks/useSelect';
import * as S from '../style';

const LastChoice = ({ nthChoiceHandler }) => {
  const { clickedOption, clickedOptionHandler } = useSelect();

  return (
    <>
      <S.SubTitleStyle>마지막으로 골라줘!</S.SubTitleStyle>
      <S.CountParagraph>3 / 3</S.CountParagraph>
      <S.MainSectionStyle>
        <S.ArticleStyle
          isclicked={clickedOption === 1 ? 'true' : 'false'}
          onClick={() => clickedOptionHandler(1)}
        >
          <a href="#">국물 X</a>
        </S.ArticleStyle>
        <S.ArticleStyle
          isclicked={clickedOption === 2 ? 'true' : 'false'}
          onClick={() => clickedOptionHandler(2)}
        >
          <a href="#">국물 O</a>
        </S.ArticleStyle>
      </S.MainSectionStyle>
      <S.ButtonBox>
        <S.NextButton
          onClick={() => {
            nthChoiceHandler(2);
          }}
        >
          이전으로
        </S.NextButton>
        <S.NextButton disabled={clickedOption === 0}>결과보기</S.NextButton>
      </S.ButtonBox>
    </>
  );
};

export default LastChoice;
