import { h, Component } from 'preact';
import { connect } from 'unistore/preact';

import Header from './header';
import Chat from './chat';

import style from './styles.scss';

export default connect(['isChatLoaded', 'activeTab'])(
  class ParsedContent extends Component {
    componentDidMount() {
      if (!this.props.isChatLoaded) {
        this.context.router.history.replace('/');
      }
    }

    render({ activeTab }) {
      return (
        <div class={style.contentWrapper}>
          <Header />
          {/* // Here's an idea, avoid rerendering tab in order to also avoid reprocecing hundreds of UI elements (messages) again. 
          And would this be a problem with an infinte list? Test. */}
          {activeTab == 'chat' && <Chat />}
          {/* {activeTab == 'stats' && <Stats />} */}
        </div>
      );
    }
  }
);
