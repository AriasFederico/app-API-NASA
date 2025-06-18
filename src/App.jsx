import './App.scss';
import { Apod } from './components/layout/Apod/Apod';
import { Header } from './components/layout/Header/Header';
import { HomePage } from './components/layout/Homepage/HomePage';
import { Routes, Route } from 'react-router-dom';
import { LibrayNasa } from './components/layout/Library/LibrayNasa';

function App() {
	return (
		<>
			<Header />
			<Routes>
				<Route path='/' element={<HomePage />} />
			</Routes>
			<Apod />
			<LibrayNasa />
		</>
	);
}

export default App;
