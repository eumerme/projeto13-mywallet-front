import { useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { login } from '../../../services/myWallet';
import { Wrapper, LoaderSpinner } from '../styles/styles';
import { ThreeDots } from 'react-loader-spinner';

export default function Login() {
	const navigate = useNavigate();
	const [disable, setDisable] = useState(false);
	const auth = JSON.parse(localStorage.getItem('mywallet'));
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
		setDisable(true);
		const body = { ...formData };

		const promise = login(body);
		promise
			.then((res) => {
				localStorage.setItem(
					'mywallet',
					JSON.stringify({
						name: res.data.name,
						token: res.data.token,
						email: res.data.email,
					})
				);
				navigate('/home');
			})
			.catch((error) => {
				setDisable(false);
				alert(error.response.data.message);
			});
	};

	return (
		<>
			{auth ? (
				<Navigate to='/home' />
			) : (
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
						{!disable ? (
							<button type='submit' disabled={disable}>
								Entrar
							</button>
						) : (
							<LoaderSpinner>
								<ThreeDots color='#ffffff' height={13} width={51} />
							</LoaderSpinner>
						)}
					</form>
					<Link to='/signup'>
						<p>Primeira vez? Cadastre-se!</p>
					</Link>
				</Wrapper>
			)}
		</>
	);
}
