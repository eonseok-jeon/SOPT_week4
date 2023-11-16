import * as S from './style';

const Input = ({ label, placeholder, type }) => {
  return (
    <S.InputBox>
      <S.LabelCSS>{label}</S.LabelCSS>
      <S.InputCSS type={type} placeholder={placeholder} />
    </S.InputBox>
  );
};

export default Input;
