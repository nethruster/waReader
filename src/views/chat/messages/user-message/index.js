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

    render({ userColour, message, isNewDay, activeUser }) {
      let isActiveUser = activeUser === message.author.toLowerCase();

      return (
        <Observer onChange={this.handleChange} rootMargin="0px 0px 200px 0px">
          {this.state.visibility ? (
            <span class="flex" data-active-user={isActiveUser}>
              <Message
                message={message}
                userColour={userColour}
                isNewDay={isNewDay}
                isActive={isActiveUser}
              />
            </span>
          ) : (
            <span>
              <MessagePlaceholder />
            </span>
          )}
        </Observer>
      );
    }
  }
);
