import { h } from 'preact';
import { connect } from 'unistore/preact';
import ScrollViewport from 'preact-scroll-viewport';

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

function renderChat(messageList) {
  let timeLineDay = messageList[0].dateDay;

  let isNewDay = true;
  let isSystemMessage = false;

  return messageList.map((message, index) => {
    isNewDay = index === 0 || message.dateDay != timeLineDay;
    isSystemMessage = message.author.toLowerCase() == 'system';

    timeLineDay = message.dateDay;

    return (
      <span>
        {isNewDay && <DateChip dateText={message.dateString} />}
        {renderMessage(isSystemMessage, message.message, message.time)}
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
    <ScrollViewport
      defaultRowHeight={76}
      class={`flex flex-dc selectable-text ${style.messagesContainer}`}
    >
      {renderChat(chat.messages)}
    </ScrollViewport>
  );
});
