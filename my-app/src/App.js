import React, {useState} from "react";


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

export default function App() {

  const [loggedInUser, setLoggedInUser] = useState({})

  return (
    <Router>
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
      <div>
      <Switch>
          <Route path="/Signup">
            <Signup />
          </Route>
          <Route path="/Login">
            <Login setLoggedInUser = {setLoggedInUser} />
          </Route>
          <Route path="/Profile">
            <Profile loggedInUser = {loggedInUser} setLoggedInUser = {setLoggedInUser} />
          </Route>
          <Route path="/Explore">
            <Explore />
          </Route>
          <Route path="/">
            <Home />
          </Route>
      </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <div>
    <h1>Expat Journal</h1> 
      <p>Show off the places you've been and remember them for yourself.</p>
      <p>Share your amazing pics and stories from around the world. </p>
      <p>Signup or login now to get started!</p>
      <button>Signup</button> <button>Login</button>
    </div>;
}
