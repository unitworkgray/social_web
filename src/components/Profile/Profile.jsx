import React from 'react';
import s from './Profile.module.css';

const Profile = ()=> {
    return(
        <div className={s.content}>
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
        </div>
    );
}

export default Profile;