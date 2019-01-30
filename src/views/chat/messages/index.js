import { h, Component } from 'preact';
import { connect } from 'unistore/preact';
import { bind } from 'decko';
import Observer from '@researchgate/react-intersection-observer';

import { actions } from '../../../store/store';
import { COLOURS } from '../../../scripts/vars';

import UserMessage from './user-message';
import SystemMessage from './system-message';
import DateChip from './date-chip';

import style from './styles.scss';

export default connect(
  'chat',
  actions
)(
  class Chat extends Component {
    constructor(props) {
      super(props);

      this.userAssignedColours = [];
    }

    componentWillMount() {
      this.assignUserColours();
    }

    assignUserColours() {
      return new Promise((resolve, reject) => {
        this.props.chat.authorList.forEach(author => {
          this.userAssignedColours[author] =
            COLOURS[Math.floor(Math.random() * COLOURS.length)];
        });

        resolve();
      });
    }

    renderMessageList() {
      const items = [];
      let timeLineDay = this.props.chat.messages[0].dateDay;
      let isNewDay = true;
      let userColour = '';

      this.props.chat.messages.map((message, index) => {
        isNewDay = index === 0 || message.dateDay != timeLineDay;
        timeLineDay = message.dateDay;
        userColour = this.userAssignedColours[message.author];

        if (isNewDay) {
          items.push(<DateChip dateText={message.dateString} />);
        }
        items.push(this.renderMessage(message, userColour, isNewDay));
      });

      return items;
    }

    renderMessage(message, userColour, isNewDay) {
      if (message.author.toLowerCase() === 'system') {
        return <SystemMessage text={message.message} />;
      } else {
        return (
          <UserMessage
            userColour={userColour}
            message={message}
            isNewDay={isNewDay}
          />
        );
      }
    }

    render() {
      return (
        <div
          id="messages-container"
          class={`flex flex-dc selectable-text ${style.messagesContainer}`}
        >
          {this.renderMessageList()}
        </div>
      );
    }
  }
);
