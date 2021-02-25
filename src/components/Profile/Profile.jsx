import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import s from './Profile.module.css';

const Profile = (props)=> {
    return(
        <div className={s.content}>
            <ProfileInfo />
            <MyPosts PostData={props.PostData} addPost={props.addPost} />
        </div>
    );
}

export default Profile;