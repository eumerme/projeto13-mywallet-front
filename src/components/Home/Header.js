import styled from "styled-components";
import { BiExit } from "react-icons/bi";
import { TopContent, H1 } from "../Top";
import { useLogout } from "../../hooks";

export function Header({ name }) {
	const { logout } = useLogout();

	const submit = async (e) => {
		e.preventDefault();
		try {
			await logout();

			localStorage.clear("mywallet");
			window.location.reload();
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<TopContent>
			<H1>{`Olá, ${name}`}</H1>
			<Logout>
				<BiExit onClick={submit} />
			</Logout>
		</TopContent>
	);
}

const Logout = styled.div`
	width: auto;
	height: auto;
	font-size: 30px;
	color: #ffffff;
`;
