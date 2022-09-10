import styled from 'styled-components';

export const UserMenuContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Greeting = styled.span`
  margin-right: ${p => p.theme.space[4]}px;
`;

export const Img = styled.img`
  margin-right: ${p => p.theme.space[4]}px;
`;

export const LogOut = styled.button`
  padding: ${p => p.theme.space[3]}px;
  border-radius: ${p => p.theme.radii.normal};
  border: none;
  outline: none;
  :hover {
    transform: scale(1.05);
    background-color: ${p => p.theme.colors.blue};
    border: none;
    outline: none;
    cursor: pointer;
  }
`;
