import logo from './logo.svg';
import styles from './App.css';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Profile from './components/Profile/Profile';
import Dialog from './components/Dialog/Dialog';
import Music from './components/Music/Music';
import News from './components/News/News';
import Footer from './components/Footer/Footer';

const App = ()=>{
	return(
		<BrowserRouter>
			<div className='bg'>
				<div className='app'>
					<Header />
					<Nav />
					<div className='app__content_wrapper'>
						<Route exact path='/profile' component={Profile} />
						<Route exact path='/dialog' component={Dialog} />
						<Route exact path='/music' component={Music} />
						<Route exact path='/news' component={News} />
					</div>
					<Footer />	
				</div>
			</div>
		</BrowserRouter>
	);
}


export default App;
