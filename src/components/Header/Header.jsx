import React from 'react';
import './Header.model.css';

const Header = ()=> {
    return(
        <div className="header">
            <div className="header__logo">
                <img src="https://cdn2.iconfinder.com/data/icons/social-network-logo-collection-2/512/14-512.png" alt=""/>
            </div>
            <div className="header__nav">
                <a href="" className="header__link">Люди</a>
                <a href="" className="header__link">Сообщества</a>
                <a href="" className="header__link">Музыка</a>
                <a href="" className="header__link">Выйти</a>
            </div>
        </div>
    );
}

export default Header;