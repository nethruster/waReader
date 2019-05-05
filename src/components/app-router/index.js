import { h } from 'preact';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from '../../views/home';
import Chat from '../../views/chat';
import Print from '../../views/print';

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/chat" exact component={Chat} />
        <Route path="/print" exact component={Print} />
      </Switch>
    </BrowserRouter>
  );
}
