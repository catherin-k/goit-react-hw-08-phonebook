import styled from 'styled-components';

export const Item = styled.li`
  font-size: ${p => p.theme.fontSizes.m};
  display: flex;
  padding: ${p => p.theme.space[2]}px;

  justify-content: space-between;
  align-items: center;
  height: 35px;
  box-shadow: ${p => p.theme.shadows.lineShadow};
  :not(:last-child) {
    margin-bottom: ${p => p.theme.space[3]}px;
  }
`;

export const Phone = styled.p`
  margin-right: auto;
  margin-left: auto;
`;
export const Name = styled.p`
  min-width: 40%;
`;
export const DeleteBtn = styled.button`
  padding: ${p => p.theme.space[2]}px;
  border-radius: ${p => p.theme.radii.normal};
  outline: none;
  border: none;
  :hover,
  :focus {
    transform: scale(1.05);
    background-color: ${p => p.theme.colors.blue};
    outline: none;
    border: none;
  }
`;
