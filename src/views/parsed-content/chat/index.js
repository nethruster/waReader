import { h } from 'preact';
import { connect } from 'unistore/preact';

import { actions } from '../../../store/store';

import UserMessage from './user-message';
import SystemMessage from './system-message';
import DateChip from './date-chip';

import style from './styles.scss';

function renderMessage(message) {
  if (message.author.toLowerCase() === 'system') {
    return <SystemMessage text={message.message} />;
  } else {
    return (
      <UserMessage
        text={message.message}
        time={message.time}
        author={message.author}
      />
    );
  }
}

function renderChat(chatData) {
  const messages = chatData.messages;
  let timeLineDay = messages[0].dateDay;

  let isNewDay = true;

  return messages.map((message, index) => {
    isNewDay = index === 0 || message.dateDay != timeLineDay;
    timeLineDay = message.dateDay;

    return (
      <span>
        {isNewDay && <DateChip dateText={message.dateString} />}
        {renderMessage(message)}
      </span>
    );
  });
}

export default connect(
  'chat',
  actions
)(function Chat({ chat }) {
  return (
    <div class={`flex flex-dc selectable-text ${style.messagesContainer}`}>
      {renderChat(chat)}
    </div>
  );
});
