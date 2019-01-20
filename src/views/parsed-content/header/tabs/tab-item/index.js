import { h } from 'preact';
import { connect } from 'unistore/preact';

import { actions } from '../../../../../store/store';

import style from './styles.scss';

export default connect(
  'activeTab',
  actions
)(function TabItem({ text, activeTab, setActiveTab }) {
  let isActive = activeTab == text.toLowerCase();

  function handleTabClick() {
    setActiveTab(text.toLowerCase());
  }

  return (
    <li
      class={`text-center ${style.tabItem} ${isActive ? style.active : ''}`}
      onClick={handleTabClick}
    >
      <p class="text-center">{text}</p>
    </li>
  );
});
