import styled from 'styled-components';

export const Table = styled.table`
  margin-left: auto;
  margin-right: auto;
  margin-top: ${p => p.theme.space[5]}px;
  margin-bottom: ${p => p.theme.space[5]}px;
  width: 800px;
  border-radius: ${p => p.theme.radii.normal};
  box-shadow: ${p => p.theme.shadows.boxShadow};
`;

export const TableHead = styled.thead`
  font-size: ${p => p.theme.space[4]}px;
  background-color: ${p => p.theme.colors.violet};
  color: ${p => p.theme.colors.black};
`;

export const Row = styled.tr`
  text-align: center;
  height: 45px;
  :hover,
  :focus {
    background-color: ${p => p.theme.colors.lavender};
  }
`;
export const Column = styled.td`
  border: ${p => p.theme.borders.normal};
  border-radius: ${p => p.theme.radii.normal};
`;
