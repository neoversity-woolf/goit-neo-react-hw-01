import css from './Avatar.module.css';

const Avatar = ({ meta: { image, username }, shape }) => {
  return (
    <div className={css[shape]}>
      <img className={css.avatar} src={image} alt={username} />
    </div>
  );
};

export default Avatar;
