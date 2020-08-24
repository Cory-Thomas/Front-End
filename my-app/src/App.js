import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Signup from './Signup'
import Login from './Login'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import styled from 'styled-components';

export default function App() {
  return (
    <Router>
      <div>
      <Switch>
          <Route path="/Signup">
            <Signup />
          </Route>
          <Route path="/Login">
            <Login />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <nav>
          <div>
            <Link to='/'>Home</Link>
          </div>
          <div>
            <Link to='/Signup'>Signup</Link>
          </div>
          <div>
            <Link to='/Login'>Login</Link>
          </div>
        </nav>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}
