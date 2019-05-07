import { h, Component } from 'preact';
import { bind } from 'decko';
import { connect } from 'unistore/preact';

import { actions } from '../../../store/store';

import Platforms from './platforms';

const style = require('./styles.scss');

export default connect(
  'activeHomeTab',
  actions
)(
  class HowTo extends Component {
    constructor(props) {
      super(props);

      this.state = {
        tabCount: 0
      };
    }

    @bind
    handleSetActiveHomeTabFromTabClick(event) {
      const tabName = event.target.dataset.triggers;
      this.props.setActiveHomeTab(tabName);
    }

    render() {
      return (
        <div class={style.wrapper} id="wareader-howto">
          <h4 class={`text-center ${style.howtoTitle}`}>
            How to export a Whatsapp chat?
          </h4>
          <ul class="flex flex-main-center" ref={this.setTabCount}>
            <li
              data-triggers="android"
              onClick={this.handleSetActiveHomeTabFromTabClick}
              class={`${style.platformTabSelector} ${
                this.props.activeHomeTab == 'android' ? style.active : ''
              }`}
            >
              Android
            </li>
            <li
              data-triggers="ios"
              onClick={this.handleSetActiveHomeTabFromTabClick}
              class={`${style.platformTabSelector} ${
                this.props.activeHomeTab == 'ios' ? style.active : ''
              }`}
            >
              iOS
            </li>
          </ul>
          {/* Also ugly but whatever */}
          <Platforms tabCount="2" />
        </div>
      );
    }
  }
);
