import { useContext } from "react";
import { ThreeDots } from "react-loader-spinner";
import { Header, Main, Footer, HomeContent } from "../../components/Home";
import { useTransaction } from "../../hooks";
import { UserContext } from "../../contexts/UserContext";
import { Wrapper } from "../../components/Wrapper.js";

export function Home() {
	const { userData } = useContext(UserContext);
	const { transactions, transactionsLoading, getTransactions } = useTransaction();

	return (
		<Wrapper>
			<Header name={userData.name} />
			<Main>
				{transactionsLoading && <ThreeDots color="#a328d6" height={60} width={60} />}
				{!transactionsLoading && transactions?.length === 0 && <h2>Não há registros de entrada ou saída</h2>}
				{!transactionsLoading && transactions?.length !== 0 && (
					<HomeContent transactions={transactions} getTransactions={getTransactions} email={userData.email} />
				)}
			</Main>
			<Footer email={userData.email} />
		</Wrapper>
	);
}
