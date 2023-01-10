import dayjs from "dayjs";
import { useLocation, useNavigate } from "react-router-dom";
import { Form } from "../../components/Auth";
import { ThreeDots } from "react-loader-spinner";
import { MdArrowBackIos } from "react-icons/md";
import { Wrapper } from "../../components/Wrapper";
import { H1, TopContent } from "../../components/Top";
import { useHandleInputs, useSaveTransaction } from "../../hooks";

export function NewTransaction() {
	const { state } = useLocation();
	const navigate = useNavigate();
	const { inputValue, handleInputs } = useHandleInputs();
	const { saveTransaction, saveTransactionLoading } = useSaveTransaction();

	const submit = async (e) => {
		e.preventDefault();
		const valueFormated = inputValue.value.replace(",", "").replaceAll(".", "");
		try {
			await saveTransaction({
				email: state.email,
				value: Number(valueFormated),
				description: inputValue.description,
				type: state.type,
				date: dayjs().format("DD/MM"),
			});
			navigate("/home");
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<Wrapper transaction>
			<TopContent transaction>
				<MdArrowBackIos onClick={() => navigate("/home")} style={{ color: "#ffffff" }} />
				{state.type === "credit" && <H1>Nova entrada</H1>}
				{state.type === "debit" && <H1>Nova saída</H1>}
			</TopContent>
			<Form onSubmit={submit}>
				<input
					type="text"
					pattern="([0-9]{1,3}\.)*?[0-9]{1,3},[0-9]{2}"
					placeholder="Valor: 10,00"
					required
					value={inputValue?.value}
					name="value"
					onChange={handleInputs}
					disabled={saveTransactionLoading}
				/>
				<input
					type="text"
					placeholder="Descrição: sanduíche"
					required
					value={inputValue?.description}
					name="description"
					onChange={handleInputs}
					disabled={saveTransactionLoading}
				/>
				<button type="submit" disabled={saveTransactionLoading}>
					{saveTransactionLoading && <ThreeDots color="#ffffff" height={13} width={51} />}
					{!saveTransactionLoading && state.type === "credit" && <>Salvar entrada</>}
					{!saveTransactionLoading && state.type === "debit" && <>Salvar saída</>}
				</button>
			</Form>
		</Wrapper>
	);
}
