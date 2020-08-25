import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Route, Switch } from 'react-router-dom'
import ProfileList from './ProfileList';
import Profile from './Profile';

const ProfileHome = () => {
//   const [saved, setSaved] = useState([]);
  const [profileList, setProfileList] = useState([]);

  useEffect(() => {
    const getProfiles = () => {
      axios
        .get('https://reqres.in/api/users/')
        .then(response => {
          setProfileList(response.data);
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    getProfiles();
  }, []);

  return (
    <div className='ProfileHome'>
      <Switch>
        <Route path='/profiles/:id'>
          <Profile />
        </Route>
        <Route path='/'>
          <ProfileList profiles={profileList} />
        </Route>
      </Switch>
    </div>
  );
};

export default ProfileHome;
