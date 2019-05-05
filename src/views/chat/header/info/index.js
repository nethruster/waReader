import { h, Component } from 'preact';
import { connect } from 'unistore/preact';
import { bind } from 'decko';

import Icon from '../../../../components/icon';
import IconButton from '../../../../components/icon-button';

import { actions } from '../../../../store/store';

import style from './styles.scss';

export default connect(
  ['chat', 'activeUser'],
  actions
)(
  class HeaderInfo extends Component {
    @bind
    windowPrint() {
      sessionStorage.setItem('chat', JSON.stringify(this.props.chat));
      sessionStorage.setItem(
        'activeUser',
        JSON.stringify(this.props.activeUser)
      );
      window.open('/print', '_blank');
    }

    render({ chat }) {
      const participantCount = Object.keys(chat.authorList).length;
      return (
        <div
          class={`flex flex-sb flex-cross-center ${style.headerInfoWrapper}`}
        >
          <div class={`flex ${style.infoContainer}`}>
            <div class={style.iconWrapper}>
              <span class={style.icon}>
                <Icon name="group-outline" color="var(--color-primary)" />
              </span>
            </div>
            <div
              class={`flex flex-dc flex-main-center ${
                style.infoDetailsWrapper
              }`}
            >
              <p class={style.title}>
                {participantCount > 2 ? 'Group Chat' : 'Chat'}
              </p>
              <p class={style.subtitle}>{participantCount} participants</p>
              <p class={style.subtitle}>
                {Object.keys(chat.messages).length} messages
              </p>
            </div>
          </div>
          <IconButton
            onClickExecute={this.windowPrint}
            icon="printer"
            color="var(--color-accent)"
          />
        </div>
      );
    }
  }
);
