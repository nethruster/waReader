import { h } from 'preact';

import style from './styles.scss';

export default function HeaderTabs() {
  return (
    <ul class="flex">
      <li class={`text-center ${style.tabItem} ${style.active}`}>
        <p class="text-center">Chat</p>
      </li>
      <li class={`text-center ${style.tabItem}`}>
        <p class="text-center">Stats</p>
      </li>
    </ul>
  );
}
