import React from 'react';
import Post from './Post/Post';
import s from './MyPosts.module.css';



const MyPosts = (props) =>{

    let Posts = props.posts.map(p => <Post message={p.post} likesCount={p.likesCount} />)

    let newPostElement = React.createRef();

    let onAddPost = ()=>{
        props.addPost();
    }

    let onPostChange = ()=> {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    return(
        <div className={s.my_posts}>
            <h3>My posts</h3>
            <div>
                <div className={s.container_textarea}>
                    <textarea onChange={onPostChange} 
                    ref={newPostElement} 
                    value={props.newPostText}/>
                </div>
                
                <button onClick={onAddPost}>add</button>
            </div>
            {Posts}
        </div>
    )
}

export default MyPosts;