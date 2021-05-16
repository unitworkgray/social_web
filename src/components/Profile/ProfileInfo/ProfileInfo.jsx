import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from './ProfileStatus';
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = ({profile, status, updateStatus}) => {
    if (!profile) {
        return <Preloader />
    }

    return (
        <div>
            <div className={s.wrapper_container}>
                {/*<div className={s.center_wrapper}>
                    <img
                        src='https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350'/>
                </div>*/}
                <div className={s.center_wrapper}>
                    <div className={s.info_wrapper}>
                        <img src={profile.photos.large} />
                        <div className={s.wrapper_desqription}>
                            <div className={s.title_wrapper}>
                                <div className={s.title}>{profile.fullName}</div>
                                <div className={s.status_title}><ProfileStatusWithHooks status={status} updateStatus={updateStatus}/></div>
                                <div className={s.status_title}>{profile.aboutMe}</div>
                                <div className={s.status_title}>Работаю:{profile.lookingForAJob}</div>
                                <div className={s.status_title}>Поиск работы: {profile.lookingForAJobDescription}</div>
                            <div/>
                            </div>
                            <div>Контакты:
                                <div className={s.status_title}>facebook: {profile.contacts.facebook}</div>
                                <div className={s.status_title}>website: {profile.contacts.website}</div>
                                <div className={s.status_title}>vk: {profile.contacts.vk}</div>
                                <div className={s.status_title}>twitter: {profile.contacts.twitter}</div>
                                <div className={s.status_title}>instagram: {profile.contacts.instagram}</div>
                                <div className={s.status_title}>youtube: {profile.contacts.youtube}</div>
                                <div className={s.status_title}>github: {profile.contacts.github}</div>
                                <div className={s.status_title}>mainLink: {profile.contacts.mainLink}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;