import { h } from 'preact'

import icons from '../../../../scripts/icons'

import style from './styles.scss'

export default function QuiInfoContent({ icon, title, text }) {
  return (
    <div>
      <h5 class="flex flex-full-center">
        <svg style="width:24px;height:24px" viewBox="0 0 24 24">
          <path d={icons[`${icon}`]} />
        </svg>
        &nbsp;{title}
      </h5>
      <p class={style.quickinfoContent}>{text}</p>
    </div>
  )
}
