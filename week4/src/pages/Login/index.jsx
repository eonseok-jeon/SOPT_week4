import Button from '@components/Button';
import Card from '@components/Card';
import Input from '@components/Input';
import * as S from './style';

const Login = () => {
  return (
    <Card>
      <h1>Login</h1>
      <S.InputBox>
        <Input label="ID" type="text" placeholder="아이디를 입력해" />
        <Input label="PASSWORD" type="password" placeholder="비밀번호 입력해" />
      </S.InputBox>
      <div>
        <Button to="/mypage/2">로그인</Button>
        <Button to="/signup">회원가입</Button>
      </div>
    </Card>
  );
};

export default Login;
