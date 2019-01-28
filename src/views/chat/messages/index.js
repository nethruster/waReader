import { h, Component } from 'preact';
import { connect } from 'unistore/preact';
import { bind } from 'decko';
import ScrollViewport from 'preact-scroll-viewport';

import { actions } from '../../../store/store';
import { COLOURS } from '../../../scripts/vars';

import UserMessage from './user-message';
import SystemMessage from './system-message';
import DateChip from './date-chip';

import style from './styles.scss';

function renderMessage(message, userColour, isNewDay) {
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

export default connect(
  'chat',
  actions
)(
  class Chat extends Component {
    constructor(props) {
      super(props);

      this.userAssignedColours = [];
      this.renderList = this.populateItemList();
    }

    componentWillMount() {
      this.assignUserColours();
      this.populateItemList();
    }

    assignUserColours() {
      this.props.chat.authorList.forEach(author => {
        this.userAssignedColours[author] =
          COLOURS[Math.floor(Math.random() * COLOURS.length)];
      });
    }

    populateItemList() {
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
        items.push(renderMessage(message, userColour, isNewDay));
      });

      return items;
    }

    render() {
      return (
        <div class={`flex flex-dc selectable-text ${style.messagesContainer}`}>
          <ScrollViewport rowHeight={67}>{this.renderList}</ScrollViewport>
        </div>
      );
    }
  }
);
