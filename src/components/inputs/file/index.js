import { h } from 'preact'
import Ink from 'react-ink'

import style from './styles.scss'

export default function FileInput({ id, label, customClass }) {
  return (
    <label
      class={`${style.fileInput} ${customClass ? customClass : ''}`}
      for={id}
    >
      <span>{label}</span>
      <input id={id} type="file" />
      <Ink />
    </label>
  )
}
