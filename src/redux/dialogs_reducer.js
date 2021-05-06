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
    ]
};

const dialogsReducer = (state=initialState, action) => {

    switch(action.type) {
        case SEND_MESSAGE:{
            let body = action.newMessageBody;
            return  {
                ...state,
                MessageData: [...state.MessageData, {id: 6, message: body}]
            };
        }
        default:
            return state;
    }
}

export const sendMessageCreator = (newMessageBody) => ({type:SEND_MESSAGE, newMessageBody})

export default dialogsReducer;