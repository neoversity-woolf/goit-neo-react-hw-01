import css from './FriendListItem.module.css';

const FriendListItem = ({ friend: { avatar, name, isOnline, id } }) => {
  const wasOnline = isOnline ? 'online' : 'offline';

  return (
    <div id={id}>
      <img src={avatar} alt={name} width="48" />
      <p className={css['friend-name']}>{name}</p>
      <p className={css[wasOnline]}>{wasOnline}</p>
    </div>
  );
};

export default FriendListItem;
