import { Value } from '../styles/styles';
import { deleteTransaction } from '../../../services/myWallet.js';

function DeleteTransaction({ transactionId, setReload, reload }) {
	const handleDeleteTransaction = () => {
		const confirm = window.confirm('Gostaria de apagar esse item?');

		if (confirm) {
			const promise = deleteTransaction(transactionId);
			promise
				.then((res) => setReload(!reload))
				.catch((error) => console.error(error));
		}
	};

	return (
		<h2
			onClick={() => {
				handleDeleteTransaction();
			}}
		>
			{'X'}
		</h2>
	);
}

export default function Transactions({ transaction, setReload, reload }) {
	const valueFormated = (transaction.value / 100)
		.toLocaleString('pt-br', {
			style: 'currency',
			currency: 'BRL',
		})
		.substring(3);

	return (
		<div>
			<h2>{transaction.date}</h2>
			<h3>{transaction.description}</h3>
			{transaction.type === 'credit' ? (
				<Value credit>{valueFormated}</Value>
			) : (
				<Value>{valueFormated}</Value>
			)}
			<DeleteTransaction
				transactionId={transaction._id}
				setReload={setReload}
				reload={reload}
			/>
		</div>
	);
}
