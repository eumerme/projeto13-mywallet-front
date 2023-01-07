import dayjs from "dayjs";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { createTransaction } from "../../../services/myWallet";
import { Top, Wrapper } from "../styles/styles";
import { Form } from "../../PublicPages/styles/styles";
import { ThreeDots } from "react-loader-spinner";
import { MdArrowBackIos } from "react-icons/md";

export default function NewTransaction() {
	const { state } = useLocation();
	const navigate = useNavigate();
	const [disable, setDisable] = useState(false);

	const [formData, setFromDara] = useState({
		value: "",
		description: "",
	});

	const handleInputs = (e) => {
		setFromDara({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const handleForm = (e) => {
		e.preventDefault();
		setDisable(true);
		const valueFormated = formData.value.replace(",", "").replaceAll(".", "");
		const value = Number(valueFormated);

		const body = {
			email: state.email,
			value,
			description: formData.description,
			type: state.type,
			date: dayjs().format("DD/MM"),
		};

		const promise = createTransaction(body);
		promise
			.then((res) => {
				alert(res.data.message);
				navigate("/home");
			})
			.catch((error) => {
				setDisable(false);
				console.log(error.response.data.message);
			});
	};

	return (
		<Wrapper transaction>
			<Top transaction>
				<div>
					<MdArrowBackIos
						onClick={() => {
							navigate("/home");
						}}
					/>
				</div>
				<h1>{state.type === "credit" ? "Nova entrada" : "Nova saída"}</h1>
			</Top>
			<Form onSubmit={handleForm}>
				<input
					type="text"
					inputMode="numeric"
					pattern="([0-9]{1,3}\.)*?[0-9]{1,3},[0-9]{2}"
					placeholder="Valor"
					required
					value={formData.value}
					name="value"
					onChange={handleInputs}
					disabled={disable}
				/>
				<input
					type="text"
					placeholder="Descrição"
					required
					value={formData.description}
					name="description"
					onChange={handleInputs}
					disabled={disable}
				/>
				<button type="submit" disabled={disable}>
					{!disable ? (
						<>{state.type === "credit" ? "Salvar entrada" : "Salvar saída"}</>
					) : (
						<ThreeDots color="#ffffff" height={13} width={51} />
					)}
				</button>
			</Form>
		</Wrapper>
	);
}
