import styled from 'styled-components';

export const StatisticsList = styled.ul`
  list-style: none;
  padding: ${p => p.theme.space[0]};
`;

export const StatisticsItem = styled.li`
  :not(:last-child) {
    margin-bottom: 10px;
  }
`;
