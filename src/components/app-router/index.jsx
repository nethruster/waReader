import { h } from 'preact';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from '../../views/home';

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Route path="/" component={Home} />
    </BrowserRouter>
  );
}
