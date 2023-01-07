import { Link, Navigate, useNavigate } from "react-router-dom";
import { Wrapper } from "../../components/PublicPages/styles/styles";
import { ThreeDots } from "react-loader-spinner";
import { Form } from "../../components/PublicPages/styles/styles.js";
import { useHandleInputs, useLogin } from "../../hooks/index";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

export function Login() {
	const navigate = useNavigate();
	const { userData, setUserData } = useContext(UserContext);

	const { inputValue, handleInputs } = useHandleInputs();
	const { login, loginLoading } = useLogin();

	const submit = async (e) => {
		e.preventDefault();

		try {
			const userData = await login({ ...inputValue });
			setUserData({
				name: userData.name,
				token: userData.token,
				email: userData.email,
			});
			navigate("/home");
		} catch (error) {
			//TODO: colocar um substituto pro toast
			console.log(error);
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
					<Link to="/signup">
						<p>Primeira vez? Cadastre-se!</p>
					</Link>
				</Wrapper>
			)}
		</>
	);
}
