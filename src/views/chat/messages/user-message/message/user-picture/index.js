import { h } from 'preact';

import computeUserInitials from '../../../../../../scripts/compute-user-initials';

import style from './styles.scss';

export default function UserPicture({ name }) {
  return (
    <div class={style.authorPicture}>
      <p>{computeUserInitials(name).toUpperCase()}</p>
    </div>
  );
}
