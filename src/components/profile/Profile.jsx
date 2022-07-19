import PropTypes from 'prop-types';

import {
  ProfileContainer,
  DescriptionContainer,
  Avatar,
  Name,
  Tag,
  Location,
  StatsList,
  StatsItem,
  Label,
  Quantity,
} from './Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  const { followers, views, likes } = stats;
  return (
    <ProfileContainer>
      <DescriptionContainer>
        <Avatar src={avatar} alt={username} />
        <Name>{username}</Name>
        <Tag>{tag}</Tag>
        <Location>{location}</Location>
      </DescriptionContainer>

      <StatsList>
        <StatsItem>
          <Label>Followers</Label>
          <Quantity>{followers}</Quantity>
        </StatsItem>
        <StatsItem>
          <Label>Views</Label>
          <Quantity>{views}</Quantity>
        </StatsItem>
        <StatsItem>
          <Label>Likes</Label>
          <Quantity>{likes}</Quantity>
        </StatsItem>
      </StatsList>
    </ProfileContainer>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.exact({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }).isRequired,
};
