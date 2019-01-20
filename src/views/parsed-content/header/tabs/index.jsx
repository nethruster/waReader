import { h } from 'preact';

import TabItem from './tab-item';

export default function HeaderTabs() {
  return (
    <ul class="flex">
      <TabItem text="Chat" />
      <TabItem text="Stats" />
    </ul>
  );
}
