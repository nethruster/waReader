import { h } from 'preact';

import TabItem from './tab-item';

import style from './styles.scss';

export default function HeaderTabs() {
  return (
    <ul class={`flex ${style.tabsContainer}`}>
      <TabItem text="Chat" />
      <TabItem text="Stats" />
    </ul>
  );
}
