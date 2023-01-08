import { useEffect, useState } from "react";
import { deleteTransaction } from "../../services/myWallet";
import { Content, BankStatement, BankBalance, Total, Value } from "./index";

export function Transactions({ transactions, getTransactions }) {
	const [total, setTotal] = useState(0);
	const [bankBalance, setBankBalance] = useState("");

	const calculateBankBalance = () => {
		const amount = transactions
			.map((transaction) => {
				const value = Number(transaction.value);
				return transaction.type === "credit" ? value : value * -1;
			})
			.reduce((total, value) => total + value, 0);

		const amountFormated = valueFormater(amount);

		setTotal(amount);
		setBankBalance(amountFormated);
	};

	useEffect(() => {
		calculateBankBalance();
		// eslint-disable-next-line
	}, [transactions]);

	return (
		<>
			<BankStatement>
				{transactions?.map((transaction, index) => (
					<Content key={transaction._id}>
						<h2>{transaction.date}</h2>
						<h3>{transaction.description}</h3>
						<Value type={transaction.type}>{valueFormater(transaction.value)}</Value>
						<h2 onClick={() => handleDeleteTransaction(getTransactions, transaction._id)}>X</h2>
					</Content>
				))}
			</BankStatement>
			<BankBalance>
				<h2>SALDO</h2>
				<Total total={total}>{bankBalance}</Total>
			</BankBalance>
		</>
	);
}

function valueFormater(value) {
	return (value / 100)
		.toLocaleString("pt-br", {
			style: "currency",
			currency: "BRL",
		})
		.substring(3);
}

function handleDeleteTransaction(getTransactions, transactionId) {
	const confirm = window.confirm("Gostaria de apagar esse item?");
	if (!confirm) return;

	const promise = deleteTransaction(transactionId);
	promise.then((res) => getTransactions()).catch((error) => console.error(error));
}
