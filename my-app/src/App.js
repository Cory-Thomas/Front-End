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
      <Navbar style={{padding: '2%'}} color="light" light expand="md">
        <NavbarBrand style={{color: '#092532', fontWeight: 'bold'}} href="/">Expat Journal</NavbarBrand>
          <Nav>
            <NavLink style={{color: '#89c9b8', fontWeight: 'bold'}} href='/'>Home</NavLink>
          </Nav>
          <Nav>
            <NavLink style={{color: '#89c9b8', fontWeight: 'bold'}} href='/Profile'>Profile</NavLink>
          </Nav>
          <Nav>
            <NavLink style={{color: '#89c9b8', fontWeight: 'bold'}} href='/Explore'>Explore</NavLink>
          </Nav>
          <UncontrolledDropdown>
              <DropdownToggle style={{color: '#89c9b8', fontWeight: 'bold'}} nav caret>
                Get Started
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  <NavLink style={{color: '#89c9b8', fontWeight: 'bold'}} href='/Signup'>Signup</NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink style={{color: '#89c9b8', fontWeight: 'bold'}} href='/Login'>Login</NavLink>
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
