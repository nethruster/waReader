import { h } from 'preact';
import Ink from 'react-ink';

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
      <Ink />
    </div>
  );
}
