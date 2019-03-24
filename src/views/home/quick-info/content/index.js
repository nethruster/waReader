import { h } from 'preact';

import Icon from '../../../../components/icon';

const style = require('./styles.scss');

export default function QuiInfoContent({ icon, title, text }) {
  return (
    <div>
      <h5 class="flex flex-full-center">
        <Icon name={icon} />
        &nbsp;{title}
      </h5>
      <p class={style.quickinfoContent}>{text}</p>
    </div>
  );
}
