import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = ()=> {
    return(
        <div className={s.container}>
            <div className={s.ava}>Ava</div>
            <div className={s.desqr}>
                <div className={s.userName}>Имя Фамилия</div>
                <hr/>
                <div className={s.userInfo}>
                    Возраст: 25
                    Город: Воронеж
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;