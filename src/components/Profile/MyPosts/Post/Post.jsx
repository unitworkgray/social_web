import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return(
        <div className={s.item_container}>
            <div className={s.item_section}>
                <img src="https://static.dw.com/image/42966898_303.jpg" alt=""/>
            </div>
            <div className={s.item_section}>
                <div className={s.item_text}>
                    {props.message}
                </div>
            </div>
            <div className={s.item_section}>
                <div className={s.item_section_center}>
                    <div>Name</div>
                </div>
            </div>
            <div className={s.item_section}>
                like:{props.likesCount}
            </div>
        </div>
    )
}

export default Post;