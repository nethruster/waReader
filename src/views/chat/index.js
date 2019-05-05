import { h, Component } from 'preact';
import { connect } from 'unistore/preact';

import Header from './header';
import Messages from './messages';

import style from './styles.scss';

export default connect(['isChatLoaded', 'activeTab'])(
  class ParsedContent extends Component {
    componentWillMount() {
      if (!this.props.isChatLoaded && !this.props.disableIntersectionObserver) {
        this.context.router.history.push('/');
      }
    }

    render({ isChatLoaded, disableIntersectionObserver }) {
      return (
        <div class={style.contentWrapper}>
          {!disableIntersectionObserver && <Header />}
          {(isChatLoaded || disableIntersectionObserver) && <Messages />}
        </div>
      );
    }
  }
);
