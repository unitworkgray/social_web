import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Music from './components/Music/Music';
import News from './components/News/News';
import Footer from './components/Footer/Footer';
import {Route} from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';



const App = (props)=>{
	return(
			<div className='bg'>
				<div className='app'>
					<Header />
					<Nav />
					<div className='app__content_wrapper'>
						<Route path='/profile/:userId?' render={ ()=> <ProfileContainer />} />
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
