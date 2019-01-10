import { h } from 'preact';

const style = require('./styles.scss');

export default function FileInput({ id, label, customClass, onChangeExecute }) {
  return (
    <label
      className={`${style.fileInput} ${customClass ? customClass : ''}`}
      for={id}
    >
      <span>{label}</span>
      <input onChange={onChangeExecute} id={id} type="file" />
    </label>
  );
}
