import { h } from 'preact';

import style from '../styles.scss';

export default function AndroidHowTo() {
  return (
    <ul class={`flex flex-cross-center flex-sa ${style.stepContainer}`}>
      <li class={`flex flex-full-center ${style.step}`}>
        <span class={style.stepNumber}>1</span>
        <p class={style.stepText}>Open the chat menu</p>
        <img src="assets/img/howto/menu-android.svg" />
      </li>
      <div class={style.divider} />
      <li class={`flex flex-full-center ${style.step}`}>
        <span class={style.stepNumber}>2</span>
        <p class={style.stepText}>Select "More Options"</p>
        <img src="assets/img/howto/more-android.svg" />
      </li>
      <div class={style.divider} />
      <li class={`flex flex-full-center ${style.step}`}>
        <span class={style.stepNumber}>3</span>
        <p class={style.stepText}>Select "Export chat"</p>
        <img src="assets/img/howto/export-chat-android.svg" />
      </li>
    </ul>
  );
}
