import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }

    return (
        <div>
            <div className={s.wrapper_container}>
                <div className={s.center_wrapper}>
                    <img
                        src='https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350'/>
                </div>
                <div className={s.center_wrapper}>
                    <div className={s.info_wrapper}>
                        <img src={props.profile.photos.large} />
                        <div className={s.wrapper_desqription}>
                            <div className={s.title_wrapper}>
                                <div className={s.title}>{props.profile.fullName}</div>
                                <div className={s.status_title}>{props.profile.aboutMe}</div>
                                <div className={s.status_title}>Работаю:{props.profile.lookingForAJob}</div>
                                <div className={s.status_title}>Поиск работы: {props.profile.lookingForAJobDescription}</div>
                            <div/>
                            </div>
                            <div>Контакты:
                                <div className={s.status_title}>facebook: {props.profile.contacts.facebook}</div>
                                <div className={s.status_title}>website: {props.profile.contacts.website}</div>
                                <div className={s.status_title}>vk: {props.profile.contacts.vk}</div>
                                <div className={s.status_title}>twitter: {props.profile.contacts.twitter}</div>
                                <div className={s.status_title}>instagram: {props.profile.contacts.instagram}</div>
                                <div className={s.status_title}>youtube: {props.profile.contacts.youtube}</div>
                                <div className={s.status_title}>github: {props.profile.contacts.github}</div>
                                <div className={s.status_title}>mainLink: {props.profile.contacts.mainLink}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;