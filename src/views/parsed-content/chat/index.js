import { h } from 'preact';
import { connect } from 'unistore/preact';
import { COLOURS } from '../../../scripts/vars';

import { actions } from '../../../store/store';

import UserMessage from './user-message';
import SystemMessage from './system-message';
import DateChip from './date-chip';

import style from './styles.scss';

function renderMessage(
  message,
  isPreviousAuthor,
  isNextAuthor,
  userColour,
  isNewDay,
  isLastMessage
) {
  if (message.author.toLowerCase() === 'system') {
    return <SystemMessage text={message.message} />;
  } else {
    return (
      <UserMessage
        text={message.message}
        time={message.time}
        author={message.author}
        isPreviousAuthor={isPreviousAuthor}
        isNextAuthor={isNextAuthor}
        userColour={userColour}
        isNewDay={isNewDay}
        isLastMessage={isLastMessage}
      />
    );
  }
}

function renderChat(chatData) {
  const messages = chatData.messages;
  let timeLineDay = messages[0].dateDay;

  let isNewDay = true;
  let isPreviousAuthor = false;
  let isNextAuthor = false;
  let previousAuthor = '';
  let nextAuthor = '';
  let userAssignedColours = {};
  let userColour = '';
  let isLastMessage = false;

  return messages.map((message, index) => {
    isNewDay = index === 0 || message.dateDay != timeLineDay;
    timeLineDay = message.dateDay;
    isLastMessage = messages.length - 1 === index;

    if (
      !userAssignedColours[message.author] &&
      message.author.toLowerCase() !== 'system'
    ) {
      userAssignedColours[message.author] =
        COLOURS[Math.floor(Math.random() * COLOURS.length)];
    }

    userColour = userAssignedColours[message.author];

    if (messages[index + 1] && message.author.toLowerCase() !== 'system') {
      previousAuthor = messages[index + 1].author;

      isNextAuthor =
        message.author.toLowerCase() === previousAuthor.toLowerCase();
    }

    if (messages[index - 1] && message.author.toLowerCase() !== 'system') {
      nextAuthor = messages[index - 1].author;

      isPreviousAuthor =
        message.author.toLowerCase() === nextAuthor.toLowerCase();
    }

    return (
      <span>
        {isNewDay && <DateChip dateText={message.dateString} />}
        {renderMessage(
          message,
          isPreviousAuthor,
          isNextAuthor,
          userColour,
          isNewDay,
          isLastMessage
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
      {renderChat(chat)}
    </div>
  );
});
