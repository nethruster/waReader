import { h } from 'preact';

import UserPicture from './user-picture';
import UserName from './user-name';
import MessageTime from './time';
import MessageContent from './content';

import style from './styles.scss';

export default function Message({ message, userColour, isNewDay }) {
  return (
    <div
      class={`flex ${style.messageWrapper} ${
        message.isNextAuthor ? style.sameAuthorMessageContainer : ''
      }`}
    >
      {!message.isNextAuthor && <UserPicture name={message.author} />}
      <div class="flex flex-dc">
        <span class={`flex ${style.messageContainer} `}>
          <div class="flex flex-dc">
            {(!message.isPreviousAuthor || isNewDay) && (
              <UserName name={message.author} />
            )}
            <MessageContent content={message.message} />
          </div>
          <MessageTime time={message.time} />
        </span>
      </div>
    </div>
  );
}
