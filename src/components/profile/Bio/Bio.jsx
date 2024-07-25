import css from './Bio.module.css';

const Bio = ({ meta: { username, tag, location } }) => {
  return (
    <>
      <p className={css.name}>{username}</p>
      <p className={css.tag}>@{tag}</p>
      <p className={css.location}>{location}</p>
    </>
  );
};

export default Bio;
