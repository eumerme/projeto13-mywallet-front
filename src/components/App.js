import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalStyle from '../globalStyle/GlobalStyle';
import Login from './PublicPages/Login/Login';
import Signup from './PublicPages/Signup/Signup';
import Home from './PrivatePages/Home/Home';
import RegistryNewValues from './PrivatePages/RegistryNewValues/RegistryNewValues';
import Private from './PrivatePages/Private';

export default function App() {
	return (
		<>
			<GlobalStyle />
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Login />} />
					<Route path='/signup' element={<Signup />} />
					<Route
						path='/home'
						element={
							<Private>
								<Home />
							</Private>
						}
					/>
					<Route
						path='/registration'
						element={
							<Private>
								<RegistryNewValues />
							</Private>
						}
					/>
				</Routes>
			</BrowserRouter>
		</>
	);
}
