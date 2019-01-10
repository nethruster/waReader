import { h, render, Component } from 'preact';
import { Provider} from 'unistore/preact'
import 'preact/debug';

import App from './app';
import './styles/index.scss';

import { store } from "./store/store";

const mountPoint = document.querySelector('#mount-point');

class AppWrapper extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

render(<AppWrapper />, mountPoint, mountPoint.lastElementChild);
