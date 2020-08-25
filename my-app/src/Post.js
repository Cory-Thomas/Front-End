import React from 'react';

export default function Post({user}){
    return(
        <section>
            
            <img src={user.picture} alt='alt' width='400px' />
            <div>{user.first_name} {user.last_name}</div>
            <div>{user.bio}</div>
        </section>
    )
}