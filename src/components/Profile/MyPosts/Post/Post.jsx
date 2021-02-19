import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return(
        <div className={s.item}>
            <img src="https://static.dw.com/image/42966898_303.jpg" alt=""/>{props.message}
            <div>
                <span>like :{props.likesCount}</span>
            </div>
        </div>
    )
}

export default Post;