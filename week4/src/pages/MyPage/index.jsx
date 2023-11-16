import Button from '@components/Button';
import Card from '@components/Card';
import * as S from './style';

const MyPage = () => {
  return (
    <Card>
      <h1>MY PAGE</h1>
      <S.ProfileBox>
        <S.ImageCSS src="/assets/image.png" alt="profile-image" />
        <div>
          <S.ProfileParagraph>ID: seobbang</S.ProfileParagraph>
          <S.ProfileParagraph>닉네임: 터혀니</S.ProfileParagraph>
        </div>
      </S.ProfileBox>
      <Button width="10rem">로그아웃</Button>
    </Card>
  );
};

export default MyPage;
