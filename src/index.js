import { h, Component, render } from 'preact'
import 'preact/debug'

import Home from './views/home'

import './styles/index.scss'

const mountPoint = document.querySelector('#mount-point')

// App is a Component instance to keep the hot reloading behaviour working
class App extends Component {
  render() {
    return <Home />
  }
}

render(<App />, mountPoint, mountPoint.lastElementChild)
