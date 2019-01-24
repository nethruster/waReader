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

export default function UserMessage({ text, time, author }) {
  return (
    <div class={`flex ${style.messageWrapper}`}>
      <div class={style.authorPicture}>
        {computeUserInitials(author).toUpperCase()}
      </div>
      <div class="flex flex-dc">
        <span dir="ltr" class={`flex flex-dc ${style.messageContainer}`}>
          <span class={style.authorName}>{author}</span>
          <span class={style.message}>{text}</span>
        </span>
        <span class={style.date}>{time}</span>
      </div>
    </div>
  );
}
