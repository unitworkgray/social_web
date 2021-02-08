import React from 'react';
import s from './Header.module.css';

const Header = ()=> {
    return(
        <div className={s.header}>
            <div className={s.header__logo}>
                <img src="https://cdn2.iconfinder.com/data/icons/social-network-logo-collection-2/512/14-512.png" alt=""/>
            </div>
            <div className={s.header__nav}>
                <a href="" className={s.header__link}>Люди</a>
                <a href="" className={s.header__link}>Сообщества</a>
                <a href="" className={s.header__link}>Музыка</a>
                <a href="" className={s.header__link}>Выйти</a>
            </div>
        </div>
    );
}

export default Header;