import PropTypes from 'prop-types';
import { Status, Avatar, FriendName } from './Friends.styled';
export const FriendItem = ({ isOnline, name, avatar }) => {
  return (
    <>
      <Status
        isOnline={isOnline}
        style={{ backgroundColor: isOnline ? 'green' : 'red' }}
      />
      <Avatar src={avatar} alt="User avatar" />
      <FriendName>{name}</FriendName>
    </>
  );
};

FriendItem.propTypes = {
  isOnline: PropTypes.bool,
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};
