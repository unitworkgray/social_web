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
        <span className={s.message}>{props.message}</span>
    )
}


const Dialogs = (props)=> {

    let DialogElements = props.DialogData.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />);

    let MessageElement = props.MessageData.map(message => <Message message={message.message} />);

    return(
        <div className={s.content}>
            <div className={s.container}>
                <div className={s.dialogs}>

                    {DialogElements}
                   
                </div>
                <div className={s.messages}>
                    <div className={s.messages__container}>
                        <div className={s.message__userName}>
                        <div className={s.icon__user}>
                            <img  src='https://static.dw.com/image/42966898_303.jpg' alt=""/>
                            <div className={s.name_surname}>User <hr/> Userov</div>
                        </div>
                            <div className={s.message__text}>{MessageElement}</div>
                        </div>
                        <div className={s.message__otherUserName}>
                            <div className={s.message__text}>{MessageElement}</div>
                            <div className={s.icon__user}>
                                <img src='https://aif-s3.aif.ru/images/018/249/b7a5d57b005bc19f6eeae875b9ddc5e4.jpg' alt=""/>
                                <div className={s.name_surname}>Степа <hr/> Османов</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;