import { h } from 'preact';
import { connect } from 'unistore/preact';

import { actions } from '../../../../store/store';

import style from './styles.scss';

export default connect(
  'activeHomeTab',
  actions
)(function TabContentWrapper({ children, containerWidth, activeTrigger }) {
  const isActive = this.props.activeHomeTab == activeTrigger;
  return (
    <div
      style={{
        width: `100%`
      }}
      class={`${style.platformTab} ${isActive ? style.active : ''}`}
    >
      {children}
    </div>
  );
});
