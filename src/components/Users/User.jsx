import React from 'react';
import userNull from "../../assets/images/userNull.png";
import styles from './users.module.css';
import {NavLink} from "react-router-dom";


let User = ({user, unfollow, follow})=> {
    return(
        <div>
            <span>
                <div>
                    <NavLink to={'/profile/' + user.id}>
                        <img src={user.photos.small != null ? user.photos.small : userNull } alt="" className={styles.userPhoto}/>
                    </NavLink>
                </div>
                <div>
                    {user.followed
                        ? <button onClick={()=>{unfollow(user.id)}}>Unfollow</button>

                        : <button onClick={()=>{follow(user.id)}}>follow</button>}
                </div>
            </span>
            <span>
                <span>
                    <div>{user.name}</div>
                    <div>{user.status}</div>
                </span>
                <span>
                    <div>{"u.location.city"}</div>
                    <div>{"u.location.country"}</div>
                </span>
            </span>
        </div>)
    }

export default User;