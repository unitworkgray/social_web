import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";


const Header = (props)=> {
    return(
        <div className={s.header}>
            <div className={s.header__logo}>
                <img src="https://cdn2.iconfinder.com/data/icons/social-network-logo-collection-2/512/14-512.png" alt=""/>
            </div>
            <div className={s.login_block}>
                { props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink> }
            </div>
        </div>
    );
}

export default Header;