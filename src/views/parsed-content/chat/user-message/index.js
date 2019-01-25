import { h } from 'preact';

import style from './styles.scss';

function computeUserInitials(name) {
  if (name.charAt(0) == '+') {
    return '#';
  } else {
    let nameArray = name.split(' ');
    let isNameArray = nameArray.length > 1;

    if (isNameArray) {
      return nameArray.reduce(
        (previousValue, currentValue) =>
          previousValue.charAt(0) + currentValue.charAt(0)
      );
    } else {
      return name.charAt(0);
    }
  }
}

export default function UserMessage({
  text,
  time,
  author,
  isPreviousAuthor,
  isNextAuthor,
  userColour
}) {
  return (
    <div
      class={`flex ${style.messageWrapper} ${
        isNextAuthor ? style.sameAuthorMessageContainer : ''
      }`}
    >
      {!isNextAuthor && (
        <div class={style.authorPicture} style={{ color: userColour }}>
          {computeUserInitials(author).toUpperCase()}
        </div>
      )}
      <div class="flex flex-dc">
        <span class={`flex ${style.messageContainer} `}>
          <div class="flex flex-dc">
            {!isPreviousAuthor && (
              <span class={style.authorName} style={{ color: userColour }}>
                {author}
              </span>
            )}
            <span dir="ltr" class={style.message}>
              {text}
            </span>
          </div>
          <div class={style.time}>{time}</div>
        </span>
      </div>
    </div>
  );
}
