import { h } from 'preact';

import style from './styles.scss';

export default function UserMessage({ message }) {
  return (
    <div class={`flex flex-dc ${style.messageWrapper}`}>
      <span dir="ltr" class={style.message}>
        {message.message}
      </span>
      <span class={style.date}>{message.date}</span>
    </div>
  );
}
