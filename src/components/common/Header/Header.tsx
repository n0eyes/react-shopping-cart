import Logo from '../../../assets/png/logo.png';
import Flex from '../Flex';
import * as S from './Header.styles';

const Header = () => {
  return (
    <S.Root>
      <S.LinkToHome to="/">
        <S.Logo src={Logo} alt="shopping cart logo" />
        <S.Title>SHOP</S.Title>
      </S.LinkToHome>
      <Flex>
        <S.LinkToCart to="/">장바구니</S.LinkToCart>
        <S.Badge>2</S.Badge>
      </Flex>
    </S.Root>
  );
};

export default Header;