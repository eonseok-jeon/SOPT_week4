import SelectArticle from '../SelectArticle';
import * as S from './style';
import PersonalArticle from '../PersonalArticle';

const MainSection = ({ selectOption, selectOptionHandler, startPick, startPickHandler }) => {
  return (
    <S.MainStyle>
      {!startPick && (
        <SelectArticle
          selectOption={selectOption}
          selectOptionHandler={selectOptionHandler}
          startPickHandler={startPickHandler}
        />
      )}
      {!!startPick && <PersonalArticle />}
    </S.MainStyle>
  );
};

export default MainSection;
