import { h } from 'preact';

import htmlifyMessage from '../../../../../../scripts/htmlfy-message';

import style from './styles.scss';

export default function MessageContent({ content }) {
  return (
    <span dir="ltr" class={style.message}>
      {htmlifyMessage(content)}
    </span>
  );
}
