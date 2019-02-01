import { h } from 'preact';

import style from './styles.scss';

export default function MessageTime({ time }) {
  return <div class={style.time}>{time}</div>;
}
