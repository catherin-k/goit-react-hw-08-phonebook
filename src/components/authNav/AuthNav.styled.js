import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const LinkStyled = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: ${p => p.theme.space[4]}px;
  font-weight: ${p => p.theme.fontWeights.normal};
  color: ${p => p.theme.colors.black};

  :hover:not(.active),
  :focus {
    color: ${p => p.theme.colors.violet};
  }
  &.active {
    color: ${p => p.theme.colors.red};
  }
`;
