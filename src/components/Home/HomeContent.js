import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDeleteTransaction } from "../../hooks";
import { Content, BankStatement, BankBalance, Total, Value } from "./index";

export function HomeContent({ transactions, getTransactions, email }) {
	const navigate = useNavigate();
	const [total, setTotal] = useState(0);
	const [bankBalance, setBankBalance] = useState("");
	const { deleteTransaction } = useDeleteTransaction();

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

	const redirect = (type, description, value, id) => {
		return navigate("/transaction", {
			replace: false,
			state: { type, email, description, value, id },
		});
	};

	return (
		<>
			<BankStatement>
				{transactions?.map((transaction, index) => (
					<Content key={transaction._id}>
						<h2>{transaction.date}</h2>
						<h3
							onClick={() =>
								redirect("edit", transaction.description, valueFormater(transaction.value), transaction._id)
							}
						>
							{transaction.description}
						</h3>
						<Value type={transaction.type}>{valueFormater(transaction.value)}</Value>
						<h5 onClick={() => handleDeleteTransaction(getTransactions, deleteTransaction, transaction._id)}>X</h5>
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

async function handleDeleteTransaction(getTransactions, deleteTransaction, transactionId) {
	const confirm = window.confirm("Gostaria de apagar esse item?");
	if (!confirm) return;

	try {
		await deleteTransaction(transactionId);
		await getTransactions();
	} catch (error) {
		console.error(error);
	}
}
