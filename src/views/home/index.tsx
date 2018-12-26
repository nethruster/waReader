import { h } from 'preact';

import FileChooser from './file-chooser';

import Header from './header';
import QuickInfo from './quick-info';
import HowTo from './howto';

const style = require('./styles.scss');

export default function Home() {
  return (
    <div className={`flex ${style.wrapper}`}>
      <div className={style.backgroundContainer} />
      <Header />
      <div className={style.content}>
        <p className={style.introDescription}>
          Select a WhatsApp text (.txt) file and view it in a nice, clean,
          readable format.
        </p>
        <FileChooser />
        <p className={`text-center ${style.guideLink}`}>
          <a href="#">Not sure what to do?</a>
        </p>
        <QuickInfo />
        <HowTo />
      </div>
    </div>
  );
}
