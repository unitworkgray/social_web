import React from 'react';
import s from './Nav.module.css';
import {NavLink} from 'react-router-dom';

const Nav = ()=> {
    return(
        <div className={s.nav}>
            <div className={`${s.navLink__item} ${s.active}`}>
                <NavLink to='/profile' activeClassName={s.active}>Моя страница</NavLink>
            </div>
            <div className={s.navLink__item}>
                <NavLink to='/dialog' activeClassName={s.active}>Мои сообщения</NavLink>
            </div>
            <div className={s.navLink__item}>
                <NavLink to='/music' activeClassName={s.active}>Моя музыка</NavLink>
            </div>
            <div className={s.navLink__item}>
                <NavLink to='/news' activeClassName={s.active}>Мои новости</NavLink>
            </div>
        </div>
    );
}

export default Nav;