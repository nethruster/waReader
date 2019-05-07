import { h } from 'preact';

import FileChooser from './file-chooser';

import Header from './header';
import QuickInfo from './quick-info';
import HowTo from './howto';

const style = require('./styles.scss');

export default function Home() {
  window.scrollTo(0, 0);
  return (
    <div class={`flex flex-main-center ${style.wrapper}`}>
      <div class={style.backgroundContainer} />
      <Header />
      <div class={style.content}>
        <p class={style.introDescription}>
          Select a WhatsApp text (.txt) file and view it in a nice, clean,
          readable format.
        </p>
        <FileChooser />
        <QuickInfo />
        <HowTo />
      </div>
    </div>
  );
}
