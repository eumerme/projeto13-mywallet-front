import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../../../services/myWallet';
import { Wrapper } from '../styles/styles';

export default function Login() {
	const navigate = useNavigate();
	const [formData, setFromDara] = useState({
		email: '',
		password: '',
	});

	const handleInputs = (e) => {
		setFromDara({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const handleForm = (e) => {
		e.preventDefault();
		const body = { ...formData };

		const promise = login(body);
		promise
			.then((res) => {
				localStorage.setItem(
					'mywallet',
					JSON.stringify({
						name: res.data.name,
						token: res.data.token,
					})
				);
				navigate('/home');
			})
			.catch((error) => {
				alert(error.response.data.message);
			});
	};

	return (
		<Wrapper>
			<h1>MyWallet</h1>
			<form onSubmit={handleForm}>
				<input
					type='email'
					placeholder='Email'
					required
					value={formData.email}
					name='email'
					onChange={handleInputs}
				/>
				<input
					type='password'
					placeholder='Senha'
					required
					value={formData.password}
					name='password'
					onChange={handleInputs}
				/>
				<button type='submit'>Entrar</button>
			</form>
			<Link to='/signup'>
				<div>Primeira vez? Cadastre-se!</div>
			</Link>
		</Wrapper>
	);
}
