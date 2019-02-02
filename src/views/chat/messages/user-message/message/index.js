import { h } from 'preact';
import { connect } from 'unistore/preact';

import UserPicture from './user-picture';
import UserName from './user-name';
import MessageTime from './time';
import MessageContent from './content';

import '../../../../../scripts/long-press-event';
import { actions } from '../../../../../store/store';

import style from './styles.scss';

export default connect(
  'activeUser',
  actions
)(
  class Message {
    componentDidMount() {
      this.messageElement.addEventListener('long-press', event => {
        let newUser = this.props.message.author.toLowerCase();
        this.props.setActiveUser(newUser);
      });
    }

    render({ message, isNewDay, isActive, authorData }) {
      return (
        <div
          ref={el => {
            this.messageElement = el;
          }}
          class={`flex ${style.messageWrapper} ${
            message.isNextAuthor ? style.sameAuthorMessageContainer : ''
          }`}
          data-active={isActive}
          data-long-press-delay="100"
        >
          {!isActive && !message.isNextAuthor && (
            <UserPicture user={authorData} isActive={isActive} />
          )}
          <div class="flex flex-dc">
            <span
              class={`flex ${style.messageContainer}`}
              data-active={isActive}
            >
              <div class="flex flex-dc">
                {!isActive && (!message.isPreviousAuthor || isNewDay) && (
                  <UserName name={message.author} />
                )}
                <MessageContent content={message.message.html} />
              </div>
              <MessageTime isActive={isActive} time={message.time} />
            </span>
          </div>
        </div>
      );
    }
  }
);
