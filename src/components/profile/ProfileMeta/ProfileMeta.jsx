import { Avatar, Bio } from '@components/profile';
import css from './ProfileMeta.module.css';

const ProfileMeta = ({ username, tag, location, image }) => {
  return (
    <div className={css.profileTop}>
      <Avatar meta={{ image, username }} shape="circle" />
      <Bio meta={{ username, tag, location }} />
    </div>
  );
};

export default ProfileMeta;
