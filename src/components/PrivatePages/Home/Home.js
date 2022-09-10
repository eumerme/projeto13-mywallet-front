import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getTransactions, logout } from '../../../services/myWallet';
import { BiExit } from 'react-icons/bi';
import {
	Wrapper,
	Top,
	Main,
	Footer,
	Registry,
	BankStatement,
	BankBalance,
	Value,
	BBalance,
} from '../styles/styles';

function userLogout() {
	const promise = logout();
	promise
		.then((res) => {
			localStorage.clear('mywallet');
			window.location.reload();
		})
		.catch((error) => alert(error.response.data.message));
}

function Transactions({ transaction }) {
	return (
		<div>
			<h2>{transaction.date}</h2>
			<h3>{transaction.description}</h3>
			{transaction.type === 'credit' ? (
				<Value credit>{(transaction.value / 100).toFixed(2)}</Value>
			) : (
				<Value>{((Number(transaction.value) * -1) / 100).toFixed(2)}</Value>
			)}
		</div>
	);
}

export default function Home() {
	const navigate = useNavigate();
	const { name } = JSON.parse(localStorage.getItem('mywallet'));
	const [transactions, setTransactions] = useState([]);
	const [total, setTotal] = useState(0);

	useEffect(() => {
		const promise = getTransactions();
		promise
			.then((res) => setTransactions(res.data))
			.catch((error) => alert(error.response.data.messsage));

		if (transactions.lenght !== 0) {
			const _bankbalance = transactions
				.map((_transaction) =>
					_transaction.type === 'credit'
						? Number(_transaction.value)
						: Number(_transaction.value) * -1
				)
				.reduce((total, value) => total + value, 0);
			setTotal(_bankbalance);
		}
	}, [transactions.length]);
	/* .toLocaleString('pt-br', {
								style: 'currency',
								currency: 'BRL',
						  }) */
	console.log(transactions);

	return (
		<Wrapper>
			<Top>
				<h1>{`Olá, ${name}`}</h1>
				<div>
					<BiExit
						onClick={() => {
							userLogout();
						}}
					/>
				</div>
			</Top>
			<Main>
				{transactions.length === 0 ? (
					<h2>{'Não há registros de entrada ou saída'}</h2>
				) : (
					<>
						<BankStatement>
							{transactions.map((transaction, index) => (
								<Transactions key={index} transaction={transaction} />
							))}
						</BankStatement>
						<BankBalance>
							<h2>{'SALDO'}</h2>
							<BBalance total={total}>{(total / 100).toFixed(2)}</BBalance>
						</BankBalance>
					</>
				)}
			</Main>
			<Footer>
				<Registry
					onClick={() => {
						navigate('/transaction', {
							replace: false,
							state: 'credit',
						});
					}}
				>
					<div>icon</div>
					<h2>{'Nova entrada'}</h2>
				</Registry>
				<Registry
					onClick={() => {
						navigate('/transaction', {
							replace: false,
							state: 'debit',
						});
					}}
				>
					<div>icon</div>
					<h2>{'Nova saída'}</h2>
				</Registry>
			</Footer>
		</Wrapper>
	);
}
