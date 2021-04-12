import React from 'react';
import {connect} from 'react-redux';
import {
    follow,
    setCurrentPage,
    unfollow,
    getUsers,
} from '../../redux/users_reducer';
import Users from './Users';
import Preloader from "../common/Preloader/Preloader";

class UsersContainer extends React.Component{

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber) => {

        this.props.getUsers(pageNumber, this.props.pageSize)

    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null }
            <Users totalUsersCount = {this.props.totalUsersCount}
                   pageSize = {this.props.pageSize}
                   currentPage = {this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   users={this.props.users}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
                   toggleFollowingProgress={this.props.toggleFollowingProgress}
                   /*followingInProgress={this.props.followingInProgress}*/
            />
        </>
    }
};

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        /*followingInProgress: state.usersPage.isFetching,*/
    }
};

 /*let mapDispatchToProps =(dispatch) => {
    return{
        follow: (userId) => {
            dispatch(follow(userId));
        },
        unfollow: (userId) => {
            dispatch(unfollow(userId));
        },
        setUsers: (users) => {
            dispatch(setUsers(users));
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPage(pageNumber));
        },
        setTotalUsersCount: (totalCount) => {
            dispatch(setTotalUsersCount(totalCount));
        },
        toggleIsFetching: (isFetching) => {
            dispatch(toggleIsFetching(isFetching));
        }

    }
}; */

export default connect(mapStateToProps,
    {follow, unfollow,
        setCurrentPage,
        getUsers}) (UsersContainer);