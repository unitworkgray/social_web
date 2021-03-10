import React from 'react';
import Post from './Post/Post';
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/profile_reducer';
import s from './MyPosts.module.css';



const MyPosts = (props) =>{

    let Posts = props.PostData.map(p => <Post message={p.post} likesCount={p.likesCount} />)

    let newPostElement = React.createRef();

    let addPost = ()=>{
        props.dispatch( addPostActionCreator());
    }

    let onPostChange = ()=> {
        let text = newPostElement.current.value;
        let action = updateNewPostTextActionCreator(text);
        props.dispatch(action); 
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
                
                <button onClick={addPost}>add</button>
            </div>
            {Posts}
        </div>
    )
}

export default MyPosts;