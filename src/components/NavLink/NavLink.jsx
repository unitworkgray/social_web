import React from 'react';
import'./NavLink.model.css';

const NavLink = ()=> {
    return(
        <div className="navLink">
            <div className="navLink__wrapper">
                <div className="navLink__item">
                    <a href="" className="navLink__link">Моя страница</a>
                </div>
                <div className="navLink__item">
                    <a href="" className="navLink__link">Мои друзья</a>
                </div>
                <div className="navLink__item">
                    <a href="" className="navLink__link">Мои сообщения</a>
                </div>
                <div className="navLink__item">
                    <a href="" className="navLink__link">Мои фото</a>
                </div>
                <div className="navLink__item">
                    <a href="" className="navLink__link">Мои видео</a>
                </div>
                <div className="navLink__item">
                    <a href="" className="navLink__link">Моя музыка</a>
                </div>
                <div className="navLink__item">
                    <a href="" className="navLink__link">Мои группы</a>
                </div>
                <div className="navLink__item">
                    <a href="" className="navLink__link">Мои новости</a>
                </div>
            </div>
        </div>
    );
}

export default NavLink;