import * as React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { App } from './App';
import { Header } from './Header';
import './index.css';
import { ConcertsPage } from './pages/concerts/ConcertsPage';

class AppRouter extends React.Component {
  public render() {
    return (
      <Router>
        <div className="app">
          <Header />
          <Switch>
            <Route exact={true} path="/" component={App} />
            <Route exact={true} path="/concerts" component={ConcertsPage} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default AppRouter;