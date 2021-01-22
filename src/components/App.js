import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

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
      <h2>{message}</h2>
    </div>
  );
};

export default App;
