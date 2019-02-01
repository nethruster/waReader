import { h } from 'preact';

import style from './styles.scss';

export default function UserName({ name }) {
  return <span class={style.authorName}>{name}</span>;
}
