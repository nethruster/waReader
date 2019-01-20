import { h } from 'preact';

import style from './styles.scss';

export default function SystemMessage({ message }) {
  return (
    <div class={`flex flex-dc ${style.messageWrapper}`}>
      <span dir="ltr" class={`text-center ${style.message}`}>
        {message.message}
      </span>
    </div>
  );
}
