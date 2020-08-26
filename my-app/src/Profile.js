import React, { useState, useEffect } from 'react';
import Login from './Login'
import axios from 'axios'

export default function Profile(props) {
 let {loggedInUser, setLoggedInUser} = props;
 let [usersJournalEntries, setUsersJournalEntries] = useState([]);

 const handleError = err => { debugger } 

 useEffect(() => {
    const getProfile = () => {
        axios.get('https://reqres.in/api/user')
          .then(response => {
            // Need a backend URL, for now using fake data
            //  console.log(response.data.data)
            let usersJournalEntries = [
                {
                    title: 'My Encounter with a Penguin in South Africa',
                    image: 'https://images.unsplash.com/photo-1562651139-65ae77130306?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80',
                    author: 'By You',
                    date: 'Jan 1, 2020'
                },
                {
                    title: 'Bali: The Good, The Bad, The Ugly',
                    image: 'https://images.unsplash.com/photo-1583251633146-d0c6c036187d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80',
                    author: 'By You',
                    date: 'Feb 1, 2020'
               },
               {
                    title: 'Sunshine and Sailing in the South of France',
                    image: 'https://images.unsplash.com/photo-1505080857763-eec772cd197d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80',
                    author: 'By You',
                    date: 'Mar 1, 2020'
               },
               {
                    title: 'Expat Expert: 5 Tips for Those Considering Expat Life',
                    image: 'https://images.unsplash.com/photo-1524850011238-e3d235c7d4c9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=974&q=80',
                    author: 'By You',
                    date: 'Apr 1, 2020'
               }
            ];
           setUsersJournalEntries(usersJournalEntries);
          })
          .catch(handleError)
      }
        getProfile();
    }, []);

 if(loggedInUser.email) {
    return (
        <div>
            <h1>Welcome {loggedInUser.name}</h1>
            <div>Username: {loggedInUser.email}</div>
            <button onClick={()=>{setLoggedInUser({})}}>Logout</button>
            <br></br>
            <h2>Your Journal Entires</h2>
            <div>
                {
                usersJournalEntries.map((entry) => (
                    <div>
                    <div>{entry.title}</div>
                    <img src={entry.image} alt="Journal entry" width="300" height="300"></img>
                    <div>{entry.author}</div>
                    <div>{entry.date}</div>
                    </div>
                ))
                }
            </div>
        </div>
    )
 } else {
    return (
        <div>
            <Login setLoggedInUser = {setLoggedInUser}/>
        </div>
    )
 }
}