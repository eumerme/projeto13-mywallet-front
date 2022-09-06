import { useState } from 'react';
import { Link } from 'react-router-dom';
import Wrapper from '../styles/styles';

export default function Login() {
	const [formData, setFromDara] = useState({
		email: '',
		password: '',
	});

	const handleInputs = (e) => {
		setFromDara({
			...formData,
			[e.target.name]: [e.target.value],
		});
	};

	const handleForm = (e) => {
		e.preventDefault();
		const body = { ...formData };
		// promise
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
					type='text'
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
