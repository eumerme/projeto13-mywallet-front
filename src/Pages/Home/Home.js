import { useEffect, useState } from "react";
import { getTransactions } from "../../services/myWallet";
import { ThreeDots } from "react-loader-spinner";
import Transactions from "./Transactions.js";
import { Wrapper, Main, BankStatement, BankBalance, BBalance } from "../../components/PrivatePages/styles/styles";
import { HeaderHome, Footer } from "../../components/Home";

export function Home() {
	const { name, email } = JSON.parse(localStorage.getItem("mywallet"));
	const [transactions, setTransactions] = useState([]);
	const [update, setUpdate] = useState(null);
	const [reload, setReload] = useState(false);
	const [total, setTotal] = useState(0);
	const [renderBBalance, setRenderBBalance] = useState("");

	useEffect(() => {
		const promise = getTransactions();
		promise
			.then((res) => {
				setTransactions(res.data);
				setUpdate("updated");
			})
			.catch((error) => console.error(error));

		if (transactions.lenght !== 0) {
			const _bankbalance = transactions
				.map((_transaction) =>
					_transaction.type === "credit" ? Number(_transaction.value) : Number(_transaction.value) * -1
				)
				.reduce((total, value) => total + value, 0);

			const _bankbalanceFormated = (_bankbalance / 100)
				.toLocaleString("pt-br", {
					style: "currency",
					currency: "BRL",
				})
				.substring(3);

			setRenderBBalance(_bankbalanceFormated);
			setTotal(_bankbalance);
		}
	}, [transactions.length, reload]);

	return (
		<Wrapper>
			<HeaderHome name={name} />
			<Main>
				{!update ? (
					<ThreeDots color="#a328d6" height={60} width={60} />
				) : (
					<>
						{transactions.length === 0 ? (
							<h2>{"Não há registros de entrada ou saída"}</h2>
						) : (
							<>
								<BankStatement>
									{transactions.map((transaction, index) => (
										<Transactions key={index} transaction={transaction} setReload={setReload} reload={reload} />
									))}
								</BankStatement>
								<BankBalance>
									<h2>{"SALDO"}</h2>
									<BBalance total={total}>{renderBBalance}</BBalance>
								</BankBalance>
							</>
						)}
					</>
				)}
			</Main>
			<Footer email={email} />
		</Wrapper>
	);
}
