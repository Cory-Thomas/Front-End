import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Post from './Post';

export default function Explore(){
    const [posts, setPosts] = useState([]);         

    useEffect( () => {
        const getPosts = () => {
            axios.get('https://reqres.in/api/users')
                .then( res => {
                    const bioObj = {
                        0: 'first bio',
                        1: 'second bio',
                        2: 'third bio',
                        3: 'fourth bio',
                        4: 'fifth bio',
                        5: 'sixth bio'
                    };
                    const pictureObj = {
                        0: 'first picture',
                        1: 'second picture',
                        2: 'third picture',
                        3: 'fourth picture',
                        4: 'fifth picture',
                        5: 'sixth picture'
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

    // setPosts([

    // // ])
    console.log(posts)

    // posts.map( (post, i) => {
    //     return setPosts([...post, picture: pictureObj[i]])
    // })
    
    // let bioData;
    return(
        <div>
            {posts.map(post => {
                // for( const bio in bioObj ){
                //         bioData = { ...post, bio: bioObj[bio] }
                // }
                // for( const picture in pictureObj ){
                //     if(++i === post.id){
                //         post = { ...post, picture: pictureObj[picture] }
                //         console.log(post)
                        
                //     }
                // }
                return <Post key={post.id} user={post} />
            })}
        </div>
    )
}