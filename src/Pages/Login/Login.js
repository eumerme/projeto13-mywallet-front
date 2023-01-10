import { Link, Navigate, useNavigate } from "react-router-dom";
import { Wrapper } from "../../components/Auth";
import { ThreeDots } from "react-loader-spinner";
import { Form } from "../../components/Auth";
import { useHandleInputs, useLogin } from "../../hooks";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { toast } from "react-hot-toast";

export function Login() {
	const navigate = useNavigate();
	const { userData, setUserData } = useContext(UserContext);
	const { inputValue, handleInputs } = useHandleInputs();
	const { login, loginLoading } = useLogin();

	const submit = async (e) => {
		e.preventDefault();

		try {
			const data = await login({ ...inputValue });
			setUserData({
				name: data.name,
				token: data.token,
				email: data.email,
			});
			toast.success("Login feito com sucesso");
			navigate("/home");
		} catch (error) {
			toast.error("Não foi possível fazer o login");
		}
	};

	return (
		<>
			{userData.token ? (
				<Navigate to="/home" />
			) : (
				<Wrapper>
					<h1>MyWallet</h1>
					<Form onSubmit={submit}>
						<input
							type="email"
							placeholder="Email"
							required
							value={inputValue?.email}
							name="email"
							onChange={handleInputs}
							disabled={loginLoading}
						/>
						<input
							type="password"
							placeholder="Senha"
							required
							value={inputValue?.password}
							name="password"
							onChange={handleInputs}
							disabled={loginLoading}
						/>
						<button type="submit" disabled={loginLoading}>
							{!loginLoading ? "Entrar" : <ThreeDots color="#ffffff" height={13} width={51} />}
						</button>
					</Form>
					<Link to="/signup">Primeira vez? Cadastre-se!</Link>
				</Wrapper>
			)}
		</>
	);
}
