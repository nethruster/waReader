import { h, Component } from 'preact';
import Observer from '@researchgate/react-intersection-observer';
import { bind } from 'decko';

import Message from './message';

import MessagePlaceholder from './message-placeholder';

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
          <span>
            <Message
              message={message}
              userColour={userColour}
              isNewDay={isNewDay}
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
