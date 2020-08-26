import React, {useState} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Signup from './Signup'
import Login from './Login'
import Profile from './Profile';
import Explore from './Explore';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';

export default function App() {

  const [loggedInUser, setLoggedInUser] = useState({})

  return (
    <Router>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Expat Journal</NavbarBrand>
          <Nav>
            <NavLink href='/'>Home</NavLink>
          </Nav>
          <Nav>
            <NavLink href='/Profile'>Profile</NavLink>
          </Nav>
          <Nav>
            <NavLink href='/Explore'>Explore</NavLink>
          </Nav>
          <UncontrolledDropdown>
              <DropdownToggle nav caret>
                Get Started
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  <NavLink href='/Signup'>Signup</NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink href='/Login'>Login</NavLink>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
      </Navbar>
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
