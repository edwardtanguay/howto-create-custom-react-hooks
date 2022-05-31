import './App.scss';
import { PageWelcome } from './pages/PageWelcome';
import { PageUseFetch } from './pages/PageUseFetch';
import { PageUseToggle } from './pages/PageUseToggle';
import { NavLink, Routes, Route, Navigate } from 'react-router-dom';

function App() {
	return (
		<div className="App">
			<h1>React Custom Hooks</h1>
			<hr />
			<NavLink to="/welcome">Welcome</NavLink> |{' '}
			<NavLink to="/use-toggle">useToggle</NavLink> |{' '}
			<NavLink to="/use-fetch">useFetch</NavLink> |{' '}
			<hr />
			<Routes>
				<Route path="/welcome" element={<PageWelcome />} />
				<Route path="/use-toggle" element={<PageUseToggle />} />
				<Route path="/use-fetch" element={<PageUseFetch />} />
				<Route path="/" element={<Navigate to="/welcome" replace />}/>
			</Routes>
		</div>
	);
}

export default App;
