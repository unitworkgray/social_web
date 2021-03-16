import React from 'react';
import Dialogs from './Dialogs';
import {updateNewMessageBodyCreator, sendMessageCreator} from '../../redux/dialogs_reducer';

const DialogsContainer = (props)=> {
    
    let state = props.store.getState().dialogsPage;
    
    let onSendMessageClick = ()=> {
        props.store.dispatch(sendMessageCreator());
    }
    
    let onNewMessageChange = (body)=>{
        props.store.dispatch(updateNewMessageBodyCreator(body));
    }   
    
    return(<Dialogs updateNewMessageBody={onNewMessageChange}
                    sendMessage={onSendMessageClick}
                    dialogsPage={state}/>);
}

export default DialogsContainer;