import React from 'react';
import s from './Dialog.module.css';

const Dialog = ()=> {
    return(
        <div className={s.content}>
            <div className={s.container}>
                <div className={s.dialogs}>
                    <div className={s.dialog + ' ' + s.active}>Степа</div>
                    <div className={s.dialog}>Валера</div>
                    <div className={s.dialog}>Валентин</div>
                    <div className={s.dialog}>Гена</div>
                    <div className={s.dialog}>Дима</div>
                </div>
                <div className={s.messages}>
                    <div className={s.messege}>Привет</div>
                    <div className={s.messege}>Привет</div>
                    <div className={s.messege}>Привет</div>
                    <div className={s.messege}>Привет</div>
                    <div className={s.messege}>Привет</div>
                </div>
            </div>
        </div>
    );
}

export default Dialog;