import profileReducer from './profile-reducer';
import dialogsReducer from './profile-reducer';

let store = {
    _state: {
        profilePage: {
            PostData: [
                {id: 1, post: 'Привет, как дела?', likesCount: 14},
                {id: 2, post: 'Это мой первый пост', likesCount: 42}
            ],
            newPostText: '',
        },
        dialogsPage: {
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
        },
        frends: [
            {firstName: 'Stepa', secondName: 'Osmanov', ava: 'https://aif-s3.aif.ru/images/018/249/b7a5d57b005bc19f6eeae875b9ddc5e4.jpg'}, 
            {firstName: 'Valera', secondName: 'Radko', ava: 'https://cdn21.img.ria.ru/images/45055/32/450553271_0:0:0:0_600x0_80_0_0_7582c3fd7d24258719590d0b6fdf1282.jpg'},
            {firstName: 'Valentin', secondName: 'Jabcev', ava: 'https://ftinvest.ru/wp-content/uploads/2015/07/0913_warren-buffett_650x455.jpg'},
            {firstName: 'Gena', secondName: 'Lavrov', ava: 'https://static.euronews.com/articles/stories/05/01/11/54/808x546_cmsv2_69fca5f6-8684-593a-9071-9b2fc0b45206-5011154.jpg'},
            {firstName: 'Dima', secondName: 'Bahtiyrov', ava: 'https://ichef.bbci.co.uk/news/640/cpsprodpb/13055/production/_112290977_whatsubject.jpg'}
        ]
    },
    getState(){
        return this._state;
    },
    _callSubscriber(){
    console.log('state is chenged');
    },
    subscribe(observer){
        this._callSubscriber = observer;
    },
    dispatch(action){

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);

        this._callSubscriber(this._state);
        
    }
}

export default store;
window.store = store;