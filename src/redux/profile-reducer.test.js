import profileReducer, {addPostActionCreator, deletePost} from "./profile-reducer";
import {render, screen} from "@testing-library/react";
import App from "../App";

/*test('renders learn react link', () => {
    render(<App />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
});*/

let state = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'It\'s my first post', likesCount: 11},
        {id: 3, message: 'Blabla', likesCount: 11},
        {id: 4, message: 'Dada', likesCount: 11}
    ]
};

it('message of new post should be "Мой первый ТЕСТ" ', ()=>{

    //.1 test data (базовые данные)
    let action = addPostActionCreator('Мой первый ТЕСТ');

    /*let state = {
        posts: [
            {id: 1, message: 'Hi, how are you?', likesCount: 12},
            {id: 2, message: 'It\'s my first post', likesCount: 11},
            {id: 3, message: 'Blabla', likesCount: 11},
            {id: 4, message: 'Dada', likesCount: 11}
        ]
    };*/

    //.2 action (действие)
    let newState = profileReducer(state, action);

    //.3 expectation (ожидание)
    //newState.posts.length === 5;
    expect(newState.posts.length).toBe(5);
});

it('length of posts should be incremented', ()=>{

    //.1 test data (базовые данные)
    let action = addPostActionCreator('Мой первый ТЕСТ');

    /*let state = {
        posts: [
            {id: 1, message: 'Hi, how are you?', likesCount: 12},
            {id: 2, message: 'It\'s my first post', likesCount: 11},
            {id: 3, message: 'Blabla', likesCount: 11},
            {id: 4, message: 'Dada', likesCount: 11}
        ]
    };*/

    //.2 action (действие)
    let newState = profileReducer(state, action);

    //.3 expectation (ожидание)
    //newState.posts[4].message === 'Мой первый ТЕСТ';

    expect(newState.posts[4].message).toBe('Мой первый ТЕСТ');
});

it('after deleting length of messages should be decrement', ()=>{

    //.1 test data (базовые данные)
    let action = deletePost(1);

    /*let state = {
        posts: [
            {id: 1, message: 'Hi, how are you?', likesCount: 12},
            {id: 2, message: 'It\'s my first post', likesCount: 11},
            {id: 3, message: 'Blabla', likesCount: 11},
            {id: 4, message: 'Dada', likesCount: 11}
        ]
    };*/

    //.2 action (действие)
    let newState = profileReducer(state, action);

    //.3 expectation (ожидание)
    //newState.posts[4].message === 'Мой первый ТЕСТ';

    expect(newState.posts.length).toBe(3);
});

it(`after deleting length shouldn't be decrement if id incorrect`, ()=>{

    //.1 test data (базовые данные)
    let action = deletePost(1000);

    /*let state = {
        posts: [
            {id: 1, message: 'Hi, how are you?', likesCount: 12},
            {id: 2, message: 'It\'s my first post', likesCount: 11},
            {id: 3, message: 'Blabla', likesCount: 11},
            {id: 4, message: 'Dada', likesCount: 11}
        ]
    };*/

    //.2 action (действие)
    let newState = profileReducer(state, action);

    //.3 expectation (ожидание)
    //newState.posts[4].message === 'Мой первый ТЕСТ';

    expect(newState.posts.length).toBe(4);
});
