import { h } from 'preact';

import style from './styles.scss';

export default function UserName({ name, userColor }) {
  return (
    <span class={style.authorName} style={{ color: userColor }}>
      {name}
    </span>
  );
}
