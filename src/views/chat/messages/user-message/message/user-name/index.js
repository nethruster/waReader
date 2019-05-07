import { h, Component } from 'preact';
import { connect } from 'unistore/preact';
import { bind } from 'decko';

import { actions } from '../../../../../../store/store';

import style from './styles.scss';

export default connect(
  'activeUser',
  actions
)(
  class UserName extends Component {
    @bind
    handleUserPictureClick(event) {
      const newUser = this.props.name.toLowerCase();
      const isNewUserTheCurrentUser = newUser === this.props.activeUser;

      isNewUserTheCurrentUser
        ? this.props.setActiveUser('')
        : this.props.setActiveUser(newUser);
    }

    render({ name, userColor }) {
      return (
        <span
          class={style.authorName}
          style={{ color: userColor }}
          onClick={this.handleUserPictureClick}
        >
          {name}
        </span>
      );
    }
  }
);
