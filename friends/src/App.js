import React from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';

import Login from './components/Login';
import Friends from './components/Friends';
import './App.css';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <Router>
      <div className="App">
      <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/protected">Protected Page</Link>
          </li>
        </ul>
        <Switch>
          <PrivateRoute path='/protected' component={Friends}/>
          <Route path='/login' component={Login} />
          <Route component={login} />
        </Switch>
      </div>
    </Router>
    

  );
}

export default App;
