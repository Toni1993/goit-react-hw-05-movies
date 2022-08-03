import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavigationLink = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 15px;
  font-weight: 500;
  font-size: 18px;
  color: #b26969;

  &.active {
    display: inline-block;
    text-decoration: underline;
    padding: 15px;
    font-weight: 900;
    font-size: 18px;
    color: #b40d0d;
  }
`;
