import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import Music from './components/Music/Music';
import News from './components/News/News';
import Footer from './components/Footer/Footer';

const App = (props)=>{
	return(
		<BrowserRouter>
			<div className='bg'>
				<div className='app'>
					<Header />
					<Nav />
					<div className='app__content_wrapper'>
						<Route exact path='/profile' 
							render={ ()=> <Profile 
								PostData={props.state.profilePage.PostData}
								addPost={props.addPost} />} />
						<Route exact path='/dialog' 
							render={ ()=> <Dialogs 
								DialogData={props.state.dialogsPage.DialogData} 
								MessageData={props.state.dialogsPage.MessageData} />} />
						<Route exact path='/music' render={ ()=> <Music />} />
						<Route exact path='/news' render={ ()=> <News />} />
					</div>
					<Footer />	
				</div>
			</div>
		</BrowserRouter>
	);
}


export default App;
