import { Link, Navigate, useNavigate } from "react-router-dom";
import { Wrapper } from "../../components/Auth/AuthStyled";
import { ThreeDots } from "react-loader-spinner";
import { Form } from "../../components/Auth/AuthStyled.js";
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
			const data = await login({ ...inputValue });
			console.log({ data });
			setUserData({
				name: data.name,
				token: data.token,
				email: data.email,
			});
			navigate("/home");
		} catch (error) {
			//TODO: colocar um substituto pro toast
			console.log(error);
		}
	};

	console.log({ inputValue, userData });

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
