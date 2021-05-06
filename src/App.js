import React from 'react';
import './App.css';
import Nav from './components/Nav/Nav';
import Music from './components/Music/Music';
import News from './components/News/News';
import Footer from './components/Footer/Footer';
import {Route} from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/Login";
import {connect} from "react-redux";
import {initializeApp} from "./redux/app_reducer";
import Preloader from "./components/common/Preloader/Preloader";




class App extends React.Component {

	componentDidMount() {
		this.props.initializeApp();
	}

	render() {
		if(!this.props.initialized) {
			return <Preloader />
		}

		return (
			<div className='bg'>
				<div className='app'>
					<HeaderContainer/>
					<Nav/>
					<div className='app__content_wrapper'>
						<Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
						<Route path='/dialog' render={() => <DialogsContainer/>}/>
						<Route path='/users' render={() => <UsersContainer/>}/>

						<Route path='/login' render={() => <LoginPage/>}/>

						<Route path='/music' render={() => <Music/>}/>
						<Route path='/news' render={() => <News/>}/>
					</div>
					<Footer/>
				</div>
			</div>
		)
	}
}

const mapStateToProps = (state) => ({
	initialized: state.app.initialized
})

export default connect (mapStateToProps, {initializeApp}) (App);