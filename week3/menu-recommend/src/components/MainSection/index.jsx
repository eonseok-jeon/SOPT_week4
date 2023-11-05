import { useState } from 'react';
import * as S from './style';

const MainSection = () => {
  const [selectOption, setSelectOption] = useState('');

  return (
    <S.MainStyle>
      <S.SubTitleStyle>원하는 추천 방식을 골라줘!</S.SubTitleStyle>

      <S.MainSectionStyle>
        {/* 초기 렌더링혹은 취향대로 추천 선택시 표시 */}
        {(selectOption === '' || selectOption === 'personal') && (
          <S.ArticleStyle
            onClick={() => {
              setSelectOption('personal');
            }}
          >
            <a href="#">취향대로 추천</a>
          </S.ArticleStyle>
        )}
        {/* 초기 렌더링 혹은 랜덤 추천 선택시 표시 */}
        {(selectOption === '' || selectOption === 'random') && (
          <S.ArticleStyle
            onClick={() => {
              setSelectOption('random');
            }}
          >
            <a href="#">랜덤 추천</a>
          </S.ArticleStyle>
        )}
      </S.MainSectionStyle>

      {selectOption !== '' && <S.StartButton>Start!</S.StartButton>}
    </S.MainStyle>
  );
};

export default MainSection;
