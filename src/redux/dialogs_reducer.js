const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
    DialogData: [
        {id: 1, name:'Степа'},
        {id: 2, name:'Валера'},
        {id: 3, name:'Валентин'},
        {id: 4, name:'Гена'},
        {id: 5, name:'Дима'}
    ],
    MessageData: [
        {id: 1, message:'Привет'},
        {id: 2, message:'Здорово'},
        {id: 3, message:'Как дела?'}
    ],
    newMessageBody: "",
};

const dialogsReducer = (state=initialState, action) => {

    switch(action.type) {
        case UPDATE_NEW_MESSAGE_BODY:{
            return  {
                ...state,
                newMessageBody: action.body
            };
        }
        case SEND_MESSAGE:{
            let body = state.newMessageBody;
            return  {
                ...state,
                newMessageBody: '',
                MessageData: [...state.MessageData, {id: 6, message: body}]
            };
        }
        default:
            return state;
    }
}

export const sendMessageCreator = () => ({type:SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body) =>
    ({ type: UPDATE_NEW_MESSAGE_BODY, body: body})

export default dialogsReducer;