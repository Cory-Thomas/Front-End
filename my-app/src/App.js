import React, {useState} from "react";
import './index.css'
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
import {
  Button,
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
                  <NavLink style={{color: '#89c9b8', fontWeight: 'bold'}} href='/Profile'>Login</NavLink>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
      </Navbar>
      <div>
      <Switch>
          <Route path="/Signup">
            <Signup />
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
  return <div className='home-container'>
    <div className='home-text'>
      <h1>Expat Journal</h1> 
      <div className='p1'><p>Expat Journal is an interactive online community connecting expatriates from all over the world. Members can share pictures, stories, thoughts, and experiences in their journal entries in order to connect with our ever-growing network of expats. Members can also plan or attend expat events to meet other expats in their area.</p></div>
      <span><p>Signup or login now to get started!</p></span>
      <Link to='/signup'><Button style={{width: '20%', padding: '2%', backgroundColor: '#89c9b8', color: '#092532', fontWeight: 'bold', border: 'none'}}>Signup</Button></Link> 
      <Link to='/login'><Button style={{width: '20%', margin: '3%', padding: '2%', backgroundColor: '#89c9b8', color: '#092532', fontWeight: 'bold', border: 'none'}}>Login</Button></Link>
    </div>  
    <div className='home-image'>
      <img src='https://images.unsplash.com/photo-1524850011238-e3d235c7d4c9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2287&q=80' alt='Woman pointing on a map' width='400' height='350'/>
    </div>
  </div>;
}
