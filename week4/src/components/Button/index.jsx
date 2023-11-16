import * as S from './style';

const Button = ({ width = '40rem', children }) => {
  return <S.ButtonLink width={width}>{children}</S.ButtonLink>;
};

export default Button;
