import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom'

const Profile = (props) => {
  const [profile, setProfile] = useState();

  const profileId = useParams()
 
  useEffect(() => {
    const id = profileId.id
       axios
        .get(`https://reqres.in/api/users/${id}`)
        .then(response => {
          setProfile(response.data);
        })
        .catch(error => {
          console.error(error);
        });

  },[]);

  if (!profile) {
    return <div>Loading profile information...</div>;
  }

  const { first_name, last_name, email, avatar } = profile;

  return (
    <div className="save-wrapper">
      <div className="profile-card">
        <div className="profile-avatar">{avatar}</div>
        <h2>{first_name} {last_name}</h2>
        <div className="profile-email">{email}</div>
        <h3>Profiles</h3>
        {[profile].map(profile => (
          <div key={last_name} className="profile">{last_name}</div>
        ))}
      </div>
        <div className="save-button">Save</div>
    </div>
  );
}

export default Profile;
