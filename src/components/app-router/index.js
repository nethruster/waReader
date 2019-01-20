import { h } from 'preact';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from '../../views/home';
import ParsedContent from '../../views/parsed-content';

export default function AppRouter() {
  return (
    <BrowserRouter>
      {/* 
      IMPORTANT THIS IS COMMENTED FOR DEV PURPOSES ONLY 
    */}
      {/* <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/chat" exact component={ParsedContent} />
      </Switch> */}
      <ParsedContent />
    </BrowserRouter>
  );
}
