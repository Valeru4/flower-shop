import { List, LogoWrapper, Navigation, Wrapper } from './Header.styled';
import logo from '../../images/logo/logo.svg';
import { NavLink } from 'react-router-dom';

export const Header = () => {
  return (
    <header>
      <Wrapper>
        <LogoWrapper to="/">
          <img src={logo} alt="logo" />
          <p>FLOWERLOVER</p>
        </LogoWrapper>
        <Navigation>
          <List>
            <li>
              <NavLink to="/">Головна </NavLink>
            </li>
            <li>
              <NavLink to="/catalog">Каталог</NavLink>
            </li>
            <li>
              <NavLink to="/about">Про нас</NavLink>
            </li>
            <li>
              <NavLink to="/form">Як замовити</NavLink>
            </li>
            <li>
              <NavLink to="/reviews">Відгуки </NavLink>
            </li>
            <li>
              <NavLink to="/contacts">Контакти</NavLink>
            </li>
          </List>
        </Navigation>
      </Wrapper>
    </header>
  );
};
