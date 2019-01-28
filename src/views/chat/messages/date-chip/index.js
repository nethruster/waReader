import { h } from 'preact';

import style from './styles.scss';

export default function DateChip({ dateText }) {
  return (
    <div class={`flex flex-full-center ${style.dateTextWrapper}`}>
      <span>{dateText}</span>
    </div>
  );
}
