import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: #212121;
  &.active {
    color: #3f51b5;
  }
  &:hover {
    text-decoration: underline;
  }
`;
