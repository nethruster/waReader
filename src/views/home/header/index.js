import { h } from 'preact'

import style from './styles.scss'

// Notice me file-loader (づ｡◕‿‿◕｡)づ
import whiteBanner from '../../../assets/img/banner-white.svg'

export default function Home() {
  return (
    <div class={`flex flex-full-center ${style.header}`}>
      <div class={style.headerLogo}>
        <img src={whiteBanner} />
      </div>
    </div>
  )
}
