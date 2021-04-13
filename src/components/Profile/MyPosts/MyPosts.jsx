import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
    let postsElements =
        props.posts.map( p => <Post message={p.message} likesCount={p.likesCount}/>);

    let newPostElement = React.createRef();

    let onAddPost = () => {
        props.addPost();
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    return (
        <div className={s.my_posts_container}>
            <div className={s.my_posts_center_wrapper}>
                <div>
                    <div className={s.my_posts_title}>My posts</div>
                    <div className={s.my_posts_former}>
                        <div className={s.my_posts_container_textarea}>
                            <textarea onChange={ onPostChange } ref={newPostElement} value={props.newPostText} />
                        </div>
                        <div className={s.my_posts_container_button}>
                            <button onClick={ onAddPost }>Add post</button>
                        </div>
                    </div>
                    <div className={s.posts}>
                        { postsElements }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyPosts;