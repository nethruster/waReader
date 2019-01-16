import { h, Component } from 'preact';
import { connect } from 'unistore/preact';

export default connect('isChatLoaded')(
  class ParsedContent extends Component {
    componentWillMount() {
      if (!this.props.isChatLoaded) {
        this.context.router.history.replace('/');
      }
    }
    render() {
      return <p>Chat</p>;
    }
  }
);
