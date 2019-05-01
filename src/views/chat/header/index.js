import { h, Component } from 'preact';
import { connect } from 'unistore/preact';
import { bind } from 'decko';

import HeaderInfo from './info';
import IconButton from '../../../components/icon-button';

import { actions } from '../../../store/store';

import style from './styles.scss';

export default connect(
  'isChatLoaded',
  actions
)(
  class Header extends Component {
    @bind
    cleanChatSession() {
      this.context.router.history.replace('/');
      this.props.resetChatData();
    }

    render() {
      return (
        <header class={`flex ${style.header}`}>
          <IconButton
            onClickExecute={this.cleanChatSession}
            icon="back"
            color="var(--color-accent)"
          />
          <HeaderInfo />
        </header>
      );
    }
  }
);
