import { h, Component } from 'preact';
import Observer from '@researchgate/react-intersection-observer';
import { bind } from 'decko';

import htmlifyMessage from '../../../../scripts/htmlfy-message';
import computeUserInitials from '../../../../scripts/compute-user-initials';

import style from './styles.scss';

export default class UserMessage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visibility: false
    };
  }

  @bind
  handleChange(event) {
    this.setState({
      visibility: Boolean(event.isIntersecting)
    });
  }

  render({ userColour, message, isNewDay }) {
    return (
      <Observer onChange={this.handleChange} rootMargin="0px 0px 200px 0px">
        {this.state.visibility ? (
          <div
            class={`flex ${style.messageWrapper} ${
              message.isNextAuthor ? style.sameAuthorMessageContainer : ''
            }`}
          >
            {!message.isNextAuthor && (
              <div class={style.authorPicture} style={{ color: userColour }}>
                <p>{computeUserInitials(message.author).toUpperCase()}</p>
              </div>
            )}
            <div class="flex flex-dc">
              <span class={`flex ${style.messageContainer} `}>
                <div class="flex flex-dc">
                  {(!message.isPreviousAuthor || isNewDay) && (
                    <span
                      class={style.authorName}
                      style={{ color: userColour }}
                    >
                      {message.author}
                    </span>
                  )}
                  <span dir="ltr" class={style.message}>
                    {htmlifyMessage(message.message)}
                  </span>
                </div>
                <div class={style.time}>{message.time}</div>
              </span>
            </div>
          </div>
        ) : (
          <div
            class={`flex ${style.messageWrapper} ${
              style.sameAuthorMessageContainer
            }`}
          >
            <span class={`flex ${style.messagePlaceholder}`}>
              Loading Message...
            </span>
          </div>
        )}
      </Observer>
    );
  }
}
