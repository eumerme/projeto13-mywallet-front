import { Link, useNavigate } from "react-router-dom";
import { Form, Wrapper } from "../../components/Auth";
import { ThreeDots } from "react-loader-spinner";
import { useSignup, useHandleInputs } from "../../hooks";
import { toast } from "react-hot-toast";

export function Signup() {
	const navigate = useNavigate();
	const { inputValue, handleInputs } = useHandleInputs();
	const { signup, signupLoading } = useSignup();

	const submit = async (e) => {
		e.preventDefault();

		if (inputValue.password !== inputValue.confirmPassword) {
			return toast.error("As senhas devem ser iguais");
		}

		try {
			await signup({ ...inputValue });
			toast.success("Cadastro feito com sucesso"); //TODO: trocar toast quando o erro é 409 e 422
			navigate("/");
		} catch (error) {
			toast.error("Não foi possível concluir o cadastro");
		}
	};

	return (
		<Wrapper>
			<h1>MyWallet</h1>
			<Form onSubmit={submit}>
				<input
					type="text"
					placeholder="Nome"
					required
					value={inputValue?.name}
					name="name"
					onChange={handleInputs}
					disabled={signupLoading}
				/>
				<input
					type="email"
					placeholder="Email"
					required
					value={inputValue?.email}
					name="email"
					onChange={handleInputs}
					disabled={signupLoading}
				/>
				<input
					type="password"
					placeholder="Senha"
					required
					value={inputValue?.password}
					name="password"
					onChange={handleInputs}
					disabled={signupLoading}
				/>
				<input
					type="password"
					placeholder="Confirme a senha"
					required
					value={inputValue?.confirmPassword}
					name="confirmPassword"
					onChange={handleInputs}
					disabled={signupLoading}
				/>
				<button type="submit" disabled={signupLoading}>
					{!signupLoading ? "Cadastrar" : <ThreeDots color="#ffffff" height={13} width={51} />}
				</button>
			</Form>
			<Link to="/">Já tem uma conta? Entre agora!</Link>
		</Wrapper>
	);
}
