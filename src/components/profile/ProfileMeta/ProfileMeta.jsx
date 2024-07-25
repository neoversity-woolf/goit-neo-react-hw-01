import { Avatar, Bio } from '@components/profile';
import css from './ProfileMeta.module.css';

const ProfileMeta = ({
  profileDetails: { username, tag, location, avatar },
}) => {
  return (
    <div className={css.description}>
      <Avatar meta={{ avatar, username }} shape="circle" />
      <Bio meta={{ username, tag, location }} />
    </div>
  );
};

export default ProfileMeta;
