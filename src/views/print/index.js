import { h, Component } from 'preact';
import { connect } from 'unistore/preact';

import ParsedContent from '../chat';

export default connect('chat')(
  class Print extends Component {
    componentDidMount() {
      window.print();
    }

    render() {
      return <ParsedContent disableIntersectionObserver={true} />;
    }
  }
);
