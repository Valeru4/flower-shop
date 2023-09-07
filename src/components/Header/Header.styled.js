import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const TextLogo = styled.p`
  font-family: 'Spline Sans';
  color: #ffffff;
`;
export const Navigation = styled.nav`
  margin-top: 50px;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 32px;
  margin-right: 70px;
`;

export const LogoWrapper = styled(NavLink)`
  margin-top: 24px;
  margin-left: 64px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TextNavigation = styled(NavLink)`
  font-family: 'Source Sans 3', sans-serif;
  color: #ffffff;
`;
