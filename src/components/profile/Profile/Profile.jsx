import { ProfileMeta, Statistic } from '@components/profile';
import css from './Profile.module.css';

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <article className={css.profile}>
      <ProfileMeta name={name} tag={tag} location={location} image={image} />
      <Statistic stats={stats} />
    </article>
  );
};

export default Profile;
