import React from 'react';
import { useHistory } from 'react-router-dom'

const ProfileList = props => {
  return (
    <div className="profile-list">
      {props.profiles.map(profile => (
        <ProfileDetails key={profile.id} movie={profile} />
      ))}
    </div>
  );
}

function ProfileDetails({ profile }) {
  const { first_name, last_name, email, avatar } = profile;
  const history = useHistory();
  return (
    <div className="profile-card" onClick={function(){
      history.push(`/profiles/${profile.id}`)
    }}>
      <div className="profile-avatar">{avatar}</div>
      <div className="profile-name">{first_name} {last_name}</div>
      <div className="profile-email">{email}</div>
    </div>
  );
}

export default ProfileList;
