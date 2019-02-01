import { h } from 'preact';

import style from './styles.scss';

export default function MessagePlaceholder() {
  return (
    <div class={`flex ${style.placeholderWrapper}`}>
      <span class={`flex ${style.messagePlaceholder}`}>Loading Message...</span>
    </div>
  );
}
