import { h, Component } from 'preact';
import Observer from '@researchgate/react-intersection-observer';
import { bind } from 'decko';
import { connect } from 'unistore/preact';

import Message from './message';
import MessagePlaceholder from './message-placeholder';

import './styles.scss';

export default connect('activeUser')(
  class UserMessage extends Component {
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

    render({
      message,
      isNewDay,
      activeUser,
      authorData,
      intersectionObserver
    }) {
      if (!isActiveUser && JSON.parse(sessionStorage.getItem('activeUser'))) {
        activeUser = JSON.parse(sessionStorage.getItem('activeUser'));
      }

      let isActiveUser = activeUser === message.author.toLowerCase();

      if (intersectionObserver) {
        return (
          <Observer onChange={this.handleChange} rootMargin="0px 0px 200px 0px">
            {this.state.visibility ? (
              <span class="flex" data-active-user={isActiveUser}>
                <Message
                  message={message}
                  isNewDay={isNewDay}
                  isActive={isActiveUser}
                  authorData={authorData}
                />
              </span>
            ) : (
              <span>
                <MessagePlaceholder />
              </span>
            )}
          </Observer>
        );
      } else {
        return (
          <div>
            <span class="flex" data-active-user={isActiveUser}>
              <Message
                message={message}
                isNewDay={isNewDay}
                isActive={isActiveUser}
                authorData={authorData}
              />
            </span>
          </div>
        );
      }
    }
  }
);
