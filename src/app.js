import SettingsContext from './context/settings/context';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ToDo from "./components/todo/todo";
import Header from "./components/header/Header";
import Settings from './components/settings/Settings';
import './app.scss'

export default class App extends React.Component {
  render() {
    return (
      <SettingsContext>
        <Header />
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <ToDo />
            </Route>
            <Route exact path="/settings">
              <Settings />
            </Route>
          </Switch>
        </BrowserRouter>
      </SettingsContext>
    );
  }
}
