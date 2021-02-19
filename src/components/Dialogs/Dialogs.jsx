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

    let DialogData = [
        {id: 1, name:'Степа'},
        {id: 2, name:'Валера'},
        {id: 3, name:'Валентин'},
        {id: 4, name:'Гена'},
        {id: 5, name:'Дима'}
    ]

    let DialogElements = DialogData.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />);

    let MessageData = [
        {id: 1, message:'Привет'},
        {id: 2, message:'Здорово'},
        {id: 3, message:'Как дела?'}
    ]

    let MessageElement = MessageData.map(message => <Message message={message.message} />);


    return(
        <div className={s.content}>
            <div className={s.container}>
                <div className={s.dialogs}>

                    {DialogElements}
                   
                </div>
                <div className={s.messages}>
                    {MessageElement}
                </div>
            </div>
        </div>
    );
}

export default Dialogs;