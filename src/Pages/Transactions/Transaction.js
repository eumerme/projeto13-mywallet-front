import dayjs from "dayjs";
import { useLocation, useNavigate } from "react-router-dom";
import { Form } from "../../components/Auth";
import { ThreeDots } from "react-loader-spinner";
import { MdArrowBackIos } from "react-icons/md";
import { Wrapper } from "../../components/Wrapper";
import { H1, TopContent } from "../../components/Top";
import { useHandleInputs, useSaveTransaction } from "../../hooks";
import { toast } from "react-hot-toast";
import { useEffect } from "react";
import { useUpdateTransaction } from "../../hooks/api/useUpdateTransaction";

export function Transaction() {
	const { state } = useLocation();
	const navigate = useNavigate();
	const { inputValue, handleInputs, setInputValue } = useHandleInputs();
	const { saveTransaction, saveTransactionLoading } = useSaveTransaction();
	const { updateTransaction, updateTransactionLoading, updateTransactionError } = useUpdateTransaction();

	const submitNew = async (e) => {
		e.preventDefault();

		const valueFormated = inputValue.value.replace(",", "").replaceAll(".", "");

		try {
			await saveTransaction({
				email: state.email,
				description: inputValue.description,
				type: state.type,
				value: Number(valueFormated),
				date: dayjs().format("DD/MM"),
			});
			toast.success("Transação cadastrada com sucesso");
			navigate("/home");
		} catch (error) {
			toast.error("Não foi possível cadastrar a transação");
		}
	};

	const submitUpdate = async (e) => {
		e.preventDefault();

		const valueFormated = inputValue.value.replace(",", "").replaceAll(".", "");

		try {
			await updateTransaction({
				id: state.id,
				body: {
					description: inputValue.description,
					value: Number(valueFormated),
					date: dayjs().format("DD/MM"),
				},
			});
			toast.success("Transação editada com sucesso");
			navigate("/home");
		} catch (error) {
			toast.error("Não foi possível editar a transação");
		}
	};

	console.log(updateTransactionError);

	useEffect(() => {
		if (state.type === "edit") setInputValue({ description: state.description, value: state.value });
	}, []);

	return (
		<Wrapper transaction>
			<TopContent transaction>
				<MdArrowBackIos onClick={() => navigate("/home")} style={{ color: "#ffffff", cursor: "pointer" }} />
				{state.type === "credit" && <H1>Nova entrada</H1>}
				{state.type === "debit" && <H1>Nova saída</H1>}
				{state.type === "edit" && <H1>Editar Transação</H1>}
			</TopContent>
			<Form onSubmit={state.type === "edit" ? submitUpdate : submitNew}>
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
				<button type="submit" disabled={saveTransactionLoading || updateTransactionLoading}>
					{saveTransactionLoading && <ThreeDots color="#ffffff" height={13} width={51} />}
					{!saveTransactionLoading && state.type === "credit" && <>Salvar entrada</>}
					{!saveTransactionLoading && state.type === "debit" && <>Salvar saída</>}
					{!updateTransactionLoading && state.type === "edit" && <>Salvar</>}
				</button>
			</Form>
		</Wrapper>
	);
}
