import PropTypes from 'prop-types';
import { Friends, FriendsContainer, Friend } from './Friends.styled';
import { FriendItem } from './FriendItem';
export const FriendList = ({ friends }) => {
  return (
    <FriendsContainer>
      <Friends>
        {friends.map(friend => (
          <Friend key={friend.id}>
            <FriendItem
              isOnline={friend.isOnline}
              name={friend.name}
              avatar={friend.avatar}
            />
          </Friend>
        ))}
      </Friends>
    </FriendsContainer>
  );
};

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
};
