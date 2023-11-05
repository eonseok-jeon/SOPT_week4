import * as S from './style';

const MainSection = () => {
  return (
    <S.MainStyle>
      <S.SubTitleStyle>원하는 추천 방식을 골라줘!</S.SubTitleStyle>
      <S.MainSectionStyle>
        <S.ArticleStyle>
          <a href="#">취향대로 추천</a>
        </S.ArticleStyle>
        <S.ArticleStyle>
          <a href="#">랜덤 추천</a>
        </S.ArticleStyle>
      </S.MainSectionStyle>
    </S.MainStyle>
  );
};

export default MainSection;
