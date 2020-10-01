import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.scss';
import routes from './constants/routes';
import Home from './components/pages/Home';
import Notes from './components/pages/Notes';

function App() {
  return (
    <Switch>
      <Route path={routes.HOME} exact component={Home} />
      <Route path={routes.NOTES} exact component={Notes} />
    </Switch>
  );
}

export default App;
