import { h } from 'preact';

const style = require('./styles.scss');

export default function FileInput({
  id,
  label,
  customClass,
  onChangeExecute,
  onClickExecute
}) {
  return (
    <label
      class={`${style.fileInput} ${customClass ? customClass : ''}`}
      for={id}
    >
      <span>{label}</span>
      <input
        onChange={onChangeExecute}
        id={id}
        type="file"
        onClick={onClickExecute}
      />
    </label>
  );
}
