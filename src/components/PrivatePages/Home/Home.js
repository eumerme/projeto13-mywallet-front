import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getTransactions } from "../../../services/myWallet";
import { BiExit, BiMinusCircle, BiPlusCircle } from "react-icons/bi";
import { ThreeDots } from "react-loader-spinner";
import userLogout from "../UserLogout/UserLogout.js";
import Transactions from "./Transactions.js";
import { Wrapper, Top, Main, Footer, Registry, BankStatement, BankBalance, BBalance, Icons } from "../styles/styles";

export default function Home() {
	const navigate = useNavigate();
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
			<Footer>
				<Registry
					onClick={() => {
						navigate("/transaction", {
							replace: false,
							state: { type: "credit", email },
						});
					}}
				>
					<Icons>
						<BiPlusCircle />
					</Icons>
					<h2>{"Nova entrada"}</h2>
				</Registry>
				<Registry
					onClick={() => {
						navigate("/transaction", {
							replace: false,
							state: { type: "debit", email },
						});
					}}
				>
					<Icons>
						<BiMinusCircle />
					</Icons>
					<h2>{"Nova saída"}</h2>
				</Registry>
			</Footer>
		</Wrapper>
	);
}
