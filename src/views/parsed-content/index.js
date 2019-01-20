import { h, Component } from 'preact';
import { connect } from 'unistore/preact';

import Header from './header';
import Chat from './chat';

export default connect(['isChatLoaded', 'activeTab'])(
  class ParsedContent extends Component {
    componentDidMount() {
      if (!this.props.isChatLoaded) {
        this.context.router.history.replace('/');
      }
    }

    render({ activeTab }) {
      return (
        <div>
          <Header />
          {activeTab == 'chat' && <Chat />}
          {/* {activeTab == 'stats' && <Stats />} */}
        </div>
      );
    }
  }
);
