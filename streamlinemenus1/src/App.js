import React from 'react';
import Page from './components/Page';
import Home from './components/Home';
import ErrorPage from './components/ErrorPage'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/menus/:id" component={Page}/>
        <Route component={ErrorPage}/>
      </Switch>
    </Router>
  );
}

export default App;