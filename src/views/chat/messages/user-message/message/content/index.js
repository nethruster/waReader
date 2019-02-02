import { h } from 'preact';
import html from 'preact-html';

import style from './styles.scss';

export default function MessageContent({ content }) {
  return (
    <span dir="ltr" class={style.message}>
      {html(content)}
    </span>
  );
}
