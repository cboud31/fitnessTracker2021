import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Routines, Exercises, Dashboard } from '../components';

import { getSomething } from '../api';

const App = () => {
  const [message, setMessage] = useState('Hello');

  // useEffect(() => {
  //   getSomething()
  //     .then((response) => {
  //       setMessage(response.message);
  //     })
  //     .catch((error) => {
  //       setMessage(error.message);
  //     });
  // });

  return (
    <div className="App">
      <Router>
        {/* <Header /> */}
        <Switch>
          <Route exact path="/routines">
            <Routines />
          </Route>

          <Route exact path="/exercises">
            <Exercises />
          </Route>

          <Route exact path="/dashboard">
            <Dashboard />
          </Route>

          <Route exact path="/">
            <h2>This if the home and/or fallback page.</h2>
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
