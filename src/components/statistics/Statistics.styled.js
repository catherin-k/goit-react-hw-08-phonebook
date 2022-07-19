import styled from 'styled-components';
import { randomColor } from './randomColor';

export const StatisticsContainer = styled.section`
  width: 350px;
  margin-top: ${p => p.theme.space[5]}px;
  margin-bottom: ${p => p.theme.space[5]}px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  padding: ${p => p.theme.space[4]}px;
  box-shadow: ${p => p.theme.shadows.boxShadow};
`;

export const Title = styled.h2`
  color: ${p => p.theme.colors.black};
  text-transform: uppercase;
`;

export const StatisticsList = styled.ul`
  list-style: none;
  display: flex;
  margin: ${p => p.theme.space[0]}px;
  padding: ${p => p.theme.space[0]}px;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-basis: calc(100% / 4);
  padding: ${p => p.theme.space[4]}px;
  border: ${p => p.theme.borders.normal};
  background-color: ${randomColor};
`;

export const Label = styled.span`
  ${p => p.theme.colors.text}
  margin-bottom: ${p => p.theme.space[2]}px;
`;
export const Percentage = styled.span`
  font-weight: ${p => p.theme.fontWeights.bold};
`;
