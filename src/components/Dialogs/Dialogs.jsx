import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from 'react-router-dom';

const DialogItem = (props)=> {

    let path = '/dialogs/' + props.id;

    return(
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props)=> {
    return(
        <div className={s.message}>{props.message}</div>
    )
}

const Dialogs = ()=> {
    return(
        <div className={s.content}>
            <div className={s.container}>
                <div className={s.dialogs}>

                    <DialogItem name='Степа' id='1' />
                    <DialogItem name='Валера' id='2' />
                    <DialogItem name='Валентин' id='3' />
                    <DialogItem name='Гена' id='4' />
                    <DialogItem name='Дима' id='5' />

                </div>
                <div className={s.messages}>
                    <Message message='Привет' />
                    <Message message='Здорово' />
                    <Message message='Как дела?' />
                </div>
            </div>
        </div>
    );
}

export default Dialogs;