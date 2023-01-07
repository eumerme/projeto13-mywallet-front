import { useContext, useEffect, useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import { Transactions } from "../../components/Transactions";
import { Header, Main, Footer } from "../../components/Home";
import { useTransaction } from "../../hooks/api/useTransaction";
import { UserContext } from "../../contexts/UserContext";
import { Wrapper } from "../../components/Wrapper.js";

export function Home() {
	const { userData } = useContext(UserContext);
	const { transactions, transactionsLoading } = useTransaction();
	const [reload, setReload] = useState(false);
	const [total, setTotal] = useState(0);
	const [bankBalance, setBankBalance] = useState("");

	const calculateBankBalance = () => {
		const value = transactions
			.map((transaction) =>
				transaction.type === "credit" ? Number(transaction.value) : Number(transaction.value) * -1
			)
			.reduce((total, value) => total + value, 0);

		const valueFormated = (value / 100)
			.toLocaleString("pt-br", {
				style: "currency",
				currency: "BRL",
			})
			.substring(3);

		setTotal(value);
		setBankBalance(valueFormated);
	};

	useEffect(() => {
		if (transactions) calculateBankBalance();
		// eslint-disable-next-line
	}, [transactions, reload]);

	return (
		<Wrapper>
			<Header name={userData.name} />
			<Main>
				{transactionsLoading && <ThreeDots color="#a328d6" height={60} width={60} />}
				{!transactionsLoading && transactions?.length === 0 && <h2>Não há registros de entrada ou saída</h2>}
				{!transactionsLoading && transactions?.length !== 0 && (
					<Transactions
						transactions={transactions}
						total={total}
						bankBalance={bankBalance}
						setReload={setReload}
						reload={reload}
					/>
				)}
			</Main>
			<Footer email={userData.email} />
		</Wrapper>
	);
}
