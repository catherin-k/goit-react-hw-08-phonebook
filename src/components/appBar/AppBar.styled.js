import styled from 'styled-components';

export const Header = styled.header`
  padding: ${p => p.theme.space[4]}px ${p => p.theme.space[5]}px;
  margin-bottom: ${p => p.theme.space[4]}px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: ${p => p.theme.borders.normal};
`;
