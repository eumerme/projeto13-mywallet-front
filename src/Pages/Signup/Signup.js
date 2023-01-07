import { Link, useNavigate } from "react-router-dom";
import { Form, Wrapper } from "../../components/Auth/AuthStyled";
import { ThreeDots } from "react-loader-spinner";
import { useHandleInputs } from "../../hooks";
import { useSignup } from "../../hooks/api/useSigup";

export function Signup() {
	const navigate = useNavigate();
	const { inputValue, handleInputs } = useHandleInputs();
	const { signup, signupLoading } = useSignup();

	const submit = async (e) => {
		e.preventDefault();

		try {
			await signup({ ...inputValue });
			navigate("/");
		} catch (error) {
			//TODO: colocar um substituto pro toast
			console.log(error);
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
			<Link to="/">
				<p>Já tem uma conta? Entre agora!</p>
			</Link>
		</Wrapper>
	);
}
