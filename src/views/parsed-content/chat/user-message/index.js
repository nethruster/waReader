import { h } from 'preact';

import style from './styles.scss';

export default function UserMessage({ text, time }) {
  return (
    <div class={`flex flex-dc ${style.messageWrapper}`}>
      <span dir="ltr" class={style.message}>
        {text}
      </span>
      <span class={style.date}>{time}</span>
    </div>
  );
}
