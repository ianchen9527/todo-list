import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.scss';
import routes from './constants/routes';
import Home from './components/Home';

function App() {
  return (
    <Switch>
      <Route path={routes.HOME} exact component={Home} />
    </Switch>
  );
}

export default App;
