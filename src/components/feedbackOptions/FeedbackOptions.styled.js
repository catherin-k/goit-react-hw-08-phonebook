import styled from 'styled-components';

export const ButtonOption = styled.button`
  width: 100px;
  padding: ${p => p.theme.space[2]}px;
  font-size: ${p => p.theme.fontSizes.m};
  border-radius: ${p => p.theme.radii.normal};
  box-shadow: ${p => p.theme.shadows.boxShadow};
  border: none;
  outline: none;
  cursor: pointer;
  :not(:last-child) {
    margin-right: ${p => p.theme.space[3]}px;
  }
  :hover {
    transform: scale(1.05);
  }
`;
