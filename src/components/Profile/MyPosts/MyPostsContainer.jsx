import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/profile_reducer';
import MyPosts from './MyPosts';



const MyPostsContainer = (props) =>{
    let state = props.store.getState();
    
    let onAddPost = ()=>{
        props.store.dispatch( addPostActionCreator());
    }

    let onPostChange = (text)=> {
        let action = updateNewPostTextActionCreator(text);
        props.store.dispatch(action);
    }

    return(<MyPosts updateNewPostText={onPostChange}
                    addPost={onAddPost}
                    posts={state.profilePage.PostData}        
                    newPostText={state.profilePage.newPostText} />)
}

export default MyPostsContainer;