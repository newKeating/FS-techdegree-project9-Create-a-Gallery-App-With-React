import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Header from './components/Header';
import Container from './components/Container';
import NotFound from './components/NotFound';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Route component={Header} />
          <Switch>
            <Route exact path="/" render={ () => <Redirect to={'/search'} />} />
            <Route exact path="/search" component={Container} />
            <Route path="/search/:searchText" component={Container} />
            <Route path="/search/cat" component={Container} />
            <Route path="/search/dog" component={Container} />
            <Route path="/search/coffee" component={Container} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
