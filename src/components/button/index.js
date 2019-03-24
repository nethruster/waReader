import { h } from 'preact';

const style = require('./styles.scss');

export default function Button({
  text = 'A Button',
  type = 'default',
  onClickExecute = () => {},
  customClass,
  disabled
}) {
  return (
    <div
      title={text}
      aria-label={text}
      type={type}
      class={`${style.button} ${customClass ? customClass : ''}`}
      onClick={onClickExecute}
      disabled={disabled}
    >
      <span>{text}</span>
    </div>
  );
}
