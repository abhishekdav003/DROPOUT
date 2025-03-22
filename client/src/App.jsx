
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './router/Routes';  // Import your custom Routes component

const App = () => {
  return (
    <Router>
      <Routes />
    </Router>
  );
};

export default App;
