import {
  List,
  LogoWrapper,
  Navigation,
  TextLogo,
  TextNavigation,
  Wrapper,
} from './Header.styled';
import logo from '../../images/logo/logo.svg';

export const Header = () => {
  return (
    <header>
      <Wrapper>
        <LogoWrapper to="/">
          <img src={logo} alt="logo" />
          <TextLogo>FLOWERLOVER</TextLogo>
        </LogoWrapper>
        <Navigation>
          <List>
            <li>
              <TextNavigation to="/">Головна </TextNavigation>
            </li>
            <li>
              <TextNavigation to="/catalog">Каталог</TextNavigation>
            </li>
            <li>
              <TextNavigation to="/about">Про нас</TextNavigation>
            </li>
            <li>
              <TextNavigation to="/form">Як замовити</TextNavigation>
            </li>
            <li>
              <TextNavigation to="/reviews">Відгуки </TextNavigation>
            </li>
            <li>
              <TextNavigation to="/contacts">Контакти</TextNavigation>
            </li>
          </List>
        </Navigation>
      </Wrapper>
    </header>
  );
};
