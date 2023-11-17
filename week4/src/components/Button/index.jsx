import * as S from './style';

const Button = ({ width = '40rem', to, children }) => {
  return (
    <S.ButtonLink width={width} to={to}>
      {children}
    </S.ButtonLink>
  );
};

export default Button;
