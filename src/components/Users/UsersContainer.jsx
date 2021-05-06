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
import {Redirect} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

class UsersContainer extends React.Component{

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber) => {

        this.props.getUsers(pageNumber, this.props.pageSize)

    }

    render() {
        if (!this.props.isAuth) return <Redirect to = '/login'/>
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
        isAuth: state.auth.isAuth
        /*followingInProgress: state.usersPage.isFetching,*/
    }
};

let mapStateToPropsForRedirect = (state) => ({
    isAuth: state.auth.isAuth
});

export default compose(
    connect(mapStateToProps,
        {follow, unfollow,
            setCurrentPage,
            getUsers})
)(UsersContainer)
