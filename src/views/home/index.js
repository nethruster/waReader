import { h } from 'preact'

import FileChooser from './file-chooser'

import Header from './header'
import QuickInfo from './quick-info'

import style from './styles.scss'

export default function Home() {
  return (
    <div class={style.wrapper}>
      <div class={style.backgroundContainer} />
      <Header />
      <div class={style.content}>
        <p class={style.introDescription}>
          Select a WhatsApp text (.txt) file and view it in a nice, clean,
          readable format.
        </p>
        <FileChooser />
        <p class={`text-center ${style.guideLink}`}>
          <a href="#">Not sure what to do?</a>
        </p>
        <QuickInfo />
      </div>
    </div>
  )
}
