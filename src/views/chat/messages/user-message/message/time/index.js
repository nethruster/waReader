import { h } from 'preact';

import style from './styles.scss';

export default function MessageTime({ time, isActive }) {
  return (
    <div class={style.time} data-active={isActive}>
      {time}
    </div>
  );
}
