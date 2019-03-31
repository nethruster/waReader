import { h } from 'preact';

import style from './styles.scss';

export default function IOSHowTo() {
  return (
    <ul class={`flex flex-cross-center flex-sa ${style.stepContainer}`}>
      <li class={style.step}>
        <p class={style.stepNumber}>1</p>
        <p class={style.stepText}>Open the chat menu.</p>
      </li>
      <li class={style.step}>
        <p class={style.stepNumber}>2</p>
        <p class={style.stepText}>Select "More Options".</p>
      </li>
      <li class={style.step}>
        <p class={style.stepNumber}>3</p>
        <p class={style.stepText}>Select "Export chat".</p>
      </li>
    </ul>
  );
}
