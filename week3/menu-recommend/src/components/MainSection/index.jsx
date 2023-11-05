import * as S from './style';
import PersonalArticle from './PersonalArticle';
import SelectArticle from './SelectArticle';

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
