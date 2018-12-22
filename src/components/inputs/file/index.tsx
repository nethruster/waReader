import { h } from 'preact'

const style = require('./styles.scss')

interface FileInputProps {
    id: string;
    label: string;
    customClass: string;
}

export default function FileInput({id, label, customClass}: FileInputProps) {
  return (
    <label
      class={`${style.fileInput} ${customClass ? customClass : ''}`}
      for={id}
    >
      <span>{label}</span>
      <input id={id} type="file" />
    </label>
  )
}
