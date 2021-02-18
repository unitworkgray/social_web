import React from 'react';
import Post from './Post/Post';
import s from './MyPosts.module.css';


const MyPosts = () =>{
    return(
        <div className={s.my_posts}>
            <h3>My posts</h3>
            <div>
                <div className={s.container_textarea}>
                    <textarea name="" id=""></textarea>
                </div>
                
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