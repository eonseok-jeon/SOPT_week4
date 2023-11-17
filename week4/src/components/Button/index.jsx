import * as S from './style';

const Button = ({ width = '40rem', to, as, type, onClick, children }) => {
  return (
    <S.ButtonLink width={width} to={to} as={as} type={type} onClick={onClick}>
      {children}
    </S.ButtonLink>
  );
};

export default Button;
