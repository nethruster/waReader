import { h } from 'preact';
import { connect } from 'unistore/preact';

import { actions } from '../../../store/store';

import UserMessage from './user-message';
import SystemMessage from './system-message';
import DateChip from './date-chip';

import style from './styles.scss';

function renderMessage(isSystemMessage, text, time) {
  if (isSystemMessage) {
    return <SystemMessage text={text} />;
  } else {
    return <UserMessage text={text} time={time} />;
  }
}

// TODO: refactor, remove any operations from chat messages iteration. presentational element, no hard logic
function renderChat(messageList) {
  let timeLineDate = new Date(messageList[0].date);
  let timeLineDay = timeLineDate.getDay();

  let messageDate = new Date();
  let messageTime = '';
  let dateString = '';
  let messageDateDay = 0;
  let isNewDay = true;
  let isSystemMessage = false;
  let messageText = '';

  return messageList.map((message, index) => {
    messageDate = new Date(message.date);
    messageTime = messageDate
      .toLocaleTimeString('en-GB', { hc: 'h24' })
      .replace(/(:\d{2}| [AP]M)$/, '');
    dateString = messageDate.toLocaleDateString('en-GB');
    messageDateDay = messageDate.getDay();
    isNewDay = index === 0 || messageDateDay != timeLineDay;
    isSystemMessage = message.author.toLowerCase() == 'system';
    messageText = message.message;

    timeLineDay = messageDateDay;

    return (
      <span>
        {isNewDay && <DateChip dateText={dateString} />}
        {renderMessage(isSystemMessage, messageText, messageTime)}
        {index == messageList.length - 1 && (
          <p class="text-center">End of chat</p>
        )}
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
      {renderChat(chat.messages)}
    </div>
  );
});
