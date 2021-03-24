import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Profile from './components/Profile/Profile';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import Music from './components/Music/Music';
import News from './components/News/News';
import Footer from './components/Footer/Footer';
import {Route} from 'react-router-dom';
import UsersContainer from "./components/Users/UsersContainer";

const App = (props)=>{
	return(
			<div className='bg'>
				<div className='app'>
					<Header />
					<Nav />
					<div className='app__content_wrapper'>
						<Route path='/profile' render={ ()=> <Profile />} />
						<Route path='/dialog' render={ ()=> <DialogsContainer />} />
						<Route path='/users' render={()=> <UsersContainer />}/>
						<Route path='/music' render={ ()=> <Music />} />
						<Route path='/news' render={ ()=> <News />} />
					</div>
					<Footer />	
				</div>
			</div>
	)
}


export default App;
