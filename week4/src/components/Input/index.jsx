import * as S from './style';

const Input = ({ label, placeholder }) => {
  return (
    <S.InputBox>
      <label>{label}</label>
      <S.InputCSS placeholder={placeholder} />
    </S.InputBox>
  );
};

export default Input;
