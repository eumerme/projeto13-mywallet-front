import dayjs from 'dayjs';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Top, Form, Wrapper } from '../styles/styles';

export default function RegistryNewValues() {
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
		<Wrapper registration>
			<Top>
				<h1>{state === 'income' ? 'Nova entrada' : 'Nova saída'}</h1>
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
					{state === 'income' ? 'Salvar entrada' : 'Salvar saída'}
				</button>
			</Form>
		</Wrapper>
	);
}
