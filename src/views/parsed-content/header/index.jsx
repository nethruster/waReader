import { h } from 'preact';

import HeaderInfo from './info';
import HeaderTabs from './tabs';

import style from './styles.scss';

export default function Header() {
  return (
    <header class={style.header}>
      <HeaderInfo />
      <HeaderTabs />
    </header>
  );
}
