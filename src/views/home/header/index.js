import { h } from 'preact';

const style = require('./styles.scss');

export default function HomeHeader() {
  return (
    <header class={`flex flex-full-center ${style.header}`}>
      <div class={style.headerLogo}>
        <img src="./assets/img/banner-white.svg" />
      </div>
    </header>
  );
}
