import { h } from 'preact'

import icons from '../../../../scripts/icons'

const style = require('./styles.scss')

interface QuickInfoContentProps {
    icon: string;
    title: string;
    text: string;
}

export default function QuiInfoContent({ icon, title, text }: QuickInfoContentProps) {
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
