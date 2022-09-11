import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Form, Wrapper } from '../styles/styles';
import { signup } from '../../../services/myWallet';
import { ThreeDots } from 'react-loader-spinner';

export default function Signup() {
	const navigate = useNavigate();
	const [disable, setDisable] = useState(false);
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
		setDisable(true);
		const body = { ...formData };

		const promise = signup(body);
		promise
			.then((res) => {
				alert(res.data.message);
				navigate('/');
			})
			.catch((error) => {
				setDisable(false);
				console.log(error);
				alert(error.response.data.message);
			});
	};

	return (
		<Wrapper>
			<h1>MyWallet</h1>
			<Form onSubmit={handleForm}>
				<input
					type='text'
					placeholder='Nome'
					required
					value={formData.name}
					name='name'
					onChange={handleInputs}
					disabled={disable}
				/>
				<input
					type='email'
					placeholder='Email'
					required
					value={formData.email}
					name='email'
					onChange={handleInputs}
					disabled={disable}
				/>
				<input
					type='password'
					placeholder='Senha'
					required
					value={formData.password}
					name='password'
					onChange={handleInputs}
					disabled={disable}
				/>
				<input
					type='password'
					placeholder='Confirme a senha'
					required
					value={formData.confirmPassword}
					name='confirmPassword'
					onChange={handleInputs}
					disabled={disable}
				/>
				<button type='submit' disabled={disable}>
					{!disable ? (
						'Cadastrar'
					) : (
						<ThreeDots color='#ffffff' height={13} width={51} />
					)}
				</button>
			</Form>
			<Link to='/'>
				<p>Já tem uma conta? Entre agora!</p>
			</Link>
		</Wrapper>
	);
}
