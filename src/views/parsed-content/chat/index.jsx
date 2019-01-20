import { h } from 'preact';
import { connect } from 'unistore/preact';

import { actions } from '../../../store/store';

import UserMessage from './user-message';
import SystemMessage from './system-message';

import style from './styles.scss';

function renderChat(messageList) {
  let timeLineDate = messageList[0].date;
  // TODO: parse date and render new day tag when necesary
  return messageList.map(message => {
    if (message.author.toLowerCase() === 'system') {
      return <SystemMessage message={message} />;
    } else {
      return <UserMessage message={message} />;
    }
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
