import { h, Component } from 'preact';
import { bind } from 'decko';
import { connect } from 'unistore/preact';

import AndroidHowTo from './platforms/android';
import IOSHowTo from './platforms/iOS';

import { actions } from '../../../store/store';

const style = require('./styles.scss');

export default connect(
  'activeHomeTab',
  actions
)(
  class HowTo extends Component {
    constructor(props) {
      super(props);

      this.state = {
        tabContainerWith: 0,
        tabContentWidth: 0,
        tabAmmount: 0
      };
    }

    @bind
    handleSetActiveHomeTabFromTabClick(event) {
      let tabName = event.target.dataset.triggers;
      this.props.setActiveHomeTab(tabName);
    }

    componentDidMount() {
      const tabContentWidth =
        this.tabContentWrapper.getBoundingClientRect().width *
        this.tabList.childElementCount;

      this.setState({
        tabContentWidth,
        tabContainerWith: this.tabContentWrapper.getBoundingClientRect().width,
        tabAmmount: this.tabList.childElementCount
      });
    }

    render() {
      return (
        <div class={style.wrapper}>
          <h4 class={`text-center ${style.howtoTitle}`}>
            How to export a Whatsapp chat?
          </h4>
          <ul class="flex flex-main-center" ref={el => (this.tabList = el)}>
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
          <div
            class={`flex ${style.platformTabWrapper}`}
            ref={el => (this.tabContentWrapper = el)}
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
            <div
              style={{
                width: `${
                  this.state.tabContainerWith
                    ? this.state.tabContainerWith + 'px'
                    : '100%'
                }`
              }}
              class={`${style.platformTab} ${
                this.props.activeHomeTab == 'android' ? style.active : ''
              }`}
            >
              <AndroidHowTo />
            </div>
            <div
              style={{
                width: `${
                  this.state.tabContainerWith
                    ? this.state.tabContainerWith + 'px'
                    : '100%'
                }`
              }}
              class={`${style.platformTab} ${
                this.props.activeHomeTab == 'ios' ? style.active : ''
              }`}
            >
              <IOSHowTo />
            </div>
          </div>
        </div>
      );
    }
  }
);
