import { h } from 'preact';
import { connect } from 'unistore/preact';

import { actions } from '../../../../store/store';

import style from './styles.scss';

export default connect(
  'activeHomeTab',
  actions
)(function({ children, containerWidth, activeTrigger }) {
  return (
    <div
      style={{
        width: `${containerWidth ? containerWidth + 'px' : '100%'}`
      }}
      class={`${style.platformTab} ${
        this.props.activeHomeTab == activeTrigger ? style.active : ''
      }`}
    >
      {children}
    </div>
  );
});
