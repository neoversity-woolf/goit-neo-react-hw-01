import { Profile, ProfileMeta, Statistic } from '@components/profile';
import { FriendList } from '@components/friends';
import { TransactionsHistory } from '@components/transactions';

import userData from '@data/user';
import friends from '@data/friends';
import transactions from '@data/transactions';

export const App = () => {
  const { username, tag, location, avatar, stats } = userData;
  const profileDetails = {
    username,
    tag,
    location,
    avatar,
  };

  return (
    <>
      <Profile>
        <ProfileMeta profileDetails={profileDetails} />
        <Statistic stats={stats} />
      </Profile>
      <FriendList friends={friends} />
      <TransactionsHistory items={transactions} />
    </>
  );
};
