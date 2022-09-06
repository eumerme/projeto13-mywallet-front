import { useState } from 'react';
import { Link } from 'react-router-dom';
import Wrapper from '../styles/styles';

export default function Signup() {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		password: '',
		confirmPassword: '',
	});

	const handleInputs = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const handleForm = (e) => {
		e.preventDefault();
		const body = { ...formData };
		// const promise
	};

	return (
		<Wrapper>
			<h1>MyWallet</h1>
			<form onSubmit={handleForm}>
				<input
					type='text'
					placeholder='Nome'
					required
					value={formData.name}
					name='name'
					onChange={handleInputs}
				/>
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
				<input
					type='text'
					placeholder='Confirme a senha'
					required
					value={formData.confirmPassword}
					name='confirmPassword'
					onChange={handleInputs}
				/>
				<button type='submit'>Cadastrar</button>
			</form>
			<Link to='/'>
				<div>Já tem uma conta? Entre agora!</div>
			</Link>
		</Wrapper>
	);
}
