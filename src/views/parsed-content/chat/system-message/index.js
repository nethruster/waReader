import { h } from 'preact';

import style from './styles.scss';

export default function SystemMessage({ text }) {
  return (
    <div class={`flex flex-dc ${style.messageWrapper}`}>
      <span dir="ltr" class={`text-center ${style.message}`}>
        {text}
      </span>
    </div>
  );
}
