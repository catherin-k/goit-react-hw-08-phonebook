import styled from 'styled-components';

export const FriendsContainer = styled.div`
  margin-top: ${p => p.theme.space[6]}px;
  margin-bottom: ${p => p.theme.space[5]}px;
  width: 350px;
  margin-left: auto;
  margin-right: auto;
  padding: ${p => p.theme.space[2]}px;
  border-radius: ${p => p.theme.radii.normal};
`;
export const Friends = styled.ul`
  list-style: none;
  margin: ${p => p.theme.space[0]}px;
  padding: ${p => p.theme.space[0]}px;
`;

export const Friend = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: ${p => p.theme.space[2]}px;
  padding: ${p => p.theme.space[3]}px;
  box-shadow: ${p => p.theme.shadows.boxShadow};
`;

export const Status = styled.span`
  width: 16px;
  height: 16px;
  border-radius: ${p => p.theme.radii.round};
  background-color: ${p => p.theme.colors.backGround};
  margin-right: ${p => p.theme.space[4]}px;
`;
export const Avatar = styled.img`
  width: 48px;
  margin-right: ${p => p.theme.space[4]}px;
`;
export const FriendName = styled.p`
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.bold};
`;
