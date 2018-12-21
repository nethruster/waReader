import { h } from 'preact'

import FileInput from '../../../components/inputs/file'

import style from './styles.scss'

export default function FileChooser() {
  return (
    <form class={style.uploadForm}>
      <FileInput
        id="file-chooser"
        label="Select A File"
        customClass={style.inputButton}
      />
    </form>
  )
}
