import { h } from 'preact';
import { connect } from 'unistore/preact';

import Icon from '../../../../components/icon';
import IconButton from '../../../../components/icon-button';

import { actions } from '../../../../store/store';

import style from './styles.scss';

export default connect(
  'chat',
  actions
)(function HeaderInfo({ chat }) {
  return (
    <div class={`flex flex-sb flex-cross-center`}>
      <div class={`flex ${style.infoContainer}`}>
        <div class={style.iconWrapper}>
          <span class={style.icon}>
            <Icon name="group-outline" color="var(--color-primary)" />
          </span>
        </div>
        <div class="flex flex-dc flex-main-center">
          <p class={style.title}>Group Chat</p>
          <p class={style.subtitle}>{chat.authorList.length} participants</p>
        </div>
      </div>
      <IconButton icon="printer" color="var(--color-accent)" />
    </div>
  );
});
