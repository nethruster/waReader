import { h, Component } from 'preact';
import { connect } from 'unistore/preact';
import { bind } from 'decko';

import { actions } from '../../../store/store';

import UserMessage from './user-message';
import SystemMessage from './system-message';
import DateChip from './date-chip';

import style from './styles.scss';

export default connect(
  'chat',
  actions
)(
  class Chat extends Component {
    renderMessageList() {
      const items = [];
      let timeLineDay = this.props.chat.messages[0].dateDay;
      let isNewDay = true;

      this.props.chat.messages.map((message, index) => {
        isNewDay = index === 0 || message.dateDay != timeLineDay;
        timeLineDay = message.dateDay;

        if (isNewDay) {
          items.push(<DateChip dateText={message.dateString} />);
        }

        // Idea: load first 1000 messages, and promt to load the next 1000
        // if (index <= 1000) {
        //    items.push(this.renderMessage(message, userColour, isNewDay));
        // }
        items.push(this.renderMessage(message, isNewDay));
      });

      return items;
    }

    @bind
    renderMessage(message, isNewDay) {
      if (message.author.toLowerCase() === 'system') {
        return <SystemMessage text={message.message.raw} />;
      } else {
        return (
          <UserMessage
            message={message}
            isNewDay={isNewDay}
            authorData={this.props.chat.authorList[message.author]}
          />
        );
      }
    }

    render() {
      return (
        <div
          id="messages-container"
          class={`flex flex-dc ${style.messagesContainer}`}
        >
          {this.renderMessageList()}
        </div>
      );
    }
  }
);
