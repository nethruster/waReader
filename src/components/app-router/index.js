import { h } from 'preact';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from '../../views/home';
import Chat from '../../views/chat';

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Chat} />
        <Route path="/chat" exact component={Chat} />
      </Switch>
    </BrowserRouter>
  );
}
