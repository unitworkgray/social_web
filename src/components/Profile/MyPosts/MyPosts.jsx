import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {Field, reduxForm} from "redux-form";
import {maxLength30, maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";

const maxLength10 = maxLengthCreator(10);


const MyPosts = (props) => {
    let postsElements =
        props.posts.map( p => <Post message={p.message} likesCount={p.likesCount}/>);
    
    let onAddPost = (values) => {
        props.addPost(values.newPostText);
    }

    return (
        <div className={s.my_posts_container}>
            <div className={s.my_posts_center_wrapper}>
                <div>
                    <div className={s.my_posts_title}>My posts</div>
                    <div className={s.my_posts_former}>
                        <AddNewPostForm onSubmit ={onAddPost} />
                    </div>
                    <div className={s.posts}>
                        { postsElements }
                    </div>
                </div>
            </div>
        </div>
    )
}

let AddNewPostForm = (props) => {
    return(
        <form onSubmit={props.handleSubmit}  >
            <div className={s.my_posts_container_textarea}>
                <Field component={Textarea}
                       name="newPostText"
                       placeholder="Введите свое сообщение"
                       validate={[required, maxLength10]}/>
            </div>
            <div className={s.my_posts_container_button}>
                <button>Add post</button>
            </div>
        </form>
    )
}

AddNewPostForm = reduxForm({form: "ProfileAddNewPostForm"})(AddNewPostForm)

export default MyPosts;