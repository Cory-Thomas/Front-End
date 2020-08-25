import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Signup from './Signup'
import Login from './Login'
import Profile from './Profile';
import Explore from './Explore';
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
          <Route path="/Profile">
            <Profile />
          </Route>
          <Route path="/Explore">
            <Explore />
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
          <div>
            <Link to='/Profile'>Profile</Link>
          </div>
          <div>
            <Link to='/Explore'>Explore</Link>
          </div>
      </nav>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Get Started</h2>;
}
