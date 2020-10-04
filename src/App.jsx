import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.scss';
import routes from './constants/routes';
import Home from './components/pages/Home';
import Notes from './components/pages/Notes';
import Note from './components/pages/Note';
import NoteEdit from './components/pages/NoteEdit';

function App() {
  return (
    <Switch>
      <Route path={routes.HOME()} exact component={Home} />
      <Route path={routes.NOTES()} exact component={Notes} />
      <Route path={routes.NOTE()} exact component={Note} />
      <Route path={routes.NOTE_EDIT()} exact component={NoteEdit} />
    </Switch>
  );
}

export default App;
