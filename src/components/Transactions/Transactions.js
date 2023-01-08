import { valueFormater } from "../../hooks/index";
import { deleteTransaction } from "../../services/myWallet";
import { Content, BankStatement, BankBalance, Total, Value } from "./index";

export function Transactions({ transactions, total, bankBalance, setReload, reload }) {
	const handleDeleteTransaction = (transactionId) => {
		const confirm = window.confirm("Gostaria de apagar esse item?");

		if (confirm) {
			const promise = deleteTransaction(transactionId);
			promise.then((res) => setReload(!reload)).catch((error) => console.error(error));
		}
	};

	return (
		<>
			<BankStatement>
				{transactions?.map((transaction, index) => (
					<Content key={transaction._id}>
						<h2>{transaction.date}</h2>
						<h3>{transaction.description}</h3>
						<Value type={transaction.type}>{valueFormater(transaction.value)}</Value>
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
