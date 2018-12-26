import { h, Component } from 'preact';

import Home from './views/home';

// App is a Component instance to keep the hot reloading behaviour working
export default class App extends Component {
  refs: {};
  render() {
    return <Home />;
  }
}
