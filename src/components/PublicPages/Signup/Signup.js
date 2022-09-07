import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Wrapper } from '../styles/styles';
import { signup } from '../../../services/myWallet';

export default function Signup() {
	const navigate = useNavigate();
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

		signup(body)
			.then((res) => {
				alert('Cadastro realizado com sucesso!');
				navigate('/');
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
					type='password'
					placeholder='Senha'
					required
					value={formData.password}
					name='password'
					onChange={handleInputs}
				/>
				<input
					type='password'
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
