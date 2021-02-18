import React from 'react';
import s from './Post.module.css';

const Post = () => {
    return(
        <div className={s.item}>
            <img src="https://static.dw.com/image/42966898_303.jpg" alt=""/>
            post 1
            <div>
                <span>like</span>
            </div>
        </div>
    )
}

export default Post;