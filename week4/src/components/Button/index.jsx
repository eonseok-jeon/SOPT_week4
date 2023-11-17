import * as S from './style';

const Button = ({ width = '40rem', to, as, type, children }) => {
  return (
    <S.ButtonLink width={width} to={to} as={as} type={type}>
      {children}
    </S.ButtonLink>
  );
};

export default Button;
