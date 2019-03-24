import { h } from 'preact';

import Icon from '../icon';

const style = require('./styles.scss');

export default function Button({
  type = 'default',
  size = 24,
  color,
  icon,
  onClickExecute = () => {},
  customClass,
  disabled
}) {
  return (
    <button
      type={type}
      class={`${style.iconButton} ${customClass ? customClass : ''}`}
      onClick={onClickExecute}
      disabled={disabled}
    >
      <Icon name={icon} size={size} color={color} />
    </button>
  );
}
