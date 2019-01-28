import { h } from 'preact';

import htmlifyMessage from '../../../../scripts/htmlfy-message';
import computeUserInitials from '../../../../scripts/compute-user-initials';

import style from './styles.scss';

export default function UserMessage({ userColour, message, isNewDay }) {
  return (
    <div
      class={`flex ${style.messageWrapper} ${
        message.isNextAuthor ? style.sameAuthorMessageContainer : ''
      }`}
    >
      {!message.isNextAuthor && (
        <div class={style.authorPicture} style={{ color: userColour }}>
          <p>{computeUserInitials(message.author).toUpperCase()}</p>
        </div>
      )}
      <div class="flex flex-dc">
        <span class={`flex ${style.messageContainer} `}>
          <div class="flex flex-dc">
            {(!message.isPreviousAuthor || isNewDay) && (
              <span class={style.authorName} style={{ color: userColour }}>
                {message.author}
              </span>
            )}
            <span dir="ltr" class={style.message}>
              {htmlifyMessage(message.message)}
            </span>
          </div>
          <div class={style.time}>{message.time}</div>
        </span>
      </div>
    </div>
  );
}
