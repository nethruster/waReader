import { h, Component } from 'preact';
import { connect } from 'unistore/preact';

import Header from './header';
import Messages from './messages';

import style from './styles.scss';

export default connect(['isChatLoaded', 'activeTab'])(
  class ParsedContent extends Component {
    componentWillMount() {
      if (!this.props.isChatLoaded) {
        this.context.router.history.replace('/');
      }
    }

    render() {
      return (
        <div class={style.contentWrapper}>
          <Header />
          <Messages />
        </div>
      );
    }
  }
);
