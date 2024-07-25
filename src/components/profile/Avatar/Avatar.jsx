import css from './Avatar.module.css';

const Avatar = ({ meta: { avatar, username }, shape }) => {
  return (
    <div className={css[shape]}>
      <img className={css.avatar} src={avatar} alt={username} />
    </div>
  );
};

export default Avatar;
