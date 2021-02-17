import React from 'react';
import Post from './Post/Post';
import s from './MyPosts.module.css';


const MyPosts = () =>{
    return(
        <div className={s.my_posts}>
            My posts
            <div>
                <textarea name="" id=""></textarea>
                <button>add</button>
            </div>
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
        </div>
    )
}

export default MyPosts;