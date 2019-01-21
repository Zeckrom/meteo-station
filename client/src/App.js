import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import Auth from './auth'
import Dashboard from './dashboard'
import './App.css';

class App extends Component {
  render() {
    const redirectToLandingPage = () => <Redirect to="/login" />
    return (
      <div className="App">
        <Switch>
          <Route exact path={'/login'} component={Auth} />
          <Route exact path={'/dashboard'} component={Dashboard} />
          <Route render={redirectToLandingPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
