import css from './Profile.module.css';

const Profile = ({ children }) => {
  return <article className={css.profile}>{children}</article>;
};

export default Profile;
