import { h } from 'preact';

import htmlifyMessage from '../../../../scripts/htmlfy-message';
import computeUserInitials from '../../../../scripts/compute-user-initials';

import style from './styles.scss';

export default function UserMessage({
  text,
  time,
  author,
  isPreviousAuthor,
  isNextAuthor,
  userColour,
  isNewDay,
  isLastMessage
}) {
  return (
    <div
      class={`flex ${style.messageWrapper} ${
        isNextAuthor && !isLastMessage ? style.sameAuthorMessageContainer : ''
      }`}
    >
      {(!isNextAuthor || isLastMessage) && (
        <div class={style.authorPicture} style={{ color: userColour }}>
          <p>{computeUserInitials(author).toUpperCase()}</p>
        </div>
      )}
      <div class="flex flex-dc">
        <span class={`flex ${style.messageContainer} `}>
          <div class="flex flex-dc">
            {(!isPreviousAuthor || isNewDay) && (
              <span class={style.authorName} style={{ color: userColour }}>
                {author}
              </span>
            )}
            <span dir="ltr" class={style.message}>
              {htmlifyMessage(text)}
            </span>
          </div>
          <div class={style.time}>{time}</div>
        </span>
      </div>
    </div>
  );
}
