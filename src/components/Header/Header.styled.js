import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Navigation = styled.nav`
  margin-top: 50px;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 32px;
`;

export const LogoWrapper = styled(NavLink)`
  margin-top: 24px;
`;
