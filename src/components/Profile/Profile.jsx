import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import s from './Profile.module.css';

const Profile = (props)=> {
    return(
        <div className={s.content}>
            <ProfileInfo />
            <MyPosts PostData={props.profilePage.PostData}
                    newPostText={props.profilePage.newPostText}
                    dispatch={props.dispatch} />
        </div>
    );
}

export default Profile;