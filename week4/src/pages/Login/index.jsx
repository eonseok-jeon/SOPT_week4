import { useNavigate } from 'react-router-dom';
import Button from '@components/Button';
import Card from '@components/Card';
import Input from '@components/Input';
import * as S from './style';

const Login = () => {
  const router = useNavigate();

  const loginHandler = (e) => {
    if (e.key === 'Enter') {
      router('/mypage/2');
    }
  };

  return (
    <form>
      <Card>
        <h1>Login</h1>
        <S.InputBox>
          <Input label="ID" type="text" placeholder="아이디를 입력해" onKeyDown={loginHandler} />
          <Input
            label="PASSWORD"
            type="password"
            placeholder="비밀번호 입력해"
            onKeyDown={loginHandler}
          />
        </S.InputBox>
        <div>
          <Button to="/mypage/2">로그인</Button>
          <Button to="/signup">회원가입</Button>
        </div>
      </Card>
    </form>
  );
};

export default Login;
