import user from './data/user';
import statisticsData from './data/data.json';
import friends from './data/friends.json';
import transactions from './data/transactions.json';
import { Profile } from './profile/Profile';
import { Statistics } from './statistics/Statistics';
import { FriendList } from './friends/FriendList';
import { TransactionHistory } from './transactions/TransactionHistory';

export const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title={'Upload stats'} stats={statisticsData} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};
