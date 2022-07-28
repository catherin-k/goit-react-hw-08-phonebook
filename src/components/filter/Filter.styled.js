import styled from 'styled-components';
export const FilterBox = styled.div`
  display: flex;
  flex-direction: column;
  label {
    margin-bottom: ${p => p.theme.space[3]}px;
  }
  input {
    margin-bottom: ${p => p.theme.space[3]}px;
    width: 30%;
  }
`;
