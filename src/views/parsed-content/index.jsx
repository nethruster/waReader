import { h, Component } from 'preact';
import { connect } from 'unistore/preact';

import Header from './header';

export default connect('isChatLoaded')(
  class ParsedContent extends Component {
    componentDidMount() {
      if (!this.props.isChatLoaded) {
        this.context.router.history.replace('/');
      }
    }

    render() {
      return <Header />;
    }
  }
);
