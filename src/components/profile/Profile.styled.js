import styled from 'styled-components';

export const ProfileContainer = styled.div`
  margin-bottom: ${p => p.theme.space[6]}px;
  margin-top: ${p => p.theme.space[5]}px;
  margin-left: auto;
  margin-right: auto;
  padding: ${p => p.theme.space[2]}px;
  border-radius: ${p => p.theme.radii.normal};
  background-color: ${p => p.theme.colors.white};
  box-shadow: ${p => p.theme.shadows.boxShadow};
  width: 350px;
  text-align: center;
`;

export const DescriptionContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: ${p => p.theme.space[4]}px;
`;
export const Avatar = styled.img`
  width: 260px;
  height: 260px;
  border-radius: ${p => p.theme.radii.round};
  background-color: ${p => p.theme.colors.backGround};
`;
export const Name = styled.p`
  color: ${p => p.theme.colors.black};
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.l};
  line-height: ${p => p.theme.lineHeights.heading};
  margin-top: ${p => p.theme.space[4]}px;
  margin-bottom: ${p => p.theme.space[4]}px;
`;
export const Tag = styled.p`
  color: ${p => p.theme.colors.text};
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: ${p => p.theme.fontSizes.m};
  margin-top: ${p => p.theme.space[0]}px;
`;

export const Location = styled.p`
  color: ${p => p.theme.colors.text};
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: ${p => p.theme.fontSizes.m};
  margin-top: ${p => p.theme.space[0]}px;
`;

export const StatsList = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
  justify-content: space-between;
  background-color: ${p => p.theme.colors.backGround};
  border-radius: ${p => p.theme.radii.normal};
`;

export const StatsItem = styled.li`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: ${p => p.theme.space[3]}px;
  border: ${p => p.theme.borders.normal};
`;
export const Label = styled.span`
  margin-bottom: ${p => p.theme.space[2]}px;
  color: ${p => p.theme.colors.text};
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: ${p => p.theme.fontSizes.m};
`;

export const Quantity = styled.span`
  color: ${p => p.theme.colors.black};
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.m};
`;
