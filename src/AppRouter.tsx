import * as React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { App } from './App';
import { Games } from './Games';
import { Header } from './Header';
import './index.css';

class AppRouter extends React.Component {
  public render() {
    return (
      <Router>
        <div className="app">
          <Header />
          <Switch>
            <Route exact={true} path="/" component={App} />
            <Route exact={true} path="/games" component={Games} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default AppRouter;