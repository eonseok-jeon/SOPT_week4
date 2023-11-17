import * as S from './style';

const Input = ({ label, placeholder, type, onKeyDown }) => {
  return (
    <S.InputBox>
      <S.LabelCSS>{label}</S.LabelCSS>
      <S.InputCSS type={type} placeholder={placeholder} onKeyDown={onKeyDown} />
    </S.InputBox>
  );
};

export default Input;
