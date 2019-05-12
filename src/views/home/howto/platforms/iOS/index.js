import { h } from 'preact';

import style from '../styles.scss';

export default function IOSHowTo() {
  return (
    <ul class={`flex flex-cross-center flex-sa ${style.stepContainer}`}>
      <li class={`flex flex-full-center ${style.step}`}>
        <span class={style.stepNumber}>1</span>
        <p class={style.stepText}>Go to chat details</p>
      </li>
      <div class={style.divider} />
      <li class={`flex flex-full-center ${style.step}`}>
        <span class={style.stepNumber}>2</span>
        <p class={style.stepText}>Select "Export chat"</p>
      </li>
    </ul>
  );
}
