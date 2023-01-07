import { deleteTransaction } from "../../services/myWallet";
import { Content, BankStatement, BankBalance, Total, Value } from "./index";

export function Transactions({ transactions, total, bankBalance, setReload, reload }) {
	const valueFormated = (value) => {
		return (value / 100)
			.toLocaleString("pt-br", {
				style: "currency",
				currency: "BRL",
			})
			.substring(3);
	};

	const handleDeleteTransaction = (transactionId) => {
		const confirm = window.confirm("Gostaria de apagar esse item?");

		if (confirm) {
			const promise = deleteTransaction(transactionId);
			promise.then((res) => setReload(!reload)).catch((error) => console.error(error));
		}
	};

	console.log(transactions);
	return (
		<>
			<BankStatement>
				{transactions?.map((transaction, index) => (
					<Content key={transaction._id}>
						<h2>{transaction.date}</h2>
						<h3>{transaction.description}</h3>
						<Value type={transaction.type}>{valueFormated(transaction.value)}</Value>
						<h2 onClick={() => handleDeleteTransaction(transaction._id)}>X</h2>
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
