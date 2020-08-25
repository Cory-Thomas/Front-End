import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Post from './Post';
import canada from './pictures/1-canada.jpg';
import machu from './pictures/2-macchupichu.jpg';
import wadi from './pictures/3-WadiMusa.jpg';
import nederland from './pictures/4-nederland.jpg';
import southkorea from './pictures/5-southkorea.jpg';
import italy from './pictures/6-italy.jpg';

export default function Explore(){
    const [posts, setPosts] = useState([]);         

    useEffect( () => {
        const getPosts = () => {
            axios.get('https://reqres.in/api/users')
                .then( res => {
                    const bioObj = {
                        0: 'Visiting Canmore, Canada',
                        1: 'Visiting Macchu Pichu, Aguas Calientes, Peru',
                        2: 'Visiting Wadi Musa, Jordan',
                        3: 'Visiting Maurick, Vaght, Nederland',
                        4: 'Visiting Mangyeong-eup, Mangyeong-si, South Korea',
                        5: 'Visiting Pineto, Province of Teramo, Italy'
                    };
                    const pictureObj = {
                        0: canada,
                        1: machu,
                        2: wadi,
                        3: nederland,
                        4: southkorea,
                        5: italy
                    };

                const myArr = res.data.data.map((user, i) => {
                    user = {...user, picture: pictureObj[i], bio: bioObj[i]}
                    return user;
                })

                setPosts(myArr);
            })
            .catch( error => {
                console.log(error)
        })
        }
        getPosts();
    }, [])

    return(
        <div>
            {posts.map(post => {
                return <Post key={post.id} user={post} />
            })}
        </div>
    )
}