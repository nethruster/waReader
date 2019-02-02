import { h, Component } from 'preact';
import { connect } from 'unistore/preact';
import { bind } from 'decko';

import { actions } from '../../../../../../store/store';

import style from './styles.scss';

export default connect(
  'activeUser',
  actions
)(
  class UserPicture extends Component {
    @bind
    handleUserPictureClick(event) {
      let newUser = this.props.user.name.toLowerCase();
      this.props.setActiveUser(newUser);
    }

    render({ user, isActive }) {
      return (
        <div
          class={style.authorPicture}
          onClick={this.handleUserPictureClick}
          data-active={isActive}
        >
          <p>{user.initials.toUpperCase()}</p>
        </div>
      );
    }
  }
);
