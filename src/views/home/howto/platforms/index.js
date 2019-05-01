import { h, Component } from 'preact';
import { connect } from 'unistore/preact';
import { bind } from 'decko';

import { actions } from '../../../../store/store';

import AndroidHowTo from './android';
import IOSHowTo from './iOS';
import TabContentWrapper from './TabContentWrapper';

const style = require('./styles.scss');

export default connect(
  'activeHomeTab',
  actions
)(
  class Platforms extends Component {
    constructor(props) {
      super(props);

      this.state = {
        tabContainerWith: 0,
        tabContentWidth: 0
      };
    }

    @bind
    handleResize() {
      const parentContainer = document.querySelector('#wareader-howto');
      const tabContentWidth =
        parentContainer.getBoundingClientRect().width * this.props.tabCount;

      this.setState({
        tabContentWidth,
        tabContainerWith: parentContainer.getBoundingClientRect().width
      });
    }

    componentDidMount() {
      window.addEventListener('resize', this.handleResize);

      if (!this.state.tabContainerWith && !this.state.tabContentWidth) {
        const parentContainer = document.querySelector('#wareader-howto');
        const tabContentWidth =
          parentContainer.getBoundingClientRect().width * this.props.tabCount;

        this.setState({
          tabContentWidth,
          tabContainerWith: parentContainer.getBoundingClientRect().width
        });
      }
    }

    render() {
      return (
        <div
          class={`flex ${style.platformTabWrapper}`}
          // This is ugly af
          style={{
            transform: `translateX(-${
              this.props.activeHomeTab == 'android'
                ? 0
                : this.state.tabContainerWith
            }px)`,
            width: `${
              this.state.tabContentWidth
                ? this.state.tabContentWidth + 'px'
                : '100%'
            }`
          }}
        >
          <TabContentWrapper
            activeTrigger="android"
            tabContainerWith={this.state.tabContainerWith}
          >
            <AndroidHowTo />
          </TabContentWrapper>
          <TabContentWrapper
            activeTrigger="ios"
            tabContainerWith={this.state.tabContainerWith}
          >
            <IOSHowTo />
          </TabContentWrapper>
        </div>
      );
    }
  }
);
