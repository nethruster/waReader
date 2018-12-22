import { h, render } from 'preact';
import 'preact/debug';

import App from './app';
import './styles/index.scss';

const mountPoint = document.querySelector('#mount-point');

render(<App />, mountPoint, mountPoint.lastElementChild);
