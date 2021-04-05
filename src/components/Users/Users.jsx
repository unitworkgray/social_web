import React from 'react';
import userNull from "../../assets/images/userNull.png";
import styles from './users.module.css';
import {NavLink} from "react-router-dom";





let Users = (props)=> {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for(let i=1; i <= pagesCount; i++){
        pages.push(i);
    }

    return(
        <div>
            <div>
                {pages.map(p => {
                    return <span className={props.currentPage === p && styles.selectedPage}
                                 onClick={(e)=> {props.onPageChanged(p) }}>{p}</span>
                })}
            </div>
            {
                props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <NavLink to={'/profile/' + u.id}>
                                <img src={u.photos.small != null ? u.photos.small : userNull } alt="" className={styles.userPhoto}/>
                            </NavLink>
                        </div>
                        <div>
                            {u.followed ? <button onClick={()=>{props.unfollow(u.id)}}>Follow</button> : <button onClick={()=>{props.follow(u.id)}}>Unfollow</button>}
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{"u.location.city"}</div>
                            <div>{"u.location.country"}</div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    )
}

export default Users;