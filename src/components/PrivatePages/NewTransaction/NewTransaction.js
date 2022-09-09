import dayjs from 'dayjs';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Top, Form, Wrapper } from '../styles/styles';

export default function NewTransaction() {
	const { state } = useLocation();

	const [formData, setFromDara] = useState({
		value: '',
		description: '',
	});

	const handleInputs = (e) => {
		setFromDara({
			...formData,
			[e.target.name]: [e.target.value],
		});
	};

	const handleForm = (e) => {
		e.preventDefault();
		const type = state;
		const body = { ...formData, type, date: dayjs().format('DD/MM') };
		console.log(body);
		// promise
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
