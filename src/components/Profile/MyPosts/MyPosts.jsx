import React from 'react';
import Post from './Post/Post';
import s from './MyPosts.module.css';


const MyPosts = () =>{

    let PostData = [
        {id: 1, post: 'Привет, как дела?', likesCount: 14},
        {id: 2, post: 'Это мой первый пост', likesCount: 42}
    ]

    let Posts = PostData.map(p => <Post message={p.post} likesCount={p.likesCount} />)

    return(
        <div className={s.my_posts}>
            <h3>My posts</h3>
            <div>
                <div className={s.container_textarea}>
                    <textarea name="" id=""></textarea>
                </div>
                
                <button>add</button>
            </div>
            {Posts}
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
        </div>
    )
}

export default MyPosts;