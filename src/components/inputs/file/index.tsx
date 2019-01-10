import { h } from 'preact';

const style = require('./styles.scss');

interface FileInputProps {
  id: string;
  label: string;
  customClass: string;
  onChangeExecute: (event: Event) => void;
}

export default function FileInput({ id, label, customClass, onChangeExecute }: FileInputProps) {
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
