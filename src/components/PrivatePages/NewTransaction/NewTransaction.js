import dayjs from 'dayjs';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { createTransactions } from '../../../services/myWallet';
import { Top, Form, Wrapper } from '../styles/styles';

export default function NewTransaction() {
	const { state } = useLocation();
	const navigate = useNavigate();

	const [formData, setFromDara] = useState({
		value: '',
		description: '',
	});

	const handleInputs = (e) => {
		setFromDara({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const handleForm = (e) => {
		e.preventDefault();
		/* const value = Number(formData.value.replace(',', ''));
		console.log(Number(formData.value.replace(',', ''))); */
		const value = Number(formData.value.replace(',', ''));
		//const value = formatValue(formData.value);

		const body = {
			value,
			description: formData.description,
			type: state,
			date: dayjs().format('DD/MM'),
		};

		const promise = createTransactions(body);
		promise
			.then((res) => {
				alert(res.data.message);
				navigate('/home');
			})
			.catch((error) => console.log(error.response.data.message));
	};
	return (
		<Wrapper transaction>
			<Top>
				<h1>{state === 'credit' ? 'Nova entrada' : 'Nova saída'}</h1>
			</Top>
			<Form onSubmit={handleForm}>
				<input
					type='text'
					placeholder='Valor'
					pattern='[0-9]?{1,3}.?[0-9]?{1,3}.?[0-9]{1,3}[,+]{1}[0-9]{2}'
					required
					value={formData.value}
					name='value'
					onChange={handleInputs}
				/>
				<input
					type='text'
					placeholder='Descrição'
					required
					value={formData.description}
					name='description'
					onChange={handleInputs}
				/>
				<button type='submit'>
					{state === 'credit' ? 'Salvar entrada' : 'Salvar saída'}
				</button>
			</Form>
		</Wrapper>
	);
}
