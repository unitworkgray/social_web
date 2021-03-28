import React from 'react';
import s from './Nav.module.css';
import {NavLink} from 'react-router-dom';

let friendsData = [
        {firstName: 'Stepa', secondName: 'Osmanov', ava: 'https://aif-s3.aif.ru/images/018/249/b7a5d57b005bc19f6eeae875b9ddc5e4.jpg'},
        {firstName: 'Valera', secondName: 'Radko', ava: 'https://cdn21.img.ria.ru/images/45055/32/450553271_0:0:0:0_600x0_80_0_0_7582c3fd7d24258719590d0b6fdf1282.jpg'},
        {firstName: 'Valentin', secondName: 'Jabcev', ava: 'https://ftinvest.ru/wp-content/uploads/2015/07/0913_warren-buffett_650x455.jpg'},
        {firstName: 'Gena', secondName: 'Lavrov', ava: 'https://static.euronews.com/articles/stories/05/01/11/54/808x546_cmsv2_69fca5f6-8684-593a-9071-9b2fc0b45206-5011154.jpg'},
        {firstName: 'Dima', secondName: 'Bahtiyrov', ava: 'https://ichef.bbci.co.uk/news/640/cpsprodpb/13055/production/_112290977_whatsubject.jpg'},
    ]

const UserList = (props)=>{
    
    let path = props.ava;
    
    return(
        <div className={s.icon__user}>
            <img  src={path} alt=""/>
            <div className={s.name_surname}>{props.name + ' ' + props.surname}</div>
        </div>
    )
}



const Nav = (props)=> {

    let friendsList = friendsData.map(friend => <UserList name={friend.firstName} surname={friend.secondName} ava={friend.ava} />);

    return(
        <div className={s.nav}>
            <div className={s.nav__link}>
                <div className={`${s.navLink__item} ${s.active}`}>
                    <NavLink to='/profile' activeClassName={s.active}>Моя страница</NavLink>
                </div>
                <div className={s.navLink__item}>
                    <NavLink to='/dialog' activeClassName={s.active}>Мои сообщения</NavLink>
                </div>
                <div className={s.navLink__item}>
                    <NavLink to='/users' activeClassName={s.active}>Юзеры</NavLink>
                </div>
                <div className={s.navLink__item}>
                    <NavLink to='/music' activeClassName={s.active}>Моя музыка</NavLink>
                </div>
                <div className={s.navLink__item}>
                    <NavLink to='/news' activeClassName={s.active}>Мои новости</NavLink>
                </div>
            </div>
            <div className={s.friend__panel}>
                <div className={s.messages__container}>
                    {friendsList}
                    <div className={s.zero__friend}></div>
                </div>
            </div>
        </div>
    );
}

export default Nav;