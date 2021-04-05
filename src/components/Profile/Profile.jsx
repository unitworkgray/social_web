import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import s from './Profile.module.css';

const Profile = (props) => {
    return (
        <div className={s.content}>
            <div className={s.container}>
                <div></div>
                <div className={s.center_info}>
                    <ProfileInfo profile={props.profile} />
                    <MyPostsContainer />
                </div>
                <div></div>
            </div>
        </div>
    )
}

export default Profile;