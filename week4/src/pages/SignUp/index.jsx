import { useNavigate } from 'react-router-dom';
import Button from '@components/Button';
import Card from '@components/Card';
import Input from '@components/Input';
import * as S from './style';

const SignUp = () => {
  const router = useNavigate();

  const signUpHandler = (e) => {
    if (e.key === 'Enter') {
      router('/login');
    }
  };

  return (
    <Card>
      <h1>Sign Up</h1>
      <S.InputBox>
        <S.IdDuplicateCheckBox>
          <Input label="ID" type="text" placeholder="아이디를 입력해" />
          <S.DuplicateCheckButton width="10rem">중복체크</S.DuplicateCheckButton>
        </S.IdDuplicateCheckBox>
        <Input
          label="PASSWORD"
          type="password"
          placeholder="비밀번호 입력해"
          onKeyDown={signUpHandler}
        />
        <Input
          label="PASSWORD CONFIRM"
          type="password"
          placeholder="비밀번호 한 번 더 입력해"
          onKeyDown={signUpHandler}
        />
        <Input label="NICKNAME" type="text" placeholder="닉네임 입력해" onKeyDown={signUpHandler} />
      </S.InputBox>
      <Button to="/login">회원가입</Button>
    </Card>
  );
};

export default SignUp;
