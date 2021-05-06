import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {Redirect} from "react-router-dom";
import AddMessageForm from "./AddMessageForm/AddMessageForm";


const Dialogs = (props)=> {

    let state = props.dialogsPage;
    
    let DialogElements = state.DialogData.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />);
    
    let MessageElement = state.MessageData.map(message => <Message message={message.message} />);

    let addNewMessage = (values)=>{
        props.sendMessage(values.newMessageBody);
    }

    if (!props.isAuth) return <Redirect to={'/login'} />;


    return(
        <div className={s.content}>
            <div className={s.container}>
                <div className={s.dialogs}>
                    {DialogElements}
                </div>
                <div className={s.messages}>
                    <div>
                        {MessageElement}
                    </div>
                    <div className={s.myMessage}>
                        <AddMessageForm onSubmit={addNewMessage}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;