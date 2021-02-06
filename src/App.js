import logo from './logo.svg';
import styles from './App.css';
import Header from './components/Header/Header';
import NavLink from './components/NavLink/NavLink';
import Profile from './components/Profile/Profile';

const App = ()=>{
	return(
		<div className='app'>
			<Header />
			<NavLink />
			<Profile />
		</div>
	);
}


export default App;
