import React from 'react';
import Post from './Post/Post';
import s from './MyPosts.module.css';


const MyPosts = (props) =>{

    let Posts = props.PostData.map(p => <Post message={p.post} likesCount={p.likesCount} />)

    let newPostElement = React.createRef();

    let addPost = ()=>{
        let text = newPostElement.current.value
        alert(text);
    }

    return(
        <div className={s.my_posts}>
            <h3>My posts</h3>
            <div>
                <div className={s.container_textarea}>
                    <textarea ref={newPostElement}></textarea>
                </div>
                
                <button onClick={addPost}>add</button>
            </div>
            {Posts}
            <Post />
            <Post />
            <Post />
            <Post />
        </div>
    )
}

export default MyPosts;