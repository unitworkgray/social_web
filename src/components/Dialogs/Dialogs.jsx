import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {updateNewMessageBodyCreator, sendMessageCreator} from '../../redux/dialogs_reducer';

const Dialogs = (props)=> {
    
    let state = props.store.getState().dialogsPage;
    
    let DialogElements = state.DialogData.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />);
    
    let MessageElement = state.MessageData.map(message => <Message message={message.message} />);
    
    let newMessageBody = state.newMessageBody;
    
    let onSendMessageClick = ()=> {
        props.store.dispatch(sendMessageCreator());
    }
    
    let onNewMessageChange = (e)=>{
        let body = e.target.value;
        props.store.dispatch(updateNewMessageBodyCreator(body));
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