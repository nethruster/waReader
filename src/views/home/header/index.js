import { h } from 'preact'

import style from './styles.scss'

export default function Home() {
  return (
    <div class={`flex flex-full-center ${style.header}`}>
      <div class={style.headerLogo}>
        <img src="./assets/img/banner-white.svg" />
      </div>
    </div>
  )
}
