import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props)=> {
    let state = props.dialogsPage;
    
    let DialogElements = state.DialogData.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />);
    
    let MessageElement = state.MessageData.map(message => <Message message={message.message} />);
    
    let newMessageBody = state.newMessageBody;
    
    let onSendMessageClick = ()=> {
        props.sendMessage();
    }

    let onNewMessageChange = (e)=>{
        let body = e.target.value;
        props.updateNewMessageBody(body);
    }   
    
    return(
        <div className={s.content}>
            <div className={s.container}>
                <div className={s.dialogs}>
                    {DialogElements}
                </div>
                <div className={s.messages}>
                    <div className={s.myMessage}>
                        <textarea 
                            value={newMessageBody}
                            onChange={onNewMessageChange}
                            placeholder='Введите свое сообщение'>
                        </textarea>
                        <button onClick={onSendMessageClick}>Отправить сообщение</button>
                    </div>
                    <div>
                        {MessageElement}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;