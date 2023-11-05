import SelectArticle from '../SelectArticle';
import * as S from './style';

const MainSection = ({ selectOption, selectOptionHandler }) => {
  return (
    <S.MainStyle>
      <SelectArticle selectOption={selectOption} selectOptionHandler={selectOptionHandler} />
    </S.MainStyle>
  );
};

export default MainSection;
