import { h, Component } from 'preact';
import { connect } from 'unistore/preact';

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

    componentWillReceiveProps() {
      const tabContentWidth =
        this.tabContentWrapper.getBoundingClientRect().width *
        this.props.tabCount;

      this.setState({
        tabContentWidth,
        tabContainerWith: this.tabContentWrapper.getBoundingClientRect().width
      });
    }

    render() {
      return (
        <div
          class={`flex ${style.platformTabWrapper}`}
          ref={el => (this.tabContentWrapper = el)}
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
