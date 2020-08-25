import React from 'react';

export default function Post({user}){
    return(
        <section>
            
            <div>{user.picture}</div>
            <div>{user.first_name} {user.last_name}</div>
            <div>{user.bio}</div>
        </section>
    )
}